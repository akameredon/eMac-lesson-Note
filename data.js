const P=s=>s.trim().split("\n").map(l=>{const a=l.split("|");return[+a[0],a[1],a[2]]});
const CUR={ss1:{
1:P(`1|Introduction to Digital Technologies|Meaning, scope, relevance in modern society
2|History & Evolution of Digital Technologies|From abacus to AI; generations of computers
3|Number Systems|Binary, decimal, octal, hexadecimal and conversions
4|Computer Hardware|Input/output devices, storage, system vs peripheral devices
6|Computer Software|System software, application software, utility programs
8|Operating Systems|Functions, types, examples
9|Computer Maintenance & Safety|Preventive care, health & safety measures
10|Data Representation|Bits, bytes, ASCII, Unicode, images, sound`),
2:P(`1|Computer Networks|LAN, WAN, MAN; components of networks
2|Internet Technologies|Internet services, search engines, browsers
3|Email & Online Communication|Email etiquette, instant messaging, conferencing
4|Digital Storage & Cloud Computing|Types of storage, advantages of cloud, data backup
6|Cybersecurity I|Meaning, importance, threats (malware, phishing, hacking)
8|Cybersecurity II|Protection methods: antivirus, firewalls, strong passwords
9|Data Privacy & Digital Ethics|Responsible use, cyberbullying, data protection laws
10|Social Media Technologies|Benefits, risks, responsible digital citizenship`),
3:P(`1|Word Processing Applications|Microsoft Word/Google Docs: features, formatting
2|Spreadsheet Applications I|Introduction, basic formulas, cell referencing
3|Spreadsheet Applications II|Functions, charts, data analysis
4|Presentation Software|PowerPoint/Google Slides: slide creation, animations
6|Database Introduction|Concept of database, DBMS, tables, records, fields
8|Practical Database Management|Creating simple databases, queries, reports
9|Emerging Technologies I|Artificial Intelligence, Internet of Things
10|Emerging Technologies II|Robotics, Virtual Reality, Augmented Reality`)},
ss2:{
1:P(`1|Review of SS1 Work|Quick revision of digital foundations
2|Advanced Word Processing|Mail merge, macros, templates
3|Advanced Spreadsheet I|Pivot tables, advanced formulas
4|Advanced Spreadsheet II|Financial models, scenario analysis
6|Advanced Presentation Tools|Multimedia integration, professional designs
8|Web Design I|Introduction to HTML, CSS
9|Web Design II|Creating simple websites
10|Web Publishing & Hosting|Domains, hosting, publishing process`),
2:P(`1|Computer Programming I|Introduction to algorithms, flowcharts
2|Computer Programming II|Introduction to Python/JavaScript
3|Programming Basics|Variables, data types, operators
4|Control Structures|If-else, loops, functions
6|Data Science Basics|Data collection, storage, cleaning
8|Big Data & Analytics|Meaning, applications, tools
9|Artificial Intelligence|Applications in education, health, business
10|Machine Learning Basics|Concept, simple applications`),
3:P(`1|Mobile Application Development I|Introduction to mobile apps
2|Mobile Application Development II|Creating simple Android/iOS apps
3|Cloud Computing II|SaaS, PaaS, IaaS
4|Blockchain Technology|Concept, cryptocurrency, uses beyond finance
6|Cybersecurity III|Ethical hacking, penetration testing
8|Cyber Laws & Digital Rights|Nigerian cybercrime act, global cyber laws
9|Digital Entrepreneurship|E-commerce, freelancing, online business
10|Project Work|Students develop mini ICT projects`)},
ss3:{
1:P(`1|Review of SS2 Work|Key concepts revision
2|Advanced Programming I|Functions, arrays/lists
3|Advanced Programming II|Object-Oriented Programming basics
4|Software Development Life Cycle (SDLC)|Phases, models (waterfall, agile)
6|Networking II|IP addressing, subnetting, protocols
8|Cloud & Virtualization|Virtual machines, remote servers
9|Internet of Things (IoT) Applications|Smart homes, smart cities
10|Data Protection & Backup Systems|Disaster recovery, redundancy`),
2:P(`1|Advanced Web Design|JavaScript interactivity, responsive design
2|Advanced Database Management|SQL basics, queries, reports
3|Networking III|Network security, VPNs
4|Digital Project Management|Tools (Trello, MS Project), teamwork
6|Emerging Tech III|Quantum computing, nanotechnology
8|Revision of SSCE Past Questions I|Theory + practical
9|Revision of SSCE Past Questions II|Case studies, applied ICT
10|Mock Exam Prep|Mock exam preparation`),
3:P(`1|Comprehensive Revision of SS1–SS3|Overview of major areas
2|Past Question Drills (WAEC/NECO)|Theory, objective
3|Practical Project I|Building website/app/database
4|Practical Project II|Cybersecurity simulation, IoT demo
6|Mock Examination|Mock exam
8|SSCE Preparation|Exam-focused review`)}};
const C={};
C["ss1-1-1"]={free:1,
n:[
["What is digital technology?","Digital technology is the use of electronic devices and systems to create, collect, store, process and share information. Most digital computers represent information using two digits: 0 and 1. Each 0 or 1 is called a bit."],
["Digital and analogue information","Analogue information can change continuously, like the position of a clock hand or the sound wave from a microphone. Digital information is represented as separate values. A digital clock shows separate number changes. Many devices convert real-world sound, light or movement into digital data so a computer can work with it."],
["The parts of a digital system","A digital system usually brings together devices (hardware), instructions (software), information (data), people and a way to communicate or connect. These parts work together. A phone alone is hardware; the apps are software; the photographs and messages are data."],
["Digital technology around us","Examples include a POS terminal processing a payment, a phone sending a message, a school computer preparing a result sheet, a hospital storing patient records and a farmer using a digital weather service. A device is useful when people use it to solve a real problem."],
["Why digital technology matters","Digital tools can make communication faster, help people organise information, support learning, improve record keeping and make some services easier to access. They also bring responsibilities: protect private information, check information before sharing it and use devices safely."],
["Curriculum connection","This is a foundation lesson. It prepares you to study the practical digital competencies in the revised SS1 curriculum. It is not presented as a separate named NERDC competency in the October 2025 SS1 curriculum."]
],
q:[
{t:"NERDC practice",q:"Which statement best describes digital technology?",o:["Using electronic systems to create, process, store or share information","Using only paper to record information","Using tools that cannot process information","Using only machines that work without instructions"],a:0,e:"Digital technology uses electronic devices and systems to work with information."},
{t:"NERDC practice",q:"Which pair correctly identifies hardware and software?",o:["Phone and messaging app","Photograph and message","Electricity and desk","Keyboard and notebook"],a:0,e:"The phone is a physical device (hardware); the messaging app is a program (software)."},
{t:"NERDC practice",q:"Which is an example of digital technology used in commerce in Nigeria?",o:["A POS terminal processing a payment","A wooden ruler","A manual broom","A paper envelope by itself"],a:0,e:"A POS terminal electronically processes payment information."},
{t:"WAEC-style practice",q:"Explain one difference between analogue and digital information.",e:"Analogue information can vary continuously, while digital information is represented using separate values, commonly binary digits 0 and 1."},
{t:"NERDC practice",q:"State three parts that work together in a digital system.",e:"Any three of: hardware/devices, software/instructions, data/information, people and communication/connectivity."}
],
p:{
s:["With a partner, list five digital devices or services used in your home, school or community.","For each example, identify the device, the software (if any), the information being handled and the problem it helps solve.","Choose one example and draw a simple flow: information enters → device/software processes it → result is stored or shared.","Explain one safe and responsible way to use the example you chose."],
c:["Gave five relevant examples","Correctly identified hardware and software where present","Explained what information is handled","Showed a sensible input/process/output or sharing flow","Included one safe-use practice"]
}};
C["ss1-1-3"]={free:1,n:[["Number systems","A number system is a way of writing numbers with a set of digits. The base tells how many digits it uses."],["The four systems","Decimal (base 10) uses 0 to 9. Binary (base 2) uses 0 and 1. Octal (base 8) uses 0 to 7. Hexadecimal (base 16) uses 0 to 9 and A to F, where A is 10 and F is 15."],["Binary to decimal","Multiply each digit by its place value (… 8, 4, 2, 1) and add. Example: 1011 = 8 + 0 + 2 + 1 = 11."],["Decimal to binary","Divide by 2 again and again. Write the remainders from last to first. Example: 25 gives 11001."]],
q:[{t:"JAMB",q:"Convert 1011 (base 2) to decimal.",o:["9","10","11","13"],a:2,e:"8 + 0 + 2 + 1 = 11."},
{t:"WAEC",q:"Which number system uses the digits 0 to 7 only?",o:["Binary","Octal","Decimal","Hexadecimal"],a:1,e:"Octal is base 8, so it uses 0 to 7."},
{t:"JAMB",q:"The binary equivalent of decimal 25 is…",o:["10011","11001","11010","10101"],a:1,e:"16 + 8 + 1 = 25, so the binary is 11001."},
{t:"PUTME",q:"What is the decimal value of hexadecimal F?",o:["10","14","15","16"],a:2,e:"A = 10, B = 11, C = 12, D = 13, E = 14, F = 15."},
{t:"WAEC",q:"Convert 13 (base 10) to binary. Show your working.",e:"13 ÷ 2 = 6 remainder 1; 6 ÷ 2 = 3 remainder 0; 3 ÷ 2 = 1 remainder 1; 1 ÷ 2 = 0 remainder 1. Read the remainders upward: 1101."}],
p:{s:["Use the converter below.","Type 25 and press Convert. Check that the binary is 11001.","Try 13, 40 and 255. Write the binary, octal and hex answers.","Check one binary answer by adding place values."],c:["Converted at least three numbers","Checked binary by adding place values","Wrote octal and hex answers too"],t:1}};

