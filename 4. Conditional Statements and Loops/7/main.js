'use strict'

// let number = Number(prompt("Введите число: ").trim());

// let summa = number * (number + 1) / 2

// document.body.innerHTML += `Сумма чисел = ${summa}`



//  Версия 2 на циклах 

let number = Number(prompt("Введите число: ").trim()) 
let summa = 0

for(let i = 1; i <= number; i++) {
    summa += i
}

document.body.innerHTML += `Сумма чисел = ${summa}`