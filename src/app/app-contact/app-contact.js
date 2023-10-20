import Contact from '../../resources/icons/contact.svg'

import '../app-contact/app-contact.scss'

import LogoWhite from '../../resources/icons/logo-white.svg';
import GitWhite from '../../resources/icons/git-white.svg'
import InstWhite from '../../resources/icons/inst-white.svg'
import FacebookWhite from '../../resources/icons/facebook-white.svg'
import { useTranslation } from 'react-i18next';

const AppContact = () => {

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
                        <textarea class="contact-form-message" placeholder={t("message")} required=""></textarea>
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
                        <a href="/"><img className='footer-logo' src={LogoWhite} alt="LogoWhite" /></a>
                        <ul className="footer-list">
                            <a href="/"><li className="footer-list-item">{t("confidentiality")}</li></a>
                            <a href="/"><li className="footer-list-item">Copyright 2023 Gennady Yanelis</li></a>
                        </ul>
                        <ul className="footer-social">
                            <a href="/"><li className="footer-social-item"><img src={GitWhite} alt="git" /></li></a>
                            <a href="/"><li className="footer-social-item"><img src={InstWhite} alt="git" /></li></a>
                            <a href="/"><li className="footer-social-item"><img src={FacebookWhite} alt="git" /></li></a>
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