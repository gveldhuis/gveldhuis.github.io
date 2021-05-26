import React from 'react';
import './AboutMe.css';
import '../../../src/index.css'

export class AboutMe extends React.Component {
    render() {
        return (
                <div className="AboutMe">
                    <p>What's up! My name's Grant, and I'm a sophomore at the University of Michigan studying Computer Science with a minor in Business.</p>
                    <br></br><br></br>
                    <p>Currently, I'm at <b><a href="https://www.mayoclinic.org/about-mayo-clinic/quality/top-ranked">Mayo Clinic</a></b> making software apps for healthcare providers. I also run <b><a href="https://www.blueprintsforpangaea.org">Blueprints For Pangaea</a></b>, a nonprofit that ships medical supplies overseas.</p>
                    <br></br><br></br>
                    <p>I'm passionate about developing digital products that help improve our healthcare system, and firmly believe that using technology to optimize systems can lead to a better and more equitable world.</p>
                    <br></br><br></br>
                    <p>If I'm not pouring over VSCode or taking class, I'm most likely hiking somewhere outdoors, playing the keyboard, listening to Daft Punk, or eating Asian food with friends.</p>
                </div>                
        );
    }
}