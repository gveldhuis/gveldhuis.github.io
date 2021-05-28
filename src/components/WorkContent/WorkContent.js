import React from 'react';
// import './WorkCard.css';
import '../../../src/index.css'
import './WorkContent.css'
import { Link } from "react-router-dom";

export class WorkContent extends React.Component {

    render() {
        return (
            <div className="WorkContent">
                <h1 className="WorkContent-title">{this.props.workblock.projectTitle}</h1>
                <Link to='/work'>
                    <i className="fas fa-times" />
                </Link>
                <h2 className="WorkContent-company">{this.props.workblock.company}</h2>
                <div className="WorkContent-block">
                    <div className="WorkContent-text">
                        <p className="WorkContent-content">
                                <b>Brief:</b> {this.props.workblock.brief}<br /><br /> 

                                <b>Technology:</b> {this.props.workblock.tech}<br /><br /> 

                                <b>Impact:</b> {this.props.workblock.impact}
                        </p>
                    </div>
                    <img className="WorkContent-img" alt="" src={this.props.workblock.image}></img>
                </div>
                <div className="WorkContent-link">
                    {this.props.workblock.link ? <a  className="WorkModalLearn" href={this.props.workblock.link}>See My Work...</a>: ""}
                </div>
            </div>
        );
    }
}