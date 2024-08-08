//Definir constantes y variables

const words = ["javascript", "developer", "challenge", "programming", "frontend"];
let selectedWord = "";
let scrambledWord = "";
let tries = 0;
let maxTries = 6;
let mistakes = [];

//Conectar elementos con el DOM

const wordContainer = document.getElementById("wordContainer");
const scrambledWordElement = document.getElementById("scrambledWord");
const triesElement = document.getElementById("tries");
const mistakesElement = document.getElementById("mistakes");

//Funcion para mezclar palabras

function scrambleWord(word) {
    return word.split('').sort(() => 0.5 - Math.random()).join('');
}

//Funcion para crear los inputs

function createInputs(word) {
    wordContainer.innerHTML = "";
    word.split('').forEach(() => {
        const input = document.createElement("input");
        input.type = "text";
        input.maxLength = 1;
        input.className = "letter-input";
        input.addEventListener("input", handleInput);
        wordContainer.appendChild(input);
    });
}