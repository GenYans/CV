import Contact from '../../resources/icons/contact.svg'

import '../app-contact/app-contact.scss'

import LogoWhite from '../../resources/icons/logo-white.svg';
import GitWhite from '../../resources/icons/git-white.svg'
import InstWhite from '../../resources/icons/inst-white.svg'
import FacebookWhite from '../../resources/icons/facebook-white.svg'

const AppContact = () => {
    return(
       <section id='contact' className='contact'>
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-about">
                        <div className="contact-about-title">Контакты</div>
                            <div className="contact-about-descr">Спасибо что ознакомились с моим резюме. Если я заинтересовал вас, вы можете связаться со мной
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="contact-form-block">
                            <input className='contact-form-name' type="text" placeholder="Name"/>
                            <input className='contact-form-email' type="text" placeholder="E-mail"/>
                        </div>
                        <div className="contact-form-block">
                            <textarea class="contact-form-message" placeholder="Message" required=""></textarea>
                        </div>
                    </div>
                    <div className="contact-block-logo">
                        <img src={Contact} alt="contact" />
                    </div>  
                    <div className="contact-block-btn">
                        <button className='about-btn-contact'>отправить сообщение</button>   
                    </div>  
                </div>
            </div>
            <footer class="footer">
                <div class="container">
                    <div class="footer-wrapper">
                        <img className='footer-logo' src={LogoWhite} alt="LogoWhite" />
                        <ul className="footer-list">
                            <a href="/"><li className="footer-list-item">Конфиденциальность</li></a>
                            <a href="/"><li className="footer-list-item">Copyright 2023 Gennady Yanelis</li></a>
                        </ul>
                        <ul className="footer-social">
                            <a href="/"><li className="footer-social-item"><img src={GitWhite} alt="git" /></li></a>
                            <a href="/"><li className="footer-social-item"><img src={InstWhite} alt="git" /></li></a>
                            <a href="/"><li className="footer-social-item"><img src={FacebookWhite} alt="git" /></li></a>
                        </ul>
                    </div>
                    <div className="footer-language">
                        <button className='footer-btn'>RU</button>
                        <button className='footer-btn'>EN</button>
                    </div>
                </div>
            </footer>
       </section>
    )
};

export default AppContact;