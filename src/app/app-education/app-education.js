import '../app-education/app-education.scss'

import Education from '../../resources/icons/education.svg'

const AppEducation = () => {
    return(
       <div id='education' className="education">
            <div className="container">
                <div className="education-wrapper">
                <div className="education-about">
                        <div className="education-about-title">Образование</div>
                        <div className="education-about-descr">Я уверен, что мой опыт и желание учиться новому сделают меня ценным активом для вашей команды. Я готов работать над проектами, которые будут не только инновационными, но и полезными для пользователей.
                        <div className="education-about-logo">
                            <img src={Education} alt="bulb" />
                        </div>
                        </div>
                        
                    </div>
                    <div className="education-studies">
                        <div className="education-studies-block">
                            <div id='studies-title-1' className="education-studies-title">СПБГАУ<span>Диплом бакалавра</span></div>
                            <div className="education-studies-data">Сентябрь, 2014 — Июнь, 2018</div>
                            <div className="education-studies-descr">Обучался в Санкт-Петербургском Государственном Аграрном университете на факультете: Промышленное гражданское строительство</div>
                        </div>
                        <div className="education-studies-block">
                            <div id='studies-title-2' className="education-studies-title">СПБПУ Петра Великого<span>Диплом магистра</span></div>
                            <div className="education-studies-data">Сентябрь, 2018 — Июнь, 2020</div>
                            <div className="education-studies-descr">Окончил Санкт-Петербургский политехнический университет Петра Великого факультет: Градостроительство</div>
                        </div>
                        <div className="education-studies-block">
                            <div id='studies-title-3' className="education-studies-title">UDEMY WEB-разработчик<span>Курсы</span></div>
                            <div className="education-studies-data">Август, 2022 — Декабрь, 2022</div>
                            <div className="education-studies-descr">Окончил Санкт-Петербургский политехнический университет Петра Великого факультет: Градостроительство</div>
                        </div>
                        <div className="education-studies-block">
                            <div id='studies-title-3' className="education-studies-title">UDEMY Полный курс по JavaScript + React<span>Курсы</span></div>
                            <div className="education-studies-data">Январь, 2023 — Июль, 2023</div>
                            <div className="education-studies-descr">Окончил Санкт-Петербургский политехнический университет Петра Великого факультет: Градостроительство</div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
    )
};

export default AppEducation;