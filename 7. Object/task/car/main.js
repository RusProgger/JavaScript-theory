'use strict'

const Car = [
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

car.forEach((name, count) => {
    const outputText = document.createElement("p")

    outputText.innerHTML = `
        Машина: ${cout + 1} <br>
        Название: ${car.name} <br>
        
    `
});