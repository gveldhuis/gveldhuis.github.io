import React from 'react';
import './ExperienceItem.css';
import '../../../src/index.css'
import MicroModal from 'react-micro-modal';


export class ExperienceItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let highlights = this.props.experienceblock.highlights;

        return (
            <div className="ExperienceItem">
                <div className="Experience-img"> 
                    <MicroModal trigger={(open) => <img onClick={open} src={this.props.experienceblock.logo} alt="AtriCure logo"></img>}>
                        {(close) => 
                        <div>
                            <div className="Experience-text">
                                <h1 className="Experience-itemheader">{this.props.experienceblock.company}</h1>
                                <h2 className="Experience-itemrole">{this.props.experienceblock.role}</h2>
                                <p className="Experience-description">
                                    {this.props.experienceblock.explanation}<br /><br />
                                    <b>{highlights.map((highlight) => <><p>{highlight}</p><br /><br /></>)}</b>
                                </p>
                            </div>
                            <button onClick={close}>{this.props.experienceblock.company}</button>
                        </div>
                        }
                    </MicroModal>
                    
                </div>
                
            </div>
        );
    }
}



