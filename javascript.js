let num_a;
let num_b;
let opr;
let result;


const add = function (firstNum, secondNum) {
    return +firstNum + +secondNum;

};

const subtract = function (firstNum, secondNum) {
    return +firstNum - +secondNum;

};

const multiply = function (firstNum, secondNum) {
    return +firstNum * +secondNum;

};

const divide = function (firstNum, secondNum) {
    return +firstNum / +secondNum;

};

let operate = function (a, opr, b) {
    switch (opr) {
        case '+':
           result = add(a, b);
            break;

        case "-":
            result = subtract(a, b);
            break;

        case '*':
            result = multiply(a, b);
            break;

        case '/':
            result = divide(a, b);
            break;

        default:
            return "Input a valid operation";
    }
}

const btns = document.querySelectorAll('button');
const numBtns = document.querySelectorAll('.number');
const oprBtns = document.querySelectorAll('.operator');
const display = document.querySelector('#calc-display');
let currentDisplay;
let inputArr = [];

btns.forEach(btn => {
    if (btn.getAttribute('class') === 'number') {
        btn.addEventListener('click', () => {
            display.textContent += btn.textContent;
            currentDisplay = display.textContent;

        });
    } else if (btn.getAttribute('class') === 'operator') {
        btn.addEventListener('click', () => {
            if (inputArr[inputArr.length-1] == '+' || inputArr[inputArr.length-1] == '-' || inputArr[inputArr.length-1] == '*' || inputArr[inputArr.length-1] == '/' || display.textContent == '') {
                return void(0);
            }
            inputArr.push(currentDisplay);
            display.textContent = '';
            switch (btn.textContent) {
                case '+':
                    inputArr.push('+');
                    break;
                case '-':
                    inputArr.push('-');
                    break;
                case '*':
                    inputArr.push('*');
                    break;
                case '/':
                    inputArr.push('/');
                    break;
                default:
            }
        });
    } else if (btn.getAttribute('id') === 'eq') {
        btn.addEventListener('click', () => {
            if (display.textContent == "") {
                return void(0);
            }
            inputArr.push(currentDisplay);            
            // [1, +, 2, *, 3, / 5]
            do {
            operate(inputArr[0], inputArr[1], inputArr[2]); 
            inputArr.shift();
            inputArr.shift(); 
            inputArr.shift();         
            inputArr.unshift(result);
            } while (inputArr.length > 1);
            display.textContent = result;
            currentDisplay = display.textContent;
            inputArr = [];     
             
        });
    } else if (btn.getAttribute('id') === 'clear') {
        btn.addEventListener('click', () => {
            inputArr = [];
            display.textContent = '';
            
        });
    } else if (btn.getAttribute('id') === 'del') {
        btn.addEventListener('click', () => {
            let displayArr = display.textContent.split("");
            displayArr.pop();
            display.textContent = displayArr.join("");
            
        }) 
    }; 
});


