/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
const numberOne = Number(prompt('Enter 1st number'));
const numberTwo = Number(prompt('Enter 2nd number'));
const numberThree = Number(prompt('Enter 3rd number'));
const sum = numberOne + numberTwo + numberThree;
let message;
if (isNaN(numberOne) === true || isNaN(numberTwo) === true || isNaN(numberThree) === true) {
  message = ('Operation cannot be performed');
} else {
  message = `Your arithmetic average is: ${sum / 3}`;
}
alert(message);
