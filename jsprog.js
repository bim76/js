/*'use strict';


let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [], 
    privat: false,
    start: function(){
personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
},

rememberMyFilms: function (){

  for (let i = 0; i < 2; i++){
const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', '');

if(a != null && b != null && a != '' && b != '' && a.length < 50 ){ 
      personalMovieDB.movies[a] = b;
       console.log('Успешно');
  }else{
 console.log('Ошибка');   
    i--;
     }
  }  
},

detectPersonalLevel: function (){

if (personalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов'); 
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
 alert('Вы классический зритель');   
} else if (personalMovieDB.count >= 30){
   alert('Вы киноман');  
} else {
    alert('Ошибка');
}
},

detectPersonalLevel: function (){

if (personalMovieDB.count < 10){
    alert('Просмотрено довольно мало фильмов'); 
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
 alert('Вы классический зритель');   
} else if (personalMovieDB.count >= 30){
   alert('Вы киноман');  
} else {
    alert('Ошибка');
}
},

showMyDB: function (hidden){
    if(!hidden)
        console.log(personalMovieDB);
},

toggleVisibleMyDB: function(){
    if (personalMovieDB.privat){
        personalMovieDB.privat = false;
    }else{
        personalMovieDB.privat = true;
    }
},

writeYourGenres: function (){
    for(let i = 1; i <= 3; i++){
      let numberGenre = prompt(`Ваш любимый жанр под номером ${i}`, '');
        if (numberGenre == null || numberGenre == ''){
            console.log('Вы не ввели данные','');
            i--;
        }else {
            personalMovieDB.genres[i - 1] = numberGenre;
             }
        }

         personalMovieDB.genres.forEach((item, i) => {

         console.log(`Любимый жанр # ${i + 1} - это ${item}`)
     });

    }

};*/
