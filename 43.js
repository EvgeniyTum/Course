'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';
// box.style.height = '100px';

box.style.cssText = `background-color: blue; width: 500px; height: 100px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for( let i = 0; i < hearts.length; i++) {
//   hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
  item.style.backgroundColor = 'blue';
});

const div = document.createElement('div');
// const text = document.createTextNode('Тут был я');

div.classList.add('black');

// document.body.append(div);
wrapper.append(div); // в начале
// wrapper.appendChild(div); // старый метод

// wrapper.prepend(div); // в конце

// hearts[0].before(div);
// hearts[0].after(div);

// wrapper.insertBefore(div, hearts[0]); // старый метод вставить перед

// circles[0].remove(); // удаление элемента
// wrapper.removeChild(hearts[1]); // старый метод удаления

// hearts[0].replaceWith(circles[0]); // заменить один элемент другим
// wrapper.replaceChild(circles[0], hearts[0]); // старый метод переноса

div.innerHTML = '<h1>Hello World</h1>';

// div.textContent = 'Hello'; // только текст

// div.insertAdjacentHTML('beforbegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>');
// div.insertAdjacentHTML('beforend', '<h2>Hello</h2>');
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>');
