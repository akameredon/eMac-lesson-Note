# eMac Contributor Handbook

This handbook governs contributions to the single canonical eMac product. The product owner controls release decisions, school licensing and production access.

## 1. Product and repository

- Canonical repository: https://github.com/akameredon/eMac-lesson-Note
- Product: eMac Lesson Note, an installable/offline-capable PWA for Digital Technologies learning.
- Core files:
  - index.html — app shell, metadata, navigation and script loading.
  - app.js — navigation, student experience, practice, CBT, progress, teacher tools and licence verification.
  - data.js — curriculum map (CUR) and authored lesson content (C).
  - styles.css — responsive visual system and accessible presentation.
  - sw.js — PWA cache versioning, offline shell and public keyring fetch/cache behaviour.
  - manifest.webmanifest and icon assets — install metadata and app identity.
  - keygen.mjs — owner-only offline licence key management utility.
  - tests/ — automated security and browser acceptance tests.
  - docs/ — curriculum alignment, licence operations, teacher review and release documentation.

Garden is a design reference only. Do not create a parallel Garden product or introduce a runtime dependency on the Garden repository.

## 2. Local development

Requirements: a supported Node.js version, Python 3 and npm.

```sh
npm install
python3 -m http.server 4173 --bind 127.0.0.1
```

Open http://127.0.0.1:4173.

Run the automated checks:

```sh
npm test
npm run test:browser
```

The browser suite runs desktop Chromium and mobile Chromium profiles. It covers lesson content, practical rubrics, licensing fixtures, CBT/progress, teacher reporting and offline reload. A passing historical run does not replace a fresh run on the current release candidate.

## 3. Branch and pull-request rules

1. Start a focused branch from the current approved main/release base: `feature/<short-description>`, `fix/<short-description>` or `docs/<short-description>`.
2. Never push directly to main.
3. Keep each PR limited to one coherent change. Explain user impact, files changed, risks and rollback.
4. Include tests for behaviour changes and update documentation where the workflow changes.
5. Do not merge with failing or missing required checks.
6. Require maintainer review before merge. Curriculum changes also require a qualified subject review.
7. Do not deploy production, alter school licences, rotate signing keys or change production data without explicit product-owner approval.
8. Never force-push over another contributor's work. Coordinate before rebasing or changing shared branches.

## 4. Curriculum and lesson authoring

The curriculum map uses the existing CUR structure. Lesson records are keyed by stable IDs in the form `class-term-week`, for example `ss1-1-1`. Preserve existing IDs because navigation and stored progress depend on them.

A complete lesson record should include:
- Clear, accurate notes with age-appropriate explanations and examples.
- Practice questions with correct answer keys and model explanations.
- Guided practical steps with realistic materials and safe alternatives.
- Assessment checklist criteria.
- A practical rubric where the lesson requires assessed performance.

Authoring rules:
- Map revised SS1 content to the primary NERDC curriculum source and record page/outcome evidence in the alignment documents.
- The mapping is internal quality assurance, not NERDC endorsement, accreditation or certification.
- Do not invent official term/week order from the legacy 70-topic map.
- Do not label a paper/simulator activity as a physical robot build, live database implementation, trained AI model or completed LAN.
- Use fictional or anonymous examples. Never put real learner details in lesson content, commits, test fixtures or issues.
- Avoid duplicated lessons; cross-reference related online-safety topics rather than copying whole sections.
- Have a subject teacher review facts, answer keys, code examples, safety and practical suitability before release.
- SS2–SS3 entries remain curriculum-map topics until full lesson content and review are complete.

After every content or app-shell change, increment the service-worker cache version in sw.js and test update/offline behaviour.

## 5. Licensing and secret handling

The public `keys.json` keyring may be committed. The private `private.pem` signing key must never be committed, emailed, pasted into chat, placed in CI, stored in Vercel environment variables or uploaded to a shared drive.

Only the product owner performs the local key ceremony and signs real school licences:
- Verify the approved keypair and encrypted offline backups.
- Check that the private key matches the active public keyring.
- Confirm the school identity and promised expiry before issuing.
- Keep the private school reissue register outside GitHub.
- Use disposable test keys for automated tests only.

Do not run `node keygen.mjs init` or `issue` as an ordinary contributor. Do not rotate production keys or promise old tokens remain valid without verified evidence and an owner-approved reissue plan.

## 6. Privacy, safeguarding and security

- Treat student progress codes as potentially personal data; they can include a learner name and learning results.
- Do not upload real student codes, school contact details, licence tokens or personal data to GitHub issues or test fixtures.
- Use anonymised test records and disposable licence keys.
- Do not add analytics, trackers, third-party scripts or new data collection without review and owner approval.
- Do not direct learners to create unsupervised public accounts or disclose location, contact details or personal images.
- Validate links, user input and exported CSV values. Avoid logging tokens or personal records.
- Report suspected secret exposure or data loss privately to the product owner; do not paste the exposed secret into an issue.

## 7. Required review and test evidence

Every functional PR must report:
- Automated test commands and results.
- Browser/viewport coverage and any failures.
- Offline/PWA impact and cache-version change.
- Data/content impact and progress-code compatibility.
- Security/privacy impact.
- Known limitations and rollback approach.

Release-critical journeys:
1. Student opens a lesson, reads notes, answers practice questions and sees feedback.
2. Student completes a practical checklist and the state persists after reload.
3. Student completes CBT and the result appears in the progress code.
4. Teacher imports progress codes, reviews results and exports CSV.
5. School licence is accepted/rejected correctly for valid, invalid, expired and unknown-key cases.
6. App installs, updates and reopens offline.
7. Home and lesson screens work on mobile, tablet and desktop with keyboard-accessible controls.

## 8. Release and production controls

- Preview first; verify the preview commit SHA matches the reviewed PR head.
- Complete automated tests, manual student/teacher journeys, mobile and offline checks.
- Obtain independent teacher review and independent programmer/security review.
- Obtain school-context validation for practicals and safeguarding workflows.
- Merge only after all release gates in the master register pass.
- Verify production serves the exact merged commit and that PWA clients update safely.
- Keep the last known-good release available for rollback. Never reset school/student local data as a deployment shortcut.

## 9. Contributor onboarding and paid work

A contributor receives only the access required for the agreed task. Before paid work begins, record:
- Exact deliverables and acceptance tests.
- Repository paths/services in scope.
- Owner and reviewer.
- Milestones, payment terms, timing and change-control process.
- IP/confidentiality and school-data handling expectations.
- Handover requirements and post-delivery support period.

Do not promise a contract, payment amount or production access on the project's behalf. The product owner approves the scope and agreement.

## 10. Handover checklist

At task completion, the contributor supplies:
- PR link and final commit SHA.
- Summary of behaviour changed.
- Tests run and results.
- Screenshots or reproducible browser evidence where relevant.
- Documentation updates.
- Known limitations, follow-up risks and rollback notes.
- Confirmation that no private keys, school tokens or learner personal data were committed.

The canonical outstanding work and release criteria live in [eMac v1 — definitive release completion and handover register](https://github.com/akameredon/eMac-lesson-Note/issues/3).
