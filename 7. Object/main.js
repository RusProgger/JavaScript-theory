'use strict';

// создаем обьект с именем Car 

const car = {
    name: "BMW",
    age: 2001,
    color: "black"
};

// консольный вывод 
console.log(`Модели машин:`);
console.log(`${car.name}\nГод выпуска ${car.age}`);

// document.body.innerHTML += `Название модели машины: <br> 1 - ${car.name} <br> 2 - ${car.age}`;

const text = document.createElement("p")
text.innerHTML = `Название модели машины: <br> 1 - ${car.name} <br> 2 - ${car.age} <br> 3 - ${car.color}`;
document.body.appendChild(text)
