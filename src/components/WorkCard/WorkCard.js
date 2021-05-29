import React from 'react';
import './WorkCard.css';
import '../../../src/index.css'
import { Link } from 'react-router-dom';


export class WorkCard extends React.Component {
    render() {
        return (
            <Link to={this.props.workitem.path} className = "Work-card">
                    <div className="Work-img">
                        <img src={this.props.workitem.image} alt="AtriCure logo"></img>
                    </div> 
                    <div className = "Work-content">
                        <h3>{this.props.workitem.projectTitle}</h3>
                        <h4>{this.props.workitem.company}</h4>
                        <div className="Work-tags">
                            <span className="Work-tag">
                                <i className="fas fa-hammer" style={{color: this.props.workitem.workTag.color}}></i>
                                <h5 style={{color: this.props.workitem.workTag.color}}>{this.props.workitem.workTag.name}</h5>
                            </span>
                            <span className="Work-langtags">
                                {this.props.workitem.langTags.map((tagObject) => {
                                    return (
                                        <span className="Work-tag">
                                            <i className="fas fa-circle" style={{color: tagObject.color}}></i>
                                            <h5 style={{color: tagObject.color}}>{tagObject.name}</h5>
                                        </span>
                                    );        
                                })}
                            </span>
                        </div>
                    </div>
            </Link>
        );
    }
}
