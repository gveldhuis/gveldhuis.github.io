import React from 'react';
import './AboutMe.css';
import '../../../src/index.css'
import { Link } from "react-router-dom";

export class AboutMe extends React.Component {
    render() {
        return (
                <div className="AboutMe">
                    <p>What's up! My name's Grant, and I'm a sophomore at the University of Michigan studying Computer Science with a minor in Business.</p>
                    <br></br><br></br>
                    <p>Currently, I'm at <b><a href="https://www.mayoclinic.org/about-mayo-clinic/quality/top-ranked">Mayo Clinic</a></b> making software apps for healthcare providers. I also run <b><a href="https://www.blueprintsforpangaea.org">Blueprints For Pangaea</a></b>, a nonprofit that ships medical supplies overseas.</p>
                    <br></br><br></br>
                    <p>If you couldn’t already tell, I’m a total healthcare nerd. I’m fascinated with how the American health system does (and doesn’t) work and am unbelievably passionate about developing technology that helps make people healthier.</p>
                    <br></br><br></br>
                    <p>When I’m not pouring over VSCode or geeking out about the most recent healthtech merger, I love backcountry hiking a million miles away from home, play classical music on my keyboard, listening to Daft Punk, or indulging my inner child and building Legos.</p>
                    <br></br><br></br>
                    <p>Whether you’re thinking we sound like long-lost twins or share absolutely nothing in common, I’d love to meet you either way. Connect with me <b><Link to='/contact' id='contact'>here!</Link></b></p>
                </div>                
        );
    }
}