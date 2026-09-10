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


buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        input.value += e.target.dataset.value;
    })
});

const clearBtn = document.querySelector(".cs_clear");
//Clearing number inside of text box in input

clearBtn.addEventListener("click", () => {
    input.value = "";
})


//Submit and revalue the input
const submitBtn = document.querySelector(".cs_equal");
const input = document.querySelector("input");
let sum = 0;

submitBtn.addEventListener("click", () => {
    let inputVal = input.value;
    let operators = ['+', '-', '*', '/'];
    console.log(inputVal);
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
