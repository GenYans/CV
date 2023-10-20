import '../app-skills/app-skills.scss'

import Bulb from '../../resources/icons/bulb.svg'
import { useTranslation } from 'react-i18next';

const AppSkills = () => {
    const {t} = useTranslation();
    return(
       <section id='skills' className='skills'>
            <div className="container">
                <div className="skills-wrapper">
                <div className="skills-about">
                    <div className="skills-about-title">{t("skills")}</div>
                    <div className="skills-about-descr">{t("skills_descr")}</div>
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
                    <div className="skills-about-logo">
                        <img src={Bulb} alt="bulb" />
                    </div>
                </div>
            </div>
       </section>
    )
};

export default AppSkills;