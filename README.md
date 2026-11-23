# eMac Lesson Note

eMac is an offline-capable, installable learning application for Nigerian secondary-school Digital Technologies. The canonical product is this repository: one codebase, one student experience and one school/teacher workflow.

## Product capabilities

- 70-topic SS1–SS3 curriculum map retained for continuity.
- 24 authored SS1 lessons with notes, 131 practice questions, guided practicals, assessment checklists and 15 practical rubrics.
- Garden-inspired home and lesson experience integrated into the eMac app; Garden is a design reference, not a separate product.
- Practice, timed CBT, progress codes, teacher view, CSV export, speech/listen, number converter, accessibility settings and PWA/offline shell.
- Per-school signed licence verification using a versioned public keyring.

## Current release scope and content status

The authored SS1 package is mapped against the October 2025 revised NERDC SSS1 Digital Technologies curriculum. The internal alignment register reports 17 distinct competency areas, 223 note sections, 131 questions, 131 guided practical steps, 132 checklist criteria and 15 practical rubrics. See [SS1 NERDC alignment register](docs/SS1-NERDC-ALIGNMENT.md) and [outcome map](docs/SS1-NERDC-OUTCOME-MAP.md).

This mapping and content audit are internal quality work; they do not constitute NERDC approval, accreditation or certification. Practical simulations must not be represented as completed physical builds or school-context evidence.

The SS2–SS3 curriculum map is retained, but authored and independently reviewed lesson content for those classes is not yet complete to the same standard. Do not advertise those topics as fully delivered lessons until the content is authored, reviewed and released.

## Run locally

```sh
python3 -m http.server 8080
```

Open http://localhost:8080. Service workers require localhost or HTTPS.

## Licence key safety

The versioned public keyring is keys.json. The private signing key must remain on the owner's trusted machine, encrypted in offline backups, and must never be committed, emailed, pasted into chat, placed in CI or uploaded to Vercel.

The original signing keypair was reported lost. No replacement production keypair or real school licence token has been generated. A private school-by-school inventory and controlled reissue are required before production licence readiness can be claimed. Follow [the controlled rotation and reissue plan](docs/LICENCE-KEY-ROTATION-PLAN.md); never generate a key merely to silence a missing-file warning.

## Verification status

The SS1 content branch previously documented a 16/16 Playwright desktop/mobile pass on an earlier commit. That result does not certify the final combined Garden UI + SS1 content + keyring candidate. The integrated release branch must pass the complete automated and hosted-browser acceptance suite before merge or production deployment.

The Garden UI branch previously passed JavaScript syntax and source-readback checks, but its hosted browser acceptance was outstanding. A Vercel preview request was blocked by the free daily deployment allowance; no production deployment was attempted.

## Contributor and maintenance handover

See the [contributor handbook](docs/CONTRIBUTOR-HANDBOOK.md) for repository architecture, local setup, branch/PR rules, lesson authoring, licensing and secret handling, review evidence and contributor contract handover. The [release and operations runbook](docs/RELEASE-RUNBOOK.md) covers deployment, school licence operations, PWA updates, customer support and rollback.

## Release register

All remaining release, customer-readiness and contributor-handover work is tracked in the single [eMac v1 definitive release completion register](https://github.com/akameredon/eMac-lesson-Note/issues/3). Update that register with evidence rather than creating duplicate plans.

## Content maintenance

Edit data.js using the existing CUR and C structures. Every content change must be reviewed, tested, and accompanied by a service-worker cache-version bump in sw.js. Preserve lesson IDs and existing student progress compatibility.
