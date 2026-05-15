'use strict'

let number = parseInt(prompt("Введите число: "))

// проверка условий

let result = Math.floor(Math.abs(number) / 10) % 10

console.log(`Вывод: ${result}`)

document.body.textContent = `Вывод: ${result}`