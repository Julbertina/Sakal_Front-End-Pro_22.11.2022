/* eslint-disable no-console */
/* eslint-disable no-plusplus */
/* eslint-disable linebreak-style */
const array = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25,
  -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];
let sum = 0;
let quantity = 0;
let min = array[0];
let max = array[0];
let minIndex = 0;
let maxIndex = 0;
let negative = 0;
let positiveOdd = 0;
let positiveEven = 0;
let sumPositiveOdd = 0;
let sumPositiveEven = 0;
let multPositive = 1;
const newArray = [];

for (let i = 0; i < array.length; i += 1) {
  if (array[i] > 0) {
    sum += array[i];
    quantity++;
    multPositive *= array[i];
  }

  if (min > array[i]) {
    min = array[i];
    minIndex = i;
  }

  if (max < array[i]) {
    max = array[i];
    maxIndex = i;
  }

  if (array[i] < 0) {
    negative++;
  }

  if ((array[i] % 2 !== 0) && array[i] > 0) {
    positiveOdd++;
    sumPositiveOdd += array[i];
  }

  if ((array[i] % 2 === 0) && array[i] > 0) {
    positiveEven++;
    sumPositiveEven += array[i];
  }
  newArray.push(0);
}
newArray[maxIndex] = max;

console.log(`1). sum = ${sum}   quantity = ${quantity}`);
console.log(`2). min = ${min}  minInde = ${minIndex} `);
console.log(`3). max ${max} maxIndex = ${maxIndex} `);
console.log(`4). negative ${negative}`);
console.log(`5). positiveOdd ${positiveOdd}`);
console.log(`6). positiveEven ${positiveEven}`);
console.log(`7). sumPositiveEven = ${sumPositiveEven}`);
console.log(`8). sumPositiveOdd = ${sumPositiveOdd}`);
console.log(`9). multiplication of positives = ${multPositive}`);
console.log(newArray);
