import React, {useState} from 'react';

import '../app-card/app-card.scss'

import AppModalContact from '../app-modal-contact/app-modal-contact';

const AppCard = ({product}) => {
    const [modalActive, setModalActive] = useState(false);
    const {png, title, data, skills} = product;
        return(
            <div className="cards-list">
                <button onClick={() => setModalActive(true)} className="cards-list-block">
                    <div className='cards-wrapper'>
                        <img src={`${png}`} alt={title} className='cards-wrapper-block' />
                    </div>
                    <div className="cards-list-block-name">{title}</div>
                </button>   
                <div className="cards-list-block-data">{data}</div>
                <AppModalContact active={modalActive} setActive={setModalActive}>
                    <div className="modal-block">
                        <h1 className='modal-block-title'>{title}</h1>
                        <p>Are you working on something great? I would love to help make it happen! Drop me a letter and start your project right now! Just do it.</p>
                        <div className='modal-block-wrapper'>
                            <div className="modal-block-name">Stack:</div>
                            <div className="modal-block-stack">{skills}</div>
                        </div>
                        <div className='modal-block-wrapper'>
                            <div className="modal-block-name">Data:</div>
                            <div className="modal-block-data">{data}</div>
                        </div>
                        <div className="modal-block-image">
                            <img src={png} alt={title} />
                            <img src={png} alt={title} />
                        </div>
                        <div className="modal-block-btn">
                            <button className='modal-btn-visit' >посетить сайт</button>
                            <button className='modal-btn-back'>вернуться к резюме</button>
                        </div>
                        
                    </div>
                </AppModalContact>
            </div>    
        )
};

export default AppCard;