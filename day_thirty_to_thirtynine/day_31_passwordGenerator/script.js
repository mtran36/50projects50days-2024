const resultElement = document.getElementById('result')
const clipboardElement = document.getElementById('clipboard')
const lengthElement = document.getElementById('length')
const uppercaseElement = document.getElementById('uppercase')
const lowercaseElement = document.getElementById('lowercase')
const numbersElement = document.getElementById('numbers')
const symbolsElement = document.getElementById('symbols')
const generateElement = document.getElementById('generate')

const randomFunction = {
    upper: getRandomUpper,
    lower: getRandomLower,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

generateElement.addEventListener('click', () => {
    const length = +lengthElement.value
    const hasUpper = uppercaseElement.checked
    const hasLower = lowercaseElement.checked
    const hasNumber = numbersElement.checked
    const hasSymbol = symbolsElement.checked

    resultElement.innerText = generatePassword(length, hasUpper, hasLower, hasNumber, hasSymbol)
})

clipboardElement.addEventListener('click', () => {
    const password = resultElement.innerText

    if (!password) {
        return
    }

    navigator.clipboard.writeText(password)
    alert('Password copied to clipboard!')
})

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*(){}[]=<>/,.'
    return symbols[Math.floor(Math.random() * symbols.length)]
}

function generatePassword(length, upper, lower, number, symbol) {
    let generatePassword = ''

    const typesCount = upper + lower + number + symbol
    const typesArray = [{ upper }, { lower }, { number }, { symbol }].filter(item => Object.values(item)[0])

    if (typesCount == 0) {
        return ''
    }

    for (let i = 0; i < length; i += typesCount) {
        typesArray.forEach(type => {
            const functionName = Object.keys(type)[0]
            generatePassword += randomFunction[functionName]()
        })
    }

    const finalPassword = generatePassword.slice(0, length)

    return finalPassword
}