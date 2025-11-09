'use strict'

let number = Number(prompt("Введите число: ").trim()) 

for (let num = 1; num <= number; num++) {
    if (num % 2 !== 0) {
        console.log(num)
    }
}