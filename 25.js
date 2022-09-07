"use strict";

let num = 20;

function showFirstMessage() {
  console.log('Hello World!');
  // let num = 10;
  console.log(num);
}

showFirstMessage();
console.log(num);

function calc(a, b) {
  return (a + b);
  // console.log('gfgfg'); не выведется после  return
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(10, 6));

function ret() {
  let num = 50;
  return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function() {
  console.log('Hello!');
};

logger();

const calc2 = (a, b) => a + b; // { return a + b } если не в одну строчку;