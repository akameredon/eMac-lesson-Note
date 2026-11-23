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
["Learning goals","By the end of this lesson, you should be able to define digital technology, distinguish digital from analogue information, identify the main parts of a digital system and give examples of useful and responsible digital technology in your community."],
["Key words","Digital: information represented using separate values; analogue: information that varies continuously; data: facts or information being handled; hardware: physical equipment; software: programs and instructions."],
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
["Learning goals","By the end of these connected lessons, you should be able to define hardware, identify common computer parts, explain the basic jobs of the CPU, RAM and ROM, classify input/output devices and compare common storage devices."],
["Key words","Hardware: physical equipment; input: data sent into a system; output: result produced by a system; memory: working space used by a computer; storage: keeping files for later use; peripheral: a device connected to a computer."],
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
["Learning goals","By the end of this lesson, you should be able to define software, distinguish system software from application software, identify utility software and firmware, and describe safe ways to choose, install and update programs."],
["Key words","Program: instructions a device can follow; operating system: software that manages a device; application: software for a user task; utility: software for maintenance or protection; firmware: built-in software that controls a device."],
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
["Learning goals","By the end of this lesson, you should be able to recognise common cyber threats, explain ways to protect accounts and devices, apply privacy and digital-citizenship rules, and describe safe responses to harmful or suspicious online activity."],
["Key words","Phishing: a deceptive attempt to steal information; malware: harmful software; privacy: control over personal information; digital citizenship: responsible participation online; OTP: one-time password or security code."],
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

/* Revised SS1 NERDC competency coverage — mapped into existing topic IDs.
   Original curriculum entries and app navigation are intentionally preserved. */
