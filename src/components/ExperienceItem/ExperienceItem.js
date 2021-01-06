import React from 'react';
import './ExperienceItem.css';
import '../../../src/index.css'
import MicroModal from 'react-micro-modal';


export class ExperienceItem extends React.Component {
    render() {

        return (
            <div className="ExperienceItem">
                <MicroModal trigger={(open) => <ExperienceCard experienceblock={this.props.experienceblock} open={open}/>} overrides={micromodalStyles}>
                    {(close) => <ExperienceModal className='ExperienceModal' experienceblock={this.props.experienceblock} close={close}/>}
                </MicroModal>
            </div>
        );
    }
}

class ExperienceCard extends React.Component {
    render() {
        let tags = this.props.experienceblock.tags;

        return (
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
        );
    }
}

class ExperienceModal extends React.Component {

    render() {
        let highlights = this.props.experienceblock.highlights;

        return (
            <div className="Experience-text">
                <h1 className="Experience-itemheader">{this.props.experienceblock.company}</h1>
                <h2 className="Experience-itemrole">{this.props.experienceblock.role}</h2>
                <p className="Experience-description">
                    {this.props.experienceblock.explanation}<br /><br />
                    <b>{highlights.map((highlight) => <><li>{highlight}</li><br /><br /></>)}</b>
                </p>
                <button className="Experience-closebtn" onClick={this.props.close}>Close</button>
            </div>
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



