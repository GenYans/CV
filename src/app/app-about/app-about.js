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
                        <div className="about-me-descr">
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
                                    <a target="blank" className='about-social-logo' href="https://github.com/GenYans"><svg width="20" height="20" viewBox="0 0 20 20">
                                    <path d="M10 0.229527C7.1518 0.292124 4.78873 1.26239 2.9108 3.14033C1.03286 5.01826 0.0625978 7.38133 0 10.2295C0.0312989 12.483 0.672926 14.4549 1.92488 16.145C3.17684 17.8352 4.82003 19.0402 6.85446 19.76C7.07355 19.7913 7.23787 19.7522 7.34742 19.6427C7.45696 19.5331 7.51174 19.4001 7.51174 19.2436V17.5535C6.13459 17.7726 5.21909 17.6239 4.76526 17.1075C4.31142 16.591 4.10016 16.2859 4.13146 16.192C3.88106 15.6286 3.6385 15.2452 3.40376 15.0417C3.16901 14.8383 3.03599 14.7366 3.00469 14.7366C2.62911 14.4549 2.53521 14.2827 2.723 14.2201C2.9108 14.1575 3.03599 14.1262 3.09859 14.1262C3.59937 14.2201 3.97496 14.4079 4.22535 14.6896C4.47574 14.9713 4.60094 15.1278 4.60094 15.1591C5.07042 15.879 5.59468 16.2389 6.17371 16.2389C6.75274 16.2389 7.2144 16.1607 7.55869 16.0042C7.65258 15.3469 7.85603 14.8931 8.16901 14.6427C7.01095 14.5801 5.97809 14.2123 5.07042 13.5394C4.16275 12.8665 3.67762 11.591 3.61502 9.7131C3.61502 8.61763 3.95931 7.72561 4.64789 7.03704C4.58529 6.88054 4.52269 6.56756 4.46009 6.09807C4.3975 5.62859 4.49139 5.04956 4.74178 4.36098C4.74178 4.32968 4.96088 4.34533 5.39906 4.40793C5.83725 4.47053 6.54147 4.79917 7.51174 5.39385C8.29421 5.17475 9.12363 5.06521 10 5.06521C10.8764 5.06521 11.7058 5.17475 12.4883 5.39385C13.4585 4.79917 14.1628 4.47053 14.6009 4.40793C15.0391 4.34533 15.2582 4.32968 15.2582 4.36098C15.5086 5.04956 15.6103 5.62859 15.5634 6.09807C15.5164 6.56756 15.446 6.88054 15.3521 7.03704C16.0407 7.72561 16.385 8.61763 16.385 9.7131C16.3224 11.591 15.8372 12.8665 14.9296 13.5394C14.0219 14.2123 12.989 14.5801 11.831 14.6427C12.0188 14.7992 12.1753 15.0339 12.3005 15.3469C12.4257 15.6599 12.4883 16.0511 12.4883 16.5206V19.2436C12.4883 19.4001 12.543 19.5331 12.6526 19.6427C12.7621 19.7522 12.9421 19.7913 13.1925 19.76C15.1956 19.0402 16.8232 17.8352 18.0751 16.145C19.3271 14.4549 19.9687 12.483 20 10.2295C19.9374 7.38133 18.9671 5.01826 17.0892 3.14033C15.2113 1.26239 12.8482 0.292124 10 0.229527Z"/>
                                    </svg>
                                    </a>
                                    <a target="blank" className='about-social-logo' href="https://t.me/@genyanelis"><svg width="20" height="20" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M10 0C4.47734 0 0 4.47734 0 10C0 15.5227 4.47734 20 10 20C15.5227 20 20 15.5227 20 10C20 4.47734 15.5227 0 10 0ZM14.6352 6.80078C14.4848 8.38203 13.8336 12.2191 13.5023 13.9902C13.3621 14.7398 13.0859 14.991 12.8188 15.0156C12.2383 15.0691 11.7973 14.6316 11.2348 14.2629C10.3547 13.6859 9.85742 13.327 9.00312 12.7641C8.01562 12.1133 8.65586 11.7559 9.21836 11.1715C9.36563 11.0184 11.9242 8.69102 11.9738 8.48008C11.9801 8.45352 11.9859 8.35508 11.9273 8.30312C11.8687 8.25117 11.7824 8.26914 11.7203 8.2832C11.632 8.30313 10.2258 9.23242 7.50234 11.0711C7.10312 11.3453 6.7418 11.4785 6.41758 11.4719C6.06055 11.4641 5.37383 11.2699 4.86328 11.1039C4.23711 10.9004 3.73945 10.7926 3.78281 10.4469C3.80508 10.2668 4.05312 10.0828 4.52656 9.89453C7.4418 8.62422 9.38555 7.78711 10.3582 7.38242C13.1355 6.22738 13.7125 6.02656 14.0886 6.01992C14.5598 6.0116 14.6735 6.40051 14.6352 6.80078Z" fill="black"/>
                                    </svg>
                                    </a>
                                    <a target="blank" className='about-social-logo' href="https://wa.me/89111120762"><svg width="20" height="20" viewBox="0 0 20 20">
                                    <path d="M10 0C4.47801 0 0 4.47801 0 10C0 15.522 4.47801 20 10 20C15.522 20 20 15.522 20 10C20 4.47801 15.522 0 10 0ZM10.212 15.8223C10.2121 15.8223 10.2118 15.8223 10.212 15.8223H10.2095C9.20777 15.8219 8.22344 15.5707 7.34926 15.094L4.17648 15.9261L5.02563 12.8255C4.5018 11.9182 4.22621 10.8888 4.22668 9.8343C4.22805 6.53535 6.91301 3.85148 10.212 3.85148C11.8129 3.85207 13.3157 4.47523 14.4457 5.60609C15.5757 6.73707 16.1977 8.24035 16.1971 9.83902C16.1957 13.1381 13.5104 15.8223 10.2119 15.8223L10.212 15.8223Z" fill="black"/>
                                    <path d="M10.2141 4.86206C7.47012 4.86206 5.23855 7.09272 5.2373 9.83472C5.23703 10.7744 5.50008 11.6894 5.99797 12.4812L6.11621 12.6694L5.61359 14.5045L7.49641 14.0108L7.67812 14.1185C8.4418 14.5717 9.31738 14.8114 10.21 14.8117H10.212C12.9538 14.8117 15.1854 12.5808 15.1866 9.8387C15.1871 8.50979 14.6702 7.26042 13.731 6.3205C12.7918 5.38054 11.5427 4.86249 10.2141 4.86206ZM13.1402 11.9728C13.0155 12.3219 12.4181 12.6407 12.1308 12.6837C11.873 12.7221 11.5471 12.7382 11.1889 12.6245C10.9716 12.5555 10.6931 12.4635 10.3362 12.3096C8.83609 11.662 7.85633 10.152 7.78156 10.0521C7.7068 9.95237 7.1709 9.24147 7.1709 8.50554C7.1709 7.76976 7.55723 7.408 7.6943 7.25843C7.83144 7.10874 7.99352 7.07136 8.09313 7.07136C8.19277 7.07136 8.29258 7.07229 8.37973 7.07655C8.47156 7.08112 8.59484 7.04163 8.71617 7.33319C8.84082 7.63261 9.13992 8.36835 9.1773 8.44315C9.21469 8.51804 9.23953 8.60534 9.1898 8.70515C9.13992 8.80491 8.97418 9.02022 8.81598 9.21647C8.74957 9.2987 8.66309 9.37194 8.75035 9.52163C8.83746 9.67116 9.13777 10.1608 9.58227 10.5573C10.1536 11.0666 10.6354 11.2244 10.785 11.2993C10.9343 11.3741 11.0216 11.3615 11.1089 11.2619C11.196 11.1621 11.4827 10.8253 11.5823 10.6757C11.682 10.526 11.7818 10.551 11.9188 10.6009C12.056 10.6506 12.7912 11.0124 12.9407 11.0872C13.0902 11.1621 13.1899 11.1995 13.2273 11.2619C13.2648 11.3243 13.2648 11.6235 13.1402 11.9728Z" fill="black"/>
                                    </svg>
                                    </a>
                                    <a target="blank" className='about-social-logo' href="https://vk.com/gennadyanelis"><svg width="20" height="20" viewBox="0 0 20 20">
                                    <path d="M10 0C8.02219 0 6.08879 0.58649 4.4443 1.6853C2.79981 2.78412 1.51809 4.3459 0.761209 6.17316C0.00433288 8.00043 -0.1937 10.0111 0.192152 11.9509C0.578004 13.8907 1.53041 15.6725 2.92894 17.0711C4.32746 18.4696 6.10929 19.422 8.0491 19.8078C9.98891 20.1937 11.9996 19.9957 13.8268 19.2388C15.6541 18.4819 17.2159 17.2002 18.3147 15.5557C19.4135 13.9112 20 11.9778 20 10C20 7.34783 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0ZM15.7636 13.9136C15.4727 13.9545 14.05 13.9136 13.9761 13.9136C13.6083 13.9185 13.2535 13.778 12.9886 13.5227C12.6886 13.233 12.4205 12.9148 12.1273 12.6136C12.0409 12.5212 11.947 12.4361 11.8466 12.3591C11.6125 12.1795 11.3807 12.2193 11.2705 12.4966C11.1844 12.795 11.1243 13.1003 11.0909 13.4091C11.0716 13.6886 10.8943 13.8636 10.5807 13.883C10.3864 13.8932 10.192 13.8977 10 13.892C9.30003 13.8882 8.61101 13.718 7.98977 13.3955C7.31741 13.0212 6.73155 12.5093 6.27046 11.8932C5.5125 10.925 4.90682 9.86136 4.36591 8.76477C4.3375 8.70909 3.78296 7.52954 3.76932 7.47386C3.71932 7.28863 3.76932 7.11023 3.92273 7.04773C4.02046 7.01023 5.84773 7.04773 5.87841 7.04773C6.01436 7.0468 6.14707 7.08913 6.25738 7.16859C6.36769 7.24805 6.44987 7.36053 6.49205 7.48977C6.83013 8.35454 7.29258 9.16535 7.86478 9.89659C7.94493 9.99399 8.0387 10.0793 8.14318 10.15C8.29205 10.2523 8.43296 10.217 8.49432 10.0443C8.56713 9.80626 8.60988 9.56003 8.62159 9.31136C8.63182 8.81818 8.62159 8.49432 8.59432 8.00114C8.57614 7.68523 8.46478 7.40909 7.99887 7.31932C7.85568 7.29318 7.84318 7.175 7.93523 7.05682C8.12728 6.8125 8.38977 6.77273 8.68409 6.75795C9.12273 6.73295 9.56137 6.75 10 6.75795H10.0955C10.2864 6.75726 10.4768 6.77668 10.6636 6.81591C10.7742 6.83847 10.8745 6.89612 10.9496 6.98027C11.0248 7.06442 11.0707 7.17058 11.0807 7.28295C11.1032 7.40738 11.1128 7.53382 11.1091 7.66023C11.0977 8.19773 11.0716 8.73636 11.0659 9.27386C11.0606 9.48713 11.0801 9.7003 11.1239 9.90909C11.1864 10.1955 11.383 10.267 11.5784 10.0602C11.8317 9.79346 12.0639 9.50737 12.2727 9.20454C12.6429 8.65258 12.948 8.05962 13.1818 7.4375C13.3091 7.11818 13.4091 7.04773 13.75 7.04773H15.6886C15.8039 7.0457 15.9188 7.06103 16.0295 7.09318C16.0687 7.10348 16.1054 7.12176 16.1372 7.14687C16.169 7.17199 16.1952 7.20339 16.2143 7.23913C16.2334 7.27487 16.2449 7.31416 16.2481 7.35455C16.2513 7.39494 16.2462 7.43556 16.233 7.47386C16.1375 7.89886 15.908 8.26136 15.6648 8.61023C15.2705 9.16818 14.8545 9.7125 14.4511 10.2636C14.4026 10.3349 14.3582 10.4089 14.3182 10.4852C14.1659 10.7602 14.1773 10.9136 14.3977 11.1409C14.75 11.5034 15.1261 11.842 15.4659 12.2148C15.7151 12.486 15.9402 12.7784 16.1386 13.0886C16.3807 13.4795 16.2273 13.8477 15.7636 13.9136Z" fill="white"/>
                                    </svg>

                                    </a>
                                    <a target="blank" className='about-social-logo' href="https://instagram.com/@gennadyanelis"><svg width="20" height="20" viewBox="0 0 20 20">
                                    <path d="M11.9141 10C11.9141 11.0571 11.0571 11.9141 10 11.9141C8.94289 11.9141 8.08594 11.0571 8.08594 10C8.08594 8.94289 8.94289 8.08594 10 8.08594C11.0571 8.08594 11.9141 8.94289 11.9141 10Z" fill="black"/>
                                    <path d="M14.4765 6.61346C14.3844 6.36404 14.2376 6.13842 14.0469 5.95318C13.8617 5.76244 13.6361 5.61566 13.3867 5.52365C13.1843 5.4451 12.8804 5.35154 12.3205 5.32607C11.7149 5.29846 11.5333 5.29248 10.0001 5.29248C8.46678 5.29248 8.28522 5.2983 7.67975 5.32592C7.1199 5.35154 6.81576 5.44506 6.61361 5.52365C6.36416 5.61562 6.13852 5.76241 5.95334 5.95318C5.7626 6.13842 5.61577 6.36404 5.52365 6.61346C5.4451 6.8158 5.35154 7.1199 5.32607 7.67975C5.29846 8.28521 5.29248 8.46678 5.29248 10.0001C5.29248 11.5333 5.29846 11.7149 5.32607 12.3205C5.35154 12.8804 5.4451 13.1844 5.52365 13.3867C5.61572 13.6361 5.76249 13.8617 5.95318 14.0469C6.13839 14.2377 6.36402 14.3845 6.61346 14.4765C6.8158 14.5552 7.1199 14.6487 7.67975 14.6742C8.28522 14.7018 8.46662 14.7076 9.99998 14.7076C11.5335 14.7076 11.7151 14.7018 12.3204 14.6742C12.8802 14.6487 13.1844 14.5552 13.3867 14.4765C13.6343 14.3809 13.8592 14.2346 14.0469 14.0469C14.2346 13.8592 14.3809 13.6343 14.4765 13.3867C14.555 13.1843 14.6486 12.8804 14.6742 12.3205C14.7018 11.7149 14.7076 11.5333 14.7076 10.0001C14.7076 8.46678 14.7018 8.28521 14.6742 7.67975C14.6487 7.1199 14.5552 6.81576 14.4765 6.61346ZM10.0001 12.9486C8.37158 12.9486 7.05139 11.6285 7.05139 9.99998C7.05139 8.37143 8.37158 7.05139 10.0001 7.05139C11.6286 7.05139 12.9487 8.37143 12.9487 9.99998C12.9487 11.6285 11.6286 12.9486 10.0001 12.9486ZM13.0653 7.62389C12.6848 7.62389 12.3763 7.31533 12.3763 6.93482C12.3763 6.55432 12.6848 6.24572 13.0653 6.24572C13.4459 6.24572 13.7544 6.55424 13.7544 6.93479C13.7542 7.31533 13.4459 7.62389 13.0653 7.62389Z" fill="black"/>
                                    <path d="M10 0C4.47801 0 0 4.47801 0 10C0 15.522 4.47801 20 10 20C15.522 20 20 15.522 20 10C20 4.47801 15.522 0 10 0ZM15.7075 12.3674C15.6798 12.9787 15.5826 13.396 15.4407 13.7613C15.2931 14.1427 15.0676 14.4892 14.7784 14.7784C14.4892 15.0676 14.1427 15.2931 13.7613 15.4407C13.3961 15.5826 12.9787 15.6796 12.3675 15.7075C11.7552 15.7355 11.5596 15.7422 10.0002 15.7422C8.44055 15.7422 8.24508 15.7355 7.63258 15.7075C7.02148 15.6796 6.60402 15.5826 6.23883 15.4407C5.85563 15.2965 5.50852 15.0705 5.22172 14.7783C4.92964 14.4915 4.70364 14.1444 4.55949 13.7613C4.41758 13.3961 4.32039 12.9787 4.29262 12.3675C4.26437 11.755 4.25781 11.5595 4.25781 10C4.25781 8.44055 4.26438 8.24492 4.29246 7.63262C4.3202 7.02133 4.41727 6.60402 4.55918 6.23871C4.70338 5.85554 4.92947 5.50847 5.22168 5.22172C5.50844 4.92954 5.85553 4.70348 6.23871 4.55934C6.60402 4.41742 7.02133 4.32039 7.63262 4.29246C8.24492 4.26453 8.44055 4.25781 10 4.25781C11.5595 4.25781 11.7551 4.26453 12.3674 4.29258C12.9787 4.32039 13.396 4.41742 13.7613 4.55918C14.1445 4.7034 14.4916 4.92949 14.7785 5.22168C15.0706 5.50848 15.2965 5.85557 15.4407 6.23871C15.5827 6.60402 15.6798 7.02133 15.7077 7.63262C15.7356 8.24492 15.7422 8.44055 15.7422 10C15.7422 11.5595 15.7356 11.7551 15.7075 12.3674Z" fill="black"/>
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
                                        <textarea className="contact-form-message" placeholder={t("message")}></textarea>
                                    </div>
                                </div> 
                            </div>
                            <div className="modal-btn">
                                <form action="/">
                                    <button className='about-btn-contact'>{t("modal_btn")}</button>
                                </form>  
                                <form action="/">
                                    <button className='modal-btn-contact'>{t("modal_btn2")}</button>
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