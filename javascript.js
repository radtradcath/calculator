let num_a;
let num_b;
let opr;


const add = function (firstNum, secondNum) {
    return +firstNum + +secondNum;

};

const subtract = function (firstNum, secondNum) {
    return firstNum - secondNum;

};

const multiply = function (firstNum, secondNum) {
    return firstNum * secondNum;

};

const divide = function (firstNum, secondNum) {
    return firstNum / secondNum;

};

let operate = function (a, opr, b) {
    switch (opr) {
        case '+':
            console.log(add(a, b));
            break;

        case "-":
            console.log(subtract(a, b));
            break;

        case '*':
            console.log(multiply(a, b));
            break;

        case '/':
            console.log(divide(a, b));
            break;

        default:
            console.log("Input a valid operation");
    }
}

const numAndOperators = document.querySelector('#calc-numbop');
let columnContainer = document.createElement('div');
let button = document.createElement('div');

for (i = 1; i <= 4; i++) {
    columnContainer = document.createElement('div');
    columnContainer.classList.add('button-container');
    numAndOperators.appendChild(columnContainer);
    for (j = 1; j <= 4; j++) {
        button = document.createElement('div');
        button.classList.add('button');
        columnContainer.appendChild(button);
    }
}