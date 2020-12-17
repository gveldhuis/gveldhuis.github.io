import React from 'react';
import './NavBar.css';

export class NavBar extends React.Component {
    render() {
        return (
            <div className="NavBar">
                <h1 className='NavBar-nameLogo'>GRANT VELDHUIS</h1>
                <ul className='NavBar-list'>
                    <li>About Me</li>
                    <li>Experience</li>
                    <li>My Work</li>
                    <li>Contact</li>
                </ul>
            </div>
        );
    }
}