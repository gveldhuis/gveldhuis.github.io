import React from 'react';
import './Work.css';

export class Work extends React.Component {
    render() {
        return (
            <div className="Work">
                <h1 className="Work-header">My Work.</h1>
                <div className="Work-block">
                    <h2 className="Work-subheader"><b>Inventory App:</b> Blueprints For Pangaea</h2>
                    <p className="Work-content">
                        <b>Brief:</b> I acted as product manager for the development of this mobile web-app and desktop admin console combination, meant to scan product labels to help better inventory medical supplies.<br /><br /> 

                        <b>Technology:</b> Mobile web-app uses Tesseract OCR to recognize text in image of scanned label. Desktop admin console uses Django backend connected to sqLite database. Both parts of app use React.js frontend and Microsoft Azure’s App Service.<br /><br /> 

                        <b>Impact:</b> $20,000 in University funding, 150% increase in inventorying efficiency.
                    </p>
                </div>

            </div>
        );
    }
}