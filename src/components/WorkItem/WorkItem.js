import React from 'react';
import './WorkItem.css';
import '../../../src/index.css'


export class WorkItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="Work-block">
                <div className="Work-text">
                    <h2 className="Work-subheader"><b>{this.props.workitem.projectTitle}</b> {this.props.workitem.company}</h2>
                    <p className="Work-content">
                        <b>Brief:</b> {this.props.workitem.brief}<br /><br /> 

                        <b>Technology:</b> {this.props.workitem.tech}<br /><br /> 

                        <b>Impact:</b> {this.props.workitem.impact}
                    </p>
                </div>
                <img src={this.props.workitem.image}></img>
            </div>
        );
    }
}