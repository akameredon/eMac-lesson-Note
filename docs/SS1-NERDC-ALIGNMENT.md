# SS1 Digital Technologies — NERDC Alignment Register

**Purpose:** improve the existing eMac Lesson Note without replacing its architecture, visual identity, lesson experience, or existing content.

**Status:** curriculum audit baseline. This document does not claim that the current app is fully NERDC-aligned.

## Authoritative curriculum reference

- Nigerian Educational Research and Development Council (NERDC), *New Revised Senior Secondary School Curriculum: Digital Technologies, SSS 1*, October 2025.
- Official NERDC curriculum landing page: https://www.nerdc.gov.ng/content_manager/new_senior_curriculum_home.html
- Official SSS1 curriculum viewer: https://lmis.nerdcportals.com.ng/sss_1/necurrdc/viewer.html?file=4.pdf
- The official viewer identifies the source document as *New Revised Senior Secondary School Curriculum: Digital Technologies SSS 1*, © October 2025. The PDF is discoverable through the NERDC-hosted portal, although the viewer's interactive page does not expose all pages as readable text in every browser/search interface.
- A readable transcription of the October 2025 curriculum, used as a secondary reading aid: https://smartest.ng/syllabus/nerdc/ss1/digital-technologies/
- The transcription publisher states that it is not affiliated with or endorsed by NERDC. Where exact wording matters, the official curriculum PDF takes precedence.

## Important curriculum finding

The current `data.js` has 70 entries distributed across SS1–SS3 and an older, broad topic outline. That outline must not be represented as the October 2025 revised SS1 NERDC curriculum. The revised SS1 curriculum is competency/outcome based. Its published headings and focal competencies cover the areas below.

Do not infer a week, term, teaching order, or examination weighting from this register. Those require a verified state scheme of work or an explicit official distribution.

## Revised SS1 competency coverage register

### 1. Web development and management

1. **Web development foundations**
   - Describe web development.
   - Identify examples and types of web-development products.
   - Explain the functions of core web technologies.
   - State tools used for web development.

2. **Website design and classification**
   - Explain website design and website components.
   - Identify and classify different types of websites.

3. **CSS and static web pages**
   - Explain the meaning and importance of CSS.
   - Write CSS statements using correct syntax and rules.
   - Explain methods of applying CSS.
   - Create a static webpage and style it with CSS.

### 2. Digital entrepreneurship

4. **Digital marketing, advertising and branding**
   - Explain digital marketing and its importance.
   - Identify types and purposes of digital advertisements.
   - Describe brand elements such as logo, colour and tone.
   - Identify social media, email and web marketing channels.
   - Organise digital assets using appropriate labels.

5. **Digital stories and multimedia presentations**
   - Create simple digital stories and multimedia presentations using text, images and audio.
   - Apply presentation principles for clear communication and audience engagement.

### 3. Emerging technologies

6. **Computational thinking and structured problem-solving**
   - Explain computational thinking and its importance.
   - Describe its components and the functions of relevant tools.
   - Draw input-process-output (IPO) charts, flowcharts and pseudocode for problem-solving.

7. **Robotics and automation**
   - Explain robot design and automation.
   - Describe steps involved in building a robot.
   - Build a two-wheel differential-drive mobile robot.

8. **Artificial intelligence and machine learning**
   - State the meaning and applications of AI.
   - Explain machine learning, models, training data and prediction.
   - Describe how AI recognises patterns in images.
   - Train a simple image-classification model using an online tool.
   - Test and evaluate model accuracy.

### 4. Data science

9. **Data types and structures**
   - Distinguish qualitative and quantitative data.
   - Describe structured and unstructured data and their characteristics.

10. **Data collection, visualisation and interpretation**
    - Interpret basic statistical values.
    - Collect data about events in the learner's environment.
    - Use software to create suitable graphical representations.
    - Identify trends and patterns.
    - Interpret findings and draw conclusions.

11. **Database management systems**
    - Explain the importance of a DBMS.
    - Describe relational and NoSQL DBMS.
    - Explain database components and give examples of DBMS software.
    - Create a database with related tables.
    - Store and retrieve data.

12. **Python programming for data manipulation**
    - Distinguish a program from an algorithm.
    - Construct Python expressions using variables.
    - Identify and debug logical, syntax and semantic errors.
    - Write programs using sequence, selection and iteration.
    - Locate and correct program errors.