C["ss1-1-4"]={
n:[
["Parts of a computer (hardware)","Computer hardware means the physical parts of a computer that you can see or touch. Examples include the system unit, monitor, keyboard, mouse, speakers, printer and storage drive. Hardware needs software instructions to perform useful work."],
["The main jobs inside a computer","A computer system receives input, processes information, produces output and stores information. The CPU (central processing unit) carries out instructions. The control unit coordinates activities; the arithmetic and logic unit performs calculations and comparisons. The motherboard connects important components."],
["Memory: RAM and ROM","RAM is temporary working memory. It holds information and instructions that the computer is using; its contents are normally lost when power is switched off. ROM stores essential instructions used to start or control a device and is designed to retain its contents without normal power. Do not confuse memory with long-term storage."],
["Input and output devices","An input device sends data or instructions into a computer. Examples include a keyboard, mouse, microphone, scanner, webcam and barcode reader. An output device presents results from a computer. Examples include a monitor, printer, projector and speakers. Some devices do both jobs: a touchscreen displays information and detects touch."],
["Storage devices","Storage keeps files and information for later use. A hard disk drive (HDD) stores data on rotating magnetic disks. A solid-state drive (SSD) uses flash memory and has no moving disk. USB flash drives and memory cards are removable flash storage. Optical discs use laser-readable surfaces. Cloud storage keeps files on remote computers reached through a network; it is not a physical device in your hand."],
["Choosing and caring for storage","Storage capacity is commonly measured in bytes, kilobytes, megabytes, gigabytes and terabytes. Choose storage based on capacity, speed, portability, cost and reliability. Keep backup copies of important work, protect devices from heat, liquid and impact, and safely eject removable drives before unplugging them when the device requires it."],
["Curriculum connection","These are foundation lessons that prepare you to identify network components, network hardware and transmission media, and to work with data and software. The revised SS1 curriculum does not list general computer hardware or input/output devices as separate named competencies, so this content is clearly labelled as foundational."]
],
q:[
{t:"NERDC practice",q:"Which component is commonly described as the computer's main processor?",o:["CPU","Monitor","Keyboard","Printer"],a:0,e:"The CPU executes instructions and coordinates processing."},
{t:"NERDC practice",q:"Which device is mainly used to enter text into a computer?",o:["Keyboard","Speaker","Projector","Monitor"],a:0,e:"A keyboard is an input device used to enter text and commands."},
{t:"NERDC practice",q:"Which statement about a touchscreen is correct?",o:["It can act as both input and output","It is only a storage device","It is only an output device","It is part of the CPU"],a:0,e:"It displays information (output) and detects touch (input)."},
{t:"NERDC practice",q:"Which storage device uses flash memory and has no moving disk?",o:["SSD","HDD","DVD","Floppy disk"],a:0,e:"A solid-state drive stores data in flash memory and has no spinning platters."},
{t:"WAEC-style practice",q:"State two differences between RAM and secondary storage.",e:"RAM is temporary working memory and is normally cleared when power is removed; secondary storage keeps files for later use. RAM is used directly as active working memory; secondary storage includes devices such as SSDs, HDDs and flash drives."},
{t:"NERDC practice",q:"Give one example each of an input device, an output device and a device that can perform both functions.",e:"Input: keyboard, mouse, microphone or scanner. Output: monitor, printer, projector or speakers. Both: touchscreen or multifunction printer (depending on its functions)."}
],
p:{
s:["Look at a computer or a clear picture of one. Identify the system unit, monitor, keyboard, mouse and any connected devices.","Sort at least eight devices into input, output, storage or processing. Some devices may fit more than one role; explain why.","Trace what happens when a learner types a sentence, sees it on the screen and saves the file to a USB flash drive.","Compare an HDD, SSD, USB flash drive and memory card. Record one suitable use and one care tip for each.","Demonstrate safe removal of a removable drive using the computer's normal eject option. Do not open a power supply or dismantle equipment."],
c:["Identified the main visible computer parts","Classified devices correctly and explained any dual-purpose device","Explained the input-process-output-storage sequence","Compared at least three storage options accurately","Included safe handling and backup practices"]
}}; 
C["ss1-1-6"]={
n:[
["Software","Software is a set of programs and instructions that tells a computer or digital device what to do. Hardware is the physical equipment; software gives the equipment instructions. A computer needs both to perform useful tasks."],
["System software","System software manages the computer and provides a platform for other programs. An operating system is a major example. Windows, macOS, Linux, Android and iOS are operating systems. They help manage files, memory, devices, applications and the user interface."],
["Application software","Application software helps a user complete a task. Examples include word processors for writing, spreadsheets for calculations, presentation tools for slides, web browsers for viewing websites, media players and drawing applications. A mobile banking app is also application software."],
["Utility software and firmware","Utility software helps maintain, protect or manage a device. Examples include backup tools, storage-management tools and security software. Firmware is software stored in a device that helps control its basic operation, such as the built-in instructions in a router."],
["Choosing and using software responsibly","Use software that meets the task and works with your device. Install it from a trusted source, check permissions, keep it updated and follow licence terms. Do not install unknown files or use another person's account without permission. Updates can fix errors and security weaknesses."],
["Curriculum connection","Software knowledge supports the revised SS1 competencies that require learners to use software for web development, digital stories, data visualisation, databases, AI model training and Python programming. This is a foundation lesson rather than a separate named competency."]
],
q:[
{t:"NERDC practice",q:"What is software?",o:["Programs and instructions used by a digital device","The physical parts of a computer","Only the computer screen","Electricity supplied to a computer"],a:0,e:"Software is the programs and instructions that tell hardware what to do."},
{t:"NERDC practice",q:"Which of these is an operating system?",o:["Android","A keyboard","A printer","A flash drive"],a:0,e:"Android is an operating system used on many mobile devices."},
{t:"NERDC practice",q:"Which type of software is mainly used to prepare a spreadsheet?",o:["Application software","Firmware only","A power supply","A network cable"],a:0,e:"A spreadsheet application helps users organise data and perform calculations."},
{t:"NERDC practice",q:"Which is a sensible way to reduce the risk of installing harmful software?",o:["Install from a trusted source and check permissions","Open every attachment received","Disable all security updates","Share passwords with classmates"],a:0,e:"Trusted sources, careful permission checks and updates reduce software risks."},
{t:"WAEC-style practice",q:"Differentiate between system software and application software, giving one example of each.",e:"System software manages the computer and supports other programs; an operating system such as Android or Windows is an example. Application software helps a user perform a task; a word processor or spreadsheet is an example."}
],
p:{
s:["Identify the operating system on a computer or phone, with the teacher's permission.","List four applications used for learning, communication or creating content. State the task each one supports.","Sort these examples into system software, application software, utility software or firmware: Android, a spreadsheet app, a backup tool and router firmware.","Explain why software should be installed from trusted sources and kept updated."],
c:["Identified an operating system correctly","Named four applications and their purposes","Classified the software examples correctly","Explained one safe installation or update practice"]
}};
C["ss1-2-6"]={
n:[
["Staying safe online","Online safety means protecting yourself, your information, your device and other people when using the internet. Being connected is useful, but not every message, link, person, website or offer is trustworthy."],
["Recognising cyber threats","A phishing message tries to trick you into revealing information or opening a harmful link. Malware is software designed to harm, spy on or take control of a device. Other risks include impersonation, account theft, online scams, cyberbullying, harmful content and the careless sharing of private information."],
["Protecting accounts and devices","Use a long, unique password for each important account. Turn on multi-factor authentication when available. Never share a password, PIN or one-time password (OTP), even with someone claiming to be a bank, delivery company or support worker. Keep software updated, use a screen lock and back up important work."],
["Checking links, messages and information","Pause before clicking. Check the sender and the website address carefully. Be suspicious of urgent threats, unexpected prizes, requests for money, spelling tricks and messages asking for login details. Confirm unusual requests through a trusted contact method. Do not forward alarming claims until you have checked them."],
["Privacy and digital citizenship","Share only information that is necessary. Review privacy settings and ask permission before posting another person's photograph, work or contact details. Communicate respectfully, avoid bullying and report harmful behaviour. A responsible digital citizen thinks about safety, truth, respect and the effect of their actions."],
["Social media and online relationships","Social media can support learning and communication, but posts can be copied or shared beyond the intended audience. Use safe tagging, avoid revealing your school timetable, home address or live location, and do not accept pressure to send private images or money. Do not arrange to meet an online contact alone. If something feels unsafe, stop responding, block or report the account, save relevant evidence where safe, and speak to a trusted adult or teacher."],
["If something goes wrong","Do not retaliate or spread the harmful content. Stop communicating with the account, block and report it, change affected passwords from a trusted device and tell a trusted adult or the relevant school support person. If money or a financial account is involved, contact the bank through its official channel immediately. In an emergency, seek help from a responsible adult or appropriate local authority."],
["NERDC curriculum connection","This lesson directly supports the revised SS1 Online Safety competencies: identifying cyber threats and preventive actions; applying digital-citizenship rules; communicating responsibly on social media; and recognising safe and unsafe online relationships, including safe tagging."]
],
q:[
{t:"NERDC practice",q:"What is phishing?",o:["A trick used to make someone reveal information or open a harmful link","A method of cleaning a computer screen","A safe way to back up files","A type of printer"],a:0,e:"Phishing uses deceptive messages or websites to steal information or trick people into unsafe actions."},
{t:"NERDC practice",q:"A caller asks you to read out the OTP sent to your phone. What should you do?",o:["Keep it private and do not share it","Read it out if the caller sounds polite","Post it in your class group","Send it to a friend to check"],a:0,e:"An OTP is a security code. Do not share it with callers or message senders."},
{t:"NERDC practice",q:"Which action shows responsible digital citizenship?",o:["Ask permission before posting another person's photo","Forward every message immediately","Insult people who disagree with you","Share a classmate's phone number publicly"],a:0,e:"Respecting other people's privacy and consent is part of responsible digital citizenship."},
{t:"NERDC practice",q:"What is a safe response to repeated cyberbullying?",o:["Save relevant evidence where safe, block/report and tell a trusted adult","Threaten the person back","Publish the person's private details","Keep it secret even if you feel unsafe"],a:0,e:"Do not retaliate. Preserve evidence safely, use platform reporting tools and seek trusted help."},
{t:"NERDC practice",q:"Which detail should you avoid sharing publicly with an unknown online contact?",o:["Your home address and live location","A general school subject you enjoy","A public educational website","A non-private science fact"],a:0,e:"Your home address and live location can expose you to physical safety risks."},
{t:"WAEC-style practice",q:"State four ways a learner can protect an online account.",e:"Any four: use a long unique password; enable multi-factor authentication; never share passwords, PINs or OTPs; avoid suspicious links; keep software updated; use a screen lock; sign out on shared devices; review account recovery details."}
],
p:{
s:["Read these situations: (a) a message says your bank account will close unless you send an OTP; (b) a classmate asks permission before posting a group photograph; (c) an unknown account asks for your home address. For each, identify the risk or responsible action.","Create a four-step checklist for checking a suspicious message before acting on it.","Write a short digital-citizenship pledge covering respect, privacy, truthfulness and safety.","Practise finding the block and report controls on a sample or teacher-approved platform. Do not contact or report a real person as part of the exercise.","Discuss who you would tell if you received threats, unwanted requests for private images or a suspicious financial message."],
c:["Identified the risk in each scenario","Never recommended sharing an OTP, password or PIN","Included privacy, consent and respectful communication","Identified appropriate block/report and trusted-help steps","Explained how to verify a suspicious message"]
}};
