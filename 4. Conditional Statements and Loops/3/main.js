"use strict"

/* 

    - Пусть у пользователя есть переменная `score`
    - Если `score >= 90`, выведи: `Отлично!`  
    Если `score >= 70`, но меньше 90 — `Хорошо`  
    Если `score >= 50`, но меньше 70 — `Удовлетворительно`  
    Иначе — `Плохо`

*/

let score = prompt("Введите оценку: ").trim()

if(score >= 90) {
    console.log("Отлично!")
    document.write(`Ваша оценка ${score} и это Отлично!`)
}
else if(score >= 70 && score < 90) {
    console.log("Хорошо!")
    document.write(`Ваша оценка ${score} и это Хорошо!`)
}

else if(score >= 50 && score < 70) {
    console.log("Удовлетворительно!")
    document.write(`Ваша оценка ${score} и это Удовлетворительно!`)
}
else {
    console.log("Плохо!")
    document.write(`Ваша оценка ${score} и это Плохо!`)
}
