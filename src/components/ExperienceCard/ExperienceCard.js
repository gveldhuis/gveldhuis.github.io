import React from 'react';
import './ExperienceCard.css';
import '../../../src/index.css'
import { Link } from 'react-router-dom';
import { Delay } from '../Delay/Delay';

export class ExperienceCard extends React.Component {
    render() {
        return (
            <Delay waitBeforeShow={200}>
                <Link to={this.props.experienceblock.path}>
                    <div className="Experience-card" onClick={this.props.open}>
                        <div className="Experience-img">
                            <img src={this.props.experienceblock.logo} alt="AtriCure logo"></img>
                        </div> 
                        <h3 className="Experience-role">{this.props.experienceblock.role}</h3>
                        <div className="Experience-tags">
                            {this.props.experienceblock.tags.map((tagObject) => {
                                return (
                                    <span className="Experience-tag">
                                        <i className="fas fa-circle" style={{color: tagObject.color}}></i>
                                        <h4 style={{color: tagObject.color}}>{tagObject.tag}</h4>
                                    </span>
                                );        
                            })}
                        </div>
                    </div>
                </Link>
            </Delay>
        );
    }
}





