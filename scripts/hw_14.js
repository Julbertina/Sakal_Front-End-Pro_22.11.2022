const arr = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78, NaN];

function getAverage(myArr) {
  let sum = 0;
  let quantity = 0;
  for (let index = 0; index < myArr.length; index++) {
    if (typeof myArr[index] === 'number' && Number(myArr[index])) {
      sum += myArr[index];
      quantity++;
    }
  }
  const average = sum / quantity;
  return average;
}
console.log(getAverage(arr));

const number1 = +prompt('Enter the first number');
const number2 = +prompt('Enter the second number');
const mathOperation = prompt('Enter the operation: +, -, *, /, %, ^');
let result;

function doMath(x, znak, y) {
  switch (znak) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '%':
      result = x % y;
      break;
    case '^':
      result = x ** y;
      break;
    default:
      result = 'operation can\'t be performed';
  }
  return result;
}
console.log(doMath(number1, mathOperation, number2));

const sizeI = prompt('Number of elements in main arrey will be:', 0);
const sizeJ = prompt('Number of elements in inner arrey will be:', 0);
const array = [];

function getArray(elements1, elements2) {
  for (let i = 0; i < elements1; i++) {
    array[i] = [];
    for (let j = 0; j < elements2; j++) {
      array[i][j] = prompt(`Enter array element №${j + 1}`);
    }
  }
  return array;
}
console.log(getArray(sizeI, sizeJ));

const text = prompt('enter a text in lower case', 'hello world');
const array1 = [prompt('enter 1st letter to delete', 'h'), prompt('enter 2nd letter to delete', 'w')];

console.log(text);

function cutText(string, removeChars) {
  if (string !== null) {
    const textAdj = string.toLowerCase().split(removeChars[0].toLowerCase()).join('');
    const textResult = textAdj.split(removeChars[1].toLowerCase()).join('');
    return textResult;
  } return 'Function was stopped';
}

console.log(cutText(text, array1));
