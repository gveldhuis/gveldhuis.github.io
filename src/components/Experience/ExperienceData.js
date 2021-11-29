import atricureLogo from './atricureLogo.webp';
import blueprintsLogo from './blueprintsLogo.webp';
import childrensLogo from './cincinnatichildrensLogo.webp';
import michiganLogo from './michiganmedicineLogo.webp';
import medvisionLogo from './medvisionLogo.webp';
import mayoclinicLogo from './mayoclinicLogo2.webp';
//import ibmLogo from './IBMLogo.webp';

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

// var ibm = new ExperienceBlock(
//     ibmLogo,
//     "IBM",
//     "Dev. Consultant Intern",
//     "Starting May 2022",
//     "This summer I’ll be in New York City with IBM Consulting, working in the Industrial Market to help F500 clients transform their businesses with technology!",
//     [],
//     [{tag: "Software Dev", color: "green"}, {tag: "Product Mgmt.", color: "purple"}],
//     "https://www.ibm.com/consulting/",
//     '/experience/ibm'
// );

var mayoclinic = new ExperienceBlock(
    mayoclinicLogo,
    "Mayo Clinic",
    "IT Intern",
    "Starting Jun. 2021",
    "In June, I will be working with a team of full-stack developers to create applications for nearly 65,000 clinicians and 1M patients across Mayo's global health system. I know, I can't believe it either!",
    [],
    [{tag: "Software Dev", color: "green"}],
    "https://www.mayoclinic.org",
    '/experience/mayoclinic'
);

var medvision = new ExperienceBlock(
    medvisionLogo,
    "MedVision",
    "Software Developer",
    "Nov. 2020 - Present",
    "MedVision is a healthcare startup that is creating IoT devices to help hospitals automate and manage their supply chain. As a Software Developer, I am responsible for creating full-stack web and native applications that support product development. My favorite projects so far include...",
    ["Creating client-facing web application with complete React front-end and account management system implemented on AWS, gaining significant exposure for business and enabling rapid scalability", "Build Bluetooth ecosystem with Python-enabled IoT device and React Native mobile client, enabling 1st customers to connect and interact with MedVision hospital supply chain devices"],
    [{tag: "Software Dev", color: "green"}],
    "https://www.medvision.ai/",
    '/experience/medvision'
);

var atricure = new ExperienceBlock(
    atricureLogo,
    "AtriCure, Inc.",
    "Ops Engineering Co-op",
    "Aug. 2020 - Dec. 2020",
    "My term at AtriCure was nothing short of amazing. I implemented Lean on a manufacturing floor, developed an internal website to optimize factory staffing, and ultimately helped make a difference in the lives of patients with AFib.  Highlights include...",
    ["Conducting discrete-event simulations and enacting lean initiatives on a high-throughput assembly line to create 7% efficiency increase and $70k decrease in annual costs", 
     "Synthesizing needs of departmental managers to create a comprehensive Power-BI dashboard, allowing for more data-driven status meetings for operations leadership", 
     "Developing web-app with React and Node.js to optimize assembly-line staffing, leading to 85% utilization among managers in just 2 weeks"],
    [{tag: "Process Eng.", color: "red"}, {tag: "Software Dev", color: "green"}],
    "",
    '/experience/atricure'
);

var blueprints = new ExperienceBlock(
    blueprintsLogo,
    "Blueprints For Pangaea",
    "Chief Executive Officer",
    "Aug. 2019 - Present",
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

var michiganmedicine = new ExperienceBlock(
    michiganLogo, 
    "Michigan Medicine",
    "Research Assistant",
    "Aug. 2019 - Aug. 2020",
    "In this role, I was able to build on my experience in clinical research by collecting patient data for a multi-center study. I also saw firsthand how the inefficiencies of our healthcare system holds back physicians and disadvantages patients. My most notable project involved...",
    ["Collecting 65 different clinical datapoints for 30+ complex patients, helping find statistically signifiant difference in outcomes for two common heart procedures."],
    [{tag: "Clinical Research", color: "blue"}],
    "",
    '/experience/michiganmedicine'
);

var childrens = new ExperienceBlock(
    childrensLogo,
    "Cincinnati Children's",
    "Research Assistant",
    "Jun. 2018 - Aug. 2019",
    "At one of the top children’s hospitals globally, I had the priviledge of working with patients and surgeons alike to conduct research on a broad array of abnormal heart conditions. My aunt and cousin have suffered heart conditions their entire life, which is why my passion for healthcare began here. My proudest achievement includes...",
    ["Co-authoring a poster presentation on novel diagnosis for complex heart condition, which was presented at 2019 AHA National Scientific Conference to +12,000 healthcare professionals."],
    [{tag: "Clinical Research", color: "blue"}],
    "",
    '/experience/childrens'
);

export let companies = [mayoclinic, medvision, atricure, blueprints, michiganmedicine, childrens];