import '../app-cards/app-cards.scss'

import { useState } from 'react';

import data from '../../data';

import AppCard from '../app-card/app-card';
import Categories from '../../categories';


const AppCards = () => {

    const [card] = useState(data);

    function chooseCategory(categories) {
        console.log(categories)
    }

    const products = card.map((product) => {
        return <AppCard product={product} key={product.id}/>
    })

    return(
        <div id='portfolio' className="cards">
            <div className="container">
                <div className="cards-wrapper">
                    <div className="cards-title">Портфолио</div>
                    <ul className="cards-menu">
                        <Categories chooseCategory={chooseCategory}/>
                    </ul>
                    <div className="cards-portfolio">
                        {products}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AppCards;