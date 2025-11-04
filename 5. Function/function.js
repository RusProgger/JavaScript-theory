'use strict'

// Обьявление функции (Function Declaration)

function name(name) {
    return `Привет, ${name}`
}

// вывод функции
console.log(name("Alex"));

document.body.innerHTML += `${name("Alex")}`
