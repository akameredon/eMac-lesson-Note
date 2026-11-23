import{generateKeyPairSync,createSign,createPrivateKey}from"node:crypto";import fs from"node:fs";
const[,,cmd,school,exp]=process.argv,b=x=>Buffer.from(x).toString("base64url");
if(cmd=="init"){if(fs.existsSync("private.pem")||fs.existsSync("pub.json")){console.error("Refusing to overwrite an existing key file. Back up and verify the current keypair before any rotation.");process.exitCode=1}else{const{publicKey,privateKey}=generateKeyPairSync("ec",{namedCurve:"P-256"});
fs.writeFileSync("private.pem",privateKey.export({type:"pkcs8",format:"pem"}));
fs.writeFileSync("pub.json",JSON.stringify(publicKey.export({format:"jwk"})));
console.log("Created private.pem (keep secret, never commit) and pub.json (commit it).")}}
else if(cmd=="issue"&&school&&exp){const k=createPrivateKey(fs.readFileSync("private.pem")),p=Buffer.from(JSON.stringify({school,exp})),
s=createSign("SHA256").update(p).sign({key:k,dsaEncoding:"ieee-p1363"});console.log(b(p)+"."+b(s))}
else console.log('Usage: node keygen.mjs init | issue "School Name" 2027-07-31');
