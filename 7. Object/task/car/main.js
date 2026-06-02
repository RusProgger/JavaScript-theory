'use strict'

// object 

const car = [
    {
        name: "BMW",
        color: "black",
        year: 2015
},

{
        name: "Audi",
        color: "red",
        year: 2011
},

{
        name: "Toyota",
        color: "white",
        year: 2017
},

{
        name: "Mazda",
        color: "green",
        year: 2020
},

{
        name: "Peugeot",
        color: "white",
        year: 2020
}

];

// вывод всех машин

car.forEach((car, count) => {
    const outputText = document.createElement("p")

    outputText.innerHTML = `
        Машина: ${count + 1} <br>
        Название: ${car.name} <br>
        Цвет: ${car.color} <br>
        Год выпуска: ${car.year} <br>
    `

    document.body.appendChild(outputText)
});