import Contact from '../../resources/icons/contact.svg'

import '../app-contact/app-contact.scss'

const AppContact = () => {
    return(
       <section id='contact' className='contact'>
            <div className="container">
                <div className="contact-wrapper">
                    <div className="contact-about">
                        <div className="contact-about-title">Контакты</div>
                            <div className="contact-about-descr">Спасибо что ознакомились с моим резюме. Если я заинтересовал вас, вы можете связаться со мной
                        </div>
                    </div>
                    <div className="contact-form">
                        <div className="contact-form-block">
                            <input className='contact-form-name' type="text" placeholder="Name"/>
                            <input className='contact-form-email' type="text" placeholder="E-mail"/>
                        </div>
                        <div className="contact-form-block">
                            <input className='contact-form-message' type="textarea" />
                        </div>
                    </div>
                    <div className="about-btn">
                        <img src={Contact} alt="contact" />
                        <button className='about-btn-contact'>отправить сообщение</button>
                    </div>     
                </div>
            </div>
            <footer class="footer">
                <div class="container">
                    <div class="copyright">
                        <p>Copyright 2023 Gennady Yanelis</p>
                    </div>
                </div>
            </footer>

       </section>
    )
};

export default AppContact;