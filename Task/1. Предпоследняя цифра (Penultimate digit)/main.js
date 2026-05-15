'use strict'

let number = parseInt(prompt("Введите число: "))

// проверка условий

if(!(isNaN(number))) {
    let result = Math.floor(Math.abs(number) / 10) % 10
    console.log(`Вывод: ${result}`)

    document.body.textContent = `Вывод: ${result}`
} else {
    console.log(`Вывод: ошибка! Это не число!`)
    document.body.textContent = `Вывод: Это не число!`
}



