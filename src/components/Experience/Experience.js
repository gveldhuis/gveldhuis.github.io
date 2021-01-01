import React from 'react';
import './Experience.css';
import '../../../src/index.css'
import { ExperienceItem } from '../ExperienceItem/ExperienceItem';

import atricureLogo from './atricureLogo.png';
import blueprintsLogo from './blueprintsLogo.png';
import childrensLogo from './cincinnatichildrensLogo.png';
import michiganLogo from './michiganmedicineLogo.png';

class ExperienceBlock {
    constructor(logo, company, role, explanation, highlights) {
        this.logo = logo;
        this.company = company;
        this.role = role;
        this.explanation = explanation;
        this.highlights = highlights;
    }
} 

var atricure = new ExperienceBlock(
    atricureLogo,
    "AtriCure, Inc.",
    "Operations Engineering Co-op",
    "My term at AtriCure was nothing short of amazing. I implemented Lean on a manufacturing floor, developed an internal website to optimize factory staffing, and ultimately helped make a difference in the lives of patients with AFib.  Highlights include...",
    ["Implementing Lean which created $70,000 in annual savings", 
     "Developing Power-BI dashboard with 85% utilization rate", 
     "Creating React.js web-app to optimize line staffing"],
);

var blueprints = new ExperienceBlock(
    blueprintsLogo,
    "Blueprints For Pangaea",
    "COO, Product Manager",
    "Blueprints is a student-run, 501-(c)(3) nonprofit that ships excess medical supplies overseas. Serving as COO has been the honor of a lifetime, as Blueprints combines my passion for healthcare, love for technology, and drive to create positive efficiency in the world. My favorite moments include...",
    ["Acting as Product Manager for internal web-app, winning $20,000 in University funding and creating 150% efficiency increase", 
     "Leading Operational strategy for 7 national University chapters shipping $1M of medical supplies yearly",
     "Coordinating donation of $12,000 worth of PPE to community organizations amid COVID-19",
    ],
);

var michiganmedicine = new ExperienceBlock(
    michiganLogo, 
    "Michigan Medicine",
    "Research Assistant",
    "In this role, I was able to build on my experience in clinical research by collecting patient data for a multi-center study. I also saw firsthand how the inefficiencies of our healthcare system holds back physicians and disadvantages patients. My most notable project involved...",
    ["Collecting 65 different clinical datapoints for 30+ complex patients, helping find statistically signifiant difference in outcomes for two common heart procedures."],
);

var childrens = new ExperienceBlock(
    childrensLogo,
    "Cincinnati Children's",
    "Research Assistant",
    "At one of the top children’s hospitals globally, I had the priviledge of working with patients and surgeons alike to conduct research on a broad array of abnormal heart conditions. My aunt and cousin have suffered heart conditions their entire life, which is why my passion for healthcare began here. My proudest achievement includes...",
    ["Co-authoring a poster presentation on novel diagnosis for complex heart condition, which was presented at 2019 AHA National Scientific Conference to +12,000 healthcare professionals."],
);

export class Experience extends React.Component {
    render() {
        return (
            <>
                <div id="Experience"></div>
                <div className="Experience">
                    <div className="Experience-container">
                        <h1 className="Experience-header">Experience.</h1>
                            <ExperienceItem experienceblock={atricure} />
                            <ExperienceItem experienceblock={blueprints} />
                            <ExperienceItem experienceblock={michiganmedicine} />
                            <ExperienceItem experienceblock={childrens} />
                    </div>
                </div>                
            </>
        );
    }
}