### 5. Communication systems

13. **Computer networking and communication**
    - Explain the concept and importance of computer networks.
    - Identify network components and classify network types.
    - Explain network topologies and their characteristics.
    - Describe network hardware and transmission media.
    - Draw a network topology.
    - Build a small LAN and resolve simple connectivity problems.

### 6. Online safety

14. **Cyber threats and protection**
    - Explain cyber threats and identify possible threats.
    - Discuss safety tips and guidelines for different threats.
    - Apply measures to prevent cyber threats.

15. **Digital citizenship**
    - Identify requirements for responsible digital citizenship.
    - Describe expected behaviours.
    - Formulate a digital-citizenship pledge.
    - Apply digital-citizenship rules when communicating online.

16. **Responsible social media use**
    - Describe social media and identify popular platforms.
    - Discuss characteristics of social media.
    - Practise creating accounts and a class chat group in a safe, supervised learning context.
    - Communicate responsibly on social media.

17. **Safe online relationships**
    - Discuss dos and don'ts for safe online relationships.
    - Practise safe tagging of online content and contacts.
    - Explain benefits and risks of cyberspace relationships.

> The public transcription presents 23 numbered content entries because some repeated headings/focal competencies appear as separate entries. This register groups repeated entries into 17 distinct teachable competency areas to avoid duplicating the same learning outcomes.

## Mapping the six existing reference lessons

The six lesson titles supplied from the existing Claude artifact are retained as the reference sequence. They are not renamed or discarded.

| Existing lesson title | Relationship to revised SS1 NERDC curriculum | Treatment in eMac |
|---|---|---|
| What is digital technology? | Foundational context; not a standalone heading in the revised SS1 competency list reproduced above. | Retain as an introductory foundation. Explain that it prepares learners for the curriculum's practical digital competencies. |
| Parts of a computer (hardware) | Foundational knowledge that supports computer/network components, network hardware and practical setup. Not a standalone heading in the reproduced list. | Retain; connect components to the later networking and data activities. |
| Input and output devices | Foundational knowledge for data capture, processing and communication equipment. Not a standalone heading in the reproduced list. | Retain as a clear sublesson; connect devices to data collection and network equipment without claiming a separate NERDC topic. |
| Software | Foundational knowledge for the software tools used in web development, data visualisation, databases, AI and programming. Not a standalone heading in the reproduced list. | Retain; use examples that lead into the actual software competencies. |
| Storage devices | Foundational knowledge for data organisation, database storage and digital asset management. Not a standalone heading in the reproduced list. | Retain; distinguish local storage, removable media, network storage and database storage accurately. |
| Staying safe online | Directly supports the revised Online Safety competencies: cyber threats, digital citizenship, social media and safe online relationships. | Retain and expand to cover all four areas, including practical scenarios and safe response steps. |

## Additional revised SS1 competency coverage added to existing topics

The next implementation pass adds authored notes, practice questions, model answers, practical steps and marking checklists to existing SS1 topic IDs. The original curriculum map and topic titles remain unchanged.

| Revised SS1 competency area | Existing eMac topic used | Existing topic ID | Coverage added |
|---|---|---|---|
| Communication systems: networking | Computer Networks | `ss1-2-1` | LAN/MAN/WAN, components, topologies, transmission media, small-LAN plan and basic troubleshooting |
| Web development and management | Internet Technologies | `ss1-2-2` | Web development purpose/tools, website types/components/design, HTML structure, CSS syntax/selectors/methods and static page practical |
| Digital entrepreneurship | Presentation Software | `ss1-3-4` | Digital marketing channels and ads, brand elements, digital asset organisation, digital stories and multimedia presentation |
| Computational thinking | Computer Software | `ss1-1-6` | Decomposition, pattern recognition, abstraction, algorithms, IPO charts, flowcharts and pseudocode |
| Python programming for data manipulation | Computer Software | `ss1-1-6` | Variables, expressions, sequence, selection, iteration and introductory debugging practice |
| Data types and structures | Spreadsheet Applications I | `ss1-3-2` | Qualitative/quantitative and structured/unstructured data, responsible collection and spreadsheet entry |
| Data collection, visualisation and interpretation | Spreadsheet Applications II | `ss1-3-3` | Mean, median, mode, range, charts, trends, limitations and bias |
| Database management systems | Database Introduction | `ss1-3-6` | DBMS, tables, fields, records, relational and NoSQL models, primary keys and relationships |
| Practical database management | Practical Database Management | `ss1-3-8` | Create related tables, use fictional records, store and retrieve data, validate and back up |
| Artificial intelligence and machine learning | Emerging Technologies I | `ss1-3-9` | AI/ML, models, training data, image classification, testing, accuracy, bias and privacy |
| Robotics and automation | Emerging Technologies II | `ss1-3-10` | Robot components, sensors/actuators, automation, two-wheel differential drive, design and safe simulation |

