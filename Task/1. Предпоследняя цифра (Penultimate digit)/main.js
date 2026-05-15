'use strict'

let number = parseInt(prompt("Введите число: "))

let result = Math.floor(Math.abs(number) / 10) % 10

console.log("Вывод: ${result}")