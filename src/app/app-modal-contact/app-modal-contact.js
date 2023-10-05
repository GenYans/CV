import '../app-modal-contact/app-modal-contact.scss'


const AppModalContact = ({active, setActive, children}) => {
    return(
        <div className={active ? "modal active" : "modal"} onClick={() => setActive(false)}>
            <div className={active ? "modal-content active" : "modal"} onClick={e => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
};

export default AppModalContact;