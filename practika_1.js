let numberOfFilms;

function start() {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actrors: {},
  geners: [],
  privat: false
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

// detectPersonalLevel();

function writeYourGenres() {
  for (let i = 1; i < 4; i++) {
    personalMovieDB.geners[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}

writeYourGenres();

function showMyDB() {
  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }
}

showMyDB();

