import React from 'react';
import './ExperienceCard.css';
import '../../../src/index.css'
import { Route, Switch, Redirect, useLocation, Link } from 'react-router-dom';

export class ExperienceCard extends React.Component {
    render() {
        return (
            <Link to={this.props.experienceblock.path}>
                <div className="Experience-card" onClick={this.props.open}>
                    <div className="Experience-img">
                        <img src={this.props.experienceblock.logo} alt="AtriCure logo"></img>
                    </div> 
                    <h3>{this.props.experienceblock.role}</h3>
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
        );
    }
}





