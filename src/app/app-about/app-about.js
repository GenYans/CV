import '../app-about/app-about.scss'

import Git from '../../resources/icons/git.svg'
import Inst from '../../resources/icons/inst.svg'
import Facebook from '../../resources/icons/facebook.svg'
import Man from '../../resources/img/man.png'


const AppAbout = () => {
    return(
        <section id='hello' className='about'>
            <div className="container">
                <div className="row">
                    <div className="about-image">
                        <img src={Man} alt="man" />
                    </div>
                    <div className="about-me">
                        <div class="about-me-title">
                            <h1>Привет, меня зовут Геннадий</h1>
                        </div>
                        <div class="about-me-descr">
                            <p>Я переучился на front-end разработчика в ходе работы в инженерно-строительной сфере. Хоть у меня нет прямого опыта работы в IT-отрасли, я приобрел опыт работы с программами для моделирования и визуализации, что помогло мне лучше понять, как создавать функциональные и эстетически приятные интерфейсы.</p>
                        </div>
                        <div className="about-info">
                        <div className="about-social">
                            <p className="about-social-title">Телефон</p>
                            <p className="about-social-subtitle">+7 (911) 112-07-62</p>

                            <p className="about-social-title">Email</p>
                            <p className="about-social-subtitle"><a href="mailto:yanelisgen@gmail.com">yanelisgen@gmail.com</a></p>

                            <p className="about-social-title">Адрес</p>
                            <p className="about-social-subtitle">г. Санкт-Петербург, м. Чернышевская</p>

                            <p className="about-social-title">Social</p>
                            <p className="about-social-subtitle">
                                <span>
                                    <a href="https://github.com/GenYans"><img className='about-social-icon' src={Git} alt="git" /></a>
                                    <a href="/"><img className='about-social-icon' src={Inst} alt="instagramm" /></a>
                                    <a href="/"><img className='about-social-icon' src={Facebook} alt="facebook" /></a>
                                </span>
                            </p>
                        </div>
                        
                        <div className="about-btn">
                            <button className='about-btn-contact'>связаться со мной</button>
                            <button className='about-btn-download'>скачать резюме</button>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default AppAbout;