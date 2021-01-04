import React from 'react';
import './ExperienceItem.css';
import '../../../src/index.css'
import MicroModal from 'react-micro-modal';


export class ExperienceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className="ExperienceItem">
                <div className="Experiences"> 
                    <MicroModal trigger={(open) => <ExperienceCard experienceblock={this.props.experienceblock} open={open}/>} overrides={micromodalStyles}>
                        {(close) => <ExperienceModal className='ExperienceModal' experienceblock={this.props.experienceblock} close={close}/>}
                    </MicroModal>
                </div>
                
            </div>
        );
    }
}

class ExperienceCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="Experience-img">
                <img onClick={this.props.open} src={this.props.experienceblock.logo} alt="AtriCure logo"></img>
            </div> 
        );
    }
}

class ExperienceModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let highlights = this.props.experienceblock.highlights;

        return (
            <div className="Experience-text">
                <h1 className="Experience-itemheader">{this.props.experienceblock.company}</h1>
                <h2 className="Experience-itemrole">{this.props.experienceblock.role}</h2>
                <p className="Experience-description">
                    {this.props.experienceblock.explanation}<br /><br />
                    <b>{highlights.map((highlight) => <><p>{highlight}</p><br /><br /></>)}</b>
                </p>
                <button onClick={this.props.close}>Close</button>
            </div>
        );
    }
}

let micromodalStyles = {
    Dialog: {
        style: {
            maxWidth: '1500px',
            minWidth: '275px',
        },
    },
};



