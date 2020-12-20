import React from 'react';
import './Intro.css';
import '../../index.css'
/*import introImage from './introPhoto-2.jpg';*/

export class Intro extends React.Component {
    render() {
        return (
            <div className="Intro">
                <div className="Intro-text">
                     <h1>Hello!</h1>
                     <h1>My name's Grant, and I'm a...</h1>
                     <h1 className="Intro-title">NONPROFIT COO</h1>
                </div>                          
            </div>
        );
    }
}