const name = prompt("Введите ваше имя: ")

if(name.trim().toLowerCase() === "admin") {
    document.write(`Добро пожаловать, админ!`)
} else {
    document.write(`Привет, пользователь!`)
}