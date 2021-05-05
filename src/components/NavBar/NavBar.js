import React, {useState} from 'react';
import './NavBar.css';
import '../../../src/index.css'

export function NavBar() {
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

    /*Creates scrolling event after NavBar link is clicked*/ 
    function handleLinkClick(event) {
        event.preventDefault();

        closeMobileMenu();

        const href = event.target.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;

        
        
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        });

    }

    /*Window resizing event listener*/
    window.addEventListener('resize', resizeMenu);
    window.addEventListener('scroll', toggleNavMenu);

    return (
        <nav className={top ? 'NavBar' : 'NavBar offset'}>
            <h1 className='NavBar-nameLogo'>GRANT VELDHUIS</h1>
            <div className='NavBar-menuicon' onClick={handleMobileClick}>
                <i className="fas fa-bars"></i>
            </div>
            <div className={click ? 'NavBar-list active' : 'NavBar-list'}>
                <a href='#AboutMe' onClick={handleLinkClick}>About</a>
                <a href='#Experience' onClick={handleLinkClick}>Experience</a>
                <a href='#Work' onClick={handleLinkClick}>My Work</a>
                <a href='#Contact' onClick={handleLinkClick}>Contact</a>
            </div>
        </nav>
        );
}