The existing `ss1-1-6` Software lesson has been extended rather than replaced. The original topic title, content, ID and navigation remain in place. Existing hardware, online safety and introductory digital technology lessons are also retained.

### Coverage boundaries and teaching notes

- The web practical uses local HTML and CSS files and can be completed without publishing a website.
- The AI practical has an offline paper-based alternative. An online classifier is optional and must use teacher-approved, non-personal sample images.
- The robotics practical can be completed as a labelled design or paper-grid simulation when no kit is available. Physical robot construction requires appropriate equipment and supervision.
- The database practical uses fictional sample records, not real learner data.
- Spreadsheet and data-science activities use small, privacy-respecting classroom datasets.
- Python practice requires a teacher-approved Python environment; a paper trace is provided as a fallback where the environment is unavailable.
- These modules are mapped into the closest existing topic slots to preserve the app's current navigation. The mapping is a teaching integration, not a claim that the legacy term/week sequence is itself the official NERDC sequence.

## Existing app content and curriculum gaps

The initial repository had authored content only for `ss1-1-1` (Introduction) and `ss1-1-3` (Number Systems). This branch now adds lesson records for all 24 entries in the existing SS1 topic map, including notes, practice questions and practical activities. The revised competency areas are integrated into the closest existing topic slots, as mapped above.

- `ss1-1-1` — What is digital technology? (expanded).
- `ss1-1-4` — Parts of a computer (hardware), including input/output devices and storage devices.
- `ss1-1-6` — Software.
- `ss1-2-6` — Staying safe online.

This preserves existing topic IDs and the existing `n`, `q`, and `p` data shape used by the current app. The original Number Systems lesson remains intact. All 24 SS1 topic IDs have lesson records; this does not establish that every lesson is a one-to-one match for an official revised-curriculum heading. Teacher review and a final line-by-line check against the official PDF remain necessary. SS2 and SS3 remain a separate future content workstream.

The six reference lesson titles are retained in the lesson notes. Hardware, input/output and storage are grouped under the existing Computer Hardware topic because the current app's topic model has no separate topic IDs for those sublessons. The remaining revised SS1 competency areas listed in the coverage matrix now have authored first-pass content in existing topic slots. The old 70-entry outline should still be treated as legacy planning material until each entry is checked against the revised curriculum—not silently assumed to be compliant.

**Automated content validation on the improvement branch:** all 70 existing curriculum-map entries remain present; all 24 SS1 topic records contain lesson content; the six reference lesson titles are present; all 24 SS1 records contain a practical block; the current content contains 201 note sections, 130 practice-question records, 117 guided practical steps and 126 checklist criteria; multiple-choice answer indexes and model-answer fields pass structural checks. The app JavaScript parses successfully. These are code/data checks, not a substitute for teacher review or browser testing.


## Lesson-quality review — first corrective pass (23 November 2026)

The full 23-entry secondary transcription was reviewed against the current SS1 lesson records as a working comparison source. This was an authoring audit, not a formal teacher sign-off or direct verification of every line in the official NERDC PDF.

The following gaps were identified and corrected without changing topic IDs, the 70-entry curriculum map, application routes or lesson data shape:

- **Computational thinking and Python (`ss1-1-6`):** the earlier lesson described software generally and did not teach the focal competence in enough detail. Added decomposition, pattern recognition, abstraction, algorithm design, IPO charts, flowcharts, pseudocode, variables, expressions, sequence, selection, iteration, debugging/error types, practice questions and a guided problem-solving activity with a paper-trace alternative.
- **Digital entrepreneurship (`ss1-3-4`):** the lesson explained digital stories using narration and sound, but the practical did not require learners to produce audio. Added a spoken narration/audio task, source/permission checks and a text alternative for accessibility.
- **Communication systems (`ss1-2-1`):** clarified the practical requirement to build a small demonstration LAN using two devices and a teacher-approved switch, check connectivity and record results. A labelled paper simulation remains available when equipment or permission is unavailable.
- **Online safety (`ss1-2-6`):** expanded the lesson to explicitly include a digital citizenship pledge, safe social-media/class-group practice using a fictional profile or teacher-managed demonstration, and safe tagging with permission and audience checks.

