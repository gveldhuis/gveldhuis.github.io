import React from 'react';
import './ExperienceContent.css';
import '../../../src/index.css';
import { Link } from 'react-router-dom';

export class ExperienceContent extends React.Component {
    render() {
        return (
            <div className="ExperienceContent">
                <h1 className="ExperienceContent-title">{this.props.experienceblock.company}</h1>
                <Link to='/experience'>
                    <i className="fas fa-times" />
                </Link>
                <h2 className="ExperienceContent-role">{this.props.experienceblock.role}</h2>
                <h3 className="ExperienceContent-date">{this.props.experienceblock.time}</h3>
                <p className="ExperienceContent-explanation">{this.props.experienceblock.explanation}</p>
                <b className="ExperienceContent-highlights">
                    {this.props.experienceblock.highlights.map(highlight => (
                        <><li>{highlight}</li><br /></>
                    ))}
                </b>
                {this.props.experienceblock.more ? <a href={this.props.experienceblock.more}><h3 className="ExperienceContent-more">Learn More</h3></a> : null}
            </div>                
        );
    }
}