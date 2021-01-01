import React from 'react';
import './Work.css';
import '../../../src/index.css'
import atricureWork from './AtricureWork.png'
import blueprintsWork from './BlueprintsWork.png'
import { WorkItem } from '../WorkItem/WorkItem';

class WorkBlock {
    constructor(projectTitle, company, brief, tech, impact, image) {
        this.projectTitle = projectTitle;
        this.company = company;
        this.brief = brief;
        this.tech = tech;
        this.impact = impact;
        this.image = image;
    }
}

var inventoryapp = new WorkBlock(
    "Inventory App",
    "Blueprints For Pangaea",
    "I acted as product manager for the development of this mobile web-app and desktop admin console combination, meant to scan product labels to help better inventory medical supplies.",
    "Mobile web-app uses Tesseract OCR to recognize text in image of scanned label. Desktop admin console uses Django backend connected to sqLite database. Both parts of app use React.js frontend and Microsoft Azure’s App Service.",
    "$20,000 in University funding, 150% increase in inventorying efficiency.",
    blueprintsWork,
);

var atricureapp = new WorkBlock(
    "Staffing App",
    "AtriCure",
    "I developed an interactive, internal web-app to help manufacturing supervisors calculate optimal staffing for production lines, based on current manpower, historical output, and consumer demand.",
    "Utilized React.js fronted with a Node.js backend, connected to mySQL database.",
    "85% utilization among supervisors after 2 weeks.",
    atricureWork,
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
                                <WorkItem workitem={inventoryapp} />
                                <WorkItem workitem={atricureapp} />
                            </div>                  
                        </div>
                    </div>
            </div>
        );
    }
}