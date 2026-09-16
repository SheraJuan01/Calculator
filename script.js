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
            return add(x, y);
        case '-': 
            return subtract(x, y);
        case '*':
            return multiply(x, y);
        case '/':
            return divide(x, y);
        default:
            return 0;
    }       
}


const buttonContainer = document.querySelector(".calc-buttons");
const buttons = buttonContainer.querySelectorAll("button");
const clearBtn = document.querySelector(".cs_clear");
const submitBtn = document.querySelector(".cs_equal");
const input = document.querySelector("input");
const addBtn = buttonContainer.querySelector(".cs_add");
const operators = ['+', '-', '*', '/'];
let sum = 0;
let inputVal;
let operateKey = "";

//Putting value on every buttons
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let firstVal = +input.value;
        let keyVal = e.target.dataset.value;

        if(input.value === sum){
            input.value = "";
        }

        if(operators.includes(keyVal)){
            e.preventDefault();
        } else {
            inputVal = input.value += e.target.dataset.value;
        }

        if(operators.includes(keyVal)){
            operateKey = keyVal;
            if(sum === 0){
                sum = firstVal;
                input.value = "";
            } else {
                inputVal = firstVal;
                sum = operate(sum, inputVal, keyVal);
                input.value = "";
                input.value = sum;
            }
        }
    })
});

//Equal all total that users input
submitBtn.addEventListener("click", () => {

    if(sum === 0 || operateKey === '' || inputVal === ''){
        return;
    }
    sum = operate(sum, +inputVal, operateKey);

    input.value = sum;
    inputVal = "";
    operateKey = "";
})

//Submit and revalue the input to sum
input.addEventListener("keydown", (e) => {
    let firstVal = +input.value;
    let keyVal = e.key;

    if(operators.includes(keyVal)){
        e.preventDefault();
        if(sum === 0){
            sum = firstVal;
            input.value = "";
        } else {
            sum = operate(sum, firstVal, keyVal);
            input.value = "";
            input.value = sum;
        }
    }
})

//Validating keys only numbers and operators are allowed
input.addEventListener('keydown', (e) => {
    const regex = /^[0-9+\-*/().\s]+$/;

    if(operateKey){
        input.value = "";
    }

    if(e.key === 'Backspace'){
        return;
    }

    if(!regex.test(e.key)){
        e.preventDefault();
    }
})

//Clearing number inside of text box in input
clearBtn.addEventListener("click", () => {
    input.value = "";
    sum = 0;
    inputVal = 0;
    operateKey = "";
})
