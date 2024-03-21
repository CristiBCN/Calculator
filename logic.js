const display = document.querySelector('#display');
const buttons = document.querySelector('.buttons');
const MC = document.querySelector('#memoryClear');
const MR = document.querySelector('#memoryRecall');

let n1 = null,   
  n2 = null,
  //num = null, 
  operator = null,  
  //calculated = false,
  mem = 0,
  res = null;

const operate = {
  adds: (a, b) => a + b,
  subtracts: (a, b) => a - b,
  multiplies: (a, b) => a * b,
  divides: (a, b) => a / b,
}

buttons.addEventListener("click", (e) => userHandler(e));

let inserting = false;

function userHandler(e) {
  const userInput = e.target.value ? e.target.value : e.target.id;
  console.log(userInput);

  !inserting ? display.value = 0 : '';
  
  if (e.target.value) {
    handlerDisplay(e);
    inserting = true;    
  } else if (userInput === "dec") {
    setDecimal();
    inserting = true;
  } else if (userInput === "sign") {
    toggleSign();  
  } else if (Object.keys(operate).includes(userInput)) {
    if (!n1) {
      n1 = Number(display.value);
    } else {
      n2 = Number(display.value);
      res = calculate(n1, operator, n2);
      display.value = res;
      n1 = res;
      //n2 = null;
    }
    operator = userInput;
    inserting = false;
  } else if (userInput === "clear") {
    clearAll();
  } else if (userInput === "del") {
    del();
  } else if (userInput === "equal" && operator) {
    n2 = Number(display.value);
    res = calculate(n1, operator, n2);
    display.value = res;
    n1 = res;
    inserting = false;
  } else if (userInput === "memoryStore") {
    mem = Number(display.value);
    inserting = false;
    MC.disabled = false;
    MR.disabled = false;    
  } else if (userInput === "memoryMinus") {
    mem = mem - Number(display.value);
    inserting = false;
    MC.disabled = false;
    MR.disabled = false;    
  } else if (userInput === "memoryPlus") {
    mem = mem + Number(display.value);
    inserting = false;
    MC.disabled = false;
    MR.disabled = false;    
  } else if (userInput === "memoryRecall") {
    display.value = mem;
    inserting = false;
  } else if (userInput === "memoryClear") {
    mem = 0;    
    MC.disabled = true;
    MR.disabled = true;
  }
}


function handlerDisplay(e) {
  display.value !== '0' 
    ? display.value += e.target.value        
    : display.value = e.target.value;    
    //num = Number(display.value); 
    //console.log(num);   
  //return display.value;      
}

function toggleSign() {  
  display.value = -display.value;
  /*num = Number(display.value);
  console.log(num);
  return num;  */
}

function setDecimal() {
  display.value.includes('.') ? '' : 
    (display.value === '0' || display.value === '')
      ? display.value = '0' + '.' 
      : display.value = display.value + '.';         
}

function clearAll() {
  n1 = null;   
  n2 = null; 
  operator = null;  
  res = null;
  display.value = 0;
}

function del() {
  if (operator === null) {
    if (isNaN(display.value)) {
      return;
    }    
    if (display.value.length > 0) {
      display.value = display.value.slice(0, -1);
    }
    if (display.value === '') {
      display.value = "0";
    }
  } else {    
    if (n2 === null) {
      operator = null;
    }
    if (display.value.length > 0) {      
      display.value = display.value.slice(0, -1);
      n2 = Number(display.value);
    }
    if (display.value === '') {
      display.value = "0";
    }
    console.log(n1, n2);
  }  
}

function calculate(a, oper, b) {
  if (oper === "divides" && n2 === 0) {
    return "It's impossible!"
  }
  //calculated = true;
  return operate[oper](a, b);  
}

function memStore() {

}