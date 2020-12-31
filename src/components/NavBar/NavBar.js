import React, {useState} from 'react';
import './NavBar.css';
import '../../../src/index.css'

export function NavBar() {

    /* Click state, top of page state */
    const [click, setClick] = useState(false);
    const [top, setTop] = useState(true);


    /* Function that closes mobile side-menu */
    const closeMobileMenu = () => setClick(false);

    /*Function that closes mobile menu when window width is greater than 1060px */
    const resizeMenu = () => {
        if(window.innerWidth >= 1060) {
            setClick(false);
        }
    };

    /* Toggles color of navmenu when scrolling position changes */
    const toggleNavMenu = () => {
        if(document.documentElement.scrollTop < 50) {
            setTop(true);
        } else {
            setTop(false);
        }
    }

    /*//////////////////////////////////////////////////////////////////////*/

    /* Handler functions */
    const handleMobileClick = () => {
        setClick(!click);
    };

    function handleLinkClick(event) {
        event.preventDefault();

        closeMobileMenu();

        const href = event.target.getAttribute("href");
        const offsetTop = document.querySelector(href).offsetTop;
        
        window.scrollTo({
            top: offsetTop,
            behavior: "smooth",
        })
    }

    /*//////////////////////////////////////////////////////////////////////*/

    /* Event listeners */
    window.addEventListener('resize', resizeMenu);
    window.addEventListener('scroll', toggleNavMenu);

    return (
        <nav className={top ? 'NavBar' : 'NavBar offset'}>
            <h1 className='NavBar-nameLogo'>GRANT VELDHUIS</h1>
            <div className='NavBar-menuicon' onClick={handleMobileClick}>
                <i className="fas fa-bars"></i>
            </div>
            <div className={click ? 'NavBar-list active' : 'NavBar-list'}>
                <a href='#AboutMe' onClick={handleLinkClick}>About Me</a>
                <a href='#Experience' onClick={handleLinkClick}>Experience</a>
                <a href='#Work' onClick={handleLinkClick}>My Work</a>
                <a href='#Contact' onClick={handleLinkClick}>Contact</a>
            </div>
        </nav>
        );
}