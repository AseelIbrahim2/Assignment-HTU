
function validateForm() {
    let formIsValid = true;

    const fullName = document.getElementById("fullName").value;
    const userEmail = document.getElementById("userEmail").value;
    const userPassword = document.getElementById("userPassword").value;
    const confirmUserPassword = document.getElementById("confirmUserPassword").value;
    const fullNameError = document.getElementById("fullNameError");
    const userEmailError = document.getElementById("userEmailError");
    const userPasswordError = document.getElementById("userPasswordError");
    const confirmUserPasswordError = document.getElementById("confirmUserPasswordError");

    // Check full name
    if (fullName.length < 3) {
        fullNameError.textContent = "Full name must be at least 3 characters long.";
        formIsValid = false;
    }

    // Check email address
    if (userEmail === "") {
        userEmailError.textContent = "Please enter an email address.";
        formIsValid = false;
    } 

    // Check password
    if (userPassword.length < 8) {
        userPasswordError.textContent = "Password must be at least 8 characters long.";
        formIsValid = false;
    }

    // Check if passwords match
    if (userPassword !== confirmUserPassword) {
        confirmUserPasswordError.textContent = "Password and confirmation do not match.";
        formIsValid = false;
    }

    return formIsValid;
}

