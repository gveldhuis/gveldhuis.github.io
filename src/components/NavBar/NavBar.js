import React, {useState} from 'react';
import './NavBar.css';
import '../../../src/index.css'

export function NavBar() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const resizeMenu = () => {
        if(window.innerWidth >= 1060) {
            setClick(false);
        }
    };

    window.addEventListener('resize', resizeMenu);

    return (
        <nav className="NavBar">
            <h1 className='NavBar-nameLogo'>GRANT VELDHUIS</h1>
            <div className='NavBar-menuicon' onClick={handleClick}>
                <i className='fas fa-bars'></i>
            </div>
            <div className={click ? 'NavBar-list-active' : 'NavBar-list'}>
                <a href='' onClick={closeMobileMenu}>About Me</a>
                <a href='' onClick={closeMobileMenu}>Experience</a>
                <a href='' onClick={closeMobileMenu}>My Work</a>
                <a href='' onClick={closeMobileMenu}>Contact</a>
            </div>
        </nav>
        );
}