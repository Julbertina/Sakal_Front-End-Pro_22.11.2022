function makeSum() {
  let x = 0;
  return function b(y) {
    x += y;
    return x;
  };
}
const add = makeSum();
console.log(add(3));
console.log(add(5));
console.log(add(20));
