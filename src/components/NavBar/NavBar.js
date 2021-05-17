import React, {useState, useEffect, Component} from 'react';
import './NavBar.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Experience404 from '../404/Experience404'

export function NavBar(props) {

    /*Click state, at top of page state*/
    const [click, setClick] = useState(false);
    const [top, setTop] = useState(true);

    /*On mobile, this function closes NavBar side-menu after link is clicked*/
    const closeMobileMenu = () => setClick(false);

    /*Toggles click state after menu click */
    const handleMobileClick = () => {
        setClick(!click);
        console.log("THIS IS INSIDE handleMobileClick");
    };
    

    /*Toggles Side-Nav Menu Based on Screen Size*/
    const resizeMenu = () => {
        if(window.innerWidth >= 1060) {
            setClick(false);
        }
    };

    /*Toggles color of NavMenu based on scroll location on page*/
    const toggleNavMenu = () => {
        if(document.documentElement.scrollTop < 50) {
            setTop(true);
        } else {
            setTop(false);
        }
    }

    useEffect(() => {
        document.getElementById(props.page).style.fontWeight = 800;
    });

    /*Creates scrolling event after NavBar link is clicked*/ 
    // function handleLinkClick(event) {
    //     event.preventDefault();

    //     closeMobileMenu();

    //     const href = event.target.getAttribute("href");
    //     const offsetTop = document.querySelector(href).offsetTop;

        
        
    //     window.scrollTo({
    //         top: offsetTop,
    //         behavior: "smooth",
    //     });

    // }
    
    return (
        <nav className={top ? 'NavBar' : 'NavBar offset'}>
            <h1 className='NavBar-nameLogo'>GRANT VELDHUIS</h1>
            <div className='NavBar-menuicon' onClick={handleMobileClick}>
                <i className="fas fa-bars"></i>
            </div>
            <Router>
                <div className={click ? 'NavBar-list active' : 'NavBar-list'}>
                    <Link to='/' id='AboutMe'>About</Link>
                    <Link to='/experience' id='Experience'>Experience</Link>
                    <Link to='/work' id='Work'>Work</Link>
                    <Link to='/contact' id='Contact'>Contact</Link>

                    <Switch>
                        <Route path='/experience'>
                            <Experience404 />
                        </Route>
                        <Route path='/work'>
                            <Experience404 />
                        </Route>
                        <Route path='/contact'>
                            <Experience404 />
                        </Route>
                    </Switch>

                    {/* <a id='AboutMe' href='#AboutMe' onClick={handleLinkClick}>About</a>
                    <a id='Experience' href='#Experience' onClick={handleLinkClick}>Experience</a>
                    <a id='Work' href='#Work' onClick={handleLinkClick}>My Work</a>
                    <a id='Contact' href='#Contact' onClick={handleLinkClick}>Contact</a> */}
                </div>
            </Router>
        </nav>
        );

        

}