import atricureLogo from './atricureLogo.webp';
import blueprintsLogo from './blueprintsLogo.webp';
import childrensLogo from './cincinnatichildrensLogo.webp';
import michiganLogo from './michiganmedicineLogo.webp';
import medvisionLogo from './medvisionLogo.webp';
import mayoclinicLogo from './mayoclinicLogo2.webp';
import compassLogo from './Compass_Dark-6.png'
import ribbonLogo from './ribbonlogo'

class ExperienceBlock {
    constructor(logo, company, role, time, explanation, highlights, tags, more, path) {
        this.logo = logo;
        this.company = company;
        this.role = role;
        this.time = time;
        this.explanation = explanation;
        this.highlights = highlights;
        this.tags = tags;
        this.more = more;
        this.path = path;
    }
}

var ribbonhealth = new ExperienceBlock(
    ribbonLogo,
    "Ribbon Health",
    "Software Engineering Intern",
    "05/2022 - 08/2022",
    "Out of every experience I've had, my summer at this early-stage healthcare startup helped me grow personally and professionally the most. Ribbon taught me how important it is to have a personal mission and surround yourself with a teammates that have strong values. Some of my favorite memories include...",
    ["Designing and engineering multiple data API products from ground up using Python and PostgreSQL, resulting in effective handling of ~3M monthly requests and successful contract with Fortune 5 client",
    "Architecting an automated ELT data pipeline for ~40M historical API logs utilizing Databricks and Looker, enabling Product and Customer teams to better analyze product performance and assist customers"],
    [{ tag: "Software Eng", color: "green" }, { tag: "System Design", color: "red" }],
    "https://www.ribbonhealth.com",
    '/experience/ribbonhealth'
);

var mayoclinic = new ExperienceBlock(
    mayoclinicLogo,
    "Mayo Clinic",
    "IT Intern",
    "06/2021 - 08/2021",
    "In this incredibly fun role, I got to work with a team of Mayo full-stack developers to create applications for nearly 65,000 clinicians and 1M patients across Mayo's global health system. Highlights from my time at Mayo include...",
    ["Developing full stack components using Angular, Java, SQL and Microsoft DevOps deployment pipeline for $XXM enterprise-level software application used by the hospital’s highest throughput clinical laboratory",
        "Engaging with clinicians to translate customer requirements into Figma wireframes and DevOps user stories within agile environment, allowing for maximum usability by Mayo Clinic physicians and laboratory staff"],
    [{ tag: "Software Eng", color: "green" }],
    "https://www.mayoclinic.org",
    '/experience/mayoclinic'
);

var compasshealth = new ExperienceBlock(
    compassLogo,
    "Compass Health",
    "Founder",
    "01/2022 - Present",
    "Schools like Michigan have endless healthcare resources but no great way to navigate them. This causes students to revert to the same over-capacity resources very time or, even worse, not seek care at all. That's why I built Compass during my last two years in school. Easily the most rewarding project I've ever worked on, some highlights include...",
    ["Designing and building an online web platform that allows Michigan students to discover and search for on-campus resources, gaining $18,000 in University funding and >2500 users in the first 90 days of launch",
    "Conducting and analyzing 30+ user-testing sessions with students and faculty, resulting in more accessible design interface and Average Net Promoter Score of 8.5/10 by testing participants",
    "Building a web scraping and data ingestion pipeline to collect data about 100+ on-campus healthcare resources, powering the Compass platform and resulting in 1st centralized database of healthcare at U-M."],
    [{ tag: "Software Eng", color: "green" }, { tag: "Product Mgmt.", color: "purple" }],
    "https://www.compasshealth.app",
    '/experience/compasshealth'
);
    
