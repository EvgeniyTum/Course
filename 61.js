"use strict";

const bigint = 123475438546459827658793264587365487346589736n;

const sameBigint = BigInt(123475438546459827658793264587365487346589736);

// console.log(typeof(bigint));
// console.log(5n + 1); ошибка
// console.log(Math.round(5n)); ошибка
console.log(1n + 2n);
console.log(5n / 2n); // всегда округляет
console.log(2n > 5); // false
console.log(2n > 1); // true
console.log(2n == 2); // true
console.log(2n === 2); // false

let bigint2 = 1n;
let number = 2;

console.log(bigint2 + BigInt(number));
console.log(Number(bigint2) + number);
// console.log(+bigint2 + number); ошибка
