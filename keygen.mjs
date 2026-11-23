import { generateKeyPairSync, createSign, createPrivateKey, createPublicKey, randomUUID, createHash } from "node:crypto";
import fs from "node:fs";

const [,, command, school, expiry] = process.argv;
const PRIVATE_FILE = "private.pem";
const PUBLIC_FILE = "keys.json";
const encode = value => Buffer.from(value).toString("base64url");
const canonicalJwk = jwk => JSON.stringify({kty:jwk.kty,crv:jwk.crv,x:jwk.x,y:jwk.y,ext:jwk.ext});

function readRing() {
  if (!fs.existsSync(PUBLIC_FILE)) throw new Error("keys.json is missing. Run init on the trusted offline machine first.");
  const ring = JSON.parse(fs.readFileSync(PUBLIC_FILE, "utf8"));
  if (ring.version !== 1 || !ring.activeKeyId || !ring.keys?.[ring.activeKeyId]) throw new Error("keys.json has no valid active public key.");
  return ring;
}
function loadAndMatchPrivateKey(ring) {
  if (!fs.existsSync(PRIVATE_FILE)) throw new Error("private.pem is missing. Restore it from the owner's encrypted offline backup.");
  const privateKey = createPrivateKey(fs.readFileSync(PRIVATE_FILE));
  const derived = createPublicKey(privateKey).export({format:"jwk"});
  const expected = ring.keys[ring.activeKeyId];
  if (canonicalJwk(derived) !== canonicalJwk(expected)) throw new Error("The offline private key does not match the active public key. No licence was issued.");
  return privateKey;
}
function init() {
  if (fs.existsSync(PRIVATE_FILE) || fs.existsSync(PUBLIC_FILE)) throw new Error("Refusing to overwrite existing key material. Back up and verify it before rotation.");
  const {publicKey, privateKey} = generateKeyPairSync("ec", {namedCurve:"P-256"});
  const jwk = publicKey.export({format:"jwk"});
  const keyId = "emac-" + new Date().toISOString().slice(0,10).replaceAll("-","") + "-" + randomUUID().slice(0,8);
  const ring = {version:1, activeKeyId:keyId, keys:{[keyId]:jwk}};
  // Private material is created only on this machine with owner-only file permissions.
  fs.writeFileSync(PRIVATE_FILE, privateKey.export({type:"pkcs8",format:"pem"}), {flag:"wx",mode:0o600});
  try {
    fs.writeFileSync(PUBLIC_FILE, JSON.stringify(ring,null,2)+"\n", {flag:"wx",mode:0o644});
  } catch (error) {
    fs.rmSync(PRIVATE_FILE,{force:true});
    throw error;
  }
  console.log("Created a new keypair locally.");
  console.log("PRIVATE: private.pem (owner-only; keep offline; never upload or share).");
  console.log("PUBLIC: keys.json (public verification keyring; safe to deploy after review).");
  console.log("Active key ID: " + keyId);
  console.log("No school licences have been issued.");
}
function issue() {
  if (!school?.trim() || !/^\d{4}-\d{2}-\d{2}$/.test(expiry || "")) throw new Error('Usage: node keygen.mjs issue "School Name" YYYY-MM-DD');
  const date = new Date(expiry+"T00:00:00.000Z");
  if (Number.isNaN(date.getTime()) || date.toISOString().slice(0,10)!==expiry) throw new Error("Expiry must be a real calendar date in YYYY-MM-DD format.");
  const ring = readRing();
  const privateKey = loadAndMatchPrivateKey(ring);
  const payload = {v:2,kid:ring.activeKeyId,licenceId:randomUUID(),school:school.trim(),exp:expiry};
  const bytes = Buffer.from(JSON.stringify(payload));
  const signature = createSign("SHA256").update(bytes).sign({key:privateKey,dsaEncoding:"ieee-p1363"});
  console.log(encode(bytes)+"."+encode(signature));
}
function check() {
  const ring = readRing();
  loadAndMatchPrivateKey(ring);
  const fingerprint = createHash("sha256").update(canonicalJwk(ring.keys[ring.activeKeyId])).digest("hex").slice(0,16);
  console.log("Keypair check passed. Active key ID: "+ring.activeKeyId+"; public fingerprint: "+fingerprint);
  console.log("Private key contents were not printed.");
}
try {
  if (command === "init") init();
  else if (command === "issue") issue();
  else if (command === "check") check();
  else console.log('Usage: node keygen.mjs init | check | issue "School Name" YYYY-MM-DD');
} catch (error) {
  console.error("Licence operation stopped: "+error.message);
  process.exitCode=1;
}
