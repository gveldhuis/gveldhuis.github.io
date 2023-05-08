import React from 'react';
import './AboutMe.css';
import '../../../src/index.css'
import { Link } from "react-router-dom";

export class AboutMe extends React.Component {
    render() {
        return (
            <div className="AboutMe" id="">
                <p>Hello! My name's Grant, and I'm a recent grad in Computer Science from the <b>University of Michigan</b> (April 2023).</p>
            <br></br><br></br>
            <p>Last summer I worked at <b><a href="https://www.ribbonhealth.com/">Ribbon Health</a></b> as a Software Engineer Intern, helping build API products that enable healthcare organizations like Ro, Carbon Health, and Rightway Health to navigate their millions of patients to care.</p>
            <br></br><br></br>
            <p>I've also developed software apps for clinicians at <b><a href="https://www.mayoclinic.org/about-mayo-clinic/quality/top-ranked">Mayo Clinic</a></b>, created web and mobile apps for health systems at healthcare supply-chain startup <b><a href="https://www.medvision.ai/"></a>MedVision</b>, and even built software to optimize factory operations at medical-device maker <b><a href="atricure.com"></a>AtriCure.</b></p>
            <br></br><br></br>
            <p>And if I'm not already crazy, I've shipped nearly $1.3M worth of medical supply donations as CEO of nonprofit <b><a href="www.blueprintsforpangaea.org"></a>Blueprints For Pangaea</b> and founded <b><a href="www.compasshealth.app">Compass Health</a></b> during my senior year to help Michigan students find on-campus healthcare.</p>
            <br></br><br></br>
                <p>If you couldn’t already tell, I’m a total healthcare nerd. I’m fascinated with how the American health system does (and doesn’t) work and am unbelievably passionate about <b>developing technology that helps make people healthier.</b></p>
            <br></br><br></br>
            <p>When I’m not pouring over VSCode or geeking out about the most recent healthtech merger, I love hiking a million miles away from home, playing classical music on my keyboard, and listening to Discovery by Daft Punk on repeat.</p>
            <br></br><br></br>
            <p>Whether we sound like long-lost twins or share absolutely nothing in common, I’d love to meet you either way. Get in touch with me <b><Link to='/contact' id='contact'>here!</Link></b></p>
            </div>               
        );
    }
}