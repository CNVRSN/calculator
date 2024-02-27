const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
const multiply = (x, y) => x * y;
const divide = (x, y) => x / y;

const operate = (num1, num2, op) => op === "+" ? add((num1), (num2)) :
                                    op === "-" ? subtract((num1), (num2)) : 
                                    op === "*" ? multiply((num1), (num2)) :  
                                    op === "/" ? divide((num1), (num2));

let firstNumber;
let secondNumber;
let operator;
