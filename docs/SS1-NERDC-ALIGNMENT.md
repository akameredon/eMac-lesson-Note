# SS1 Digital Technologies — NERDC Alignment Register

**Purpose:** improve the existing eMac Lesson Note without replacing its architecture, visual identity, lesson experience, or existing content.

**Status:** curriculum audit baseline. This document does not claim that the current app is fully NERDC-aligned.

## Authoritative curriculum reference

- Nigerian Educational Research and Development Council (NERDC), *New Revised Senior Secondary School Curriculum: Digital Technologies, SSS 1*, October 2025.
- Official NERDC curriculum landing page: https://www.nerdc.gov.ng/content_manager/new_senior_curriculum_home.html
- Official SSS1 curriculum viewer: https://lmis.nerdcportals.com.ng/sss_1/necurrdc/viewer.html?file=4.pdf
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

The initial repository had authored content only for `ss1-1-1` (Introduction) and `ss1-1-3` (Number Systems). The first content improvement on this branch adds full notes, practice questions and practical activities to the original six-lesson reference sequence. A second content pass now adds the remaining revised SS1 competency areas to the closest existing topic slots, as mapped above.

- `ss1-1-1` — What is digital technology? (expanded).
- `ss1-1-4` — Parts of a computer (hardware), including input/output devices and storage devices.
- `ss1-1-6` — Software.
- `ss1-2-6` — Staying safe online.

This preserves existing topic IDs and the existing `n`, `q`, and `p` data shape used by the current app. The original Number Systems lesson remains intact. The remaining SS1 topics still need teacher review and any further content required after checking the complete official curriculum. SS2 and SS3 remain a separate future content workstream.

The six reference lesson titles are retained in the lesson notes. Hardware, input/output and storage are grouped under the existing Computer Hardware topic because the current app's topic model has no separate topic IDs for those sublessons. The remaining revised SS1 competency areas listed in the coverage matrix now have authored first-pass content in existing topic slots. The old 70-entry outline should still be treated as legacy planning material until each entry is checked against the revised curriculum—not silently assumed to be compliant.

**Automated content validation on the improvement branch:** all 70 existing curriculum-map entries remain present; 13 SS1 topic records now contain lesson content; the six reference lesson titles are present; each of the 13 covered topic records contains notes, questions, practical steps and marking checklist items; multiple-choice answer indexes and model-answer fields pass structural checks. The app JavaScript parses successfully. These are code/data checks, not a substitute for teacher review or browser testing.

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

**First-pass content authoring is complete on the improvement branch for the six reference lessons and the remaining revised SS1 competency areas listed in the mapping table.** The existing 70-topic map and app navigation are preserved. The service-worker cache identifier has been advanced from `emac-v1` to `emac-v4` so installed copies can fetch the revised lesson data and subsequent progress-reporting/licence-feedback code changes.

This does not mean the SS1 release is complete. Teacher review and browser-level testing remain open.

### Additional QA corrections on this branch

- Teacher progress exports now use a versioned format that records correct answers, attempted objective questions and the available question count separately. New teacher reports calculate accuracy from attempted questions, rather than treating every unattempted question in the bank as incorrect.
- Existing unversioned progress codes remain readable and are explicitly labelled as legacy scores because their original export format did not preserve an attempted-question count.
- Teacher CSV headings now match the on-screen report columns.
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
