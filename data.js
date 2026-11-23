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
C["ss1-1-1"]={free:1,n:[["What digital technology means","Digital technology is any tool, device or system that uses computer power to store, send, process or show information. “Digital” means the information is kept as numbers: 0 and 1."],["Scope","It covers computers, phones, the internet, ATMs, POS machines, smart TVs and apps such as WhatsApp."],["Relevance in society","It makes work faster and cheaper in banking, education, health, agriculture, commerce and government. Examples: online bank transfer, e-learning and telemedicine."]],
q:[{t:"NERDC",q:"Which of these is an example of digital technology?",o:["A POS machine","A hand fan","A wooden stool","A broom"],a:0,e:"A POS machine processes payment data electronically."},
{t:"JAMB",q:"In digital technology, information is stored as…",o:["Letters only","Numbers (0 and 1)","Sounds only","Pictures only"],a:1,e:"Digital data is stored in binary: 0 and 1."},
{t:"WAEC",q:"Define digital technology and state three areas where it is used.",e:"Digital technology means tools and systems that use computer power to store, send, process or show information as numbers (0 and 1). Areas: banking, education, health, agriculture, commerce, government (any three)."}],
p:{s:["List five digital devices you use at home or in school.","For each device, write what information it stores, sends or shows."],c:["Listed five digital devices","Gave the job of each device","Used correct terms"]}};
C["ss1-1-3"]={free:1,n:[["Number systems","A number system is a way of writing numbers with a set of digits. The base tells how many digits it uses."],["The four systems","Decimal (base 10) uses 0 to 9. Binary (base 2) uses 0 and 1. Octal (base 8) uses 0 to 7. Hexadecimal (base 16) uses 0 to 9 and A to F, where A is 10 and F is 15."],["Binary to decimal","Multiply each digit by its place value (… 8, 4, 2, 1) and add. Example: 1011 = 8 + 0 + 2 + 1 = 11."],["Decimal to binary","Divide by 2 again and again. Write the remainders from last to first. Example: 25 gives 11001."]],
q:[{t:"JAMB",q:"Convert 1011 (base 2) to decimal.",o:["9","10","11","13"],a:2,e:"8 + 0 + 2 + 1 = 11."},
{t:"WAEC",q:"Which number system uses the digits 0 to 7 only?",o:["Binary","Octal","Decimal","Hexadecimal"],a:1,e:"Octal is base 8, so it uses 0 to 7."},
{t:"JAMB",q:"The binary equivalent of decimal 25 is…",o:["10011","11001","11010","10101"],a:1,e:"16 + 8 + 1 = 25, so the binary is 11001."},
{t:"PUTME",q:"What is the decimal value of hexadecimal F?",o:["10","14","15","16"],a:2,e:"A = 10, B = 11, C = 12, D = 13, E = 14, F = 15."},
{t:"WAEC",q:"Convert 13 (base 10) to binary. Show your working.",e:"13 ÷ 2 = 6 remainder 1; 6 ÷ 2 = 3 remainder 0; 3 ÷ 2 = 1 remainder 1; 1 ÷ 2 = 0 remainder 1. Read the remainders upward: 1101."}],
p:{s:["Use the converter below.","Type 25 and press Convert. Check that the binary is 11001.","Try 13, 40 and 255. Write the binary, octal and hex answers.","Check one binary answer by adding place values."],c:["Converted at least three numbers","Checked binary by adding place values","Wrote octal and hex answers too"],t:1}};
