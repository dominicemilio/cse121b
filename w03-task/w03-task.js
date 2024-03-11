// w03-task.js

// Addition Feature - Function Declaration
function add(number1, number2) {
  return number1 + number2;
}

// Addition Feature - Function Declaration for HTML form controls
function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);
  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

// Subtraction Feature - Function Expression
const subtract = function (number1, number2) {
  return number1 - number2;
};

// Subtraction Feature - Function Expression for HTML form controls
const subtractNumbers = function () {
  let subtractNumber1 = Number(document.querySelector('#subtract1').value);
  let subtractNumber2 = Number(document.querySelector('#subtract2').value);
  document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
};

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

// Multiplication Feature - Arrow Function
const multiply = (number1, number2) => number1 * number2;

// Multiplication Feature - Arrow Function for HTML form controls
const multiplyNumbers = function () {
  let factor1 = Number(document.querySelector('#factor1').value);
  let factor2 = Number(document.querySelector('#factor2').value);
  document.querySelector('#product').value = multiply(factor1, factor2);
};

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

// Division Feature - Function Declaration
function divide(dividend, divisor) {
  return dividend / divisor;
}

// Division Feature - Function Declaration for HTML form controls
function divideNumbers() {
  let dividend = Number(document.querySelector('#dividend').value);
  let divisor = Number(document.querySelector('#divisor').value);
  document.querySelector('#quotient').value = divide(dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

// Selection Structures
document.querySelector('#getTotalDue').addEventListener('click', function () {
  let subtotal = Number(document.querySelector('#subtotal').value);
  let applyDiscount = document.querySelector('#membership').checked;

  if (applyDiscount) {
    subtotal *= 0.8; // Apply a 20% discount
  }

  let total = subtotal.toFixed(2);
  document.querySelector('#total').innerText = `Total Due: $${total}`;
});

// Array Methods - Functional Programming
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

document.querySelector('#array').innerText = numbersArray;

document.querySelector('#odds').innerText = numbersArray.filter(number => number % 2 !== 0);

document.querySelector('#evens').innerText = numbersArray.filter(number => number % 2 === 0);

document.querySelector('#sumOfArray').innerText = numbersArray.reduce((sum, number) => sum + number);

document.querySelector('#multiplied').innerText = numbersArray.map(number => number * 2);

document.querySelector('#sumOfMultiplied').innerText = numbersArray
  .map(number => number * 2)
  .reduce((sum, number) => sum + number);