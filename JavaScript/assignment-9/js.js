let display = document.getElementById("display");
let currentInput = "";
let operator = "";
let firstOperand = "";

function updateDisplay(value) {
  display.innerText = firstOperand + " " + operator + " " + currentInput;
}

function insertNumber(number) {
  if (currentInput === "0" && number !== ".") {
    currentInput = number;
  } else {
    if (number === "." && currentInput.includes(".")) return;
    currentInput += number;
  }
  updateDisplay(currentInput);
}

function setOperator(op) {
  if (currentInput === "") return;
  if (firstOperand !== "") calculateResult();
  operator = op;
  firstOperand = currentInput;
  currentInput = "";
  updateDisplay(firstOperand + " " + operator);
}

function add() {
  setOperator("+");
}

function subtract() {
  setOperator("-");
}

function multiply() {
  setOperator("*");
}

function divide() {
  setOperator("/");
}

function calculateResult() {
  if (firstOperand === "" || currentInput === "") return;

  const a = parseFloat(firstOperand);
  const b = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case "+": result = a + b; break;
    case "-": result = a - b; break;
    case "*": result = a * b; break;
    case "/": result = b !== 0 ? a / b : "error"; break;
    default: return;
  }

  currentInput = result.toString();
  firstOperand = "";
  operator = "";
  updateDisplay(currentInput);
}

function clearDisplay() {
  currentInput = "";
  firstOperand = "";
  operator = "";
  updateDisplay("0");
}

function deleteLast() {
  if (currentInput !== "" && currentInput !== "0") {
    currentInput = currentInput.slice(0, -1);
  } else if (operator !== "") {
    operator = "";
    firstOperand = "";
  }
  updateDisplay(currentInput);
}
