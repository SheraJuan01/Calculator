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
    let result = x / y;
    if(!Number.isInteger(result)) {return result.toFixed(1)};
    return result;
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

let num1 = null;
let num2 = null
let operator = null;
let answer = null;

//Putting value on every buttons
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const val = btn.dataset.value;

        //After pressing "=" AND no operator is pending it will clear everything,
        // start a brand-new calculation
        if(operators.includes(val)){

            input.value = "0";
            if(answer !== null){
                num1 = answer;
                answer = null;
            } else if(num1 === null){
                num1 = parseFloat(input.value);
            }
            else if(operator !== null && num2 !== null){
                const result = operate(num1, num2, operator);
                num1 = result;
                input.value = result;
            }

            operator = val;
            num2 = null;
            return;
        }


        //
        if(answer !== null && operator === null){
            num1 = null;
            num2 = null;
            answer = null;
            input.value = "";
        }
        
        if(operator !== null){
            if(num2 === null){
                input.value = val;
            } else {
                input.value += val;
            }
            num2 = parseFloat(input.value);
            return;
        }

        if(input.value === "0" || input.value === ""){
            input.value = val;
        } else {
            input.value += val;
        }
        
        num1 = parseFloat(input.value);
        
        if (answer !== null) {
            num1 = answer;
            answer = null;
        } else if(num1 === null){
            num1 = parseFloat(input.value);
        }
    });
        
});

//Equal all total that users input
submitBtn.addEventListener("click", () => {
    if (operator === null || num2 === null) return;

    let result = operate(num1, num2, operator);
    input.value = result;
    answer = result;
    num1 = null;
    num2 = null;
    operator = null;
})

//Submit and revalue the input to sum
input.addEventListener("keydown", (e) => {
})

//Validating keys only numbers and operators are allowed
input.addEventListener('keydown', (e) => {
    const regex = /^[0-9+\-*/().\s]+$/;

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
    num1 = num2 = operator = answer = null;
})