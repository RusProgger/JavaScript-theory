'use strict'

function maxOfTwo(a, b) {

    if(a > b) {
        return a
    }

    else if(a == b) {
        return `Числа равны`
    }
    
    else {
        return b
    }
}

console.log(maxOfTwo(10, 15))
console.log(maxOfTwo(10, 10))