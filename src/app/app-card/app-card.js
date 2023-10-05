import '../app-card/app-card.scss'

const AppCard = ({product}) => {
    const {png, title, data} = product;
        return(
            <div className="cards-list">
                <a href='/' className="cards-list-block">
                    <img src={`${png}`} alt={title} />
                    <div className="cards-list-block-name">{title}</div>
                </a>   
                <div className="cards-list-block-data">{data}</div>
            </div>    
        )
};

export default AppCard;