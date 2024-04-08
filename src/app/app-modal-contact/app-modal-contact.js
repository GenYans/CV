import '../app-modal-contact/app-modal-contact.scss';
import $ from 'jquery'

$('form').submit(function(e) {
    e.preventDefault();

    if (!$(this).valid()) {
        return;
    }
    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        $(this).find("input").val("");

        $('form').trigger('reset');
    });
    return false;
});

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