### Practical delivery limits still to resolve

- **Robotics:** the lesson explains and simulates a two-wheel differential-drive robot and includes a supervised kit demonstration/build pathway. A physical obstacle-avoidance robot cannot be completed in software alone; schools need a suitable kit, safe workspace and teacher supervision. Where unavailable, the paper design/grid simulation is a preparation alternative, not evidence that a physical robot was built.
- **AI:** online image-classifier training depends on an approved tool and internet access. The paper classification activity is a fallback for understanding the stages, not a substitute for demonstrating a trained digital model when equipment is available.
- **Python, LAN and media production:** the lesson notes now specify real practicals and safe alternatives. A school still needs to confirm access to a Python environment, suitable network equipment and an audio-capable presentation tool to assess the hands-on outcomes fully.

### Acceptance status

- Content authoring and structural checks: passed for this branch's current data shape.
- First corrective lesson-quality pass: completed for the gaps listed above.
- Teacher review of all learning outcomes, explanations, worked examples, questions, answers and marking criteria: **not yet completed**.
- Direct line-by-line verification against the complete official October 2025 NERDC PDF: **not yet completed**. The public transcription is a comparison aid only.
- Browser/mobile interaction, accessibility, fresh install and service-worker upgrade/offline tests: **not yet completed**.

## Content quality standard for every completed lesson

Each lesson should include, as appropriate:

1. Clear learner-friendly title and curriculum mapping.
2. Measurable learning outcomes using observable verbs.
3. Prerequisite knowledge and a short everyday introduction.
4. Small, sequenced explanations in plain English.
5. Correct definitions and vocabulary.
6. Nigerian/local examples where they aid understanding.
7. Worked examples before independent practice.
8. Diagrams or illustrations only where they improve comprehension.
9. Guided practical activity with materials, numbered steps and expected result.
10. Assessment questions with correct answers and explanations.
11. A practical marking checklist or rubric.
12. A short recap and accessible revision prompts.
13. Source notes for factual, safety, legal or technical claims.
14. Accessibility review for reading load, language clarity, keyboard use and Listen compatibility.

## Guardrails for implementation

- Preserve the existing vanilla JavaScript PWA and current UI.
- Preserve existing progress, licence, teacher view, CBT and offline behaviour.
- Do not delete or silently rename existing topic IDs.
- Do not claim a lesson is NERDC-aligned unless the mapping is explicit and defensible.
- Label foundational/enrichment lessons honestly where no direct revised-curriculum objective exists.
- Do not invent a term/week allocation from the curriculum PDF.
- Do not label newly authored questions as actual WAEC/JAMB past questions unless verified as such. Use labels such as “NERDC practice” or “WAEC-style practice” where appropriate.
- Keep the main branch untouched during this work; develop on the improvement branch and verify before proposing merge.

## Implementation status

**Lesson authoring now covers all 24 entries in the existing SS1 topic map.** The six reference lessons and the revised competency areas are retained within the existing topic IDs; the 70-topic SS1–SS3 map and app navigation are preserved. The service-worker cache identifier has been advanced to `emac-v4` so installed copies can fetch the revised lesson data and subsequent progress-reporting/licence-feedback code changes. This is a completeness milestone, not a claim that every lesson has passed teacher review.

This does not mean the SS1 release is complete. Teacher review and browser-level testing remain open.

### Additional QA corrections on this branch

