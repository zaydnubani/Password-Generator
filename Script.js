// // Assignment Code

const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numberEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const passwordEl = document.getElementById('password');
const generateEl = document.getElementById('generate');

randomFunction = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]<>,./?'
    return symbols[Math.floor(Math.random() * symbols.length)];
}


// Write password to the #password input
function generatePassword(lower, upper, number, symbol, length){
    let generatePassword = '';
    const typesCount = lower + upper + number + symbol;
    const typesArray = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item) [0]
        );
    if(typesCount === 0) {
        return 'Please select criteria(s).';
    }
    
    for(let i = 0; i < length; i += typesCount){
        typesArray.forEach(type => {
            const funcName = Object.keys(type)[0];
            generatePassword += randomFunction[funcName]();
        });
    }
    const finalPassword = generatePassword.slice(0, length);
    return finalPassword;
}

// Add event listener to generate button
generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numberEl.checked;
    const hasSymbols = symbolsEl.checked;

    passwordEl.innerText = generatePassword(
        hasLower, 
        hasUpper, 
        hasNumber, 
        hasSymbols, 
        length
        );
});
