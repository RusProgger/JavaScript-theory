'use strict'

let inputText = prompt("Введите строку: ")
console.log(`Вы ввели строку: ${inputText}`)

// проверка 

if(inputText !== null && inputText.trim() !== '') {
    let reverse = inputText.split('').reverse().join('')
    // вывод 
    document.write(`Строка в обратном порядке: ${reverse}`)
    console.log(`Строка в обратном порядке: ${reverse}`)
} else {
    document.write(`Вы ничего не ввели`)
    console.log(`Вы ничего не ввели`)
}



// let textInput = prompt("Введите имя: ").trim().split('').reverse().join('')

// document.write(`Строка в обратном порядке: ${textInput}`)
// console.log(`Строка в обратном порядке: ${textInput}`)





/* 

Получи строку от пользователя

Преобразуй в массив букв (split(''))

Переверни массив (reverse())

Собери обратно в строку (join(''))

Выведи в консоль

*/