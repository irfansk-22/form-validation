const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm-pw');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    checkInputs();
});

function checkInputs() {
    //Get the values from the inputs
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();

    //Validate username
    if (usernameValue === '') {
        setErrorMSG(username, 'Username cannot be blank');
    } else {
        setSuccessMSG(username);
    }

    //Validate email
    if (emailValue === '') {
        setErrorMSG(email, 'Email cannot be blank');
    } else if (!isEmailValid(emailValue)) {
        setErrorMSG(email, 'Email is not valid');
    } else {
        setSuccessMSG(email);
    }

    //Validate password
    if (passwordValue === '') {
        setErrorMSG(password, 'Password cannot be blank');
    } else {
        setSuccessMSG(password);
    }

    //Confirm passwords
    if (password2Value === '') {
        setErrorMSG(password2, 'Please confirm your password');
    } else if (password2Value !== passwordValue) {
        setErrorMSG(password2, 'Passwords does not match');
    } else {
        setSuccessMSG(password2);
    }
}

function setErrorMSG(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    //Add error message inside small
    small.innerText = message;

    //Add error class
    formControl.className = 'form-control error';
}

function setSuccessMSG(input) {
    const formControl = input.parentElement;

    //Add success class
    formControl.className = 'form-control success';
}

function isEmailValid(emailValue) {
    let validCondition = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let testResult = validCondition.test(emailValue);

    return testResult;
}

/*
    //Know more about preventDefault fucntion
    https://www.w3schools.com/jsref/event_preventdefault.asp

    //Know more about the trim mehtod
    https://www.w3schools.com/jsref/jsref_trim_string.asp
*/
