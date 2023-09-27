import '../app-about/app-about.scss'

const AppAbout = () => {
    return(
        <section className='about'>
            <div className="container">
                <div className="row">
                    <div className="about-me">
                        <div class="about-me-title">
                            <h1>Привет, меня зовут Геннадий</h1>
                        </div>
                        <div class="about-me-descr">
                            <p>Я переучился на front-end разработчика в ходе работы в инженерно-строительной сфере. Хоть у меня нет прямого опыта работы в IT-отрасли, я приобрел опыт работы с программами для моделирования и визуализации, что помогло мне лучше понять, как создавать функциональные и эстетически приятные интерфейсы.</p>
                        </div>
                    </div>
                    <div className="about-info">
                        <p>
                            <span class="span-title">Телефон</span>
                            <span>+7 (911) 112-07-62</span>
                        </p>
                        <p>
                            <span class="span-title">Email</span>
                            <a href="mailto:yanelisgen@gmail.com">yanelisgen@gmail.com</a>
                        </p>
                        <p>
                            <span class="span-title">Адрес</span>
                            <span>г. Санкт-Петербург, м. Чернышевская</span>
                        </p>
                        <p>
                            <span class="span-title">Social</span>
                            <span><ul>
                                    <li className='social'><a href="/"><img src="" alt="git" /></a></li>
                                    <li className='social'><a href="/"><img src="" alt="instagramm" /></a></li>
                                    <li className='social'><a href="/"><img src="" alt="facebook" /></a></li>
                                  </ul>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default AppAbout;