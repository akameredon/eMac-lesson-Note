# eMac Lesson Note

Offline, installable PWA for SS1–SS3 Digital Technologies: notes, tagged practice questions (NERDC / WAEC / JAMB / Post-UTME), timed CBT mode, practicals, per-school licence keys and a teacher view. The legacy 70-entry map is preserved; SS1 content is being checked against the October 2025 revised NERDC curriculum and is not represented as NERDC-certified.

## Run
`python3 -m http.server 8080` then open http://localhost:8080 (service workers need localhost or HTTPS). Hosting on GitHub Pages works.

## Licence keys (offline, per school, yearly expiry)

The isolated rotation branch uses a versioned public keyring (`keys.json`) and version-2 signed licences. New tokens include a key ID, unique licence ID, school name and strict expiry date.

On the owner's trusted machine only:
1. `node keygen.mjs init` — creates local `private.pem` (secret; owner-only; never upload) and public `keys.json`. It refuses to overwrite existing files.
2. Make and verify encrypted offline backups of `private.pem`. Never put it in GitHub, CI, Vercel, chat or email.
3. `node keygen.mjs check` — verifies the local private key matches the active public key without printing private material.
4. `node keygen.mjs issue "School Name" 2027-07-31` — signs a replacement licence locally after school identity and expiry are confirmed.
5. Only `keys.json` may be committed/deployed. Never commit a real school licence token.

The original signing keypair and matching `pub.json` were reported lost. Therefore, old tokens cannot be promised to remain valid; affected schools must be inventoried and reissued replacement licences without an extra charge for the key-recovery failure. The private school register must stay outside this repository. See [the controlled rotation and reissue plan](docs/LICENCE-KEY-ROTATION-PLAN.md) and the blank [school reissue register template](docs/SCHOOL-LICENCE-REISSUE-REGISTER.csv).
## Add content
Edit `data.js`. `CUR` is the full curriculum map; add a `C["ss1-1-4"]={n:[...],q:[...],p:{...}}` entry (key = class-term-week). Question tags: NERDC, WAEC, JAMB, PUTME. A question without `o` is a theory question with a model answer in `e`. Bump `V` in `sw.js` after every content change so phones refresh.

## Status
The existing app includes the PWA engine, 70-topic SS1–SS3 curriculum map, offline shell, accessibility settings, Listen, practice, practicals, CBT, progress codes, teacher view and school licence verification. New progress exports report accuracy against questions actually attempted; older progress codes remain readable and are labelled as legacy scores. The licence-verification code is configured through the public `keys.json` keyring on the controlled rotation branch. No real public keyring has been generated or deployed yet.

The SS1 improvement branch preserves the existing 70-topic map and now includes authored lesson content for all 24 SS1 topic entries, including the six reference lessons and coverage of networking, web development, digital entrepreneurship, computational thinking, Python foundations, data science, databases, AI and robotics. See the [SS1 NERDC alignment register](docs/SS1-NERDC-ALIGNMENT.md) and [outcome-by-outcome coverage map](docs/SS1-NERDC-OUTCOME-MAP.md) for the mapped competencies, evidence and limitations.

Before release: teacher-review all lesson content and answers; complete browser, mobile and offline/PWA tests; verify licence setup and update instructions. `private.pem` is excluded by `.gitignore`; never publish or commit the signing key. The public `keys.json` must be generated locally from the approved replacement keypair and committed before issuing/validating replacement school licences. SS2 and SS3 content review remains a separate workstream.
