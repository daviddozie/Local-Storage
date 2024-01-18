const submitForm = document.getElementById("validateUser");
const fname = document.getElementById("fullName");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const password = document.getElementById("password");
const comfirmPassword = document.getElementById("comfirmPassword");

function fullnameValidation(firstname, event) {
    if (firstname.value === "") {
        firstname.nextElementSibling.innerHTML = "Please enter your First Name !";
        firstname.classList.add("lineShake")
        firstname.classList.add("error-border");
        event.preventDefault();
        return false;
    } else {
        firstname.nextElementSibling.innerHTML = "";
        firstname.classList.remove("error-border");
        firstname.classList.add("success-border");
        return true;
    }
}

//email validation.
function emailValidation(email, event) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value === "") {
        email.nextElementSibling.innerHTML = "Please enter your email address !";
        email.classList.add("lineShake")
        email.classList.add("error-border");
        event.preventDefault();
        return false;
    } else if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = "Please enter a valid email !";
        email.classList.add("lineShake")
        email.classList.add("error-border");
        return false;
    } else {
        email.nextElementSibling.innerHTML = "";
        email.classList.remove("error-border");
        email.classList.add("success-border");
        return true;
    }
}

function phonenumberValidation(number, event) {
    let PNRegex = /^(?:\+?234|0)[1-9]\d{9}$/;
    if (number.value === "") {
        number.nextElementSibling.innerHTML = "Please enter your Phone Number !";
        number.classList.add("lineShake")
        number.classList.add("error-border");
        event.preventDefault();
        return false;
    } else if (!number.value.match(PNRegex)) {
        number.nextElementSibling.innerHTML = "Please enter a valid Phone Number !";
        number.classList.add("lineShake")
        number.classList.add("error-border");
        return false;
    } else {
        number.nextElementSibling.innerHTML = "";
        number.classList.remove("error-border");
        number.classList.add("success-border");
        return true;
    }
}

//password validation.
function passwordValidation(password, event) {
    let pwdRegex = /^(?=.*[A-Z])(?=.*[@*+%$#&])(?=.*\d).{6,}$/;
    if (password.value === "") {
        password.nextElementSibling.innerHTML = "Please enter password !";
        password.classList.add("lineShake")
        password.classList.add("error-border");
        event.preventDefault();
        return false;
    } else if (!password.value.match(pwdRegex)) {
        password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @*$#&+% and 1 number.";
        password.classList.add("lineShake")
        password.classList.add("error-border");
        return false;
    } else {
        password.nextElementSibling.innerHTML = "";
        password.classList.remove("error-border");
        password.classList.add("success-border");
        return true;
    }
}

//comfirm password validation.
function comfirmpasswordValidation(comfirmpassword, event) {
    if (comfirmpassword.value === "") {
        comfirmpassword.nextElementSibling.innerHTML = "Please comfirm your password !";
        comfirmpassword.classList.add("lineShake")
        comfirmpassword.classList.add("error-border");
        event.preventDefault();
        return false;
    } else if (comfirmpassword.value !== password.value) {
        comfirmpassword.nextElementSibling.innerHTML = "Your passwords don't match !";
        comfirmpassword.classList.add("lineShake")
        comfirmpassword.classList.add("error-border");
        event.preventDefault();
        return false;
    } else {
        comfirmpassword.nextElementSibling.innerHTML = "";
        comfirmpassword.classList.remove("error-border");
        comfirmpassword.classList.add("success-border");
        return true;
    }
}

function validateForm(e) {
    e.preventDefault();

    let validFullName = fullnameValidation(fname, e);
    let validEmail = emailValidation(email, e);
    let validPhoneNumber = phonenumberValidation(phoneNumber, e);
    let validPassword = passwordValidation(password, e);
    let validComfirmPassword = comfirmpasswordValidation(comfirmPassword, e);

    let loader = document.querySelector(".load")

    if (validFullName && validEmail && validPhoneNumber && validPassword && validComfirmPassword) {
        localStorage.setItem('savedFullName', fname.value);
        localStorage.setItem('savedEmail', email.value);
        localStorage.setItem('savedPhoneNumber', phoneNumber.value);
        loader.style.display = 'block';
        setTimeout(() => {
            fname.value = "";
            email.value = "";
            phoneNumber.value = "";
            password.value = "";
            comfirmPassword.value = "";
            window.location.href = "./profile/profile.html"
        }, 3000);
    }

    return true;
}

submitForm.addEventListener("submit", validateForm);