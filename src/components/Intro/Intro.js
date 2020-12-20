import React from 'react';
import './Intro.css';
import introImage from './introPhoto-2.jpg';

export class Intro extends React.Component {
    render() {
        return (
            <div className="Intro container-fluid">
                <div className="row">
                    <div className="Intro-text col my-auto">
                        <h1 className="Intro-begin">Hello!</h1>
                        <h1 className="Intro-begin">My name's Grant, and I'm a...</h1>
                        <h1 className="Intro-title">NONPROFIT COO</h1>
                    </div>                   
                    <div className="Intro-image col">
                        <img src={introImage} alt="Blueprints members in front of donated medical supplies"></img>
                    </div>
                </div>               
            </div>
        );
    }
}