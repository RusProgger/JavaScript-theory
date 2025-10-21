'use strict'

let number = Number(prompt("Введите число: ").trim());

let summa = number * (number + 1) / 2

document.body.innerHTML += `Сумма чисел = ${summa}`