- Teacher progress exports now use a versioned format that records correct answers, attempted objective questions and the available question count separately. New teacher reports calculate accuracy from attempted questions, rather than treating every unattempted question in the bank as incorrect.
- Existing unversioned progress codes remain readable and are explicitly labelled as legacy scores because their original export format did not preserve an attempted-question count.
- Teacher CSV headings now match the on-screen report columns.
- All 24 existing SS1 map entries now have lesson notes, assessment questions and guided practicals with marking checklists. A structural audit found 199 note sections, 128 questions, 112 practical steps and 122 checklist criteria; every objective answer index and theory model answer passed validation.
- CBT sessions now add attempted and correct-answer totals to the student's versioned progress code. Teacher reports and CSV exports show CBT attempts and accuracy separately; the submit handler prevents a timed/manual double submission from counting twice. Older progress codes remain readable and show no CBT result when that field was not recorded.
- The key generator's usage message now matches its actual root-level location (`node keygen.mjs`).
- When `pub.json` is missing, Settings now explains that licence verification is not configured instead of returning a generic key-check error.
- Added `.gitignore` rules for `private.pem`, other PEM files, environment files and generated local dependencies. The key generator now refuses to overwrite an existing `private.pem` or `pub.json`, reducing accidental key rotation risk. No private signing key or public key file exists in this repository branch; `pub.json` is still required and must be created from the intended existing keypair. Do not generate a replacement keypair until the owner confirms no previously issued school keys depend on another private key.

## Remaining acceptance sequence

1. Teacher review the lesson accuracy, curriculum wording, question answers, practical instructions and marking checklists.
2. Verify all lessons in the existing app: Notes, Practice, Practical, Listen, CBT, progress code and teacher reporting.
3. Test on mobile viewport sizes and check keyboard, focus, text scaling, spacing and screen-reader behaviour.
4. Test a fresh install and an upgrade from the prior service-worker cache; confirm that lesson data is available offline after installation.
5. Test the existing licence flow. The repository currently has no `pub.json` or private signing key; identify and preserve the intended keypair, add only its matching public JWK as `pub.json`, then test valid, invalid and expired keys. Do not generate or rotate signing keys without a migration plan.
6. Only after content review and browser/offline tests pass, consider merging the improvement branch.


## Lesson-by-lesson content audit — provisional internal review (23 November 2026)

**Scope:** all 24 authored SS1 lesson records in `data.js` were inspected for instructional sequence, coverage, practical feasibility, assessment quality, safety, and consistency with the secondary curriculum transcription. This is an internal editorial/technical review, not an independent qualified-teacher sign-off and not a line-by-line verification against the complete official NERDC PDF.

