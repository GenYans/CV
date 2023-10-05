import '../app-cards/app-cards.scss'

import { useState } from 'react';

import data from '../../data';

import AppCard from '../app-card/app-card';


const AppCards = () => {

    const [card] = useState(data);

    const products = card.map((product) => {
        return <AppCard product={product} key={product.id}/>
    }) 

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
                        {products}
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AppCards;