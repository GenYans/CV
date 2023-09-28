import '../app-header/app-header.scss';

import Logo from '../../resources/icons/logo.svg';


const AppHeader = () => {
    return(
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="header-menu">
                        <nav className="main-menu">
                            <div className='header-menu-logo'><a href="/"><img src={Logo} alt="logo" /></a></div>
                        <ul className="list-inline">
                            <li className='list-inline-item'><a href="#hello">Привет</a></li>
                            <li className='list-inline-item'><a href="#skills">Стэк</a></li>
                            <li className='list-inline-item'><a href="#experience">Опыт</a></li>
                            <li className='list-inline-item'><a href="#education">Образование</a></li>
                            <li className='list-inline-item'><a href="#portfolio">Портфолио</a></li>
                            <li className='list-inline-item'><a href="#contact">Контакты</a></li>
                        </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
    )
};

export default AppHeader;