| Existing lesson ID | Lesson focus | Provisional review finding | Required action |
|---|---|---|---|
| `ss1-1-1` | Introduction to Digital Technologies | Clear foundation and relevant local examples. It is correctly labelled foundational rather than a standalone revised-curriculum competency. | Add a short recap and check that examples distinguish a digital system from an individual device. |
| `ss1-1-2` | History and Evolution | Accessible broad timeline, but chronology is not anchored by dates or named milestones; some claims are too general to support deeper comparison. | Add a sourced, age-appropriate timeline with carefully selected milestones; avoid presenting a simplistic fixed “computer generations” account as the full history. |
| `ss1-1-3` | Number Systems | Correct basic binary/decimal examples and objective answers. Coverage is thin for octal and hexadecimal conversions; the practical refers to a converter whose availability must be confirmed in the actual app. | Add worked octal/hexadecimal conversion examples and a no-tool paper method; verify the referenced converter exists and works. |
| `ss1-1-4` | Computer Hardware | Broad and useful coverage of components, input/output, memory and storage. Some explanations compress technical distinctions, especially ROM and the CPU's internal functions. | Review technical wording and add a labelled component diagram or equivalent accessible description and a worked input-process-output-storage example. |
| `ss1-1-6` | Software, computational thinking and Python | Material covers the required concepts, but the file defines the lesson and later appends a second overlapping computational-thinking/Python block. This creates repetition and inconsistent depth. Python practical is partly dependent on a teacher-supplied example. | Consolidate to one coherent sequence; include a complete short Python example, expected output, test cases and worked debugging example. |
| `ss1-1-8` | Operating Systems | Clear introduction to OS functions, interface, files and applications. It lacks an explicit curriculum/foundation mapping and has limited assessment of resource and device management. | Add a transparent curriculum relationship and one applied scenario on how the OS manages an application or device. |
| `ss1-1-9` | Computer Maintenance and Safety | Practical, appropriately cautious safety guidance; assessment checks physical and ergonomic care. | Retain; verify manufacturer-specific cleaning advice is consistently framed as following the device instructions. |
| `ss1-1-10` | Data Representation | Introduces bits, bytes, encoding, pixels, audio sampling and compression. There are few worked examples and limited assessment of character encoding or sampling. | Add simple worked examples for binary storage, character encoding, image dimensions and audio sample rate/bit depth. |
| `ss1-2-1` | Computer Networks | Good coverage of network types, components, topologies and media; practical includes a supervised LAN pathway and safe alternative. | Clarify that a paper simulation does not demonstrate physical LAN construction; provide an approved addressing/connectivity example and expected test result. |
| `ss1-2-2` | Internet Technologies / Web Development | Strong HTML/CSS foundation and local static-page activity. Some syntax is described but not demonstrated in a complete, reusable code example. | Add a small complete HTML/CSS worked example and expected browser result; check mobile and accessibility requirements in the page task. |
| `ss1-2-3` | Email and Online Communication | Practical email fields, attachment caution and meeting etiquette are present. | Add a worked formal email and a short message-revision exercise; ensure Bcc explanation is precise for group privacy. |
| `ss1-2-4` | Digital Storage and Cloud Computing | Good distinction between local/cloud storage, sync and backup, with permissions and recovery planning. | Retain; add a simple restore-check scenario and avoid implying that any named provider is always available or approved by a school. |
| `ss1-2-6` | Staying Safe Online | Directly covers cyber threats, citizenship pledge, class communication and safe tagging. It overlaps with the later cybersecurity, privacy and social-media lessons. | Keep the original reference lesson; reduce duplication through cross-references and strengthen age-appropriate responses to coercion, grooming and unsafe contact. |
| `ss1-2-8` | Cybersecurity II | Useful layered protection, MFA, firewall, social engineering and incident response content. | Add a simple threat–vulnerability–safeguard example and check terminology against a trusted technical source. |
| `ss1-2-9` | Data Privacy and Digital Ethics | Covers personal/sensitive data, consent, footprint and responsible behaviour. Legal reference is too general to teach a specific Nigerian framework. | Add a carefully sourced, learner-level explanation of applicable Nigerian data-protection principles; do not give legal advice or unsupported legal claims. |
| `ss1-2-10` | Social Media Technologies | Covers features, feeds, benefits, risks, misinformation and wellbeing. Its practical does not itself practise safe account setup or class-group creation, although some of this is in `ss1-2-6`. | Map the relevant outcomes explicitly and include a teacher-managed/fictitious account and class-group simulation here, or clearly cross-reference the existing activity. |
| `ss1-3-1` | Word Processing Applications | Sound basic document creation, editing, formatting, saving and proofreading activity. | Add a worked formatting example and a clearer expected finished-document specification. |
| `ss1-3-2` | Spreadsheet Applications I / Data Types | Good qualitative/quantitative and structured/unstructured distinctions, privacy-aware collection and charting. | Add a worked spreadsheet table with sample rows and a chart-selection explanation; distinguish identifiers from measured quantities consistently. |
| `ss1-3-3` | Spreadsheet Applications II / Data Interpretation | Accurate basic mean, median, mode and range examples; includes bias and cautious interpretation. | Add a worked spreadsheet formula/function example and an odd/even-sized median example. |
| `ss1-3-4` | Presentation Software / Digital Entrepreneurship | Covers marketing, advertising, brand identity, asset organisation and a digital story with audio. Practical now includes narration and accessibility alternative. | Add an explicit student-created advertisement deliverable and a simple honesty/audience checklist; retain permission and attribution requirements. |
| `ss1-3-6` | Database Introduction / DBMS | Explains relational and NoSQL concepts, keys and relationships. The revised competency asks learners to give examples of DBMS software; this lesson does not clearly name and classify examples. | Add accurate examples of relational and NoSQL DBMS software and distinguish a DBMS from a database. |
| `ss1-3-8` | Practical Database Management | Good fictional-data, related-table, key, query and privacy workflow. The activity permits a spreadsheet as an alternative, but a spreadsheet-only exercise does not demonstrate creating a relational database in a DBMS. | Make the DBMS practical the assessed route when equipment is available; label spreadsheet/paper alternatives as preparation or simulation, not equivalent DBMS construction. |
| `ss1-3-9` | Artificial Intelligence and Machine Learning | Correctly explains training/test data, prediction, accuracy, privacy and bias. The paper activity is clearly a fallback, not a trained digital model. | Retain the distinction; add a fully worked accuracy example and a simple record sheet for predictions, correct labels and errors. |
| `ss1-3-10` | Robotics and Automation | Explains sensors, actuators and differential drive; provides a supervised physical build pathway and a clearly labelled simulation alternative. | Keep physical build and simulation outcomes separate in assessment; add a simple labelled wiring/layout diagram or kit-specific teacher handout. |

