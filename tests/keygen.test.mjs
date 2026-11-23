import {test} from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {spawnSync} from "node:child_process";
import {createPrivateKey,createPublicKey,generateKeyPairSync,createVerify} from "node:crypto";
import {fileURLToPath} from "node:url";

const script=fileURLToPath(new URL("../keygen.mjs",import.meta.url));
function sandbox(t){
  const dir=fs.mkdtempSync(path.join(os.tmpdir(),"emac-licence-test-"));
  t.after(()=>fs.rmSync(dir,{recursive:true,force:true}));
  return dir;
}
function run(dir,...args){
  return spawnSync(process.execPath,[script,...args],{cwd:dir,encoding:"utf8"});
}
test("init creates owner-only private material and a public-only keyring",t=>{
  const dir=sandbox(t),result=run(dir,"init");
  assert.equal(result.status,0,result.stderr);
  const privateStat=fs.statSync(path.join(dir,"private.pem"));
  assert.equal(privateStat.mode&0o777,0o600);
  const ring=JSON.parse(fs.readFileSync(path.join(dir,"keys.json"),"utf8"));
  assert.equal(ring.version,1);
  assert.ok(ring.activeKeyId);
  assert.ok(ring.keys[ring.activeKeyId]);
  assert.equal("d" in ring.keys[ring.activeKeyId],false);
  assert.match(run(dir,"check").stdout,/Keypair check passed/);
  assert.doesNotMatch(result.stdout+run(dir,"check").stdout,/BEGIN PRIVATE KEY/);
});
test("issue creates a uniquely identified signed v2 token that verifies against public key",t=>{
  const dir=sandbox(t);
  assert.equal(run(dir,"init").status,0);
  const result=run(dir,"issue","Example School","2027-07-31");
  assert.equal(result.status,0,result.stderr);
  const [payload,signature]=result.stdout.trim().split(".");
  const bytes=Buffer.from(payload,"base64url"),data=JSON.parse(bytes.toString("utf8"));
  const ring=JSON.parse(fs.readFileSync(path.join(dir,"keys.json"),"utf8"));
  assert.equal(data.v,2);
  assert.equal(data.kid,ring.activeKeyId);
  assert.match(data.licenceId,/^[0-9a-f-]{36}$/);
  assert.equal(data.school,"Example School");
  assert.equal(data.exp,"2027-07-31");
  const publicKey=createPublicKey({key:ring.keys[data.kid],format:"jwk"});
  const verifier=createVerify("SHA256").update(bytes);
  assert.equal(verifier.verify({key:publicKey,dsaEncoding:"ieee-p1363"},Buffer.from(signature,"base64url")),true);
});
test("refuses invalid dates and refuses to overwrite an existing keypair",t=>{
  const dir=sandbox(t);
  assert.equal(run(dir,"init").status,0);
  assert.notEqual(run(dir,"issue","Example School","2027-02-30").status,0);
  assert.notEqual(run(dir,"init").status,0);
});
test("refuses to issue when the offline private key does not match the public keyring",t=>{
  const dir=sandbox(t);
  assert.equal(run(dir,"init").status,0);
  const other=generateKeyPairSync("ec",{namedCurve:"P-256"});
  fs.writeFileSync(path.join(dir,"private.pem"),other.privateKey.export({type:"pkcs8",format:"pem"}),{mode:0o600});
  const result=run(dir,"issue","Example School","2027-07-31");
  assert.notEqual(result.status,0);
  assert.match(result.stderr,/does not match/);
});
