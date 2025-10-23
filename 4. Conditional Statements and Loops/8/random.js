'use strict'

    // создаем генератор случайных чисел
    let numberSecret = Math.floor(Math.random() * 100) + 1

    let counter = 3
    let number

    while(number !== numberSecret) {
    // Спрашиваем пользователя ввести число

    let input = prompt("Угадай число от 1 до 100:");
    
    if (input === null) {
        console.log("Вы нажали отмена.");
        break; 
    }

     number = Number(input.trim());

    if (isNaN(number)) {
        console.log("Введите корректное число.");
        continue; 
  }

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
 