'use strict'

const age  = prompt("Ваш возраст: ").trim()

// условие проверки 

if(age >= 18) {
    console.log("Доступ разрешён")
    document.write(`Доступ разрешён. ${age}`)
} else {
    console.log("Доступ запрещён")
    document.write(`Доступ запрещён. ${age}`)
}