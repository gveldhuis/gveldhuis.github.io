import React from 'react';
import './WorkItem.css';
import '../../../src/index.css'
import MicroModal from 'react-micro-modal';


export class WorkItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="Work-block">
                <MicroModal trigger={(open) => <WorkCard workitem={this.props.workitem} open={open}/>} overrides={micromodalStyles}>
                    {(close) => <WorkModal className='WorkModal' workitem={this.props.workitem} close={close}/>}
                </MicroModal>
            </div>
        );
    }
}

class WorkCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className="Work-card" onClick={this.props.open}>
                <div className="Work-img">
                    <img src={this.props.workitem.image} alt="AtriCure logo"></img>
                </div> 
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
        );
    }
}

class WorkModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <div className="Work-text">
                    <h2 className="Work-subheader"><b>{this.props.workitem.projectTitle}</b> {this.props.workitem.company}</h2>
                    <p className="Work-content">
                        <b>Brief:</b> {this.props.workitem.brief}<br /><br /> 

                        <b>Technology:</b> {this.props.workitem.tech}<br /><br /> 

                        <b>Impact:</b> {this.props.workitem.impact}
                    </p>
                </div>
                <img src={this.props.workitem.image}></img>
            </>
        );
    }
}

let micromodalStyles = {
    Dialog: {
        style: {
            maxWidth: '1100px',
            minWidth: '275px',
            borderRadius: '35px',
            margin: '20px',
            maxHeight: '70%',
        },
    },
};