### Cross-lesson findings

1. **Assessment depth:** many lessons have a small question bank and several multiple-choice distractors are obviously unrelated. Increase application, interpretation and explanation questions; do not inflate question counts with repetitive recall items.
2. **Worked teaching examples:** several lessons state concepts without showing a complete worked example before independent practice. Prioritise Python, number systems, HTML/CSS, spreadsheet statistics, data representation and DBMS.
3. **Learning sequence:** prerequisites, lesson recaps and explicit expected practical outputs are inconsistent. Add these where they improve teaching rather than forcing identical boilerplate into every lesson.
4. **Assessment rubrics:** current practical checklists are useful completion checks but are not full performance-level rubrics. Where practical assessment needs grading, define observable criteria and levels (for example: not yet demonstrated / developing / competent) with clear evidence.
5. **Source discipline:** technical, legal, safety and curriculum claims need source notes. The public transcription remains a secondary aid; exact curriculum wording must be checked against the full official PDF.
6. **Resource equivalence:** paper/simulation alternatives are useful for access, but must not be reported as proof of a physical LAN, trained AI model, database implementation or assembled robot where the curriculum outcome requires the real practical.
7. **Legacy-topic mapping:** retain all existing topic IDs and titles, but show learners and teachers which content is a foundation, which directly maps to a revised competency, and which is enrichment. Do not imply that the legacy term/week order is the official revised sequence.

### Provisional status after this audit

- Internal inspection of all 24 authored SS1 records: **completed for this review pass**.
- Independent qualified-teacher review: **pending**.
- Official NERDC PDF line-by-line verification: **pending**.
- Corrections arising from this audit: **not yet applied**.
- App runtime, real-device, accessibility, install/upgrade and offline verification: **pending**.
- Merge to `main` and deployment: **not authorised and not performed**.

The audit is a prioritised correction register, not a declaration of compliance. Preserve the existing application, six reference lessons, 70-entry curriculum map, topic IDs and navigation while applying approved content corrections on this improvement branch.


## Follow-up content corrections — 23 November 2026

Applied to the existing SS1 lesson records on the improvement branch, preserving all 24 topic IDs and the original curriculum map:

- **Software / computational thinking / Python (ss1-1-6):** removed the later appended duplicate block. The original lesson record remains the single source for the topic. Added a complete arithmetic Python example with expected output, a selection example, loop illustration and clearer debugging/testing guidance.
- **Number systems (ss1-1-3):** added worked decimal-to-octal and decimal-to-hexadecimal conversions with place-value checks. Replaced the practical's assumed converter dependency with paper-based repeated-division exercises.
- **Data representation (ss1-1-10):** added worked pixel-count/24-bit image-size and mono-audio sample-rate/bit-depth examples. File overhead is explicitly excluded from the simple size calculations.
- **Web development (ss1-2-2):** added a complete small HTML page and linked CSS example, including mobile viewport metadata and a placeholder link that must be replaced with a teacher-approved destination or removed.
- **Data collection and spreadsheets (ss1-3-2):** added a small fictional dataset and a chart-building example.
- **Data interpretation (ss1-3-3):** added the even-sized median example and spreadsheet formulas for mean, median, mode and range, with a note that function names can vary.
- **Database management (ss1-3-6, ss1-3-8):** added examples of relational DBMS and NoSQL software, distinguished a database from a DBMS, and clarified that a spreadsheet/paper fallback is a preparation simulation—not a completed relational DBMS practical.

### Verification of this correction pass

- The duplicate appended Software/Python extension block is absent.
- The ss1-1-6 lesson has one main assignment and retains its original lesson ID.
- All 24 existing SS1 topic records remain present.
- Targeted content-presence checks confirm the new Python, number-system, data-representation, HTML/CSS, spreadsheet and DBMS examples are present.
- The number-system practical no longer depends on an assumed built-in converter.
- No curriculum-map or navigation changes were made.

