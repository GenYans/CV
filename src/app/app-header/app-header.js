import '../app-header/app-header.scss';

import React, {useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from 'react-i18next';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';

import Logo from '../../resources/icons/logo.svg';

    const Navbar = () => {
        const [nav, setNav] = useState(false);

    function scrollToTop () {
        scroll.scrollToTop();
    }

    const {t} = useTranslation();

    return(
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="header-menu">
                                <img
                                    src={Logo}
                                    className="header-menu-logo"
                                    alt="Logo"
                                    onClick={scrollToTop}
                                />
                            <nav className="main-menu">
                            <ul className={nav ? ['list-inline', 'active'].join(' '): ['list-inline']}>
                                <li className='list-inline-item'>
                                    <Link onClick={() => setNav(!nav) }
                                        activeClass='active'
                                        to="hello"
                                        spy={true}
                                        smooth={true}
                                        offset={-110}
                                        duration={1000}
                                    >
                                    {t("hello")}
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link onClick={() => setNav(!nav)}
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={1000}
                                    >
                                    {t("skills")}
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link onClick={() => setNav(!nav)}
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={1000}
                                    >
                                    {t("experience")}
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link onClick={() => setNav(!nav)}
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={1000}
                                    >
                                    {t("education")}
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link onClick={() => setNav(!nav)}
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={1000}
                                    >
                                    {t("portfolio")}
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link onClick={() => setNav(!nav)} 
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={1000}
                                    >
                                    {t("contacts")}
                                    </Link>
                                </li>
                            </ul>
                            <div onClick={() => setNav(!nav)} className='mobile-btn'>
                                {nav ? <AiOutlineClose size={35} style={{ zIndex:`10` }} color='white'/> : <AiOutlineMenu size={35}/>}
                            </div>
                        </nav>

                    </div>
                </div>
            </div>
        </header>
        )
}


export default Navbar;