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
            divide(x, y);
            break;
    }       
}

const buttonContainer = document.querySelector(".calc-buttons");
const buttons = buttonContainer.querySelectorAll("button");
const clearBtn = document.querySelector(".cs_clear");
const submitBtn = document.querySelector(".cs_equal");
const input = document.querySelector("input");
const addBtn = buttonContainer.querySelector(".cs_add");
let sum = 0;

//Putting value on every buttons
buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        let inputVal;
        const operators = ['+', '-', '*', '/'];
        if(operators.includes(e.target.dataset.value)){
            inputVal = input.value;
        } else {
            inputVal = input.value += e.target.dataset.value;
        }
        
        let keyVal = e.target.dataset.value;
        let firstVal = +input.value;
        
        if(keyVal === '+'){
            if(sum === 0){
                sum = firstVal;
                input.value = "";
            } else {
                sum += firstVal;
                input.value = "";
                input.value = sum;
            }
        }
        
    })
});

//Equal all total that users input
submitBtn.addEventListener("click", () => {
    let firstInputVal = input.value;
    let secInputVal;
    const operators = ['+', '-', '*', '/'];
    let getOp = firstInputVal.at(-1);
})

//Submit and revalue the input to sum
input.addEventListener("keydown", (e) => {
    sum = input.value;
    let keyTarget = e.key;
    let operators = ['+', '-', '*', '/'];
    let secondVal;

    if(operators.includes(keyTarget)){
        console.log(keyTarget);
    }
})

//Validating keys only numbers and operators are allowed
input.addEventListener('keydown', (e) => {
    const regex = /^[0-9+\-*/().\s]+$/;
    
    if (e.key === 'Backspace'){
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
})

