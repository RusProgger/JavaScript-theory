'use strict'

const number = prompt("Введите число: ").trim()

// проверка условий 

if(number % 2 === 0) {
    console.log("Число четное ", number)
    document.write("Число чётное: ", number)
} else {
    console.log("Число нечетное ", number)
    document.write("Число нечетное ", number)
}