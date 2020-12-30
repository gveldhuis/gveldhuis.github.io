import React from 'react';
import './Intro.css';
import '../../../src/index.css'
/*import introImage from './introPhoto-2.jpg';*/

export class Intro extends React.Component {
    render() {
        return (
            <>
                <div id="Intro"></div>
                <div className="Intro">
                <div className="Intro-text">
                     <h1>Hello!</h1>
                     <h1>My name's Grant, and I am a...</h1>
                     <h1 className="Intro-title">NONPROFIT COO</h1>
                </div>                          
                </div>
            </>
        );
    }
}