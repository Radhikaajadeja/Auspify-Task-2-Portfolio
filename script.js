

document.addEventListener("DOMContentLoaded", function () {
    console.log("Portfolio website loaded successfully!");

    const contactForm = document.getElementById("contact-form");
    const formStatus = document.getElementById("form-status");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if (!name || !email || !message) {
                formStatus.textContent = "Please fill in all fields.";
                return;
            }

            formStatus.textContent =
                "Thank you, " + name + "! Your form has been submitted.";

            contactForm.reset();
        });
    }
});
