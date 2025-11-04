const name = prompt("Введите ваше имя: ")

if(name.trim().toLowerCase() === "admin") {
    document.write(`Добро пожаловать, админ!`)
    console.log("Добро пожаловать, админ!")
} else {
    document.write(`Привет, пользователь!`)
    console.log("Привет, пользователь!")
}