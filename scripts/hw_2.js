/* eslint-disable no-alert */
const numberFirst = prompt('Enter your first number', 0);
const numberSecond = prompt('Enter your second number', 0);
const add = +numberFirst + +numberSecond;
const sub = +numberFirst - +numberSecond;
const mult = +numberFirst * +numberSecond;
const div = (+numberFirst / +numberSecond).toFixed(1);
alert(` 
· ${numberFirst} + ${numberSecond} = ${add} 
· ${numberFirst} - ${numberSecond} = ${sub} 
· ${numberFirst} * ${numberSecond} = ${mult} 
· ${numberFirst} / ${numberSecond} = ${div} 
`);
