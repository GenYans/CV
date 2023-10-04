import '../app-header/app-header.scss';

import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import Logo from '../../resources/icons/logo.svg';

export default class Navbar extends Component {
    scrollToTop = () => {
      scroll.scrollToTop();
    };

render() {
    return(
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="header-menu">
                            <nav className="main-menu">
                                <div className='header-menu-logo'>
                                <img
                                    src={Logo}
                                    className="nav-logo"
                                    alt="Logo"
                                    onClick={this.scrollToTop}
                                />
                                </div>
                            <ul className="list-inline">
                                <li className='list-inline-item'>
                                    <Link 
                                        activeClass='active'
                                        to="hello"
                                        spy={true}
                                        smooth={true}
                                        offset={-125}
                                        duration={500}
                                    >
                                    Привет
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link 
                                    to="skills"
                                    spy={true}
                                    smooth={true}
                                    offset={-125}
                                    duration={500}
                                    >
                                    Стэк
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link 
                                    to="experience"
                                    spy={true}
                                    smooth={true}
                                    offset={-125}
                                    duration={500}
                                    >
                                    Опыт
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link 
                                    to="education"
                                    spy={true}
                                    smooth={true}
                                    offset={-125}
                                    duration={500}
                                    >
                                    Образование
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link
                                    to="portfolio"
                                    spy={true}
                                    smooth={true}
                                    offset={-125}
                                    duration={500}
                                    >
                                    Портфолио
                                    </Link>
                                </li>
                                <li className='list-inline-item'>
                                    <Link 
                                    to="contact"
                                    spy={true}
                                    smooth={true}
                                    offset={-125}
                                    duration={500}
                                    >
                                    Контакты
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
}