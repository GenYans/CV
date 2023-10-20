import '../app-cards/app-cards.scss'

import { useState } from 'react';

import data from '../../data';

import AppCard from '../app-card/app-card';
import Categories from '../../categories';
import { useTranslation } from 'react-i18next';


const AppCards = () => {

    const {t} = useTranslation();

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
                    <div className="cards-title">{t("portfolio")}</div>
                    <ul className="cards-menu"><div className="all">{t("all")}</div>
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