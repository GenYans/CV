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
                            <div id='studies-title-1' className="experience-studies-title">Инженер ПТО<span>ООО "НЭНСИ"
                            </span></div>
                            <div className="experience-studies-data">Сентябрь, 2019 — Май, 2021</div>
                            <div className="experience-studies-descr">
                                <ul className="experience-studies-item">
                                    <li>Рассмотрение и согласование проектных решений возникающих в ходе проектирования объекта;</li>
                                    <li>Подготовка, ведение и сдача в производство эскизных и рабочих чертежей изделий
                                различной степени сложности при вводе заказа.</li>
                                    <li>Создание фотораскроев и визуализаций проектов из натурального камня;</li>
                                    <li>Подготовка необходимых документов для Заказчика, монтажного отдела, Отдела продаж и
                                производства;</li>
                                    <li>Расчёт объемов;</li>
                                    <li>Участие в решении вопросов о внесении в проект изменений и дополнений;</li>
                                    <li>Ведение документации, необходимой для сдачи заказа</li>
                                </ul>
                            </div>
                        </div>
                        <div className="experience-studies-block">
                            <div id='studies-title-2' className="experience-studies-title">Ведущий специалист<span>ЛО ГУП «Недвижимость»</span></div>
                            <div className="experience-studies-data">Май 2021 — настоящее время</div>
                            <div className="experience-studies-descr">Ленинградское областное государственное унитарное предприятие технической инвентаризации и оценки недвижимости
                            </div>
                        </div>
                        <div className="experience-studies-block">
                            <div id='studies-title-2' className="experience-studies-title">Индивидуальное предпринимательство / частная практика /
                            фриланс</div>
                            <div className="experience-studies-data">Май 2022 — настоящее время 1 год 5 месяцев</div>
                            <div className="experience-studies-descr">Разработчик фронтэнда. Разработка сайтов на WebFlow и интеграция в Shopify.Изготовление сайтов из макетов в Figma. Разработка сайтов на конструкторе Tilda с интегрированным html + js
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       </section>
    )
};

export default AppExperience;