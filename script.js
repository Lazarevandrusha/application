'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDb = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false
};

// for (let i = 0; i < 2; i++){
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != '' && b != '' && a != null && b != null && a.length < 50){
//         personalMovieDb.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;
//     }
// }
// let i = 0;
// while (i < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', ''),
//           b = prompt('На сколько оцените его?', '');

//     if (a != '' && b != '' && a != null && b != null && a.length < 50){
//         personalMovieDb.movies[a] = b;
//         console.log('Done');
//     } else {
//         console.log('Error');
//         i--;
//     }
//     i++;
// }
let i = 0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцените его?', '');
    
        if (a != '' && b != '' && a != null && b != null && a.length < 50){
            personalMovieDb.movies[a] = b;
            console.log('Done');
        } else {
            console.log('Error');
            i--;
        }
    i++;
}
while (i < 2);

    if (personalMovieDb.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30){
        console.log('Вы классический зритель');
    } else if (personalMovieDb.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
    
console.log(personalMovieDb);