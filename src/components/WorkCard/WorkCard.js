import React from 'react';
import './WorkCard.css';
import '../../../src/index.css'

export class WorkCard extends React.Component {

    render() {
        return (
            <div className="Work-card">
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
            </div>
        );
    }
}

// class WorkModal extends React.Component {

//     render() {
//         return (
//             <div className="WorkModal">
//                 <div className="WorkModalContent">
//                     <div className="Work-text">
//                         <h2 className="Work-subheader"><b>{this.props.workitem.projectTitle}</b></h2>
//                         <h3>{this.props.workitem.company}</h3>
//                         <p className="Work-content">
//                             <b>Brief:</b> {this.props.workitem.brief}<br /><br /> 

//                             <b>Technology:</b> {this.props.workitem.tech}<br /><br /> 

//                             <b>Impact:</b> {this.props.workitem.impact}
//                         </p>
//                     </div>
//                     <img alt="" src={this.props.workitem.image}></img>
//                 </div>
//                 <div className="WorkModalFooter">
//                     {this.props.workitem.link ? <a  className="WorkModalLearn" href={this.props.workitem.link}>See My Work...</a>: ""}
//                     <button className="Work-closebtn" onClick={this.props.close}>Close</button>
//                 </div>
//             </div>
//         );
//     }
// }
