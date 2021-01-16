import React from 'react';
import './Intro.css';
import '../../../src/index.css'
/*import introImage from './introPhoto-2.jpg';*/

let rolesArray = ["NONPROFIT CEO", "SOFTWARE DEVELOPER", "COMPSCI STUDENT", "BLACK MIRROR FAN"];


export class Intro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            roleIndex: 0,
        }
    }
    render() {
        return (
            <>
                <div id="Intro"></div>
                <div className="Intro">
                    <div className="Intro-text">
                        <h1>Hello!</h1>
                        <h1>My name's Grant, and I am a...</h1>
                        <h1 className="Intro-title">{rolesArray[this.state.roleIndex % 5]}</h1>
                    </div>                          
                </div>
            </>
        );
    }

    componentDidMount() {
        this.myInterval = setInterval(() => {
            this.setState({
                roleIndex: this.state.roleIndex + 1
            });
        }, 3000);
    }
}