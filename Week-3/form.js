$(document).ready(() => {
    $('form#loginForm').submit((event) => {
        let email = $('input#emailInput').val();
        email = String(email);

        let password = $('input#passwordInput').val();
        password = String(password);

        if (email == '' || password == '') {
            alert('Please enter an email and/or password');
        } else {
            $('body').append(`<p>Logged in as ${email}</p>`);
        }

        event.preventDefault();
    })
});