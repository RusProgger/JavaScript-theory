'use strict'

// Обьявление функции (Function Declaration)

function name(name) {
    return `Привет, ${name}`
}

// вывод функции
console.log(name("Alex"));

document.body.innerHTML += `${name("Alex")} <br>`


// Обьявление выражение (Function Expression)

const nameUser = function(userName) {
    return `Привет, ${userName}`
}

// вывод 

console.log(nameUser("Denis"));

document.body.innerHTML += `${nameUser("Denis")} <br>`


// напишем функцию которая будет принимать возраст и имя

function userInfo(nameUsers, ageUser) {

    return `Привет ${nameUsers}, тебе ${ageUser} лет`
}

document.body.innerHTML += `${userInfo("Ivan", 30)}`

