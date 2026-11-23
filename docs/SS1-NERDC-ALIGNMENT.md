# eMac Lesson Note — SS1 NERDC Alignment Register

**Audit date:** 23 November 2026  
**Working branch:** improve/ss1-nerdc-alignment  
**Status:** revised SS1 authored-content coverage and technical checks are substantially complete. Independent teacher review, school-context practical validation and production licence-key recovery remain open. This is an internal curriculum audit, not NERDC approval, accreditation or certification.

## Authoritative curriculum reference

- Nigerian Educational Research and Development Council (NERDC), *New Revised Senior Secondary School Curriculum: Digital Technologies, SSS 1*, October 2025.
- Primary NERDC PDF: https://lmis.nerdcportals.com.ng/sss_1/necurrdc/4.pdf
- NERDC curriculum home: https://www.nerdc.gov.ng/content_manager/new_senior_curriculum_home.html
- Interactive viewer: https://lmis.nerdcportals.com.ng/sss_1/necurrdc/viewer.html?file=4.pdf
- Searchable secondary transcription, used only as an index: https://smartest.ng/syllabus/nerdc/ss1/digital-technologies/. The publisher is not affiliated with or endorsed by NERDC; the primary PDF controls.

The primary PDF was opened and checked for its published learning outcomes and performance objectives. It presents 17 distinct teachable competency areas across printed pages 1–26 (PDF pages 12–37). The secondary transcription numbers 23 entries because some focal competencies repeat. The detailed outcome-by-outcome comparison and page references are in SS1-NERDC-OUTCOME-MAP.md.

Do not infer official term/week sequencing or examination weighting from eMac's preserved legacy map. A verified state scheme of work is required for that.

## Competency-to-lesson mapping

| Official NERDC area | Printed page(s) | eMac lesson record(s) |
|---|---:|---|
| Web development foundations | 1 | ss1-2-2 |
| Website design and classification | 2 | ss1-2-2 |
| CSS and static webpages | 3 | ss1-2-2 |
| Digital marketing, advertising and branding | 5 | ss1-3-4 |
| Digital stories, infographics and multimedia presentations | 7 | ss1-3-4 |
| Computational thinking and structured problem-solving | 8 | ss1-1-6 |
| Robot design and obstacle avoidance | 10–11 | ss1-3-10 |
| AI and image-pattern recognition | 12 | ss1-3-9 |
| Data types and structures | 14 | ss1-3-2 |
| Basic statistical measures and graphical representation | 15 | ss1-3-3 |
| Database management systems | 16–17 | ss1-3-6, ss1-3-8 |
| Python programming for data manipulation | 18–19 | ss1-1-6 |
| Computer networking | 20–21 | ss1-2-1 |
| Cyber threats, safety and security measures | 22–23 | ss1-2-8 |
| Digital citizenship | 24 | ss1-2-6, ss1-2-9 |
| Social media networking | 25 | ss1-2-10 |
| Cyberspace relationships and communication | 26 | ss1-2-6, ss1-2-10 |

The existing 70-entry SS1–SS3 curriculum map, lesson IDs, navigation and six reference lessons are preserved. Foundational topics such as digital technology, hardware, input/output, software, storage, history, number systems, data representation, email and word processing remain available as prerequisite or enrichment learning; they are not misrepresented as separate focal headings in the revised SS1 curriculum.

## Authored-content corrections applied

All 24 existing SS1 lesson records have notes, practice questions, guided practical steps and assessment checklists. The revised competency areas are integrated into the existing topic IDs.

Key specific corrections include:

