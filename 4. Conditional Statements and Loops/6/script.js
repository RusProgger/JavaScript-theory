'use strict'

// Начало таблицы цикл

let table = 100
for(let a = 0; a < table; a++) {
    document.body.innerHTML += `-`
    console.log("-")
}

document.body.innerHTML += `<br>Таблица умножения `

for(let i = 3; i <= 3; i++) {

    for(let j = 1; j <= 10; j++) {
        console.log(` ${i} * ${j} = ${i * j}`)
        document.body.innerHTML += `<br>${i} * ${j} = ${i * j} `
    }

    document.body.innerHTML += `<br>------------------------<br>`;
}