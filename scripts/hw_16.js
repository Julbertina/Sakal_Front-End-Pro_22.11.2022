/* eslint-disable func-names */
function makeSum(x) {
  const number1 = x;
  return function (y) {
    const number2 = number1 + y;
    return function (z) {
      const number3 = number2 + z;
      return `${number1}, ${number2}, ${number3}`;
    };
  };
}

const add3 = makeSum(3);
const add5 = add3(5);
const add20 = add5(20);
console.log(add20);
