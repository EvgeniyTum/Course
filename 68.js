'use strict';

const now = new Date();
// new Date.parse(); то же самое

// console.log(now);

//получение компанентов даты
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay()); // номер дня недели, воскресенье - 0
// console.log(now.getUTCHours());
// console.log(now.getHours());

// console.log(now.getTimezoneOffset()); // отличие в минутах от гринвича
// console.log(now.getTime()); // милисекунд прошло с 1970 года

// методы сеттеры, установить время и дату

// console.log(now.setHours(18));
// console.log(now.setHours(18, 40));
// console.log(now);

let start = new Date();

for (let i = 0; i < 100000; i++) {
  let some = i ** 3;
}
let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд`);