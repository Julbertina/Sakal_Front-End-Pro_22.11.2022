const number = 2;
const numberDegree = 3;
function pow(num, degree) {
  return (degree === 1) ? num : num * pow(num, degree - 1);
}
console.log(pow(number, numberDegree));
