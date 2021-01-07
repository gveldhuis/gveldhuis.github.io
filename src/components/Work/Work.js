import React from 'react';
import './Work.css';
import '../../../src/index.css'
import atricureWork from './AtricureWork.png'
import blueprintsWork from './BlueprintsWork.png'
import medvisionWork from './medvisionscreencap.png'
import { WorkItem } from '../WorkItem/WorkItem';

class WorkBlock {
    constructor(projectTitle, company, brief, tech, impact, image, workTag, langTags, link) {
        this.projectTitle = projectTitle;
        this.company = company;
        this.brief = brief;
        this.tech = tech;
        this.impact = impact;
        this.image = image;
        this.workTag = workTag;
        this.langTags = langTags;
        this.link = link;
    }
}

var medvisionweb = new WorkBlock(
    "Client-Facing Website",
    "MedVision",
    "I developed a comprehensive website with an account management system to act as the face of the organizaiton and aid onboarding of new clients",
    "Website has a React frontend and Node.js backend with account management system, deployed through AWS",
    "Visually stunning portfolio of organization's mission and purpose, along with scalable account sign-up infrastructure",
    medvisionWork,
    {name: "Full-Stack Dev", color: "#FAFF07"},
    [{name: "React", color: "#63E3FF"}, {name: "Node.js", color: "#32FB11"}],
    "",
);

var inventoryapp = new WorkBlock(
    "\"Inventory App\"",
    "Blueprints For Pangaea",
    "I acted as product manager for the development of this mobile web-app and desktop admin console combination, meant to scan product labels to help better inventory medical supplies.",
    "Mobile web-app uses Tesseract OCR to recognize text in image of scanned label. Desktop admin console uses Django backend connected to SQLite database. Both parts of app use React.js frontend and are hosted on Microsoft Azure.",
    "$20,000 in University funding, 150% increase in inventorying efficiency.",
    blueprintsWork,
    {name: "Product Management", color: "#FAFF07"},
    [{name: "React", color: "#63E3FF"}, {name: "Django", color: "#FBC55D"}],
    "https://github.com/gveldhuis/BlueprintsInventoryApp",
);

var atricureapp = new WorkBlock(
    "\"Staffing App\"",
    "AtriCure",
    "I developed an interactive, internal web-app to help manufacturing supervisors calculate optimal staffing for production lines, based on current manpower, historical output, and consumer demand.",
    "Utilized React.js fronted with a Node.js backend, connected to mySQL database containing past production data.",
    "85% utilization among supervisors after only 2 weeks.",
    atricureWork,
    {name: "Full-Stack Dev", color: "#FFC163"},
    [{name: "React", color: "#63E3FF"}, {name: "Node.js", color: "#32FB11"}],
    "",
);

export class Work extends React.Component {
    render() {
        return (
            <div>
                <div id="Work"></div>
                    <div className="Work">
                        <div className="Work-container">
                            <h1 className="Work-header">My Work.</h1>
                            <div className="Work-blocks">
                                <WorkItem workitem={medvisionweb} />
                                <WorkItem workitem={inventoryapp} />
                                <WorkItem workitem={atricureapp} />
                            </div>                  
                        </div>
                    </div>
            </div>
        );
    }
}