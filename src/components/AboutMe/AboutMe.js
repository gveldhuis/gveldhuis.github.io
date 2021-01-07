import React from 'react';
import './AboutMe.css';
import '../../../src/index.css'
import headshotImage from './Veldhuis Headshot 1-2.png';
import favoriteImage from './VeldhuisWallPhoto.png';

export class AboutMe extends React.Component {
    render() {
        return (
            <>
                <div id="AboutMe"></div>
                <div className="AboutMe">
                    <div className="AboutMe-content" id='AboutMe-AboutMeContent'>
                        <h1 className="AboutMe-header">About Me.</h1>
                        <p>
                            Thanks for stopping by! My name’s Grant, and I’m a sophomore at University of Michigan studying Computer Science with a minor in Business.<br /><br />
                            <b>I’m passionate about developing digital products that help improve our healthcare system, and firmly believe that optimizing systems with technology in any industry can lead to a better and more equitable world.</b><br /><br />
                            Outside of school, I'm most likely either coding, playing Chopin on my keyboard, or eating Asian food with friends.
                        </p>
                    </div>
                    <img className="AboutMe-image" id="AboutMe-headshot" alt="Headshot of Grant" src={headshotImage}></img>
                    <div className="AboutMe-content" id="AboutMe-FavoritesContent">
                        <h1 className="AboutMe-header">My Favorite...</h1>
                        <p>
                            <b>Book?</b> We by Yevgeny Zamyatin.<br /><br />

                            <b>Movie?</b> Interstellar by Christopher Nolan.<br /><br />

                            <b>Newsletter?</b> healthtech by Stat.<br /><br />

                            <b>Language?</b> Chinese! 你好我的朋友。<br /><br />

                            <b>...Language?</b> C++, easily.<br />
                        </p>
                    </div> 
                    <img className="AboutMe-image" id="AboutMe-wall" alt="Grant on the Great Wall of China" src={favoriteImage}></img>            
                </div>                
            </>
        );
    }
}