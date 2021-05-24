"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

//let nameOfFirstFilm = prompt("Один из недавно просмотренных фильмов?");
//let ratingOfFirstFilm = prompt("Оцените его по 10 бальной шкале");

//personalMovieDB.movies[nameOfFirstFilm] = ratingOfFirstFilm;

//let nameOfSecondFilm = prompt("Один из недавно просмотренных фильмов?");
//let ratingOfSecondFilm = prompt("Оцените его по 10 бальной шкале");

//personalMovieDB.movies[nameOfSecondFilm] = ratingOfSecondFilm;

//console.log(personalMovieDB);
//console.log(personalMovieDB.movies);

for (let i = 0; i < personalMovieDB.count; i++) {
    let nameOfFilm = prompt("Один из недавно просмотренных фильмов?");
    let ratingOfFilm = prompt("Оцените его по 10 бальной шкале");
    

    if (nameOfFilm != null && ratingOfFilm != null && nameOfFilm != '' && ratingOfFilm != '' && nameOfFilm.length < 50) {
      personalMovieDB.movies[nameOfFilm] = ratingOfFilm;   
    } else {
      console.log("Error");
      i--;
    }
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
console.log(personalMovieDB);