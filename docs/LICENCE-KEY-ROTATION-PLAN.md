# Licence key recovery and rotation plan

**Status:** approved to prepare the plan; no signing key has been generated, replaced, or deployed.

## 1. Current implementation

- The browser fetches `pub.json` and imports one P-256 ECDSA public JWK for signature verification.
- Licence tokens contain a base64url-encoded JSON payload and an ECDSA/SHA-256 signature.
- The current payload contains `school` and `exp`; it has no key identifier or licence ID.
- `keygen.mjs init` creates `private.pem` and `pub.json`, and refuses to overwrite either file.
- `keygen.mjs issue` signs a licence using the local `private.pem`.
- Neither key file is present on the current repository branch. The preview cannot verify licences until the matching public key is deployed.

## 2. Non-negotiable safety rules

1. Never commit, email, paste into chat, or upload `private.pem` to GitHub.
2. Do not generate a replacement keypair until we have checked for the original pair and assessed existing school licences.
3. Preserve any recovered private key in secure encrypted backup.
4. Do not deploy a new public key until the owner has approved the school reissue plan and the verification tests pass.
5. Keep production/main untouched until the migration is tested and explicitly approved.

## 3. Recovery-first decision

**Preferred — recover the original pair:** locate the original `private.pem` in the owner's secure backups and the matching `pub.json`. Verify that the public key derived from the private key matches the recovered JWK. If they match, restore only `pub.json` to the application repository/deployment; keep `private.pem` offline. Existing licences signed by that key should continue to validate.

**Fallback — original private key unavailable:** recover the original `pub.json`, if possible, and retain it as a legacy verification key. Create a new keypair locally only after explicit owner approval. Existing tokens can continue to validate against the old public key while new tokens are signed with the new private key. The current app accepts only one public key, so dual-key verification must be implemented and tested before rollout.

**Last resort — neither original key can be recovered:** generate a new keypair only after explicit owner approval. Treat every previously issued token as unverifiable and issue replacement licences to all affected schools. Do not claim old licences remain valid. Obtain a school-by-school inventory and confirm recipient and expiry details before issuing replacements.

## 4. Required implementation work before rotation

- Add a versioned public-key configuration/keyring with explicit key IDs; retain legacy token compatibility if the original public key is recovered.
- Add schema version, key ID, school name, expiry date, and unique licence identifier to new licence payloads.
- Validate payload shape, signature, expiry, and key ID; reject unknown keys and malformed tokens safely.
- Keep signing exclusively in the owner's local/offline environment. Do not expose a signing endpoint or put private material in browser code, CI secrets, Vercel environment variables, or the repository.
- Add tests for valid current and legacy licences, invalid signatures, unknown key IDs, expired licences, malformed payloads, and missing public-key configuration.
- Use test-only keys for automated tests; never use them for real schools.

## 5. School reissue and rollout checklist

- [ ] Recover and verify original key material, or record that recovery failed.
- [ ] Inventory schools holding issued licences and their exact promised expiry dates.
- [ ] Decide whether existing licences remain verifiable or require reissue.
- [ ] Implement and test versioned keyring verification on the isolated branch.
- [ ] Generate a new keypair locally, if required and approved; store the private key in encrypted offline backup.
- [ ] Deploy only the public JWK and verify it is served over HTTPS.
- [ ] Issue replacement tokens locally for each confirmed school and verify each in preview before sending.
- [ ] Notify schools with instructions, a transition deadline, and a support route.
- [ ] Monitor activation before removing any legacy public key.
- [ ] Obtain explicit owner approval before merging to main or deploying production.

## 6. Current release gate

**Blocked:** the original keypair and school licence inventory have not been supplied or verified. This document is a plan, not evidence that rotation or reissue has occurred. The current `pub.json` 404 must be resolved before production licence verification can be considered ready.

The owner should provide the original public JWK file (`pub.json`) and confirm where the matching private key is securely held. Do not share the private key in chat. If the original private key is lost, obtain explicit approval for new-key creation and school licence reissue before changing signing keys.
