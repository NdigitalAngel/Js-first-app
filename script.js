"use strict";


// const numberOfFilms = +prompt( 'Сколько фильмов вы уже смотрели?', '');

// const personalMovieDB = {
//   count: numberOfFilms,
//   movies: {},
//   actors: {},
//   genres: [],
//   privat: false
//  };
//  let x = 'Cool';
// const  a = prompt('Один из просмотренных фильмов?', ''),
//        b = prompt('На сколько оцените его?', ''),
//        c = prompt('Один из просмотренных фильмов?', ''),
//        d = prompt('На сколько оцените его?', '');
// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB);



// while(num < 55) {
//   console.log(num);
//   num++;
// }

// for (let i = 0; i < 3; i++) {
//   console.log(i);
//   for (let j = 0; j < 3; j++) {
//     console.log(j);   
//   } 
// }

let result = '';
const lenght = 8;

for (let i = 1; i < lenght; i++) {
  for (let j = 0; j < i; j++) {
      result += "*";
  }

  result += '\n';
}
console.log(result);


// First task
let num = 5;

while (num <= 10) {
  console.log(num);
    num++;
    if (num === -6) {
      break;
    }
}
// Second task
for (let i = 20; i < 21; i--) {
  if (i === 13) {
    break;
  }


  console.log(i);
}
// Third task
for (let i = 2; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
// Fourth task
for (let i = 2; i <= 16; i++) {
  if (i % 2 === 0) {
      continue;
  } else {
      console.log(i);
  }
}

 num = 2;
 while (num <= 16 ) {
   num++;
   if (num % 2 === 0 ) {
    continue;
  } else {
    console.log(num);
  }
  if (num === 3) {
    num++;
  }
 }