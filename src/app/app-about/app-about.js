import '../app-about/app-about.scss'

import React, {useState} from 'react';

import Man from '../../resources/img/man.png'
import AppModalContact from '../app-modal-contact/app-modal-contact';
import { useTranslation } from 'react-i18next';


const AppAbout = () => {
    const [modalActive, setModalActive] = useState(false);
    const {t} = useTranslation();
    return(
        <div id='hello' className='about'>
            <div className="container">
                <div className="row">
                    <div className="about-image">
                        <img src={Man} alt="man" />
                    </div>
                    <div className="about-me">
                        <div className="about-me-title">
                            <h1>{t("about")}</h1>
                        </div>
                        <div class="about-me-descr">
                            <p>{t("about_descr")}</p>
                        </div>
                        <div className="about-info">
                        <div className="about-social">
                            <p className="about-social-title">{t("about_phone")}</p>
                            <p className="about-social-subtitle">+7 (911) 112-07-62</p>

                            <p className="about-social-title">Email</p>
                            <p className="about-social-subtitle"><a href="mailto:yanelisgen@gmail.com">yanelisgen@gmail.com</a></p>

                            <p className="about-social-title">{t("about_address_title")}</p>
                            <p className="about-social-subtitle">{t("about_address_descr")}</p>

                            <p className="about-social-title">Social</p>
                            <p className="about-social-subtitle">
                                <span>
                                    <a className='about-social-logo' href="https://github.com/GenYans"><svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0.229527C7.1518 0.292124 4.78873 1.26239 2.9108 3.14033C1.03286 5.01826 0.0625978 7.38133 0 10.2295C0.0312989 12.483 0.672926 14.4549 1.92488 16.145C3.17684 17.8352 4.82003 19.0402 6.85446 19.76C7.07355 19.7913 7.23787 19.7522 7.34742 19.6427C7.45696 19.5331 7.51174 19.4001 7.51174 19.2436V17.5535C6.13459 17.7726 5.21909 17.6239 4.76526 17.1075C4.31142 16.591 4.10016 16.2859 4.13146 16.192C3.88106 15.6286 3.6385 15.2452 3.40376 15.0417C3.16901 14.8383 3.03599 14.7366 3.00469 14.7366C2.62911 14.4549 2.53521 14.2827 2.723 14.2201C2.9108 14.1575 3.03599 14.1262 3.09859 14.1262C3.59937 14.2201 3.97496 14.4079 4.22535 14.6896C4.47574 14.9713 4.60094 15.1278 4.60094 15.1591C5.07042 15.879 5.59468 16.2389 6.17371 16.2389C6.75274 16.2389 7.2144 16.1607 7.55869 16.0042C7.65258 15.3469 7.85603 14.8931 8.16901 14.6427C7.01095 14.5801 5.97809 14.2123 5.07042 13.5394C4.16275 12.8665 3.67762 11.591 3.61502 9.7131C3.61502 8.61763 3.95931 7.72561 4.64789 7.03704C4.58529 6.88054 4.52269 6.56756 4.46009 6.09807C4.3975 5.62859 4.49139 5.04956 4.74178 4.36098C4.74178 4.32968 4.96088 4.34533 5.39906 4.40793C5.83725 4.47053 6.54147 4.79917 7.51174 5.39385C8.29421 5.17475 9.12363 5.06521 10 5.06521C10.8764 5.06521 11.7058 5.17475 12.4883 5.39385C13.4585 4.79917 14.1628 4.47053 14.6009 4.40793C15.0391 4.34533 15.2582 4.32968 15.2582 4.36098C15.5086 5.04956 15.6103 5.62859 15.5634 6.09807C15.5164 6.56756 15.446 6.88054 15.3521 7.03704C16.0407 7.72561 16.385 8.61763 16.385 9.7131C16.3224 11.591 15.8372 12.8665 14.9296 13.5394C14.0219 14.2123 12.989 14.5801 11.831 14.6427C12.0188 14.7992 12.1753 15.0339 12.3005 15.3469C12.4257 15.6599 12.4883 16.0511 12.4883 16.5206V19.2436C12.4883 19.4001 12.543 19.5331 12.6526 19.6427C12.7621 19.7522 12.9421 19.7913 13.1925 19.76C15.1956 19.0402 16.8232 17.8352 18.0751 16.145C19.3271 14.4549 19.9687 12.483 20 10.2295C19.9374 7.38133 18.9671 5.01826 17.0892 3.14033C15.2113 1.26239 12.8482 0.292124 10 0.229527Z"/>
                                    </svg>
                                    </a>
                                    <a className='about-social-logo' href="/"><svg width="22" height="20" viewBox="0 0 21 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.27465 0H14.7254C16.3529 0.0312977 17.7144 0.594679 18.8099 1.69014C19.9053 2.7856 20.4687 4.1471 20.5 5.77465V14.2254C20.4687 15.8529 19.9053 17.2144 18.8099 18.3099C17.7144 19.4053 16.3529 19.9687 14.7254 20H6.27465C4.6471 19.9687 3.2856 19.4053 2.19014 18.3099C1.09468 17.2144 0.531299 15.8529 0.5 14.2254V5.77465C0.531299 4.1471 1.09468 2.7856 2.19014 1.69014C3.2856 0.594679 4.6471 0.0312977 6.27465 0ZM6.08685 1.97183C5.05399 2.00313 4.2011 2.35524 3.52817 3.02817C2.85524 3.7011 2.50313 4.55399 2.47183 5.58685V14.4131C2.50313 15.446 2.85524 16.2989 3.52817 16.9718C4.2011 17.6448 5.05399 17.9969 6.08685 18.0282H14.9131C15.946 17.9969 16.7989 17.6448 17.4718 16.9718C18.1448 16.2989 18.4969 15.446 18.5282 14.4131V5.58685C18.4969 4.55399 18.1448 3.7011 17.4718 3.02817C16.7989 2.35524 15.946 2.00313 14.9131 1.97183H6.08685ZM15.7582 3.47418C16.1025 3.50548 16.392 3.6385 16.6268 3.87324C16.8615 4.10798 16.9789 4.3975 16.9789 4.74178C16.9789 5.08607 16.8615 5.37559 16.6268 5.61033C16.392 5.84507 16.1025 5.96244 15.7582 5.96244C15.4139 5.96244 15.1244 5.84507 14.8897 5.61033C14.6549 5.37559 14.5376 5.08607 14.5376 4.74178C14.5376 4.3975 14.6549 4.10798 14.8897 3.87324C15.1244 3.6385 15.4139 3.50548 15.7582 3.47418ZM10.5 4.97653C11.9085 5.00782 13.09 5.50078 14.0446 6.4554C14.9992 7.41002 15.4922 8.59155 15.5235 10C15.4922 11.4085 14.9992 12.59 14.0446 13.5446C13.09 14.4992 11.9085 14.9922 10.5 15.0235C9.09155 14.9922 7.91002 14.4992 6.9554 13.5446C6.00078 12.59 5.50782 11.4085 5.47653 10C5.50782 8.59155 6.00078 7.41002 6.9554 6.4554C7.91002 5.50078 9.09155 5.00782 10.5 4.97653ZM10.5 6.99531C9.65493 7.0266 8.9507 7.32394 8.38732 7.88732C7.82394 8.4507 7.54225 9.15493 7.54225 10C7.54225 10.8451 7.82394 11.5493 8.38732 12.1127C8.9507 12.6761 9.65493 12.9577 10.5 12.9577C11.3451 12.9577 12.0493 12.6761 12.6127 12.1127C13.1761 11.5493 13.4577 10.8451 13.4577 10C13.4577 9.15493 13.1761 8.4507 12.6127 7.88732C12.0493 7.32394 11.3451 7.0266 10.5 6.99531Z"/>
                                    </svg>
                                    </a>
                                    <a className='about-social-logo' href="/"><svg width="10" height="20" viewBox="0 0 10 20" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M10 0.0467358V4.0187H7.99065C7.64797 4.04985 7.39875 4.2134 7.24299 4.50935C7.08723 4.8053 7.00935 5.14019 7.00935 5.51402V7.99066H10V12.0094H7.00935V19.9533H2.99065V12.0094H0V7.99066H2.99065V4.0187C3.02181 2.8972 3.41122 1.96262 4.15888 1.21496C4.90654 0.467297 5.8567 0.0778885 7.00935 0.0467358H10Z"/>
                                    </svg>
                                    </a>
                                </span>
                            </p>
                        </div>
                        
                        <div className="about-btn">
                            <button className='about-btn-contact' onClick={() => setModalActive(true)}>{t("about_address_btn1")}</button>
                            <button className='about-btn-download'> <a href="Резюме_Frontend_разработчик_Геннадии_Янелис.pdf" download>{t("about_address_btn2")}</a> </button>
                        </div>
                        <AppModalContact active={modalActive} setActive={setModalActive}>
                            <div className="modal-block">
                                <h1>{t("modal_title")}</h1>
                                <p>{t("modal_subtitle")}</p>
                            </div>
                            <div className="modal-wrapper">
                                <div className="contact-form">
                                    <div className="contact-form-block">
                                        <input className='contact-form-name' type="text" placeholder={t("name")}/>
                                        <input className='contact-form-email' type="text" placeholder="E-mail"/>
                                    </div>
                                    <div className="contact-form-block">
                                        <textarea className="contact-form-message" placeholder={t("message")}required=""></textarea>
                                    </div>
                                </div> 
                            </div>
                            <div className="modal-btn">
                                <form action="/">
                                    <button className='about-btn-contact'>{t("modal_btn")}</button>
                                </form>  
                                <form action="/">
                                    <button onClick={() => setModalActive(false)} className='modal-btn-contact'>{t("modal_btn2")}</button>
                                </form>
                                 
                            </div>
                        </AppModalContact>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AppAbout;