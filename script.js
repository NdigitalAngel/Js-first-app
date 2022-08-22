"use strict";


const numberOfFilms = +prompt( 'Сколько фильмов вы уже смотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
 };

for (let i = 0; i < 2; i++) {
  const  a = prompt('Один из просмотренных фильмов?', ''),
         b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('done'); 
      } else {
        console.log('error');
        i--;
      }
}
if (personalMovieDB.count < 10) {
  console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
  console.log('Вы киноман');
} else {
  console.log('ERROR BlyAD'); 
}

console.log(personalMovieDB);



function createCounter() {
  let counter = 0;
  const myFunction = function() {
    counter = counter + 1;
    return counter;
  };
   return myFunction;
}
const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
console.log('example increment', c1, c2, c3);
