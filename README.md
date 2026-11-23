# eMac Lesson Note

Offline, installable PWA for SS1–SS3 Digital Technologies (NERDC scheme): notes, tagged practice questions (NERDC / WAEC / JAMB / Post-UTME), timed CBT mode, practicals, per-school licence keys and a teacher view.

## Run
`python3 -m http.server 8080` then open http://localhost:8080 (service workers need localhost or HTTPS). Hosting on GitHub Pages works.

## Licence keys (offline, per school, yearly expiry)
1. `node tools/keygen.mjs init` — creates `private.pem` (keep secret, never commit) and `pub.json` (commit it).
2. `node tools/keygen.mjs issue "School Name" 2027-07-31` — prints the key to give the school.
3. School pastes it in Settings. Without a key only topics marked `free:1` open.
Note: expiry uses the device clock, so this deters casual sharing, not determined bypass.

## Add content
Edit `data.js`. `CUR` is the full curriculum map; add a `C["ss1-1-4"]={n:[...],q:[...],p:{...}}` entry (key = class-term-week). Question tags: NERDC, WAEC, JAMB, PUTME. A question without `o` is a theory question with a model answer in `e`. Bump `V` in `sw.js` after every content change so phones refresh.

## Status
Built: engine, curriculum map (70 topics), SS1 Term 1 starter content (Introduction, Number Systems).
Next: fill remaining topics in batches. Teacher-check every answer before sale. Add the logo icons.
