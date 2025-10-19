'use strict'

/*
    ### ✅ Задание 4: Счёт от 1 до 10
    - Используй цикл `for`
    - Выведи числа от 1 до 10 построчно
*/

let number = 10

for(let i = 1; i <= number; i++) {
    document.body.innerHTML  += `Счет ${i}<br>`
    console.log(i)
}