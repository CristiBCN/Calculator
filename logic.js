//let the numbers show:

let display = document.querySelector('#display');
let numbers = document.querySelectorAll('div.numbers > button');

function toggleSign() {  
  display.value = -display.value;  
}

function setDecimal() {
  display.value.includes('.') ? '' : 
    (display.value === '0' ||display.value === '')
      ? display.value = '0' + '.' 
      : display.value = display.value + '.';
}

function handlerDisplay(e) {
  display.value !== '0' 
    ? display.value += e.target.id        
    : display.value = e.target.id;
  //return display.value; 
}

function displayNumber() {
  for (let number of numbers) {
    if (number.id === 'sign') {
      number.addEventListener("click", toggleSign);
    } else if (number.id === 'dec') { 
      number.addEventListener("click", setDecimal);
    } else {
      number.addEventListener("click", handlerDisplay);
    }  
  }
 
}

displayNumber();

//define variables:

let n1, n2, operator;

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


//store the numbers and operate:

let plus = document.querySelector('#adds');
let minus = document.querySelector('#subtracts');
let times = document.querySelector('#multiplies');
let by = document.querySelector('#divides');
let equal = document.querySelector('#equals');

/*function setNumber(e) {
  let num = +display.value;
  (e.target === plus || e.target === minus || e.target === times || e.target === by) 
    ? display.value = '0' : '';
  return +num;  
}*/

function operate(operator, a, b) {
  switch (operator) {
    case 'adds':
      return add(a, b);      
    case 'subtracts':
      return subtract(a, b);      
    case 'multiplies':
      return multiply(a, b);      
    case 'divides':
      return divide(a, b);          
  }
}

function handlerOperations(e) {
  n1 = +display.value;
  //display.value = '';
  //handlerDisplay(e);
  console.log(n1);

  console.log(e.target.id);
  operator = e.target.id;
  if (operator) {    
    
    n2 = displayNumber();
  }
  console.log(n2);
  
/*
    n2 = operate(operator, n1, +display.value);
    display.value = n1;
    console.log(n1);
    return n1;
  } else {
    return n1 = operate(operator, n1, +display.value)
  }*/
  
  //n1 ? n1 = operate(operator, n1, setNumber(e)) : n1 = setNumber(e);
  
  
  //n2 = setNumber(e);
  //display.value = operate(e.target.id, n1, n2);
    
}

plus.addEventListener('click', handlerOperations);
minus.addEventListener('click', handlerOperations);
times.addEventListener('click', handlerOperations);
by.addEventListener('click', handlerOperations);