These checks establish source-level content presence and preservation only. A JavaScript runtime parse/build, browser interaction test, learner-facing rendering check, accessibility test, qualified-teacher review and official-PDF comparison have not been performed as part of this correction pass. The added code examples must still be run in a teacher-approved environment before they are treated as classroom-tested.

### Remaining priority queue

1. Review hardware/OS/history explanations and add source-backed worked examples where needed.
2. Strengthen the remaining practical outcomes and performance rubrics, especially network build/troubleshooting, AI classifier testing, robotics assembly and digital-story production.
3. Reduce overlap across online safety, cybersecurity, privacy and social-media lessons while preserving each outcome.
4. Complete the independent teacher review and line-by-line comparison against the full official NERDC PDF.
5. Complete real-device, accessibility, installation, service-worker upgrade and offline acceptance tests.

**Status:** content corrections applied for the first high-priority gaps; the overall lesson-quality review remains open. No compliance certificate, merge or deployment is implied.


## Follow-up lesson and assessment corrections — 23 November 2026

Applied on `improve/ss1-nerdc-alignment`; existing topic IDs, lesson navigation and original curriculum map remain unchanged.

### Hardware, operating systems and history

- **History and evolution (`ss1-1-2`):** added selected milestone dates for the 1946 public unveiling of ENIAC, the 1971 Intel 4004 microprocessor and the 1981 IBM Personal Computer. Added a note that timelines are selective and computer-generation labels are not a universal, rigid chronology, plus a source-checking activity.
- **Hardware (`ss1-1-4`):** clarified the CPU's role without treating it as the entire system unit; refined the introductory control-unit/ALU explanation; clarified that firmware can be stored in updateable flash memory; added a worked keyboard-to-CPU/RAM-to-monitor-and-storage trace.
- **Operating systems (`ss1-1-8`):** added a browser/word-processor/printer scenario that makes processor scheduling, memory management, device services and a sensible low-resource response concrete.
- **Maintenance (`ss1-1-9`):** made cleaning advice explicitly model-specific and directs learners to manufacturer instructions rather than assuming one cloth or product is suitable for every device.

### Practical performance rubrics

Four practicals now include observable three-level performance descriptors in addition to their existing learner checklist:
- `ss1-2-1` network plan, safe setup, connectivity test and evidence/explanation.
- `ss1-3-4` audience/message, story structure, media/accessibility and presentation quality.
- `ss1-3-9` training/test separation, prediction record, accuracy calculation and evaluation/responsibility.
- `ss1-3-10` component plan, differential-drive explanation, honest build/simulation evidence, safety and test cycle.

The practical view renders these lesson-specific rubrics as a semantic table. Existing checklists remain available; rubrics are additive and appear only on lessons that define them.

### Reduced overlap across online safety lessons

- `ss1-2-6` Staying Safe Online: learner safety, unsafe relationships/coercion, trusted-adult help, safe tagging and class communication.
- `ss1-2-8` Cybersecurity II: technical/account safeguards, authentication, updates, security tools, backups and incident recovery.
- `ss1-2-9` Data Privacy and Digital Ethics: personal information, collection, use, consent, digital footprint and respectful handling.
- `ss1-2-10` Social Media Technologies: platform features, responsible publishing, source/context checking, misinformation and wellbeing.

Overlapping examples remain where they provide necessary context, but each lesson points learners to the lesson that teaches the detailed procedure.

### History source notes

- Computer History Museum, 1946 ENIAC entry: https://www.computerhistory.org/timeline/1946/
- Computer History Museum, 1971 Intel 4004 entry: https://www.computerhistory.org/timeline/1971/
- Computer History Museum, 1981 IBM Personal Computer entry: https://www.computerhistory.org/timeline/1981/

These sources support selected historical milestones; they do not establish full coverage of computing history or NERDC curriculum compliance.

### Verification limits

Source-level validation completed: both `data.js` and `app.js` pass JavaScript syntax compilation; evaluating `data.js` produces all 24 SS1 lesson records; the four new rubrics each contain four criteria with three performance levels; and the renderer contains the semantic rubric table template. This does not execute the browser UI. Practical-table rendering, mobile/desktop layout, keyboard navigation and screen-reader reading order still require real-browser verification. No teacher sign-off, official-PDF line-by-line verification, merge or deployment is implied.
