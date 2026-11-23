# eMac Lesson Note

Offline, installable PWA for SS1–SS3 Digital Technologies (NERDC scheme): notes, tagged practice questions (NERDC / WAEC / JAMB / Post-UTME), timed CBT mode, practicals, per-school licence keys and a teacher view.

## Run
`python3 -m http.server 8080` then open http://localhost:8080 (service workers need localhost or HTTPS). Hosting on GitHub Pages works.

## Licence keys (offline, per school, yearly expiry)
1. `node keygen.mjs init` — creates `private.pem` (keep secret, never commit) and `pub.json` (commit it). It refuses to overwrite either file; verify and back up the current keypair before any deliberate rotation.
2. `node keygen.mjs issue "School Name" 2027-07-31` — prints the key to give the school.
3. School pastes it in Settings. Without a key only topics marked `free:1` open.
Note: expiry uses the device clock, so this deters casual sharing, not determined bypass.

## Add content
Edit `data.js`. `CUR` is the full curriculum map; add a `C["ss1-1-4"]={n:[...],q:[...],p:{...}}` entry (key = class-term-week). Question tags: NERDC, WAEC, JAMB, PUTME. A question without `o` is a theory question with a model answer in `e`. Bump `V` in `sw.js` after every content change so phones refresh.

## Status
The existing app includes the PWA engine, 70-topic SS1–SS3 curriculum map, offline shell, accessibility settings, Listen, practice, practicals, CBT, progress codes, teacher view and school licence verification. New progress exports report accuracy against questions actually attempted; older progress codes remain readable and are labelled as legacy scores.

The SS1 NERDC improvement branch preserves the existing topic map and adds first-pass content for the six reference lessons plus revised curriculum coverage in networking, web development, digital entrepreneurship, computational thinking, Python foundations, data science, databases, AI and robotics. See [the SS1 NERDC alignment register](docs/SS1-NERDC-ALIGNMENT.md) for the mapping and limitations.

Before release: teacher-review all lesson content and answers; complete browser, mobile and offline/PWA tests; verify licence setup and update instructions. `private.pem` is excluded by `.gitignore`; never publish or commit the signing key. The public `pub.json` must be generated from the intended existing keypair and committed before issuing/validating school licences. SS2 and SS3 content review remains a separate workstream.
