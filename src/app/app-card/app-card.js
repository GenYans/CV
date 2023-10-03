import '../app-card/app-card.scss'

import Marvel from '../../resources/img/marvel.png';

const AppCard = () => {
    return(
        <div className="cards-list">
            <a href='/' className="cards-list-block">
                <img src={Marvel} alt="marvel" />
                <div className="cards-list-block-name">“Marvel”</div>
            </a>   
            <div className="cards-list-block-data">Май, 2023</div>
        </div>
    )
};

export default AppCard;