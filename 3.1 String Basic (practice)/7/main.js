'use strict'

const name = prompt("Введите любое слово: ").trim()

    if(name == "") {
        document.write("Вы ничего не ввели")
    } else {
        document.write(name)
    }