const digits = document.querySelectorAll(".digit");
const display = document.querySelector(".display");
const clear_btn = document.querySelector("#clear");
const add_btn = document.querySelector("#add");
const subscribe_btn = document.querySelector("#subscribe");
const multiple_btn = document.querySelector("#multiple");
const divide_btn = document.querySelector("#divide");
const equal_btn = document.querySelector("#equal");
let tempNum = 0;
let digitFlag = 0;
let operatorFlag = 0;

function digitHandleClick(e) {
    const num = e.target.innerText;
    if (digitFlag == 0) {

        display.value = parseFloat(display.value + num);
    } else {
        display.value = parseFloat(num);
        digitFlag = 0;
    }
}
function clearBtnHandleClick() {
    digitFlag = 0;
    tempNum = 0;
    operatorFlag = 0;
    display.value = parseFloat(0);
    console.log(tempNum);
    console.log(digitFlag);
    console.log(operatorFlag);

}
function addBtnHandleClick() {


    digitFlag = 1;
    if (operatorFlag == 0) {
        tempNum = parseFloat(display.value);
    }

    operatorFlag = '+';
    console.log(tempNum);
    console.log(digitFlag);
    console.log(operatorFlag);

}
function divideBtnHandleClick() {


    digitFlag = 1;
    if (operatorFlag == 0) {
        tempNum = parseFloat(display.value);
    }

    operatorFlag = '/';
    console.log(tempNum);
    console.log(digitFlag);
    console.log(operatorFlag);

}
function subcribeBtnHandleClick() {


    digitFlag = 1;
    if (operatorFlag == 0) {
        tempNum = parseFloat(display.value);
    }

    operatorFlag = '-';
    console.log(tempNum);
    console.log(digitFlag);
    console.log(operatorFlag);

}
function multipleBtnHandleClick() {


    digitFlag = 1;
    if (operatorFlag == 0) {
        tempNum = parseFloat(display.value);
    }

    operatorFlag = '*';
    console.log(tempNum);
    console.log(digitFlag);
    console.log(operatorFlag);

}

function equalBtnHandleClick() {
    switch (operatorFlag) {
        case '+':
            display.value = parseFloat(display.value) + parseFloat(tempNum);
            break;
        case '-':
            display.value = parseFloat(tempNum)-parseFloat(display.value);
            break;
        case '*':
            display.value = parseFloat(display.value) * parseFloat(tempNum);
            break;
        case '/':
            display.value = parseFloat(tempNum)/parseFloat(display.value);
            break;

        default:
            break;
    }

    operatorFlag = 0;
    console.log(tempNum);
    console.log(digitFlag);
    console.log(operatorFlag);
}


for (let i = 0; i <= 9; i++) {
    digits[i].addEventListener('click', digitHandleClick);
}
equal_btn.addEventListener('click', equalBtnHandleClick);
clear_btn.addEventListener('click', clearBtnHandleClick);
add_btn.addEventListener('click', addBtnHandleClick);
subscribe_btn.addEventListener('click', subcribeBtnHandleClick);
multiple_btn.addEventListener('click', multipleBtnHandleClick);
divide_btn.addEventListener('click', divideBtnHandleClick);