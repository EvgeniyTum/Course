alert('Hello');

const result = confirm("Are you Here?");

console.log(result); // если ок, то true

const answer = prompt("Вам есть 18?", "18");
console.log(answer);

const answers = [];

answer[0] = prompt('Как ваше имя?', '');
answer[1] = prompt('Как ваша фамилия?', '');
answer[2] = prompt('Сколько вам лет?', '');

// document.write(answers);