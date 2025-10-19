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
    // добавим вывод на страницу, просто как сообщения, чтобы каждый раз не заходить в консоль
    // Этот уже устаревший способ
    // document.write(`Ваша оценка ${score} и это Отлично!`)

    // самый универсальный и безопасный метод. 

    document.body.textContent = `Ваша оценка: ${score} — Отлично! `;

}
else if(score >= 70 && score < 90) {
    console.log("Хорошо!")
    // document.write(`Ваша оценка ${score} и это Хорошо!`)
    document.body.textContent = `Ваша оценка: ${score} — Хорошо! `;
}

else if(score >= 50 && score < 70) {
    console.log("Удовлетворительно!")
    // document.write(`Ваша оценка ${score} и это Удовлетворительно!`)
    document.body.textContent = `Ваша оценка: ${score} — Удовлетворительно! `;
}
else {
    console.log("Плохо!")
    // document.write(`Ваша оценка ${score} и это Плохо!`)
    document.body.textContent = `Ваша оценка: ${score} — Плохо! `;
}
