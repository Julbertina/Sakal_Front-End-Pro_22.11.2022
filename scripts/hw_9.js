/* eslint-disable no-console */
/* eslint-disable no-plusplus */
let task1 = '';
for (let i = 10; i <= 20; i += 1) {
  task1 += `${i}, `;
}
console.log(`1). ${task1.slice(0, -2)}`);

let task2 = '';
for (let i = 10; i <= 20; i += 1) {
  task2 += `${i * i}, `;
}
console.log(`2). ${task2.slice(0, -2)}`);

let task3 = '';
for (let i = 0; i <= 9; i += 1) {
  task3 += `${i} * 7 = ${i * 7}, `;
}
console.log(`3). ${task3.slice(0, -2)}`);

let task4 = 0;
for (let i = 1; i <= 15; i += 1) {
  task4 += i;
}
console.log(`4). ${task4}`);

let task5 = 1;
for (let i = 15; i <= 35; i += 1) {
  task5 *= i;
}
console.log(`5). ${task5.toLocaleString()}`);

let task6 = 0;
for (let i = 1; i <= 500; i += 1) {
  task6 += i / 500;
}
console.log(`6). ${task6}`);

let task7 = 0;
for (let i = 30; i <= 80; i += 1) {
  if (i % 2 === 0) {
    task7 += i;
  }
}
console.log(`7). ${task7}`);

let task8 = '';
for (let i = 100; i <= 200; i += 1) {
  if (i % 3 === 0) {
    task8 += `${i}, `;
  }
}
console.log(`8). ${task8.slice(0, -2)}`);

const number = 122;
let task9 = '';
for (let i = 0; i <= number; i += 1) {
  if (number % i === 0) {
    task9 += `${i}, `;
  }
}
console.log(`9). ${task9.slice(0, -2)}`);

const number2 = 122;
let task10 = 0;
for (let i = 0; i <= number2; i += 1) {
  if (number2 % i === 0 && i % 2 === 0) {
    task10++;
  }
}
console.log(`10). ${task10}`);

const number3 = 122;
let task11 = 0;
for (let i = 0; i <= number3; i += 1) {
  if (number3 % i === 0 && i % 2 === 0) {
    task11 += i;
  }
}
console.log(`11). ${task11}`);

let result;
for (let i = 1; i <= 10; i += 1) {
  for (let j = 1; j <= 10; j += 1) {
    result = i * j;
    console.log(`${i} * ${j} = ${result}`);
  }
}
