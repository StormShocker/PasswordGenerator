var button = document.querySelector('button#generate');
var result = document.querySelector('#result');
var length = document.querySelector('#length');
var special = document.querySelector('#special');
var numeric = document.querySelector('#numeric');
var lowercase = document.querySelector('#lowercase');
var uppercase = document.querySelector('#uppercase');
var clipboard = document.querySelector('#clipboard')

function generatePassword() {
    return "blah";
}


button.addEventListener('click', event => {
    password.value = generatePassword();
  console.log(event);
});

const genPassButtonClick = event => {
    password.value = generatePassword();
    console.log(event);
}

button.addEventListener('click', genPassButtonClick);