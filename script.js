function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return (x / y).toFixed(2);
}

function operate(x, y, operation){
    switch(operation){
        case '+': 
            (add(x, y));
            break;
        case '-': 
            subtract(x, y);
            break;
        case '*':
            multiply(x, y);
            break;
        case '/':
            console.log(divide(x, y));
            break;
        default:
            alert("Wrong format!");
    }       
}

const buttonContainer = document.querySelector(".calc-buttons");
const input = document.querySelector("input").value;
const buttons = buttonContainer.querySelectorAll("button");

function getValue(input){
    const regex = /^[0-9+\-*/().\s]+$/;
    return regex.test(input);
}
// function valueButton(btns){
//     let valueBtn = "98+76-54*32/10";


// }
console.log(operate(2, 5, '/'));