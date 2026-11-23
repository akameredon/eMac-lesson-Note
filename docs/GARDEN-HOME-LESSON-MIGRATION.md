# Milestone 1 — Garden-style home and lesson screens

## Source of truth
- Canonical application: this repository, branch `feature/garden-home-lesson-parity`.
- Starting point: `improve/ss1-nerdc-alignment` at `7bef43d5667640d6607c5d741d6eb14e6f0b75fe`.
- Visual reference only: `akameredon/emac-lesson-note-garden`, branch `main`, commit `90d917f5e334bbb2bb41e09325768b5b04756838`.

## Scope
Rework only:
1. Student home / lesson catalogue screen.
2. Individual lesson screen, including Notes, Practice, and Practical tabs.

Do not migrate CBT, teacher, profile/settings, or other screens in this milestone.

## Non-negotiable preservation rules
- Keep the original application architecture unless implementation evidence proves a change is necessary.
- Keep `data.js` as the authoritative curriculum and lesson-content source. Do not copy Garden's sample lesson data over it.
- Preserve all original lesson identifiers, class/term/week mappings, lesson content, practice questions, guided practicals, rubrics, and existing six reference lessons.
- Preserve the original `emac` localStorage schema and saved progress. Do not read or overwrite it using Garden's different `emac` object shape.
- Preserve licence verification/keyring behaviour, service-worker/PWA behaviour, accessibility controls, text-size/theme/spacing settings, CBT, teacher progress-code import/export, and all existing event flows.
- Keep Notes, Practice, Practical, Listen, and mark-complete interactions working.
- Never introduce false completion states for lessons that have no authored content.
- Do not change `main`, deploy to production, rotate or issue production licence keys, or delete/archive the Garden repository as part of this milestone.

## Visual direction from Garden
- Warm cream/off-white canvas.
- Deep green hero surface with a subtle green gradient.
- Gold/yellow accent for calls to action and highlights.
- Fraunces-like display typography paired with a clean sans-serif body face.
- Generous rounded cards, soft borders/shadows, clear spacing, and mobile-first touch targets.
- Home: greeting/brand hero, class selector, progress summary, prominent CBT entry, term selector, and scannable lesson cards.
- Lesson: clear title and class/term/week context, sticky segmented Notes/Practice/Practical tabs, readable content cards, prominent Listen action, and an accessible completion control.

## Functional acceptance gates
### Home screen
- All original class/term/week topics render from `CUR` in `data.js`.
- Selecting class and term works and remains consistent with original state handling.
- Progress counts and practice/CBT summaries are calculated from original saved data, not Garden's store.
- Lesson cards accurately distinguish authored lessons from topics still awaiting content.
- Opening any topic uses its original lesson key.
- CBT and Teacher View entry points remain reachable.

### Lesson screen
- Existing lesson title, blurb, notes, questions, guided practical steps, checklists, rubrics, and converter render from original `C` data.
- Notes/Practice/Practical navigation works on desktop and mobile.
- Listen reads the current lesson notes and can be stopped safely.
- Existing practice answer feedback and saved scores remain intact.
- Completion toggling is safe and does not erase previous progress.
- Unauthored lessons remain clearly identified; no fabricated content is shown.

### Regression and release checks
- Existing browser acceptance suite passes against this branch.
- Add targeted tests for home class/term selection, lesson navigation, notes/practice/practical, Listen, completion persistence, and original localStorage compatibility.
- Verify desktop and narrow mobile layouts, keyboard focus, reduced motion, and screen-reader labels.
- Verify no regression to CBT, teacher progress codes/CSV, licence checks, theme/text-size settings, or offline/PWA behaviour.
- Produce a preview deployment and record evidence before calling either screen verified.

## Completion definition
Milestone 1 is complete only when both screens visually follow the Garden reference and every preservation/functional gate above passes. A successful build alone is not sufficient. The remaining screens are out of scope until this milestone is verified.
