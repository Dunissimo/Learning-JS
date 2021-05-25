"use strict";

let numberOfFilms;

start();

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

rememberFilms();

writeGenres();

detectLevel();

showMyDB(personalMovieDB);

function start() {
  numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
  }
}
function rememberFilms() {
  for (let i = 0; i < 2; i++) {
    let nameOfFilm = prompt("Один из недавно просмотренных фильмов?");
    let ratingOfFilm = prompt("Оцените его по 10 бальной шкале");
    
    if (nameOfFilm != null && ratingOfFilm != null && nameOfFilm != '' && ratingOfFilm != '' && nameOfFilm.length < 50) {
      personalMovieDB.movies[nameOfFilm] = ratingOfFilm;   
    } else {
      console.log("Error");
      i--;
    }
    
  }
}
function writeGenres() {
  for (let i = 0; i < 3; i++) {
    personalMovieDB.genres[i] = prompt(`Ваш любимый жанр. Номер ${i + 1}`);
  }
}
function detectLevel() {
  if (personalMovieDB.count <= 10) {
    console.log("Мало");
  } else if (personalMovieDB.count > 10 && personalMovieDB < 30) {
    console.log("Норм");
  } else if (personalMovieDB.count >= 30){
    console.log("Много");
  } else {
    console.log("ERROR");
  }
}
function showMyDB(obj) {
  if (personalMovieDB.privat == false) {
    console.log(obj);
  } else {
    console.log("База данных приватная");
  }
}