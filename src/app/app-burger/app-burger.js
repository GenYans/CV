import React from 'react';
import { Link } from "react-scroll";
import '../app-burger/app-burger.scss';

const AppBurger = () => {
    return (
        <div className='app-burger'>
            <ul>
                <li>
                    <Link 
                        to="skills"
                        spy={true}
                        smooth={true}
                        duration={500}
                        >
                        Стэк
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default AppBurger;