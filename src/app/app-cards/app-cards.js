import '../app-cards/app-cards.scss'

import AppCard from '../app-card/app-card';

const AppCards = () => {
    return(
        <section id='portfolio' className="cards">
            <div className="container">
                <div className="cards-wrapper">
                    <div className="cards-title">Портфолио</div>
                    <ul className="cards-menu">
                        <li className="cards-menu-list"><a href="/">Все проекты</a></li>
                        <li className="cards-menu-list"><a href="/">Cайты</a></li>
                        <li className="cards-menu-list"><a href="/">Html/css</a></li>
                        <li className="cards-menu-list"><a href="/">JavaScript</a></li>
                        <li className="cards-menu-list"><a href="/">React</a></li>
                        <li className="cards-menu-list"><a href="/">Tilda</a></li>
                        <li className="cards-menu-list"><a href="/">Shopify</a></li>
                    </ul>
                    <div className="cards-portfolio">
                        <AppCard/>
                        <AppCard/>
                        <AppCard/>
                        <AppCard/>
                        <AppCard/>
                        <AppCard/>
                        <AppCard/>
                        <AppCard/>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AppCards;