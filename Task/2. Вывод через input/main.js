'use strict'

const input = document.querySelector("#text")
const button = document.querySelector(".submit_btn")
const result = document.querySelector(".result")

button.addEventListener("click", function() {
    result.textContent = input.value;
})
