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
// Generate event listen
buttonEl.addEventListener('click', () =>{
    var hasLower = lowercaseEl.checked;
    var hasUpper = uppercaseEl.checked;
    var hasNumeric = numericEl.checked;
    var hasSpecial = specialEl.checked;

    generatePassword(hasSpecial, hasNumeric, hasLower, hasUpper);
})

function generatePassword(lowercase, uppercase, numeric, special) {
    let generatesPassword = '';

    var typesCount = lowercase + uppercase + numeric + special;

    //console.log('typesCount: ', typesCount)

    var typeArr = ({lowercase}, {uppercase}, {numeric}, {special})

    //console.log('typesArr: ', typeArr);

    if(typesCount === 0) {
        return 'Please input your criteria for the password';
    }

    for(let i = 0; i < length; i += typesCount) {
        typeArr.forEach(type => {
            var funcName = Object.keys(type)[0];
            //console.log('funcName', funcName);

            generatedPassword += randomFunc[funcName]();
        });
    }

    //console.log(generatedPassword);
}

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