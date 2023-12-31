const btns = document.querySelectorAll('button');
const numBtns = document.querySelectorAll('.number');
const oprBtns = document.querySelectorAll('.operator');
const display = document.querySelector('#calc-display');
const calcArray = document.querySelector('#calc-array');
let currentDisplay;
let inputArr = [];
let clicked = false;

btns.forEach(btn => {
    
if (btn.getAttribute('class') === 'number') {
        btn.addEventListener('click', () => {            
            if (display.textContent == 'Math Error' || display.textContent.length > 15 || clicked == true) {
                return void(0);
            } else if (btn.getAttribute('id') === 'dot' && display.textContent.includes('.')) {
                return void(0);
            }
            display.textContent += btn.textContent;
            currentDisplay = display.textContent;

        });
    } else if (btn.getAttribute('class') === 'operator') {
        btn.addEventListener('click', () => {                                               
            if (((inputArr[inputArr.length-1] === '+' || inputArr[inputArr.length-1] == '-' || inputArr[inputArr.length-1] == '*' || inputArr[inputArr.length-1] == '/') && display.textContent == '') || display.textContent == '' || display.textContent == 'Math Error') {
                return void(0);
            }
            clicked = false;
            inputArr.push(display.textContent);
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
            display.textContent = ''; 
            calcArray.textContent = inputArr.join("");
        });
    } else if (btn.getAttribute('id') === 'eq') {
        btn.addEventListener('click', () => {
            if (display.textContent == "" || display.textContent == 'Math Error' || inputArr.length < 2) {
                return void(0);
            }
            inputArr.push(currentDisplay);                     
            calcArray.textContent = `${inputArr.join("")} =`;
            do {
            operate(inputArr[0], inputArr[1], inputArr[2]);            
            inputArr.shift();
            inputArr.shift(); 
            inputArr.shift();         
            inputArr.unshift(result);
            } while (inputArr.length > 1);
            if (result == 'Math Error') {                     
            display.textContent = result;
            } else {
            display.textContent = +result.toFixed(5);
            
            }
            currentDisplay = display.textContent;
            inputArr = [];     
            clicked = true;
        });
    } else if (btn.getAttribute('id') === 'clear') {
        btn.addEventListener('click', () => {
            inputArr = [];
            display.textContent = '';
            calcArray.textContent = inputArr.join("");
            clicked = false;
            
        });
    } else if (btn.getAttribute('id') === 'del') {
        btn.addEventListener('click', () => {
            if (display.textContent == 'Math Error' || clicked == true){
                return void(0);
            }
            let displayArr = display.textContent.split("");
            displayArr.pop();
            display.textContent = displayArr.join("");
            calcArray.textContent = inputArr.join("");
            
        }) 
    }; 
});

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
    if (secondNum == 0) {
        return "Math Error";
    }
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
