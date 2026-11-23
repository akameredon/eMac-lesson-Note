# eMac Release and Operations Runbook

This runbook covers the controlled release of eMac, school licence operations, PWA updates, support and rollback. Production actions require product-owner approval.

## 1. Release candidate checklist

Before creating a production release:
- Confirm the release branch contains the intended SS1 content, integrated UI and approved licence verifier.
- Confirm no private key, real school token, learner personal data or production credentials are tracked.
- Run `npm test` and `npm run test:browser`; retain the GitHub Actions run and commit SHA.
- Review the browser suite on desktop and mobile Chromium.
- Test student and teacher journeys on a hosted preview.
- Test installation, refresh, offline reopen, reconnect and service-worker update.
- Obtain independent teacher and programmer/security reviews.
- Obtain school-context practical and safeguarding validation.
- Verify school inventory and licence continuity/reissue plan privately.
- Confirm customer promises match content and features that actually pass acceptance.
- Record evidence in the master release register before approval.

A syntax check or successful build is not a release sign-off.

## 2. Preview and production deployment

1. Create a preview from the exact reviewed release branch/commit using the approved hosting project.
2. Record the preview URL and commit SHA.
3. Verify the preview is built from the intended SHA, not a stale deployment.
4. Test the hosted preview using the release acceptance checklist.
5. Obtain explicit product-owner approval before production deployment.
6. Deploy the reviewed commit to production using the hosting provider's normal release mechanism.
7. Verify HTTPS, app shell, manifest, icons, service worker, public keyring endpoint and core student/teacher journeys.
8. Record the production URL, release commit SHA, deployment identifier and verification time.

Do not buy a hosting-plan upgrade or add a paid service merely to bypass a preview quota without separate owner approval. If a provider quota blocks preview, wait for the quota reset or use an already-approved free static preview path; do not change the production site as a workaround.

## 3. PWA and content updates

- Increment the cache version in sw.js whenever app-shell or lesson content changes.
- Verify the new service worker installs, activates and removes only obsolete app caches.
- Test first install, update from the previous cache, refresh and offline reopen.
- Verify the public keys.json resource is fetched network-first and uses the last valid cached copy when offline.
- Never cache or bundle private signing material or real school licence tokens.
- Confirm existing local progress survives the update. Do not clear localStorage or reset student devices as a deployment shortcut.

## 4. School licence operations

The public keys.json contains public verification keys only. The private private.pem signing key is owner-controlled secret material.

### Owner-only key ceremony
- Recover the original keypair if possible; verify the private/public match.
- If recovery is impossible, follow the approved rotation plan.
- Generate replacement signing material only on the owner's trusted machine after inventory and reissue planning.
- Verify encrypted offline backups and keypair match before issuing any real licence.
- Commit/deploy only the public keys.json after review and approval.
- Issue tokens one school at a time after confirming the school name and promised expiry.
- Verify each token against the release preview before securely delivering it.
- Record issue/reissue status in the private school register, not GitHub.
- Do not charge a school extra for a replacement required solely because the original project keypair was lost.

### School activation support
- Confirm the school's name and licence recipient through the private owner register.
- Ask the school to enter the complete token in Settings while online.
- Confirm the success message and expiry date.
- Reopen the app once to confirm the licence state persists.
- Confirm the school can access its licensed topics.
- For offline use, verify the public keyring was successfully fetched and cached while online before going offline.

Never promise old tokens remain valid unless the original public key is recovered and the signature verifies.

## 5. Student progress and teacher records

- Progress is stored locally in the learner's browser/device and can be represented by the student's progress code.
- Teacher view reads supplied progress codes and can export a CSV summary.
- Do not imply that student progress automatically synchronises to a central server unless a verified backend feature is added later.
- Encourage schools to collect and store progress codes securely according to their own data-protection policy.
- Treat progress codes and exported CSV files as potentially personal educational records.
- Do not upload real student codes or identifiable school records to public issue trackers.

## 6. Support triage

For a student who cannot open a lesson:
1. Confirm class and term selection.
2. Check whether the topic is authored, coming soon or licence-restricted.
3. If restricted, verify the school's licence status through the private owner process.
4. If content should be available, capture a non-identifying reproduction and browser/device details.
5. Do not ask the learner to post a licence token or personal data publicly.

For stale or missing app content:
1. Confirm the device is online.
2. Reload the app and allow the service worker to update.
3. Close and reopen the installed PWA.
4. Recheck the lesson.
5. Escalate a reproducible failure with app version, device/browser and steps. Never ask the school to clear all browser storage unless the owner has approved a recovery plan.

For progress/reporting issues:
1. Preserve the original progress code before troubleshooting.
2. Test the code in teacher view with a copy.
3. Export a CSV only through the teacher workflow.
4. Keep learner identifiers private and avoid posting raw codes in GitHub.

## 7. Incident response and rollback

For a production defect:
- Record the affected release SHA, time, user impact and reproducible steps.
- Stop further rollout if the issue affects licensing, student data, access or safeguarding.
- Notify the product owner through the agreed private support route.
- Preserve evidence without collecting unnecessary learner data.
- Roll back to the last known-good deployment using the hosting provider's supported rollback process.
- Do not roll back or overwrite the local data format without a compatibility assessment.
- After mitigation, add a regression test and document the root cause and corrective action.

For suspected private-key or licence-token exposure:
- Do not paste the secret into GitHub or chat.
- Restrict access and notify the product owner privately immediately.
- Follow the controlled key rotation/reissue plan.
- Audit whether public keyring or school token material was exposed; public keys are not secret, private keys are.
- Record affected schools privately and communicate through verified school contacts.

## 8. Customer and contributor handover

Each customer handover includes:
- Supported class/content scope and known limitations.
- Installation and update instructions.
- Licence activation instructions and expiry.
- Offline-use prerequisites.
- Teacher progress-code and CSV workflow.
- Support contact and escalation expectations.

Each contributor handover includes:
- PR and release commit SHA.
- Files/services changed and ownership.
- Test evidence and known limitations.
- Secret/data-handling confirmation.
- Rollback instructions.
- Open follow-up items in the master release register.

Contract scope, payment, access and support periods must be agreed in writing by the product owner before work starts.
