"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

let nameOfFirstFilm = prompt("Один из недавно просмотренных фильмов?");
let ratingOfFirstFilm = prompt("Оцените его по 10 бальной шкале");

personalMovieDB.movies[nameOfFirstFilm] = ratingOfFirstFilm;

let nameOfSecondFilm = prompt("Один из недавно просмотренных фильмов?");
let ratingOfSecondFilm = prompt("Оцените его по 10 бальной шкале");

personalMovieDB.movies[nameOfSecondFilm] = ratingOfSecondFilm;

console.log(personalMovieDB);
console.log(personalMovieDB.movies);