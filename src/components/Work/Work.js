import React from 'react';
import './Work.css';
import '../../../src/index.css'
import atricureWork from './AtricureWork.png'
import blueprintsWork from './BlueprintsWork.png'

export class Work extends React.Component {
    render() {
        return (
            <div className="Work">
                <div className="Work-container">
                    <h1 className="Work-header">My Work.</h1>
                    <div className="Work-blocks">
                        <div className="Work-block">
                            <h2 className="Work-subheader"><b>Inventory App:</b> Blueprints For Pangaea</h2>
                            <p className="Work-content">
                                <b>Brief:</b> I acted as product manager for the development of this mobile web-app and desktop admin console combination, meant to scan product labels to help better inventory medical supplies.<br /><br /> 

                                <b>Technology:</b> Mobile web-app uses Tesseract OCR to recognize text in image of scanned label. Desktop admin console uses Django backend connected to sqLite database. Both parts of app use React.js frontend and Microsoft Azure’s App Service.<br /><br /> 

                                <b>Impact:</b> $20,000 in University funding, 150% increase in inventorying efficiency.
                            </p>
                        </div>
                        <img src={blueprintsWork}></img>
                        <div className="Work-block">
                            <h2 className="Work-subheader"><b>Staffing Website:</b> AtriCure</h2>
                            <p className="Work-content">
                                <b>Brief:</b> I developed an interactive, internal web-app to help manufacturing supervisors calculate optimal staffing for production lines, based on current manpower, historical output, and consumer demand.<br /><br /> 

                                <b>Technology:</b> Utilized React.js fronted with a Node.js backend, connected to mySQL database. <br /><br /> 

                                <b>Impact:</b> 85% utilization among supervisors after 2 weeks.
                            </p>
                        </div>
                        <img src={atricureWork}></img>
                    </div>                  
                </div>
            </div>
        );
    }
}