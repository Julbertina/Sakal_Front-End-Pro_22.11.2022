/* eslint-disable no-restricted-globals */
/* eslint-disable no-alert */
const stringInput1 = prompt('Enter anything');
const stringInput2 = prompt('Again enter anything');
const stringInput3 = prompt('And again enter anything');
// const stringCombo = `${stringInput1} ${stringInput2} ${stringInput3}`;
alert(`${stringInput1} ${stringInput2} ${stringInput3}`);

const number = prompt('Enter five-digit number', 0);
if (isNaN(number) === true || number.length !== 5) {
  alert('Sorry, you didn\'t follow the instructions');
} else {
  const myArray = number.toString().split('');
  alert(`${myArray[0]} ${myArray[1]} ${myArray[2]} ${myArray[3]} ${myArray[4]}`);
}
