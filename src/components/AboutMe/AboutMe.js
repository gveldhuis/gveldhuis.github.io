import React from 'react';
import './AboutMe.css';
import '../../../src/index.css'
import headshotImage from './Veldhuis Headshot 1-2.png';
import favoriteImage from './VeldhuisWallPhoto.png';

export class AboutMe extends React.Component {
    render() {
        return (
            <>
                <div id="AboutMePage"></div>
                <div className="AboutMe">
                    <p>Hey there! My name's Grant, and I'm a sophmore at University of Michigan studying Computer Science with a minor in Business.</p>
                    <br></br><br></br>
                    <p>Currently, I"m at Mayo Clinic developing software applications for heatlhcare providers.</p>
                    <br></br><br></br>
                    <p>I'm passionate about developing digital products that help improve our healthcare system, and firmly believe that optimizing systems with technology can lead to a better and more equitable world.</p>
                </div>                
            </>
        );
    }
}