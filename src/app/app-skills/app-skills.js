import '../app-skills/app-skills.scss'

import Bulb from '../../resources/icons/bulb.svg'

const AppSkills = () => {
    return(
       <section id='skills' className='skills'>
            <div className="container">
                <div className="skills-wrapper">
                <div className="skills-about">
                    <div className="skills-about-title">Стэк</div>
                    <div className="skills-about-descr">Я вдохновлен программированием и стремлюсь к развитию своих навыков в front-end разработке. Я люблю изучать новые технологии и подходы и делаю это фундаментально, чтобы глубоко понимать теорию и базовые концепции. Я уверен, что мой опыт и желание учиться новому сделают меня ценным активом для вашей команды.</div>
                    <div className="skills-about-logo">
                        <img src={Bulb} alt="bulb" />
                    </div>
                </div>
                    <div className="skills-programm">
                        <div className="skills-programm-block">
                            <div className="skills-programm-title">Web Development</div>
                            <div className="skills-programm-descr">JavaScript, Node.js.</div>
                        </div>
                        <div className="skills-programm-block">
                            <div className="skills-programm-title">UI\UX Design</div>
                            <div className="skills-programm-descr">Photoshop, Illustrator, Sketch, Axure, XMind,
                            Prototyping, Wireframing, User Research, Usability
                            Testing.
                            </div>
                        </div>
                        <div className="skills-programm-block">
                            <div className="skills-programm-title">Frontend Development</div>
                            <div className="skills-programm-descr">React.js, HTML, CSS, LESS, SASS, Bootstrap, Wordpress, Tilda, Shopify, Webflow, PageFly.</div>
                        </div>
                        <div className="skills-programm-block">
                            <div className="skills-programm-title">Consulting & SEO Audit
                            </div>
                            <div className="skills-programm-descr">Screaming Frog, Woorank, Raventools, Semrush,
                            Moz, WebCEO, Google Analytics, ChartBeat,
                            CrazyEgg.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
};

export default AppSkills;