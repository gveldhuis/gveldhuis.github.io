import React from 'react';
import './Experience.css';
import '../../../src/index.css'

import { ExperienceCard } from '../ExperienceCard/ExperienceCard';
import { companies } from './ExperienceData';

export class Experience extends React.Component {
    render() {
        return (
            <div className="Experience">
                <div className="Experience-Items">
                    {companies.map(company => (
                        <ExperienceCard experienceblock={company} />
                    ))}
                </div>
            </div>                
        );
    }
}