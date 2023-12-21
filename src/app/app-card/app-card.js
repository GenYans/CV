import React, {useState} from 'react';

import '../app-card/app-card.scss'

import AppModalContact from '../app-modal-contact/app-modal-contact';

const AppCard = ({product}) => {
    const [modalActive, setModalActive] = useState(false);
    const {png, png2, png3, title, data, skills, descr, visit, href} = product;
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
                        <div className="modal-block-wrapper">
                            <div className="modal-block-name">Описание:</div>
                            <div className="modal-block-stack">{descr}</div>
                        </div>
                        <div className='modal-block-wrapper'>
                            <div className="modal-block-name">Стэк:</div>
                            <div className="modal-block-stack">{skills}</div>
                        </div>
                        <div className='modal-block-wrapper'>
                            <div className="modal-block-name">Дата:</div>
                            <div className="modal-block-data">{data}</div>
                        </div>
                        <div className="modal-block-image">
                            <img src={png2} alt={png2} />
                            <img src={png3} alt={png3} />
                        </div>
                        <div className="modal-block-btn">
                            <a target="blank" href={href}><button className='modal-block-btn-visit' >посетить {visit}</button></a>
                            <button onClick={() => setModalActive(false)} className='modal-block-btn-contact'>вернуться к резюме</button>
                        </div>
                        
                    </div>
                </AppModalContact>
            </div>    
        )
};

export default AppCard;