function loginFunction() {
    // LOGIC

    // Get the elements
    const pageElements = getElements();
    // Get the values of the elements
    const pageValues = getValuesFromElements(pageElements);
    // Check whether email contains @
    // emailChecker(pageValues.emailValue);
    // Check whether the password is more than 3 characters
    // passwordLengthChecker(pageValues.passwordValue);
    // Login is successful
};

function getElements() {
    const emailElement = document.getElementById('email');
    console.log('Element', emailElement);
    const passwordElement = document.getElementById('password');
    return { emailElement, passwordElement };
}

function getValuesFromElements(input) {
    const emailElement = input.emailElement;
    const passwordElement = input.passwordElement;

    const emailValue = emailElement.value;
    console.log('Value', emailValue);
    const splitString = String(emailValue).split('-')
    console.log(splitString) // 21-11-2022
    const passwordValue = passwordElement.value;

    return { emailValue, passwordValue }
}

function emailChecker(XXXX) {
    if (XXXX.includes('@')) {
        console.log('Valid Email');
    }
    else {
        alert('Hey, please check your email');
    }
}

function passwordLengthChecker(input) {
    if (input.length < 3) {
        alert('Hey, please enter a password with 3 characters or more')
    }
}

const maleNames = []

const maleNames1 = {}