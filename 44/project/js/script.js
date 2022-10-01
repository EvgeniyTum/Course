/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const advertisement = document.querySelectorAll('.promo__adv img'),
        genreFilm = document.querySelector('.promo__bg'),
        bg = genreFilm.querySelector('.promo__genre'),
        films = document.querySelector('.promo__interactive-list'),
        formAdd = document.querySelector('form.add'),
        addInput = formAdd.querySelector('.adding__input'),
        checkbox = formAdd.querySelector('[type="checkbox"]');

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };

    const deleteAdv = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };

    const anyChange = () => {
        bg.textContent = 'драма';

        genreFilm.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMoviesList(arr, parent) {
        parent.innerHTML = '';
    
        sortArr(movieDB.movies);

        arr.forEach((item, i) => {
            parent.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${item}
            <div class="delete"></div>
        </li>
        `;
        });

        document.querySelectorAll('.delete').forEach((item, i) => {
            item.addEventListener('click', (even) => {
                even.preventDefault();

                item.parentElement.remove();
                arr.splice(i, 1);
                createMoviesList(arr, parent);
            });
        });
    } 

    formAdd.addEventListener('submit', (even) => {
        even.preventDefault();

        if (addInput.value) {
            movieDB.movies.push(addInput.value.length > 21 ? `${addInput.value.substr(0, 20)}...` : addInput.value);

            if (checkbox.checked) {
                console.log('Добавляем любимый фильм');
            }
            sortArr(movieDB.movies);
            createMoviesList(movieDB.movies, films);
        }
        formAdd.reset();
    });

    // deleteFilm.forEach((item, i) => {
    //     item.addEventListener('click', (even) => {
    //         even.preventDefault();
    //         console.log('delete');
    //         film[i].remove();
    //     });
    // });

    deleteAdv(advertisement);
    anyChange();
    createMoviesList(movieDB.movies, films);
});


