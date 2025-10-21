'use strict '

/* 
    ### ✅ Задание 8: Угадай число
- Задай число в переменной (например, `let secret = 7`)
- Через `prompt` проси пользователя ввести число
- Подсказывай:
- Если число меньше — `Мало`
- Если больше — `Много`
- Повторяй попытки, пока не угадает — тогда: `Угадал!`
*/

let secret = 7;
let guess;

while (guess !== secret) {
  guess = Number(prompt("Введите число: ").trim());

  if (guess < secret) {
    console.log("Мало");
  } else if (guess > secret) {
    console.log("Много");
  } else {
    console.log("Угадал!");
  }
}
