// DOM elements
var button = document.querySelector('button#generate');
var result = document.querySelector('#result');
var length = document.querySelector('#length');
var special = document.querySelector('#special');
var numeric = document.querySelector('#numeric');
var lowercase = document.querySelector('#lowercase');
var uppercase = document.querySelector('#uppercase');
var clipboard = document.querySelector('#clipboard')

var randomFunc = {
    lowercase: getRandomLower,
    uppercase: getRandomUpper,
    numeric: getRandomNumeric,
    special: getRandomSpecial
};

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