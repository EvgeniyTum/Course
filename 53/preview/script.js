'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

const newHeight = 100;
const newWidth = 400;

function changeParams(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200}px`;
    elem.innerHTML = (h ?? 200) * (w ?? 200);
}

changeParams(box, newHeight, newWidth);

let userName;
let userKey;

console.log(userKey ?? 'User');

console.log(block?.textContent);

const userData = {
    name: 'Ivan',
    age: null,
    say: function() {
        console.log('Hello!');
    }
};

userData.say();
userData.hey?.();


// if (userData && userData.skills && userData.skills.js) {
//     console.log(userData.skills.js);
// }

console.log(userData?.skills?.js);