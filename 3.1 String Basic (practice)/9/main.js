let textInput = prompt("Введите имя: ").trim().split('').reverse().join('')

document.write(`Строка в обратном порядке: ${textInput}`)
console.log(`Строка в обратном порядке: ${textInput}`)


/* 

Получи строку от пользователя

Преобразуй в массив букв (split(''))

Переверни массив (reverse())

Собери обратно в строку (join(''))

Выведи в консоль

*/