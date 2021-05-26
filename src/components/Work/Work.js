import React from 'react';
import './Work.css';
import '../../../src/index.css'
import { WorkCard } from '../WorkCard/WorkCard';
import { workProjects } from './WorkData';

export class Work extends React.Component {
    render() {
        return (
            <div className="Work">
                <div className="Work-blocks">
                    {workProjects.map(project => (
                        <WorkCard workitem={project} />
                    ))}
                </div>    
            </div>              
        );
    }
}