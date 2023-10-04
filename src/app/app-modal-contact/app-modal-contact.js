import '../app-modal-contact/app-modal-contact.scss'


const AppModalContact = ({active, setActive}) => {
    return(
        <div className={active ? "modal active" : "modal-contact" } onClick={() => setActive(false)}>
            <div className="modal-contact-wrapper" onClick={e => e.stopPropagation()}>
                </div>
        </div>
    )
};

export default AppModalContact;