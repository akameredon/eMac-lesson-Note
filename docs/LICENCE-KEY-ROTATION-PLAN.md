# Licence key recovery, rotation and school reissue plan

**Status:** Owner approved the safe replacement-key and school-reissue process on 23 November 2026. Implementation is in progress on `security/licence-keyring-rotation`. No production keypair has been generated, no school licence has been issued, and no deployment or merge has occurred.

## 1. Recovery finding and impact

- The original signing private key and matching public key file (`private.pem` and `pub.json`) were reported lost by the owner.
- Repository inspection on the SS1 improvement branch found neither file. The existing application expects a single P-256 ECDSA public JWK in `pub.json`.
- Existing tokens contain only `school` and `exp`, with no key ID or licence ID.
- Because neither original key is available, the original signatures cannot be verified against a recovered key. **Do not promise that previously issued licence tokens will continue to work.** Affected schools will need replacement tokens after their records are confirmed.
- The number and identity of affected schools, their original expiry dates, and their licence recipients have not yet been established. No replacement token may be issued until the inventory is reconciled.

## 2. Security boundaries

1. The replacement signing key is generated only on the owner's trusted machine. ChatGPT, GitHub, CI, Vercel and email must never receive the private key.
2. `private.pem` remains local, owner-only, encrypted in backup, and excluded by `.gitignore`.
3. Only the public `keys.json` keyring may be committed or deployed.
4. The issuance command verifies that the local private key matches the active public JWK before signing anything.
5. No real school licence is issued during automated tests. Browser tests use disposable in-memory test keys.
6. No production deployment, merge to `main`, or school notification is authorised by this implementation approval alone. Those are separate release actions.

## 3. New licence format

The public keyring is a JSON document with `version: 1`, an `activeKeyId`, and a `keys` map of key IDs to public P-256 JWKs. New signed payloads contain:

- `v: 2` — token schema version
- `kid` — public key identifier
- `licenceId` — unique UUID for this individual school licence
- `school` — confirmed school name
- `exp` — expiry in strict `YYYY-MM-DD` format

The browser checks the payload shape, key ID, ECDSA/SHA-256 signature and UTC expiry. Unknown key IDs, malformed tokens and missing/invalid keyring configuration fail closed. An optional `legacyKey` slot is reserved only if a trustworthy old public JWK is recovered; none has been found, so no old-key continuity is claimed.

## 4. Local key ceremony — owner machine only

After the isolated code has passed review and tests:

1. On a trusted, updated machine, download/check out the approved branch. Do not use a shared or public computer.
2. Install the project's pinned Node dependencies only if needed; the key utility uses Node built-ins.
3. Run `node keygen.mjs init` once. It refuses to overwrite existing key material. It creates local `private.pem` with owner-only permissions and public `keys.json`.
4. Make two encrypted offline backups of `private.pem`, stored separately. Verify that each backup can be read; never send the file to anyone.
5. Run `node keygen.mjs check` locally. It verifies that the private key matches the active public JWK and prints only a short public fingerprint, never private material.
6. Review `keys.json` and commit/deploy that public file only after code review and explicit release approval.
7. Keep `private.pem` on the trusted owner machine for offline issuance. Do not put it in environment variables, a web server, CI, Vercel or the repository.

If key generation or backup verification fails, stop. Do not improvise by generating another key or copying key material into chat.

## 5. School inventory and reissue

Complete `SCHOOL-LICENCE-REISSUE-REGISTER.csv` privately. Do not commit real school names, contacts, token strings or personal information to the repository. For each school, confirm from the owner's records:

- exact legal/display school name and authorised recipient;
- evidence that a licence was previously sold or issued;
- promised expiry date and any written renewal terms;
- current operational contact and a safe delivery channel;
- replacement status, delivery date, and activation confirmation.

Only after each row is confirmed, issue one replacement token locally:

`node keygen.mjs issue "Confirmed School Name" YYYY-MM-DD`

The utility checks the active keypair match and creates a unique licence ID. Verify each token in the preview before sending it directly to the confirmed recipient. Do not paste real tokens into public issues, source code or chat. Preserve the school's originally promised expiry unless the owner has a documented contractual reason to do otherwise. Do not charge a school again for a replacement necessitated by this key recovery.

## 6. Verification and release gates

- [ ] Isolated branch implements versioned public keyring verification and strict payload/expiry validation.
- [ ] Tests cover valid signatures, tampered signatures, unknown key IDs, malformed payloads, missing keyring and expired licences.
- [ ] Local key utility refuses overwrite, rejects invalid expiry, checks private/public match and emits no private material.
- [ ] Automated test keys are disposable and never used for real schools.
- [ ] Independent code review and browser acceptance tests pass.
- [ ] Owner completes the private school inventory and confirms all recipients/expiry dates.
- [ ] Owner generates and backs up the replacement keypair on a trusted machine.
- [ ] Public `keys.json` is reviewed and deployed to preview; real replacement tokens are verified there.
- [ ] School-by-school reissue and activation are reconciled.
- [ ] Owner separately approves merge to `main` and production deployment.

**Current gate:** implementation is being prepared on an isolated branch. No production key exists yet, no school inventory has been confirmed, and no school reissue has taken place.
