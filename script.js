const numbers = document.querySelectorAll(".number");
const calculatorScreen = document.querySelector(".calculator-screen");
const operators = document.querySelectorAll(".operator");
const equalSign = document.querySelector(".equal-sign");
const clearBtn = document.querySelector(".all-clear");
const decimal = document.querySelector(".decimal");
const percentage = document.querySelector(".percentage");

let prevNumber,
  currentNumber = "0",
  calculationOperator;

const inputNumber = (number) => {
  if (currentNumber === "0") {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
};

const inputOperator = (operator) => {
  if (!calculationOperator) {
    prevNumber = currentNumber;
  }
  calculationOperator = operator;
  currentNumber = "";
};

const calculate = () => {
  let result;
  let x = parseFloat(prevNumber);
  let y = parseFloat(currentNumber);
  console.log(x, y);
  switch (calculationOperator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = x - y;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = x / y;
      break;
    default:
      return;
  }
  currentNumber = result;
  calculationOperator = "";
};

const clearAll = () => {
  prevNumber = "";
  currentNumber = "0";
  calculationOperator = "";
};

const inputDecimal = (dot) => {
  if (currentNumber.includes(".")) {
    return;
  }
  currentNumber += dot;
};

const inputPercentage = () => {
  currentNumber = parseFloat(currentNumber) / 100;
};

percentage.addEventListener("click", () => {
  inputPercentage();
  updateScreen(currentNumber);
});

operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    inputOperator(e.target.value);
  });
});

const updateScreen = (value) => {
  calculatorScreen.value = value;
};

equalSign.addEventListener("click", () => {
  calculate();
  updateScreen(currentNumber);
});

clearBtn.addEventListener("click", () => {
  clearAll();
  updateScreen(currentNumber);
});

decimal.addEventListener("click", (e) => {
  inputDecimal(e.target.value);
  updateScreen(currentNumber);
});

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    console.log(e.target.value);
    inputNumber(e.target.value);
    updateScreen(currentNumber);
  });
});
