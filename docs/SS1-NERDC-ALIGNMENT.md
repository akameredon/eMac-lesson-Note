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

## Existing app content and curriculum gaps

The initial repository had authored content only for `ss1-1-1` (Introduction) and `ss1-1-3` (Number Systems). The first content improvement on this branch now adds full notes, practice questions and practical activities to:

- `ss1-1-1` — What is digital technology? (expanded).
- `ss1-1-4` — Parts of a computer (hardware), including input/output devices and storage devices.
- `ss1-1-6` — Software.
- `ss1-2-6` — Staying safe online.

This preserves existing topic IDs and the existing `n`, `q`, and `p` data shape used by the current app. The original Number Systems lesson remains intact. The other 66 curriculum-map entries still need authored content or an explicit decision about their relationship to the revised curriculum.

The six reference lesson titles are retained in the lesson notes. Hardware, input/output and storage are grouped under the existing Computer Hardware topic because the current app's topic model has no separate topic IDs for those sublessons. The remaining revised NERDC competencies must also be covered in a curriculum-aligned SS1 pathway. The old 70-entry outline should be treated as legacy planning material until each entry is checked against the revised curriculum—not silently assumed to be compliant.

**First-pass automated content validation on the improvement branch:** 70 existing curriculum-map entries remain present; the four updated lesson records each contain measurable learning goals, key vocabulary, notes, practice questions, practical steps and marking checklist items; all six reference lesson titles are present and all multiple-choice answer indexes are valid. This is a data/schema check, not a substitute for teacher review or browser testing.

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

## First implementation sequence

1. Complete and review the six reference lessons, preserving their titles and sequence.
2. Add explicit curriculum links to each lesson and mark foundational versus direct coverage.
3. Build lesson content for the remaining revised SS1 competencies.
4. Review questions, practicals, answer explanations and marking criteria.
5. Verify the lesson experience in the existing app, including mobile layout, Listen, progress saving and offline behaviour.
6. Only after content and tests pass, consider merging the improvement branch.
