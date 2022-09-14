const personalMovieDB = {
  count: 0,
  movies: {},
  actrors: {},
  genres: [],
  privat: false,
  start: function () {
    personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

    }
  },
  rememberMyFilms: function() {
    for (let i = 2; i > 0; i--) {

      const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
            b  = +prompt('На сколько оцените его?','').trim();
    
      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log('done');
      } else {
        console.log('error');
        i++;
      }
    }
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
      console.log('Вы киноман');
    } else {
      console.log('Произошла ошибка');
    }
  },
  writeYourGenres: function() {
    for (let i = 1; i < 2; i++) {
      let genres = prompt(`Введите ваши любимые жанры фильмов через запятую`).toLowerCase();
      if (genres === null || genres === '') {
        console.log('Вы ввели некоректные данные или не ввели их вовсе');
        i--;
      } else { 
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    
   personalMovieDB.genres.forEach((a, i) => console.log(`Либимый жанр ${i + 1} - это ${a}`));
  },
  showMyDB: function() {
    if (!personalMovieDB.privat) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  }
};


