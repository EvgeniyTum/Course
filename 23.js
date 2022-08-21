for (let i = 0; i < 3; i++) {
  console.log(i);
  for (let j = 0; j < 3; j++) {
    console.log(j);
  }
}

let result = '';
const length1 = 7;

for (let i = 1; i <= length1; i++) {
  for (let j = 0; j < i; j++) {
    result += '*';
  }
  result += '\n';
}

console.log(result);

first: for (let i = 0; i < 3; i++) {
  console.log(`First level: ${i}`);
  for (let j = 0; j < 3; j++) {
    console.log(`Second level: ${j}`);
    for (let k = 0; k < 3; k++) {
      if (k === 2) {
        // continue first;
        break first;
      }
      console.log(`Third level: ${k}`);
    }
  }
}

const lines = 5;
let result1 = '';
// Проверяется именно переменная result, формируйте строку в ней
for (let i = 1; i <= lines; i++) {
    for (let k = 0; k < i; k++) {
      result1 += `${' '.repeat(lines - k)}1`;
    }
    result1 += '\n';
}

console.log(result1);