var blueprints = new ExperienceBlock(
    blueprintsLogo,
    "Blueprints For Pangaea",
    "Chief Executive Officer, Director",
    "08/2019 - Present",
    "Blueprints is a student-run, 501-(c)(3) nonprofit that ships excess medical supplies overseas. Serving as CEO has been the honor of a lifetime, as Blueprints combines my passion for healthcare, love for technology, and drive to create positive efficiency in the world. My favorite moments include...",
    ["Acting as Product Manager for internal web-app, which has won $20,000 in University funding and created 150% operational efficiency increase", 
    "Overseeing operational strategy for network of 7 chapters across the country, shipping $1M of medical supplies overseas yearly",
    "Coordinating logistics with nationally accredited NGO with $XXXM revenues, resulting in shipment of 75,000lbs of medical supplies to date",
    "Spearheading procurement and donation of $12,000 worth of PPE to community organizations amid COVID-19",
    ],
    [{tag: "Leadership", color: "orange"}, {tag: "Product Mgmt.", color: "purple"}],
    "https://www.blueprintsforpangaea.org",
    '/experience/blueprints'
);

var atricure = new ExperienceBlock(
    atricureLogo,
    "AtriCure, Inc.",
    "Ops Engineering Co-op",
    "08/2020 - 12/2020",
    "My term at AtriCure was nothing short of amazing. I implemented Lean on a manufacturing floor, developed an internal website to optimize factory staffing, and ultimately helped make a difference in the lives of patients with AFib.  Highlights include...",
    ["Conducting discrete-event simulations and enacting lean initiatives on a high-throughput assembly line to create 7% efficiency increase and $70k decrease in annual costs",
        "Synthesizing needs of departmental managers to create a comprehensive Power-BI dashboard, allowing for more data-driven status meetings for operations leadership",
        "Developing web-app with React and Node.js to optimize assembly-line staffing, leading to 85% utilization among managers in just 2 weeks"],
    [{ tag: "Process Eng.", color: "red" }, { tag: "Software Eng", color: "green" }],
    "https://www.atricure.com/",
    '/experience/atricure'
);
    
var medvision = new ExperienceBlock(
    medvisionLogo,
    "MedVision",
    "Software Engineer",
    "11/2020 - 08/2022",
    "MedVision is a healthcare startup that is creating IoT devices to help hospitals automate and manage their supply chain. As a Software Engeloper, I was responsible for creating full-stack web and native applications that support product development. My favorite projects so far include...",
    ["Creating client-facing web application with complete React front-end and account management system implemented on AWS, gaining significant exposure for business and enabling rapid scalability", "Build Bluetooth ecosystem with Python-enabled IoT device and React Native mobile client, enabling 1st customers to connect and interact with MedVision hospital supply chain devices"],
    [{tag: "Software Eng", color: "green"}],
    "https://www.medvision.ai/",
    '/experience/medvision'
);
// var michiganmedicine = new ExperienceBlock(
//     michiganLogo, 
//     "Michigan Medicine",
//     "Research Assistant",
//     "Aug. 2019 - Aug. 2020",
//     "In this role, I was able to build on my experience in clinical research by collecting patient data for a multi-center study. I also saw firsthand how the inefficiencies of our healthcare system holds back physicians and disadvantages patients. My most notable project involved...",
//     ["Collecting 65 different clinical datapoints for 30+ complex patients, helping find statistically signifiant difference in outcomes for two common heart procedures."],
//     [{tag: "Clinical Research", color: "blue"}],
//     "",
//     '/experience/michiganmedicine'
// );

var childrens = new ExperienceBlock(
    childrensLogo,
    "Cincinnati Children's Hospital",
    "Research Assistant",
    "08/2018 - 08/2019",
    "At one of the top children’s hospitals globally, I had the privilege of working with patients and surgeons alike to conduct research on a broad array of congenital heart abnormalities. My aunt and cousin have suffered from heart conditions their entire life, which is why my passion for healthcare began here. My proudest achievement includes...",
    ["Co-authoring a poster presentation on novel diagnosis for complex heart condition, which was presented at 2019 AHA National Scientific Conference to +12,000 healthcare professionals."],
    [{tag: "Clinical Research", color: "blue"}],
    "https://www.cincinnatichildrens.org/",
    '/experience/childrens'
);

export let companies = [ribbonhealth, mayoclinic, compasshealth, blueprints, atricure, medvision, childrens];