import '../app-experience/app-experience.scss'

import Experience from '../../resources/icons/experience.svg'
import { useTranslation } from 'react-i18next';

const AppExperience = () => {

    const {t} = useTranslation();
    return(
       <div id='experience' className="experience">
            <div className="container">
                <div className="experience-wrapper">
                <div className="experience-about">
                        <div className="experience-about-title">{t("experience")}</div>
                        <div className="experience-about-descr">{t("experience_descr")}</div>

                    </div>
                    <div className="experience-studies">
                        <div className="experience-studies-block">
                            <div id='studies-title-1' className="experience-studies-title">{t("experience_one_name")}<span>{t("experience_one_company")}
                            </span></div>
                            <div className="experience-studies-data">{t("experience_one_date")}</div>
                            <div className="experience-studies-descr">
                                <ul className="experience-studies-item">
                                {t("experience_one_descr")}
                                </ul>
                            </div>
                        </div>
                        <div className="experience-studies-block">
                            <div id='studies-title-2' className="experience-studies-title">{t("experience_two_name")}<span>{t("experience_two_company")}</span></div>
                            <div className="experience-studies-data">{t("experience_two_date")}</div>
                            <div className="experience-studies-descr">{t("experience_two_descr")}
                            </div>
                        </div>
                        <div className="experience-studies-block">
                            <div id='studies-title-2' className="experience-studies-title">{t("experience_three_name")}</div>
                            <div className="experience-studies-data">{t("experience_three_date")}</div>
                            <div className="experience-studies-descr">{t("experience_three_descr")}
                            </div>
                        </div>
                    </div>
                    <div className="experience-about-logo">
                            <img src={Experience} alt="bulb" />
                        </div>
                </div>
            </div>
       </div>
    )
};

export default AppExperience;