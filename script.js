"use strict";

let numberOfFilms;

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
  }
}

start();

const personalMovieDb = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("Один из последних просмотренных фильмов?", ""),
      b = prompt("На сколько оцените его?", "");

    if (a != "" && b != "" && a != null && b != null && a.length < 50) {
      personalMovieDb.movies[a] = b;
      console.log("Done");
    } else {
      console.log("Error");
      i--;
    }
  }
}
// rememberMyFilms();

function detectedPersonalLevel() {
  if (personalMovieDb.count < 10) {
    console.log("Просмотрено довольно мало фильмов");
  } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    console.log("Вы классический зритель");
  } else if (personalMovieDb.count >= 30) {
    console.log("Вы киноман");
  } else {
    console.log("Произошла ошибка");
  }
}

// detectedPersonalLevel();

function showMyDb() {
    if (personalMovieDb.privat == false) {
        console.log(personalMovieDb);
    }
}

showMyDb();

function writeYouGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
  }
}
writeYouGenres();

