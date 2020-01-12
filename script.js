const button = document.querySelector('button#generate');
var password = document.querySelector('#password');
var special = document.querySelector('#special');
var numeric = document.querySelector('#numeric');
var lowercase = document.querySelector('#lowercase');
var uppercase = document.querySelector('#uppercase');

// button.addEventListener('click', event => {
//     password.value = generatePassword();
//   console.log(event);
// });
button.addEventListener('click', genPassButtonClick);

function generatePassword() {
    return "blah";
}

function genPassButtonClick(event) {
    password.value = generatePassword();
    console.log(event);
}