'use strict'

// создаем генератор случайных чисел
let numberSecret = Math.floor(Math.random() * 100) + 1


let number

while(number !== numberSecret) {
    // Спрашиваем пользователя ввести число

    number = Number(prompt("Угадай число от 1 до 100: ").trim());


    
    // проверка условий

    if(number > numberSecret) {
        console.log("Число большое.")
    } 
    else if(number < numberSecret) {
        console.log("Число маленькое.")
    } else {
        console.log("Молодец. Ты угадал число.")
    }
} 