/* eslint-disable no-console */
let task1 = '';
for (let i = 20; i <= 30; i += 0.5) {
  task1 += `${i} `;
}
console.log(`1). ${task1}`);

let task2;
for (let i = 10; i <= 100; i += 10) {
  task2 = `${i * 27} `;
  console.log(`2).  ${i} Usd = ${task2}Uah`);
}

const n = 80;
let task3 = '';
for (let i = 1; i <= 100; i += 1) {
  if ((i ** 2) < n) {
    task3 += `${i}, `;
  }
}
console.log(`3). ${task3.slice(0, -2)}`);

const n2 = 50;
let task4 = '';

outer:for (let i = 2; i <= n2; i++) {
  for (let j = 2; j < i; j++) {
    if (i % j == 0) continue outer;
  }
  task4 += `${i}, `;
}

console.log(`4). ${task4.slice(0, -2)}`);

const number = 81;
// let task5 = '';
let exponentiation = 0;
if (number % 3 === 0) {
  for (let i = 3; i <= number; i *= 3) {
    // task5 += `${i}, `;
    exponentiation += 1;
  }
  console.log(`5). 3 to the power ${exponentiation}`);
} else {
  console.log('5). This number isn\'t evenly divisible by 3');
}
