import '../app-education/app-education.scss'

import Education from '../../resources/icons/education.svg'
import { useTranslation } from 'react-i18next';

const AppEducation = () => {

    const {t} = useTranslation();

    return(
       <div id='education' className="education">
            <div className="container">
                <div className="education-wrapper">
                <div className="education-about">
                        <div className="education-about-title">{t("education")}</div>
                        <div className="education-about-descr">{t("education_descr")}
                        </div>
 
                    </div>
                    <div className="education-studies">
                        <div className="education-studies-block">
                            <div id='studies-title-1' className="education-studies-title">{t("education_one_name")}<span>{t("education_one_degree")}</span></div>
                            <div className="education-studies-data">{t("education_one_date")}</div>
                            <div className="education-studies-descr">{t("education_one_descr")}</div>
                        </div>
                        <div className="education-studies-block">
                            <div id='studies-title-2' className="education-studies-title">{t("education_two_name")}<span>{t("education_two_degree")}</span></div>
                            <div className="education-studies-data">{t("education_two_date")}</div>
                            <div className="education-studies-descr">{t("education_two_descr")}</div>
                        </div>
                        <div className="education-studies-block">
                            <div id='studies-title-3' className="education-studies-title">{t("education_three_name")}<span>{t("education_three_degree")}</span></div>
                            <div className="education-studies-data">{t("education_three_date")}</div>
                            <div className="education-studies-descr">{t("education_three_descr")}</div>
                        </div>
                        <div className="education-studies-block">
                            <div id='studies-title-3' className="education-studies-title">{t("education_four_name")}<span>{t("education_four_degree")}</span></div>
                            <div className="education-studies-data">{t("education_four_date")}</div>
                            <div className="education-studies-descr">{t("education_four_descr")}</div>
                        </div>
                    </div>
                    <div className="education-logo">
                            <img src={Education} alt="bulb" />
                        </div>
                </div>
            </div>
       </div>
    )
};

export default AppEducation;