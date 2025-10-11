// Примитивные типы данных (7 штук):

// - number        // числа (включая целые и дробные)
// - bigint        // большие целые числа (напр. 123456789n)
// - string        // строки
// - boolean       // true / false
// - undefined     // значение не задано
// - null          // "пустое" значение
// - symbol        // уникальные идентификаторы


// Ссылочный тип:
// - object        // объекты, массивы, функции и всё остальное



let number = 25

let numberBig = BigInt(45676790)

let str = "ALex"

let isMale = true

let numberValue

let maxValueNull = null

let valueSymbol = Symbol('id')

console.log("Целочисленный тип - ", number); 

console.log("Тип BigInt - ", numberBig);

console.log("Строковой тип - ", str)

console.log("Булевый тип - ", isMale)

console.log("Неопределленное значение - ", numberValue)

console.log("Пустое значение - ", maxValueNull)

console.log("Символьный тип - ",  valueSymbol)