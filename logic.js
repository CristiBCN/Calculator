//define variables:

let n1 = 0;
let n2 = 0;
let operator;


//define the operators and operation:

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(operator, a, b) {
  switch (operator) {
    case add:
      add(a, b);
      break;
    case subtract:
      subtract(a, b);
      break;
    case multiply:
      multiply(a, b);
      break;
    case divide:
      divide(a, b);
      break;    
  }
}


//let yhe numbers show:

let display = document.querySelector('#display');
let numbers = document.querySelectorAll('div.numbers > button');
console.log(numbers);


function toggleSign() {  
  display.value = -display.value;
}

function setDecimal() {
  display.value.includes('.') ? '' : 
    (display.value === '0' ||display.value === '')
      ? display.value = '0' + '.' 
      : display.value = display.value + '.';
}

function handler(e) {
  display.value !== '0' 
    ? display.value += e.target.id        
    : display.value = e.target.id; 
  console.log(display.value);
}

for (let number of numbers) {
  if (number.id === 'sign') {
    number.addEventListener("click", toggleSign);
  } else if (number.id === 'dec') { 
    number.addEventListener("click", setDecimal);
  } else {
    number.addEventListener("click", handler);
  }
}


