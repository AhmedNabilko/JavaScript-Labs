function setCookie(cookieName, cookieValue) {
    document.cookie = cookieName + "=" + cookieValue;
}

function getCookie(cookieName) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let parts = cookies[i].split("=");
        if (parts[0] == cookieName) {
            return parts[1];
        }
    }
    return null;
}

document.addEventListener('DOMContentLoaded', function () {
    let nameInput = document.getElementById('userName');
    let nameError = document.getElementById('userNameError');
    let emailInput = document.getElementById('email');
    let cityInput = document.getElementById('city');
    let passwordInput = document.getElementById('password');
    let repeatPasswordInput = document.getElementById('repeatPassword');
    let passwordError = document.getElementById('passwordError');
    let form = document.getElementById('registration');
    let submitError = document.getElementById('errorMessage');

    nameInput.placeholder = 'Enter your Name:';

    nameInput.addEventListener('focus', function () {
        nameInput.style.border = 'solid 1px blue';
    });

    nameInput.addEventListener('blur', function () {
        nameInput.style.border = '1px solid #ccc';
        checkName();
    });

    function checkName() {
        let nameValue = nameInput.value;
        let nameLength = nameValue.trim().length;

        if (nameLength > 3) {
            nameError.textContent = '';
            nameInput.style.backgroundColor = 'white';
            return true;
        } else {
            nameError.textContent = 'invalid name';
            nameInput.style.backgroundColor = 'gray';
            nameInput.focus();
            nameInput.select();
            return false;
        }
    }

    window.validatePasswords = function () {
        let pwd1 = passwordInput.value;
        let pwd2 = repeatPasswordInput.value;

        if (pwd1 == '' || pwd2 == '') {
            passwordError.textContent = 'password and repeat password should be the same';
            passwordInput.style.backgroundColor = 'gray';
            repeatPasswordInput.style.backgroundColor = 'gray';
            return false;
        }

        if (pwd1 == pwd2) {
            passwordError.textContent = '';
            passwordInput.style.backgroundColor = 'white';
            repeatPasswordInput.style.backgroundColor = 'white';
            return true;
        } else {
            passwordError.textContent = 'password and repeat password should be the same';
            passwordInput.style.backgroundColor = 'gray';
            repeatPasswordInput.style.backgroundColor = 'gray';
            return false;
        }
    };

    window.updateBackground = function (element) {
        if (element.checkValidity()) {
            element.style.backgroundColor = 'white';
        } else {
            element.style.backgroundColor = 'gray';
        }
    };

    nameInput.addEventListener('input', function () {
        let nameValue = nameInput.value;
        let nameLength = nameValue.trim().length;

        if (nameLength > 3) {
            nameInput.style.backgroundColor = 'white';
            nameError.textContent = '';
        } else {
            nameInput.style.backgroundColor = 'gray';
        }
    });

    function checkPasswordMatch() {
        let pwd1 = passwordInput.value;
        let pwd2 = repeatPasswordInput.value;

        if (pwd1 != '' && pwd2 != '' && pwd1 == pwd2) {
            passwordInput.style.backgroundColor = 'white';
            repeatPasswordInput.style.backgroundColor = 'white';
            passwordError.textContent = '';
        }
    }

    passwordInput.addEventListener('input', checkPasswordMatch);
    repeatPasswordInput.addEventListener('input', checkPasswordMatch);

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        submitError.style.display = 'none';

        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        let nameOk = checkName();
        let passwordOk = validatePasswords();

        if (nameOk == false || passwordOk == false) {
            submitError.style.display = 'block';
            return;
        }

        let nameValue = nameInput.value;
        let emailValue = emailInput.value;
        let cityValue = cityInput.value;

        let userData = {};
        userData.fullName = nameValue;
        userData.email = emailValue;
        userData.city = cityValue;

        let userDataString = JSON.stringify(userData);
        setCookie("registration", userDataString);

        window.location.href = "thankyou.html";
    });
});
