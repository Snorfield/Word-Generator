let response = await fetch('./model.json');
let model = await response.json();


let input = document.getElementById('input');
let length = document.getElementById('length');
let context = document.getElementById('context');
let output = document.getElementById('output');
let button = document.getElementById('button');

length.addEventListener('input', (event) => {
    let value = Number(event.target.value);

    if (value > 10) value = 10;
    if (value < 1) value = 1;

    event.target.value = value;
});

context.addEventListener('input', (event) => {
    let value = Number(event.target.value);

    if (value > 10) value = 10;
    if (value < 1) value = 1;

    event.target.value = value;
});

input.addEventListener('input', (event) => {
    let value = event.target.value;
    let cleaned = value.replace(/[^a-zA-Z]/g, '');
    cleaned = cleaned.toLowerCase();

    event.target.value = cleaned;
});

function generateWord(phrase, length, context) {
    let word = phrase;

    for (let i = 0; i < length; i++) {

        let dynamicContext = (context > (word.length) - 1) ? (word.length - 1) : context;
        let seed = word.slice(-dynamicContext);

        while (!(model[seed]) && dynamicContext > 0) {
            dynamicContext -= 1;
            seed = word.slice(-dynamicContext);
        }

        if (!(model[seed])) break;

        word += model[seed][Math.floor(Math.random() * model[seed].length)]
    }
    return word;
}

function generate() {
    output.replaceChildren();
    for (let i = 0; i < 6; i++) {
        let result = generateWord(input.value, length.value, context.value);
        let element = document.createElement('h3');
        element.classList.add('outputText');
        element.textContent = result;
        output.appendChild(element);
    }
}

input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        generate();
    }
});

button.addEventListener('click', () => {
    generate();
});

