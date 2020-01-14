// DOM elements
var buttonEl = document.querySelector('button#generate');
var resultEl = document.querySelector('#result');
var lengthEl = document.querySelector('#length');
var specialEl = document.querySelector('#special');
var numericEl = document.querySelector('#numeric');
var lowercaseEl = document.querySelector('#lowercase');
var uppercaseEl = document.querySelector('#uppercase');
var clipboardEl = document.querySelector('#clipboard')

var randomFunc = {
    lowercase: getRandomLower,
    uppercase: getRandomUpper,
    numeric: getRandomNumeric,
    special: getRandomSpecial
};

buttonEl.addEventListener('click', () =>{
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumeric = numericEl.checked;
    var hasSpecial = specialEl.checked;

   resultEl.innerText = generatePassword(hasSpecial, hasNumeric, hasLower, hasUpper);
})

// Generator Functions

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97 );
}

function getRandomUpper() {
    return String.fromCharCode(math.floor(math.random() * 26) + 65);
}

function getRandomNumeric() {
    return String.fromCharCode(math.floor(math.random() * 10) + 48);
}

function getRandomSpecial() {
    var symbols = '!@#$%^&*';
    return symbols[math.floor(math.random() * symbols.length)];
}