'use strict';

/* 

    Массив (Array) — это упорядоченная коллекция элементов.
    Элементы могут быть любого типа: числа, строки, объекты, даже другие массивы. 
   
*/


// создадим массив 

let number = [1, 10, 55, 144, 200]

console.log(number) // весь массив целиком

console.log(number[2]) // вывод 55


// добавим елемент в конец массива 

number.push(60)

console.log(number[5]) // 60

// Удаляем элемент из конца массива

number.pop(); // вывод 

console.log(number) // 1, 10, 55, 144, 200

// добавляем елеменнты в начало массива 

number.unshift(0)

console.log(number)

// удаляем елемент из начала массива 

number.shift()

console.log(number)

// присваиваем елемент к индексу 

number[10] = 1000;

console.log(number)

console.log("----------------------------------------------------")

// Ищем елементы с помощью метода IndexOf().
// IndexOf() ищет елемент в массиве и возращает индекс 

let fruits = ["Ananas", "Cocos", "Apple", "Orange"]

// Поиск елемента 

console.log(fruits.indexOf("Mango")) // -1 такого елемента нет в массиве. 


// includes() - проверяет, есть ли элемент в массиве, и возвращает true или false

let res = fruits.includes("Appi");
console.log(res)

let nameUser = ["Ivan", "Alex", "Denis", "Kiril"]

document.body.innerHTML += `${nameUser.includes("Alena")} <br>`

document.body.innerHTML += `${nameUser.includes("Alex")}`






