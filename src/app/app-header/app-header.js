import '../app-header/app-header.scss';

import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { useTranslation } from 'react-i18next';

import Logo from '../../resources/icons/logo.svg';

    const Navbar = () => {

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
                                    className="nav-logo"
                                    alt="Logo"
                                    onClick={scrollToTop}
                                />
                            <nav className="main-menu">
                            <ul className="list-inline">
                                <li className='list-inline-item'>
                                    <Link 
                                        activeClass='active'
                                        to="hello"
                                        spy={true}
                                        smooth={true}
                                        offset={-110}
                                        duration={500}
                                    >
                                    {t("hello")}
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link 
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={500}
                                    >
                                    {t("skills")}
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link 
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={500}
                                    >
                                    {t("experience")}
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link 
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={500}
                                    >
                                    {t("education")}
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={500}
                                    >
                                    {t("portfolio")}
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link 
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-110}
                                    duration={500}
                                    >
                                    {t("contacts")}
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                    </div>
                </div>
            </div>
        </header>
        )
}


export default Navbar;