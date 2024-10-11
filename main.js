document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("helpForm");
    const userInfo = {};

    form.querySelector("#name").addEventListener("input", function () {
        if(this.classList.contains("errorFormField")) {
            hideError(this, "errorName");
        }
    });
    form.querySelector("#message").addEventListener("input", function () {
        if(this.classList.contains("errorFormField")) {
            hideError(this, "errorMessage");
        }
    });
    form.querySelector("#phoneNumber").addEventListener("input", function () {
        this.value = this.value.replace(/[^\d+]|(?<=.)\+/g, "");
        if(this.classList.contains("errorFormField")) {
            hideError(this, "errorPhoneNumber");
        }
    });
    form.querySelector("#email").addEventListener("input", function () {
        this.value = this.value.replace(/[^a-zA-Z0-9@._-]/g, "");
        if(this.classList.contains("errorFormField")) {
            hideError(this, "errorEmail");
        }
    });

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        userInfo.name = form.querySelector("#name").value.trim();
        userInfo.message = form.querySelector("#message").value.trim();
        userInfo.phoneNumber = form.querySelector("#phoneNumber").value.trim();
        userInfo.email = form.querySelector("#email").value.trim();

        if(formValidation(userInfo)) {
            console.log(userInfo);
        }
        else {
            console.log("err");
        }
    });
});

function formValidation(data) {
    let isValid = true;

    if(data.name.length === 0) {
        showError("name", "errorName", "Name is required.");
        isValid = false;
    }
    else if(data.name.length > 100) {
        showError("name", "errorName", "Name must be no more than 100 characters.");
        isValid = false;
    }
    if(data.message.length < 5) {
        showError("message", "errorMessage", "Message must be at least 5 characters long.");
        isValid = false;
    }
    else if(data.message.length > 500) {
        showError("message", "errorMessage", "Message must be no more than 500 characters.");
        isValid = false;
    }
    let phonePattern = /^\+380\d{9}$/;
    if(!phonePattern.test(data.phoneNumber)) {
        showError("phoneNumber", "errorPhoneNumber", "Phone number must start with +380 and contain 12 digits");
        isValid = false;
    }
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(!emailPattern.test(data.email)) {
        showError("email", "errorEmail", "Email should contain '@' and a domain.");
        isValid = false;
    }

    return isValid;
}

function showError(fieldId, errorLabelId, msg) {
    document.getElementById(fieldId).classList.add("errorFormField");
    let errorLabel = document.getElementById(errorLabelId);
    errorLabel.innerHTML = msg;
    errorLabel.style.display = "block";
}
function hideError(field, errorLabelId) {
    document.getElementById(errorLabelId).style.display = "none";
    field.classList.remove("errorFormField");
}

