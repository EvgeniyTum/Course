"use strict";

// let id = Symbol("id");

// const obj = {
//   name: 'Test',
//   [id]: 1,
//   getId: function() {
//     return this[id];
//   }
// };

// // let id = Symbol("id");
// // let id2 = Symbol("id");

// // console.log(id == id2);

// // obj[id] = 1;

// console.log(obj);
// console.log(obj.getId());
// console.log(Object.getOwnPropertySymbols(obj));
// console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);


// for (let value in obj) {
//   console.log(value);
// }

const myAwesomeDB = {
  movies: [],
  actors: [],
  [Symbol.for('id')]: 123
};

// сторонний код

myAwesomeDB.id = '323232323';

console.log(myAwesomeDB[Symbol.for("id")]);
console.log(myAwesomeDB);