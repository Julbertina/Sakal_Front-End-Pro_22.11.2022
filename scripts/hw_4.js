/* eslint-disable no-alert */
const action = prompt('Enter operator ( either: add, sub, mult, div )');
const firstNumber = prompt('Enter yours first number');
const secondNumber = prompt('Enter yours second number');
let result;
switch (action) {
  case 'add':
    result = (+firstNumber) + (+secondNumber);
    alert(`${firstNumber} + ${secondNumber} = ${result}`);
    break;
  case 'sub':
    result = firstNumber - secondNumber;
    alert(`${firstNumber} - ${secondNumber} = ${result}`);
    break;
  case 'mult':
    result = firstNumber * secondNumber;
    alert(`${firstNumber} * ${secondNumber} = ${result}`);
    break;
  case 'div':
    result = firstNumber / secondNumber;
    alert(`${firstNumber} / ${secondNumber} = ${result}`);
    break;
  default:
    alert('Sorry, something went wrong');
}
