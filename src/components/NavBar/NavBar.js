import React, {useState, useEffect, Component} from 'react';
import './NavBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { Experience404 } from '../404/Experience404'
import { ExperiencePage } from '../../pages/ExperiencePage/ExperiencePage'
import { HomePage } from '../../pages/HomePage/HomePage';

export function NavBar(props) {

    /*Click state, at top of page state*/
    const [click, setClick] = useState(false);
    const [top, setTop] = useState(true);

    /*On mobile, this function closes NavBar side-menu after link is clicked*/
    const closeMobileMenu = () => setClick(false);

    /*Toggles click state after menu click */
    const handleMobileClick = () => {
        setClick(!click);
    };
    

    /*Toggles Side-Nav Menu Based on Screen Size*/
    const resizeMenu = () => {
        if(window.innerWidth >= 1060) {
            setClick(false);      
        } 
    };

    /*Toggles color of NavMenu based on scroll location on page*/
    const toggleNavMenu = () => {
        if(document.scrollingElement.scrollTop < 50) {
            setTop(true);
        } else {
            setTop(false);
        }
    }

    const pages = ['aboutme', 'experience', 'work', 'contact']

    useEffect(() => {
        for (const route of pages) {
            let test = props.page.includes(route);
            if(test) {
                document.getElementById(route).style.fontWeight = 800;
            }
            else {
                document.getElementById(route).style.fontWeight = 300;
            }
        }
    });

    window.addEventListener('resize', resizeMenu);
    window.addEventListener('scroll', toggleNavMenu)

    
    return (
        <nav className={top ? 'NavBar' : 'NavBar offset'}> 
            <h1 className='NavBar-nameLogo'>GRANT VELDHUIS</h1>
            <div className='NavBar-menuicon' onClick={handleMobileClick}>
                <i className="fas fa-bars"></i>
            </div>
                <div className={click ? 'NavBar-list active' : 'NavBar-list'}>
                    <Link onClick={closeMobileMenu} to='/aboutme' id='aboutme'>About</Link>
                    <Link onClick={closeMobileMenu} to='/experience' id='experience'>Experience</Link>
                    <Link onClick={closeMobileMenu} to='/work' id='work'>Work</Link>
                    <Link onClick={closeMobileMenu} to='/contact' id='contact'>Contact</Link>
                </div>
        </nav>
        );

        

}