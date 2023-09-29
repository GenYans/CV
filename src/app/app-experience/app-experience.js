import '../app-experience/app-experience.scss'

import Experience from '../../resources/icons/experience.svg'

const AppExperience = () => {
    return(
       <section id='experience' className="experience">
            <div className="container">
                <div className="experience-wrapper">
                <div className="experience-about">
                        <div className="experience-about-title">Опыт</div>
                        <div className="experience-about-descr">Я переучился на front-end разработчика в ходе работы в инженерно-строительной сфере.Хоть у меня нет прямого опыта работы в IT-отрасли, я приобрел опыт работы с программами для моделирования и визуализации, что помогло мне лучше понять, как создавать функциональные и эстетически приятные интерфейсы.</div>
                        <div className="experience-about-logo">
                            <img src={Experience} alt="bulb" />
                        </div>
                    </div>
                    <div className="experience-studies">
                        <div className="experience-studies-block">
                            <div id='studies-title-1' className="experience-studies-title">Web Developer<span>Coolor Studio</span></div>
                            <div className="experience-studies-data">May, 2014 — Present</div>
                            <div className="experience-studies-descr">Designed and developed user-friendly website, including optimized check-out page that increased user
                            clicks, and subsequently customer purchases by 20%.</div>
                        </div>
                        <div className="experience-studies-block">
                            <div id='studies-title-2' className="experience-studies-title">Middle Frontend Developer<span>Illskill Agency</span></div>
                            <div className="experience-studies-data">Jan, 2013 — May, 2014</div>
                            <div className="experience-studies-descr">Leading a small team on a variety of development projects and delivering solutions to meet and exceed
                            clients’ briefs.</div>
                        </div>
                        <div className="experience-studies-block">
                            <div id='studies-title-3' className="experience-studies-title">IT Specialist<span>Motion Studio</span></div>
                            <div className="experience-studies-data">Dec, 2009 — Jan, 2013</div>
                            <div className="experience-studies-descr">Revamped web application security applications, minimizing hacker attacks from 2.3% to 0.02%.</div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
};

export default AppExperience;