C["ss1-2-1"]={
n:[
["Learning goals","By the end of this lesson, you should be able to explain a computer network, identify common network types and components, compare topologies and transmission media, draw a simple network plan and describe how a small local area network is connected."],
["Key words","Network: connected devices that share information or resources; LAN: local area network; WAN: wide area network; topology: the arrangement of network connections; router: a device that directs traffic between networks; switch: a device that connects devices within a LAN; bandwidth: the capacity of a connection."],
["What is a computer network?","A computer network is a group of connected computers and other devices that communicate and share information or resources. A school network may allow computers to share a printer and access learning materials. A network can be wired, wireless or a mixture of both."],
["Types of networks","A LAN connects devices within a limited area such as a home, office, laboratory or school. A MAN connects networks across a town or city. A WAN connects networks over large geographical areas; the internet is the best-known example of a global network of networks. The labels describe coverage, not how good or fast a network must be."],
["Network components","A network interface allows a device to connect. A router forwards data between networks. A switch connects multiple wired devices within a LAN. A wireless access point lets wireless devices connect to a network. A modem connects a network to an internet service over the provider's access technology. Ethernet cables and fibre-optic cables carry data; Wi-Fi uses radio waves."],
["Network topologies","A star topology connects devices to a central switch or access point. A bus topology shares one main cable. A ring topology connects devices in a loop. A mesh topology provides multiple paths between devices. Each arrangement has advantages and limitations in cost, reliability, expansion and troubleshooting."],
["Transmission media and safe setup","Twisted-pair Ethernet cable is common in LANs. Fibre-optic cable carries light and supports high-capacity links over distance. Wireless networks use radio signals and can be affected by distance, walls and interference. Use a strong router password, current security settings and permission from the network owner. Never reset or reconfigure a school router without the teacher's permission."],
["Troubleshooting a simple connection","Check that the device has power, Wi-Fi is enabled or the cable is firmly connected, airplane mode is off and the correct network is selected. Check whether other devices can connect. Report persistent problems to the network administrator rather than changing settings you do not understand."],
["NERDC curriculum connection","This lesson supports the revised SS1 Communication Systems competencies: explain networks and their importance; identify components and types; explain topologies and transmission media; draw a topology; build a small LAN under supervision; and troubleshoot simple connectivity problems."]
],
q:[
{t:"NERDC practice",q:"A network connecting computers in one school laboratory is most likely a:",o:["LAN","WAN","MAN","PAN"],a:0,e:"A LAN covers a limited area such as a room, building or school site."},
{t:"NERDC practice",q:"Which device commonly connects several wired computers within a local network?",o:["Switch","Projector","Scanner","Speaker"],a:0,e:"A network switch connects devices within a LAN and forwards frames to the appropriate port."},
{t:"NERDC practice",q:"In a star topology, devices connect to:",o:["A central device such as a switch","One shared ring only","A single unbroken bus cable only","No central connection"],a:0,e:"A star topology uses a central connection point."},
{t:"NERDC practice",q:"Which medium carries data as pulses of light?",o:["Fibre-optic cable","Copper twisted-pair cable","Wi-Fi radio only","Paper tape"],a:0,e:"Fibre-optic cables transmit data using light."},
{t:"WAEC-style practice",q:"State two differences between a LAN and a WAN.",e:"A LAN covers a limited area such as a building or school; a WAN connects networks across large geographical areas. A LAN is often managed by one organisation, while a WAN may depend on multiple service providers and links."},
{t:"NERDC practice",q:"Give two safe first checks when a device cannot connect to Wi-Fi.",e:"Check that Wi-Fi is enabled and the correct network is selected; check power and whether other devices can connect; move within range; report persistent faults to the network administrator."}
],
p:{
s:["Draw a simple star network for a school computer room with four computers, one switch and one router. Label every connection.","Compare star and bus topologies using one advantage and one limitation for each.","Identify, from available equipment or teacher-provided pictures, a router, switch, access point, Ethernet cable and fibre-optic cable.","With teacher permission, connect two devices to a demonstration LAN or inspect a prepared network. Do not change router administration settings.","Use a troubleshooting checklist to investigate a simulated connection problem and record the steps taken."],
c:["Explained what a network is and gave a relevant example","Correctly classified LAN, MAN and WAN","Identified common network devices and their functions","Drew and labelled a sensible topology","Described safe setup and at least two troubleshooting checks"]
}};
C["ss1-2-2"]={
n:[
["Learning goals","By the end of this lesson, you should be able to explain web development, identify the roles of HTML and CSS, recognise common website types and components, describe basic design principles and create a simple static webpage with CSS."],
["Key words","Website: a collection of related webpages; webpage: one document viewed in a browser; HTML: the language used to structure webpage content; CSS: rules used to style webpage content; browser: software that displays webpages; static page: a page whose content is delivered as prepared files rather than generated for each visitor."],
["What is web development?","Web development is the process of planning, creating, testing and maintaining websites or web applications. A website can share school information, advertise a small business, publish news or provide learning resources. A good website helps visitors find accurate information and complete tasks."],
["Core web technologies","HTML describes the structure and meaning of content, such as headings, paragraphs, links, images and lists. CSS controls presentation such as colour, spacing, typography and layout. JavaScript can add behaviour and interaction; this lesson focuses on HTML structure and CSS styling."],
["Website components and types","A website may contain a header, navigation menu, main content, images, links, forms and footer. Common types include informational websites, blogs, portfolios, school websites, online shops and web applications. Choose a type based on the purpose and audience."],
["Good website design","Make the purpose clear. Use readable text, consistent headings, meaningful links, useful images and simple navigation. Make pages work on small screens. Add alternative text to meaningful images, keep colour contrast readable and do not use colour alone to communicate important information. Ask permission before publishing another person's work or photograph."],
["HTML structure","A basic HTML page has a document declaration, an html element, a head section containing page information and a body containing visible content. Headings should follow a logical order. Use paragraphs for text and descriptive link text so visitors understand where a link leads."],
["CSS rules and selectors","A CSS rule contains a selector and declarations. For example, body { font-family: Arial, sans-serif; } selects the body and sets its font. A declaration has a property and a value. A class selector begins with a full stop, such as .note; an ID selector begins with #."],
["Ways to apply CSS","Inline CSS is written on an individual HTML element. Internal CSS is written inside a style element in the page head. External CSS is stored in a separate .css file and linked to the HTML page. External stylesheets are useful for keeping the design consistent across several pages."],
["NERDC curriculum connection","This lesson supports the revised SS1 Web Development and Management competencies: explain web development and its tools; identify website components and types; explain CSS; write CSS rules; compare CSS application methods; and create and style a static webpage."]
],
q:[
{t:"NERDC practice",q:"Which technology is mainly used to structure webpage content?",o:["HTML","CSS","A spreadsheet formula","A network router"],a:0,e:"HTML gives webpage content its structure and meaning."},
{t:"NERDC practice",q:"Which technology is mainly used to style a webpage?",o:["CSS","HTML only","Ethernet","SQL"],a:0,e:"CSS controls presentation such as colour, spacing, fonts and layout."},
{t:"NERDC practice",q:"In the CSS rule p { color: blue; }, what is p?",o:["The selector","The property value","The file name","The browser"],a:0,e:"The selector identifies which HTML elements the rule applies to."},
{t:"NERDC practice",q:"Which CSS method is most reusable across several webpages?",o:["External stylesheet","Inline style on one element","A screenshot of the design","A printed page"],a:0,e:"An external stylesheet can be linked to multiple pages for consistent styling."},
{t:"WAEC-style practice",q:"State two features of a well-designed website.",e:"Any two: clear purpose; readable text; consistent headings; simple navigation; meaningful links; mobile-friendly layout; accessible contrast; useful alternative text; accurate content."},
{t:"NERDC practice",q:"What is a static webpage?",o:["A page delivered as prepared content files","A page that must always use a database","A page that cannot contain links","A page that only works on a phone"],a:0,e:"A static page is delivered as prepared files; it can still contain links, images and CSS styling."}
],
p:{
s:["Create a folder named ss1-web-practice. Inside it, create index.html and style.css using a plain-text code editor.","In index.html, create a page with a title, one main heading, two paragraphs, a list and one descriptive link. Use semantic HTML elements.","Link style.css from the HTML head. Add CSS rules for the page font, heading colour, paragraph spacing and a readable content width.","Open the file in a browser. Resize the window to a phone-sized width and check that the content remains readable.","Add alternative text to a meaningful image if one is used. Ask a partner to test the navigation and explain whether the page purpose is clear."],
c:["Explained the roles of HTML and CSS correctly","Identified at least three website components and two website types","Created a valid basic HTML page","Applied at least three CSS declarations using correct syntax","Checked readability, navigation and image alternative text"]
}};
C["ss1-3-4"]={
n:[
["Learning goals","By the end of this lesson, you should be able to explain digital marketing, identify common digital advertising channels, describe basic brand elements, organise digital assets and create a short digital story or multimedia presentation for a clear audience."],
["Key words","Digital marketing: promoting a product, service or idea through digital channels; advertisement: a message intended to inform or persuade; brand: the identity and reputation associated with an organisation or product; logo: a visual identifier; digital asset: a file such as a logo, photograph, video or document used in communication."],
["Digital marketing and its importance","Digital marketing uses digital channels to reach and communicate with an audience. A local tailor may share examples of work on social media; a school may publish admission information on its website; a community organisation may send an email update. Marketing should describe an offer honestly and help the intended audience make an informed decision."],
["Channels and advertisement types","Common channels include websites, search engines, email and social media. Digital advertisements may be image ads, short videos, sponsored posts, search advertisements or email promotions. Each channel has strengths and limitations. Do not assume that a large number of views means an advertisement is effective."],
["Brand elements","A brand may use a name, logo, colour palette, typography, tone of voice and consistent message. A good brand identity helps people recognise an organisation. A logo should be clear at different sizes. Colours and words should be suitable for the audience and should not mislead people."],
["Organising digital assets","Keep approved logos, photographs, audio and documents in clearly named folders. Use descriptive file names and sensible versions, for example school-logo-primary.png or science-fair-poster-v2.png. Record the source and permission for images and music. Do not copy another person's work and present it as your own."],
["Digital storytelling","A digital story communicates an idea through a beginning, a middle and an ending. It may combine text, images, narration and sound. First identify the audience and purpose, then plan the message, choose relevant media, arrange the sequence and check that every element supports the story."],
["Multimedia presentation principles","Use one main idea per slide or screen. Keep text brief and readable. Use images that support the message, not decoration that distracts. Provide captions or a written summary when audio is important. Practise the presentation and check spelling, facts and image permissions before sharing."],
["NERDC curriculum connection","This lesson supports the revised SS1 Digital Entrepreneurship competencies: explain digital marketing and its importance; identify advertisement types and channels; describe brand elements; organise digital assets; and create digital stories and multimedia presentations using text, images and audio."]
],
q:[
{t:"NERDC practice",q:"Which is an example of a digital marketing channel?",o:["A business website","A wooden chair","A paper clip","A chalkboard with no digital connection"],a:0,e:"A website is a digital channel that can communicate information about a product or service."},
{t:"NERDC practice",q:"Which is a brand element?",o:["A consistent logo and colour palette","A random password shared publicly","An unrelated file name","A broken link"],a:0,e:"Logos and colours help create a recognisable and consistent brand identity."},
{t:"NERDC practice",q:"What should you check before using another person's photograph in an advertisement?",o:["Whether you have permission or a valid licence","Whether the image is colourful","Whether the file is large","Whether it has a short name"],a:0,e:"You must respect ownership, copyright and permission before publishing someone else's image."},
{t:"NERDC practice",q:"Which file name is easiest to identify later?",o:["science-fair-poster-v2.png","finalfinalnew.png","image001.png","stuff.png"],a:0,e:"Descriptive file names make digital assets easier to organise and retrieve."},
{t:"WAEC-style practice",q:"State three principles of an effective multimedia presentation.",e:"Any three: clear purpose and audience; one main idea per slide; readable text; relevant images; consistent design; accurate facts; captions or text alternatives; correct spelling; permission for media used."}
],
p:{
s:["Choose a school club, a small community service or a fictional student enterprise. Identify its audience and one honest message to communicate.","Create a simple brand sheet containing a name, a small logo or symbol, two colours and a short description of the brand's tone.","Plan a three-slide digital story: beginning (the need or problem), middle (the idea or action), ending (the result or next step).","Use text and suitable images to prepare the slides. Record the source and permission status of each media item.","Present the story to a partner. Ask whether the purpose and main message were clear, then improve one part using the feedback."],
c:["Identified an audience and clear purpose","Explained two digital marketing channels or advertisement types","Created consistent brand elements","Organised media files with descriptive names and source notes","Presented a clear beginning, middle and ending with readable content"]
}};
C["ss1-3-2"]={
n:[
["Learning goals","By the end of this lesson, you should be able to distinguish qualitative and quantitative data, identify structured and unstructured data, plan a simple data collection activity, enter data into a spreadsheet and select a suitable chart."],
["Key words","Data: recorded facts or observations; qualitative data: descriptive categories; quantitative data: values that can be counted or measured; structured data: information organised in a defined format; unstructured data: information without a fixed table structure; visualisation: presenting data visually to make patterns easier to see."],
["Types of data","Qualitative data describes qualities or categories, such as favourite school subject or type of transport. Quantitative data uses numbers, such as the number of books borrowed or minutes spent reading. Quantitative data can be discrete (a count) or continuous (a measurement). A number used as an identifier, such as a student admission number, is not automatically a measurement."],
["Structured and unstructured data","Structured data is organised in a predictable format, often rows and columns, such as a class attendance table. Unstructured data may include photographs, audio recordings, videos or free-form text. Some systems also use semi-structured formats that contain labels or tags without fitting a simple table."],
["Collecting data responsibly","Start with a question you want to answer. Decide what information is needed and how to collect it fairly. Ask permission where required, collect only what is necessary and avoid recording private details. Explain the purpose to participants and do not publish identifiable information about classmates."],
["Entering data in a spreadsheet","Use one clear heading for each column. Keep one observation or record in each row. Use a consistent format for dates and categories. Do not mix units in one column. Check for missing values, spelling differences and accidental duplicates before analysing the information."],
["Choosing a chart","A bar chart compares categories. A line chart shows change across an ordered sequence such as days or months. A pie chart can show parts of a whole when there are only a few categories and the values add to a meaningful total. Label the chart and axes so the reader understands what is being shown."],
["NERDC curriculum connection","This lesson supports the revised SS1 Data Science competencies: distinguish data types and structures; collect data about the learner's environment; use software to create suitable graphical representations; and identify trends and patterns."]
],
q:[
{t:"NERDC practice",q:"The number of books borrowed by each student is what type of data?",o:["Quantitative","Qualitative","Unstructured image data","A brand name"],a:0,e:"A number of books is a count, so it is quantitative data."},
{t:"NERDC practice",q:"A class attendance table with one student per row is an example of:",o:["Structured data","Unstructured video","An audio recording","A network topology"],a:0,e:"The information is organised in a predictable row-and-column structure."},
{t:"NERDC practice",q:"Which chart is usually suitable for comparing the number of learners in different clubs?",o:["Bar chart","A decorative photograph","A network diagram","A flowchart"],a:0,e:"A bar chart makes category counts easy to compare."},
{t:"NERDC practice",q:"What should you do before collecting information about classmates?",o:["Explain the purpose and obtain appropriate permission","Collect every private detail","Publish names and phone numbers","Hide the reason for the activity"],a:0,e:"Data collection should be purposeful, transparent and respectful of privacy."},
{t:"WAEC-style practice",q:"Differentiate between qualitative and quantitative data, giving one example of each.",e:"Qualitative data describes a category or quality, for example favourite subject. Quantitative data is numerical, for example the number of books borrowed."}
],
p:{
s:["Ask a teacher to approve a simple class or school question that does not require private information, such as the preferred type of reading material.","Collect a small set of anonymous responses. Record only the category or count needed for the question.","Enter the results in a spreadsheet with clear column headings. Check for missing entries and inconsistent category names.","Create a suitable bar chart or other appropriate chart. Add a title and labels.","Write two observations from the chart and one limitation of the small data sample."],
c:["Distinguished qualitative and quantitative data","Used a suitable and privacy-respecting question","Organised observations with clear headings","Selected and labelled a suitable chart","Described a pattern without claiming more than the data supports"]
}};
C["ss1-3-3"]={
n:[
["Learning goals","By the end of this lesson, you should be able to calculate and interpret basic statistical values, describe a trend in a chart, identify a limitation or possible bias in a dataset and communicate a conclusion supported by evidence."],
["Key words","Mean: the sum of values divided by the number of values; median: the middle value after sorting; mode: the most frequent value; range: the highest value minus the lowest; trend: a general pattern in data; bias: a systematic influence that can make data or conclusions unfair or unrepresentative."],
["Mean, median, mode and range","For the values 2, 3, 3, 5 and 7, the mean is 20 divided by 5, which is 4. The median is 3 because it is the middle value after sorting. The mode is 3 because it occurs most often. The range is 7 minus 2, which is 5. These measures describe different features of a dataset."],
["Interpreting a chart","Read the title, labels, units and scale before drawing a conclusion. Compare values fairly. Look for increases, decreases, repeated patterns and unusual values. A chart can be misleading if its scale is unclear or if it leaves out important information."],
["Patterns are not always explanations","If umbrella sales and rainfall both increase in a month, the two measures may be related, but this alone does not prove that one caused the other. Consider other information and avoid making claims that the data cannot support."],
["Data quality, bias and ethics","A survey of only one friendship group may not represent the whole school. Questions can influence answers. Missing values and incorrect entries can distort results. Describe who was included, how information was collected and what limitations remain. Protect people's privacy when presenting results."],
["NERDC curriculum connection","This lesson supports the revised SS1 Data Science competencies to interpret basic statistical values, identify trends and patterns, interpret findings and draw conclusions. It extends the spreadsheet application topic without replacing its existing learning content."]
],
q:[
{t:"NERDC practice",q:"What is the mean of 2, 4 and 6?",o:["4","2","6","12"],a:0,e:"Add the values (2 + 4 + 6 = 12) and divide by 3. The mean is 4."},
{t:"NERDC practice",q:"What is the median of 1, 3, 5, 7 and 9?",o:["5","3","7","9"],a:0,e:"The values are already ordered. The middle value is 5."},
{t:"NERDC practice",q:"A survey asks only members of one club about the favourite club in school. What is a possible problem?",o:["The sample may be biased","The sample must represent every student","The answers are automatically correct","The data cannot be counted"],a:0,e:"A sample from one club may not represent the views of the whole school."},
{t:"WAEC-style practice",q:"For the values 4, 4, 6, 8 and 8, find the mode and range.",e:"There are two modes: 4 and 8, because each occurs twice. The range is 8 − 4 = 4."},
{t:"NERDC practice",q:"Why should a chart include labelled axes and units?",o:["So readers can understand what the values represent","To make the chart look crowded","To hide the data source","To change the results"],a:0,e:"Labels and units explain what is measured and make interpretation more accurate."}
],
p:{
s:["Use the values 3, 4, 4, 5, 9. Calculate the mean, median, mode and range by hand.","Enter the values into a spreadsheet and use available functions or formulas to check your calculations.","Create a chart from a small approved dataset and write two statements describing its pattern.","Identify one way the data collection could be biased or incomplete.","Write a conclusion that refers to the evidence and includes one limitation."],
c:["Calculated mean, median, mode and range accurately","Used a spreadsheet to check a result","Read chart labels and scale correctly","Identified a plausible source of bias or limitation","Wrote an evidence-based conclusion without claiming causation"]
}};
C["ss1-3-6"]={
n:[
["Learning goals","By the end of this lesson, you should be able to explain a database and DBMS, identify tables, records and fields, distinguish relational and NoSQL databases, explain primary keys and describe how related tables organise information."],
["Key words","Database: an organised collection of related data; DBMS: software used to create, manage and retrieve data; table: data arranged in rows and columns; record: one row describing an item; field: one category or column; primary key: a field that uniquely identifies a record; relationship: a connection between records in different tables."],
["Why use a database?","A database helps an organisation store, organise, update and retrieve information. A school may keep records of learners, classes and subjects. A well-designed database reduces unnecessary repetition and makes it easier to find accurate information."],
["Tables, records and fields","A learner table might contain LearnerID, FirstName, Class and AdmissionYear. Each row is one learner record. Each column is a field. A field should contain one kind of information and use a consistent data type."],
["Relational databases","A relational database stores information in tables that can be connected using keys. A Learner table may use LearnerID as its primary key. An Enrolment table can include LearnerID to show which learner is enrolled in a subject. This avoids repeating all learner details in every enrolment record."],
["NoSQL databases","NoSQL databases use models that are not limited to traditional relational tables. Some store documents, key-value pairs, graphs or wide-column records. They can be useful for particular kinds of flexible or large-scale data. Neither relational nor NoSQL is automatically best for every task; choose based on the data and requirements."],
["Good database design","Use clear field names, suitable data types and a unique identifier. Avoid storing several unrelated values in one field. Collect only necessary personal information and restrict access. Make backups and test that records can be retrieved correctly."],
["NERDC curriculum connection","This lesson supports the revised SS1 Data Science competencies: explain DBMS importance; describe relational and NoSQL DBMS; explain database components and examples; and prepare learners to create related tables, store data and retrieve records."]
],
q:[
{t:"NERDC practice",q:"In a database table, a row is commonly called a:",o:["Record","Field","Database engine","Query language"],a:0,e:"A row contains one record, such as one learner's details."},
{t:"NERDC practice",q:"What is the main purpose of a primary key?",o:["Uniquely identify each record","Store several unrelated values in one cell","Make every record identical","Replace all field names"],a:0,e:"A primary key uniquely identifies a record in a table."},
{t:"NERDC practice",q:"Which statement describes a relational database?",o:["It stores data in tables that can be linked using keys","It can only store photographs","It has no structure at all","It cannot retrieve records"],a:0,e:"Relational databases organise information in related tables."},
{t:"NERDC practice",q:"Which is an example of a NoSQL data model?",o:["Document database","A paper notebook only","A monitor display","A network cable"],a:0,e:"Document databases are one common NoSQL model."},
{t:"WAEC-style practice",q:"Explain the difference between a field and a record.",e:"A field is one category or column, such as Class. A record is a complete row containing the values for one item or person."}
],
p:{
s:["Draw a simple Learners table with fields LearnerID, FirstName and Class. Use fictional sample information only.","Mark LearnerID as the primary key and explain why every learner must have a different value.","Draw a second Enrolments table with EnrolmentID, LearnerID and Subject. Show how LearnerID connects the tables.","Identify two examples of information that should not be collected unless there is a clear and authorised need.","Explain one difference between a relational database and a document-based NoSQL database."],
c:["Defined database and DBMS","Correctly identified tables, records and fields","Explained the role of a primary key","Showed how two tables can be related","Included privacy and data-minimisation considerations"]
}};
C["ss1-3-8"]={
n:[
["Learning goals","By the end of this practical, you should be able to plan a small database, create related tables with suitable fields and keys, enter fictional sample records, retrieve information using a query or filter and check that the results are accurate."],
["Plan before creating","Start with the question the database should answer. Identify the main things to record, such as learners and enrolments. Decide which fields are necessary and how tables relate. Do not collect real personal information for a classroom demonstration; use fictional examples."],
["Create related tables","Create a Learners table with LearnerID as a unique primary key. Create an Enrolments table with EnrolmentID as its primary key and LearnerID as a reference to the learner. A relationship allows the database to connect an enrolment to the correct learner without repeating all learner details."],
["Enter and validate records","Use the correct data type for each field. Make sure key values are unique and that every enrolment refers to an existing learner. Check spelling, missing values and accidental duplicates. Do not enter sensitive information into a shared classroom database."],
["Retrieve information","A query asks the database for selected information. A filter can show only records that match a condition, such as enrolments for one subject. In a relational DBMS, SQL is commonly used to create, read, update and delete records. For this practical, focus on creating and retrieving; do not delete shared data."],
["Backup and responsible access","Keep a backup of practice data. Give users only the access they need. Protect real school records and never copy them into a public or personal account. Follow the teacher's instructions and the school's data-handling rules."],
["NERDC curriculum connection","This practical supports the revised SS1 Database Management Systems competencies: create a database with related tables, store data and retrieve data. It is an introductory, supervised exercise using fictional records."]
],
q:[
{t:"NERDC practice",q:"Which field is a suitable primary key for a Learners table?",o:["LearnerID with a unique value for each learner","FirstName when several learners may share a name","Class when many learners are in one class","FavouriteColour"],a:0,e:"A primary key must uniquely identify each record."},
{t:"NERDC practice",q:"What does a database query do?",o:["Requests selected information from a database","Physically cleans a keyboard","Changes a monitor's brightness","Connects a power cable"],a:0,e:"A query asks the database to return records that meet specified conditions."},
{t:"NERDC practice",q:"Why should a practice database use fictional learner details?",o:["To protect real people's privacy","To make records less accurate","To remove the need for keys","To prevent all queries"],a:0,e:"Fictional records allow practice without exposing personal information."},
{t:"WAEC-style practice",q:"State two checks to make after entering records into related tables.",e:"Check that primary keys are unique; each foreign-key reference points to an existing record; required fields are not missing; data types and formats are consistent; and sample queries return expected records."}
],
p:{
s:["Using a spreadsheet or teacher-approved DBMS, create a Learners table with fictional IDs and first names, and an Enrolments table with fictional enrolment IDs, learner IDs and subjects.","Set the primary key for each table. If the software supports relationships, connect Enrolments.LearnerID to Learners.LearnerID.","Enter at least three fictional learners and four enrolments. Check that every enrolment uses an existing LearnerID.","Use a filter or query to show enrolments for one subject. Compare the result with the records you entered.","Save a backup copy of the practice database and explain why real student information must be protected."],
c:["Created two tables with suitable fields","Used unique primary keys","Connected related records correctly or clearly diagrammed the relationship","Stored fictional records and retrieved matching information","Checked accuracy and described a privacy or backup safeguard"]
}};
C["ss1-3-9"]={
n:[
["Learning goals","By the end of this lesson, you should be able to define artificial intelligence and machine learning, identify examples of AI, explain training data and prediction, describe image-pattern recognition and evaluate a simple classifier's results."],
["Key words","Artificial intelligence (AI): computer systems performing tasks associated with human intelligence; machine learning (ML): methods that let a system learn patterns from examples; model: a learned system used to make predictions; training data: examples used to train a model; prediction: an output produced for new input; accuracy: the proportion of predictions that are correct in an evaluation set."],
["What is artificial intelligence?","AI is a broad area of computing concerned with systems that perform tasks such as recognising patterns, understanding language, recommending content or helping people make decisions. Examples include speech recognition, image classification, translation and navigation assistance. An AI system can make mistakes and should not be treated as automatically correct."],
["Machine learning and models","Machine learning is one approach used in AI. A model is trained using examples. For an image classifier, training examples may contain pictures labelled as cats or dogs. The model learns patterns in those examples and then predicts a label for a new image. The prediction is not a guarantee."],
["Training data matters","Training examples should be relevant, sufficiently varied and correctly labelled. If the examples are too few or mostly show one type of image, the model may work poorly on different images. A model can reflect bias in its training data. Never upload a person's face, private image or identifying information to an online training tool without proper permission and a safe, approved process."],
["Testing and accuracy","Test a model using examples it did not train on. Compare each prediction with the correct label. Accuracy is the number of correct predictions divided by the total number of test examples, multiplied by 100. A small test set gives only limited evidence; it does not prove that the model will always be correct."],
["Responsible use of AI","Check important AI outputs against reliable sources. Do not use an AI prediction alone to make a high-stakes decision about a person. Respect privacy, explain when AI has been used where appropriate and consider who may be harmed if the model is wrong."],
["NERDC curriculum connection","This lesson supports the revised SS1 Emerging Technologies competencies: explain AI applications; explain machine learning, models, training data and prediction; describe image-pattern recognition; train a simple image-classification model using an approved online tool; and test and evaluate model accuracy."]
],
q:[
{t:"NERDC practice",q:"What is machine learning?",o:["An approach in which a system learns patterns from examples","A type of computer monitor","A method of printing photographs","A network cable standard"],a:0,e:"Machine learning uses data examples to learn patterns that can support predictions."},
{t:"NERDC practice",q:"What is training data?",o:["Examples used to train a model","The model's power cable","Only the final printed report","A computer's screen resolution"],a:0,e:"Training data provides examples from which a machine-learning model learns."},
{t:"NERDC practice",q:"Why should a model be tested with examples it did not train on?",o:["To check how well it works on new examples","To guarantee that it never makes mistakes","To make the training set larger automatically","To hide incorrect predictions"],a:0,e:"Unseen test examples provide evidence about how the model handles new inputs."},
{t:"NERDC practice",q:"A model gets 8 of 10 test images correct. What is its accuracy on this test set?",o:["80%","8%","10%","100%"],a:0,e:"8 divided by 10, multiplied by 100, equals 80%."},
{t:"WAEC-style practice",q:"Give two reasons why an image-classification model may make an incorrect prediction.",e:"The training set may be too small or unbalanced; labels may be wrong; images may be unclear; the test image may differ from training examples; the model may learn irrelevant patterns or bias."},
{t:"NERDC practice",q:"Which is a responsible practice when using an online AI image tool?",o:["Use approved non-personal sample images and respect privacy","Upload classmates' faces without permission","Assume every prediction is correct","Publish private training images"],a:0,e:"Use safe, approved examples and protect personal information."}
],
p:{
s:["Make a paper image-classification activity using safe drawings or public sample objects, such as fruit types. Sort examples into labelled groups and explain which visible features help distinguish them.","If a teacher-approved online image-classification tool and internet connection are available, train a simple classifier with non-personal sample images. If not, complete the paper activity and describe the steps a digital tool would follow.","Prepare a separate set of test examples that were not used during training. Record the model's predictions and the correct labels.","Calculate accuracy using correct predictions divided by all test predictions, multiplied by 100.","Identify one limitation in the training examples and one possible harm if the model were used without checking its predictions."],
c:["Explained AI and machine learning accurately","Distinguished training examples from test examples","Used safe, non-personal sample data","Calculated test accuracy correctly","Identified a limitation, bias risk or privacy concern"]
}};
C["ss1-3-10"]={
n:[
["Learning goals","By the end of this lesson, you should be able to explain robotics and automation, identify basic robot components, describe how a two-wheel differential-drive robot moves and plan or simulate a simple robot task safely."],
["Key words","Robot: a programmable machine that senses or acts in its environment; automation: using a system to perform a task with reduced direct human control; sensor: a component that detects information; actuator: a component that causes movement or another action; controller: the unit that processes instructions and coordinates actions; differential drive: movement controlled by changing the speeds or directions of two wheels."],
["Robotics and automation","Robotics combines mechanical parts, electronics, sensors and programming to create machines that can perform tasks. Automation uses systems to carry out repeated or controlled processes. Examples include an automatic water-level controller, an industrial robot arm and a line-following educational robot."],
["Main robot components","A simple mobile robot may have a frame, two drive wheels, motors, a controller, a power source and sensors. The controller runs instructions. Motors act as actuators and turn the wheels. Sensors provide information such as distance or line position. The robot uses this information to decide what action to take."],
["Two-wheel differential drive","A two-wheel differential-drive robot changes direction by controlling the left and right wheel speeds. If both wheels move forward at similar speeds, the robot travels approximately straight. If one wheel moves faster, it turns. If the wheels move in opposite directions, it can turn around within a small area, depending on its design."],
["Plan a robot task","Describe the task, the environment and the expected result. Identify the inputs from sensors, the actions from motors and the rules the controller should follow. Use a flowchart or pseudocode before testing. Change one condition at a time and record what happens."],
["Safety and responsible design","Use only teacher-approved kits or simulations. Keep fingers, hair and loose clothing away from moving parts. Check battery polarity and wiring with the teacher. Do not connect motors directly to a computer or power source unless the equipment instructions explicitly allow it. Keep robots away from stairs, water and people who are not part of the activity."],
["NERDC curriculum connection","This lesson supports the revised SS1 Emerging Technologies competencies: explain robot design and automation; describe steps in building a robot; and understand the design of a two-wheel differential-drive mobile robot. A physical robot build requires suitable equipment and supervision; the offline paper design or simulation remains a valid preparation activity."]
],
q:[
{t:"NERDC practice",q:"Which component detects information about a robot's environment?",o:["Sensor","Wheel only","Decorative cover","Battery label"],a:0,e:"A sensor detects information such as distance, light or line position."},
{t:"NERDC practice",q:"What is an actuator in a mobile robot?",o:["A component that causes an action, such as a motor","A printed instruction sheet","A storage folder","A display title"],a:0,e:"A motor is an actuator because it produces movement."},
{t:"NERDC practice",q:"How does a two-wheel differential-drive robot usually turn?",o:["By changing the relative speeds or directions of its two wheels","By changing the colour of its frame","By switching off every sensor","By removing its controller"],a:0,e:"Different wheel speeds or directions cause the robot to curve or rotate."},
{t:"WAEC-style practice",q:"Name four main components of a simple mobile robot and state one function of each.",e:"Examples: controller (runs instructions); motors (turn wheels); sensors (detect the environment); power source (supplies energy); frame (supports components); wheels (provide movement)."},
{t:"NERDC practice",q:"Which is a safe practice during a classroom robotics activity?",o:["Keep fingers away from moving parts and follow teacher instructions","Touch exposed wires while power is on","Test a robot near stairs","Use an unapproved power supply"],a:0,e:"Keep clear of moving parts and use only approved equipment under supervision."}
],
p:{
s:["Draw a labelled design for a two-wheel mobile robot. Include a controller, two motors, two wheels, a power source and one sensor.","Write a simple sequence: start; read the distance sensor; if an obstacle is close, stop and turn; otherwise move forward. Explain the decision in your own words.","Use a paper grid or approved simulator to show how equal wheel speeds move the robot forward and different wheel speeds make it turn.","If a teacher-approved robot kit is available, observe a supervised demonstration. Do not wire or power equipment without instruction.","Record one test, the expected movement, the observed movement and one improvement you would make."],
c:["Identified controller, sensor, actuator and power source","Explained differential-drive movement","Produced a labelled design or simulation","Described a logical sensor-based decision","Included safe handling and a test/improvement record"]
}};
/* Extend the existing Software topic with computational thinking and Python foundations. */
C["ss1-1-6"].n.push(
["Computational thinking and problem-solving","Computational thinking is a way of solving problems by developing clear steps that a person or computer can follow. Its common ideas include decomposition (breaking a problem into smaller parts), pattern recognition (noticing similarities), abstraction (focusing on important details) and algorithm design (writing ordered steps)."],
["Algorithms, IPO charts, flowcharts and pseudocode","An algorithm is a finite, ordered set of steps for solving a problem. An input-process-output (IPO) chart identifies the information received, the work performed and the result produced. A flowchart uses standard shapes to show steps and decisions. Pseudocode describes an algorithm in plain structured language without requiring exact programming syntax."],
["Introduction to Python programming","Python is a programming language used for automation, data work and many other tasks. A variable stores a value. An expression combines values and operators. For example, total = 4 + 6 stores 10 in total. The print() instruction displays information. Use a teacher-approved offline Python environment where available."],
["Sequence, selection and iteration","Sequence runs instructions in order. Selection chooses a path using a condition, such as if score >= 50. Iteration repeats instructions, such as for number in range(3). These structures help a program solve a task consistently."],
["Debugging and testing","A syntax error breaks the language rules, such as a missing colon. A runtime error occurs while a program runs, such as trying to divide by zero. A logic error allows the program to run but produces the wrong result. Test with normal, boundary and unusual inputs, then correct one problem at a time."],
["NERDC curriculum connection","These sections support the revised SS1 Emerging Technologies and Data Science competencies for computational thinking, IPO charts, flowcharts, pseudocode, algorithms, Python variables and expressions, sequence, selection, iteration and debugging."]
);
C["ss1-1-6"].q.push(
{t:"NERDC practice",q:"Which computational-thinking technique breaks a large problem into smaller parts?",o:["Decomposition","Decoration","Compression only","Printing"],a:0,e:"Decomposition divides a complex problem into smaller, manageable tasks."},
{t:"NERDC practice",q:"Which flowchart shape is commonly used for a decision?",o:["Diamond","Oval only","Parallelogram only","Straight line"],a:0,e:"A diamond represents a decision or condition with alternative paths."},
{t:"NERDC practice",q:"What is the output of total = 4 + 6 followed by print(total)?",o:["10","46","4","6"],a:0,e:"The expression adds 4 and 6, stores 10 in total and displays it."},
{t:"NERDC practice",q:"A program runs but calculates the wrong answer. This is most likely a:",o:["Logic error","Syntax error only","Printer error","Network topology"],a:0,e:"A logic error occurs when a program executes but its reasoning or formula is incorrect."}
);
C["ss1-1-6"].p.s.push(
"Choose a familiar task, such as calculating the total cost of three items. Break it into smaller steps and draw an IPO chart.",
"Write pseudocode for the task. Include an input, a calculation and an output.",
"Using a teacher-approved Python environment, enter a short program that stores two numbers, adds them and prints the result. If Python is unavailable, trace the instructions on paper.",
"Write a simple selection rule in pseudocode, such as: if score is at least 50, display Pass; otherwise display Try again. Explain both possible paths.",
"Inspect a teacher-provided short program with one deliberate syntax or logic error. Identify the error, correct it and test the result."
);
C["ss1-1-6"].p.c.push(
"Used decomposition to divide a task into steps",
"Produced a clear IPO chart, flowchart or pseudocode",
"Explained a Python variable or expression correctly",
"Distinguished sequence, selection and iteration",
"Identified and corrected a syntax or logic error"
);
