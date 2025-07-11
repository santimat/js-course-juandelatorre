// runs when the HTML document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Selecting the interface elements
    const inputs = document.querySelectorAll(".form-input");

    // set events, some of these events are usually used for verification of email fields
    // blur event is executed when the user leaves a field
    inputs.forEach((i) => i.addEventListener("blur", validate));

    function validate(e) {
        const reference = e.target.parentElement;

        // the trim method is used to clear white spaces at the start or end of input value
        if (e.target.value.trim() === "") {
            showAlert(`El campo ${e.target.id} es obligatorio`, reference);
            return;
        }
        if (e.target.id == "email" && !validateEmail(e.target.value)) {
            showAlert("Email no valido", reference);
            return;
        }

        removeAlert(reference);
    }

    function showAlert(msg, reference) {
        // Create HTML alert
        // Search the alert element from reference point, this way we will not delete another element by mistake
        const alert = reference.querySelector(".error");
        if (alert) {
            alert.remove();
        }

        const error = document.createElement("P");
        error.textContent = msg;
        error.classList.add("error", "text-red", "p-1");
        reference.appendChild(error);
    }

    function removeAlert(reference) {
        const alert = reference.querySelector(".error");
        alert && alert.remove();
    }

    function validateEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(email);
    }
});