- **Web development:** webpage versus website, static/dynamic/interactive classifications, complete HTML/CSS example, responsive and accessible page checks.
- **Digital entrepreneurship:** advertising channels and types, brand identity, sample local-business advertisement, honest call to action, sponsored-label guidance, digital story, infographic, audio narration and text alternative.
- **Computational thinking/Python:** decomposition, pattern recognition, abstraction, IPO, flowcharts, pseudocode, variables, expressions, sequence, selection, iteration, syntax/runtime/semantic debugging, positive-negative-zero classification and fictional login simulation. The duplicate Python extension was consolidated into one coherent lesson.
- **Robotics:** two-wheel differential drive, example microcontrollers and motor drivers, kit-specific wiring, modular forward/stop/turn functions, sensor-based if/else, speed calibration, straight-line testing and build record. Paper/simulator work is labelled as simulation, not a physical build.
- **AI:** image-classification workflow, data acquisition, preprocessing, feature extraction, training, interpretation, separate unseen test data and accuracy. The practical names Google Teachable Machine and prohibits personal/identifiable images.
- **Data science:** qualitative/quantitative and structured/unstructured data, importance of unstructured data, anonymous collection, mean/median/mode/range/percentages, spreadsheet formulas, bar and pie charts, trends and bias.
- **DBMS:** relational and NoSQL concepts, three related SQLite tables (Learners, Subjects, Enrolments), primary/foreign keys, fictional records, INSERT statements and a three-table JOIN. Spreadsheet-only activity is explicitly a preparation simulation, not a completed DBMS build.
- **Networking:** LAN/MAN/WAN, devices, topology, media, teacher-approved isolated LAN practical and permitted local ping test.
- **Online safety:** cyber threats, privacy/location permissions, malware-protection infographic, secure school-email safeguards, digital citizenship pledge, safe class-group simulation, safe tagging and Stop–Think–Connect. The four online-safety lessons retain distinct roles and cross-reference one another rather than repeating whole topics.

## Assessment and technical verification

- **24/24 SS1 lesson records** contain notes, practice questions, practical steps and checklists.
- **15 practical lessons** have four-criterion rubrics with three performance levels: Not yet demonstrated, Developing and Competent. Existing learner checklists remain available.
- The SQLite three-table example was executed against an in-memory SQLite database; its sample JOIN returned the expected learners.
- The data file and browser-test file pass JavaScript syntax compilation.
- The browser acceptance suite previously passed **16/16 desktop/mobile Chromium tests** on commit 9a4c78893df1511afb5eca7bb8483b7a64f3853f. That run covered lesson navigation, all 24 lessons, 15 rubrics, tampered licence rejection, CBT scoring, teacher progress reporting, CSV export, offline reload and keyboard/mobile rubric access.
- Additional assertions now check the specific revised outcomes (webpage/site classification, percentage work, SQLite, AI stages, robot calibration, Python examples, location permissions, email safeguards, ping and safe class-group tasks). The latest run for the current content revision must pass before the final browser-acceptance gate is marked complete.
- The service-worker cache is now emac-v8 so installed PWA copies refresh the revised lesson data.
- CI runs on Ubuntu 24.04 and superseded browser-test runs are cancelled automatically.

These are code, content and browser checks. They do not establish that a learner has completed a physical practical or that a qualified teacher has approved the content.

## Remaining external and owner-dependent gates

1. **Independent teacher review:** the 24-lesson review pack has been prepared and two teacher-review invitations have been sent. No acceptance or signed review report is recorded yet.
2. **School-context practical validation:** a school must confirm and test its approved Python environment, Teachable Machine access, local relational DBMS, LAN equipment/ping policy, robotics kit and safe wiring procedure.
3. **Safeguarding validation:** a teacher must approve the school's email/social platforms, location-permission demonstration and class-group workflow. No learner should be directed to create an unsupervised public account or disclose private details.
4. **Programmer review:** three programmer invitations have been sent. No confirmed contributor, repo access or independent code review is recorded.
5. **Production licensing:** neither pub.json nor private.pem is present in this repository. Do not run keygen init or generate a replacement pair merely to remove the warning: a new pair would invalidate licences issued under an earlier key. Recover the intended public key and retain its matching private key securely, or obtain explicit approval for a key rotation and school-key reissue plan.

## Release and branch protection

- Work remains on improve/ss1-nerdc-alignment.
- Main has not been changed or merged.
- The Vercel deployment is a preview for this branch, not a production release.
- No production merge, release or key rotation has been performed.
- Do not claim NERDC endorsement, accreditation or certification.

## Final acceptance policy

A curriculum item is fully verified only when the lesson content is mapped to the primary NERDC outcome, the app renders and works in desktop/mobile browser tests, the practical is validated in a suitable school environment, and an independent teacher review records its findings. A paper or simulator alternative must never be reported as proof of a physical build, trained online model, real DBMS implementation or LAN construction.
