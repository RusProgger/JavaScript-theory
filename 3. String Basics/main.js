// Работа со строками

// создание строки 

let str = "Hello"
console.log("Строка - ", str)

const str1 = "Ivan"

console.log("Константа - ", str1)

// str1 = "Test" // Ошибка константы нельзя изменять

// шаблонные строки

console.log("-------------------\n")

let name = "Alex"

let userName = `Hello, ${name}`

console.log(userName)

// добавление символов в конец строки

name = name + "!!!!";

console.log(name)


// конкатенация строк

let wel = "He"
let come = "llo"

console.log(wel + come)

// альтернатива через шаблонные строки

console.log(`${wel}${come}, Alex`)


// Длина строки length

let nameUser = "Stiven"

console.log("Длина строки - ", nameUser.length)


// перевод в верхний/нижний регистр

console.log("Верхний регистр - ", nameUser.toUpperCase())
console.log("Нижний регистр - ", nameUser.toLowerCase())

// includes() — проверка, содержит ли строка подстроку

console.log("Строка содержит - ", nameUser.includes("Stiven"))


// Позиция символа или подстроки

console.log("Позиция - ", nameUser.indexOf("e"))


// slice(start, end) — извлекает часть строки

console.log("Извлекаем - ", nameUser.slice(0, 4))


// replace(old, new) — заменяет подстроку

console.log("Заменяет - ", nameUser.replace("Stiven", "Ivan"))


// trim() — убирает пробелы по краям строки

let userNameInfo = "   Alex   "

console.log("Удаляем пробелы в строке - ", userNameInfo.trim())


// charAt(index) получаем символ по индексу 

console.log("Символ - ", nameUser.charAt(0))

// split() — разбивает строку в массив

let welcomeTitle = "Welcome to our website!"

let arr = welcomeTitle.split(" ")

console.log()



