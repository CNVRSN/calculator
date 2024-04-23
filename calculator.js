numberBtns = document.querySelectorAll("[data-number]")
operatorBtns = document.querySelectorAll("[data-operation]")
equalsBtn = document.querySelector("[data-equals]")
deleteBtn = document.querySelector("[data-delete]")
clearBtn = document.querySelector("[data-all-clear]")


const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operate = (num1, num2, op) => op === "+" ? add(num1, num2) :
                                    op === "-" ? subtract(num1, num2) : 
                                    op === "*" ? multiply(num1, num2) :  
                                    op === "/" ? divide(num1, num2);


// operate(numberBtn1, numberBtn2, operatorBtn)

// currentOperand = [] // after any operation, return to this empty value

// add the input number into an array (current operand)
numberBtns.forEach(element => {
    button.addEventListener('click', () => {
        appendNumber(button.innerText)
    })
});

function appendNumber(n) {
    if (number === '.' && currentOperand.includes('.')) return
    currentOperand = currentOperand.toString() + n.toString()
}e