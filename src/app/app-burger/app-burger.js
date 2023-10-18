import React from 'react';
import { Link } from "react-scroll";
import '../app-burger/app-burger.scss';

const AppBurger = () => {
    return (
        <div className='app-burger'>
            <ul>
                <li>
                    <Link to="hello">
                    </Link>
                </li>
                <li>
                    <Link to="skills">
                    </Link>
                </li>
                <li>
                    <Link to="experience">
                    </Link>
                </li>
                <li>
                    <Link to="education">
                    </Link>
                </li>
                <li>
                    <Link to="portfolio">
                    </Link>
                </li>
                <li>
                    <Link to="contact">
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AppBurger;