import Contact from '../../resources/icons/contact.svg'

import '../app-contact/app-contact.scss'

import LogoWhite from '../../resources/icons/logo-white.svg';
import GitWhite from '../../resources/icons/git-white.svg'
import Inst from '../../resources/icons/inst.svg'
import Telegramm from '../../resources/icons/tg.svg'
import Vk from '../../resources/icons/vk.svg'
import Wap from '../../resources/icons/wap.svg'
import { useTranslation } from 'react-i18next';
import { animateScroll as scroll } from "react-scroll";

const AppContact = () => {

    function scrollToTop () {
        scroll.scrollToTop();
    }

    const {t, i18n} = useTranslation();

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    }

    return(
       <div id='contact' className='contact'>
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-about">
                        <div className="contact-about-title">{t("contacts")}</div>
                            <div className="contact-about-descr">{t("contacts_descr")}
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="contact-form-block">
                            <input className='contact-form-name' type="text" placeholder={t("name")}/>
                            <input className='contact-form-email' type="text" placeholder="E-mail"/>
                        </div>
                        <textarea className="contact-form-message" placeholder={t("message")}></textarea>
                    </div>
                    <div className="contact-block-logo">
                        <img src={Contact} alt="contact" />
                    </div>  
                    <div className="contact-block-btn">
                        <button className='about-btn-contact'>{t("contact_btn")}</button>   
                    </div>  
                </div>
            </div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-wrapper">
                        <img onClick={scrollToTop} className='footer-logo' src={LogoWhite} alt="LogoWhite" />
                        <ul className="footer-list">
                            <a href="/"><li className="footer-list-item">{t("confidentiality")}</li></a>
                            <a href="/"><li className="footer-list-item">Copyright 2023 Gennady Yanelis</li></a>
                        </ul>
                        <ul className="footer-social">
                            <a target="blank" href="https://github.com/GenYans"><li className="footer-social-item"><img src={GitWhite} alt="git" /></li></a>
                            <a target="blank" href="https://t.me/@genyanelis"><li className="footer-social-item"><img src={Telegramm} alt="tg" /></li></a>
                            <a target="blank" href="https://wa.me/89111120762"><li className="footer-social-item"><img src={Wap} alt="wap" /></li></a>
                            <a target="blank" href="https://vk.com/gennadyanelis"><li className="footer-social-item"><img src={Vk} alt="vk" /></li></a>
                            <a target="blank" href="https://instagram.com/@gennadyanelis"><li className="footer-social-item"><img src={Inst} alt="inst" /></li></a>
                        </ul>
                    </div>
                    <div className="footer-language">
                        <button onClick={() => changeLanguage("ru")} className='footer-btn'>RU</button>
                        <button onClick={() => changeLanguage("en")} className='footer-btn'>EN</button>
                    </div>
                </div>
            </footer>
       </div>
    )
};

export default AppContact;