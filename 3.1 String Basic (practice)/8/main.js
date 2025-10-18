let text = prompt("Введите любое слово: ").trim()

// Проверка если пользователь ничего не введет

if(text.length === 0) {
    document.write("Вы ничего не ввели")
    console.log("В ничего не ввели.")
} else {
    document.write(text[text.length - 1])
    console.log(text[text.length - 1])
}



