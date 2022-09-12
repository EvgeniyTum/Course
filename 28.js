"use strict";

const str = "test";

console.log(str.length);
console.log(str[2]);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str);

let fruit = 'Some fruit';

console.log(fruit.indexOf('fruit'));

const logg = "Hello world";

console.log(logg.slice(6, 11)); // вырезать от и до
console.log(logg.slice(6,)); // от и до конца

console.log(logg.substring(6, 11)); // тоже самое на без отрицательных значений

console.log(logg.substr(6, 11));

const num = 12.2;
console.log(Math.round(num)); // округление

const test = '12.2px';
console.log(parseInt(test)); // 12
console.log(parseFloat(test)); // 12.2







