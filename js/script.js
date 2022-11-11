/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.

Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';


const movieDB = {
	movies: [
		'Логан',
		'Лига справедливости',
		'Ла-ла лэнд',
		'Одержимость',
		'Скотт Пилигрим против...',
	],
};


let spamBlock = document.querySelectorAll('.promo__adv img');
let janreFilm = document.querySelector('.promo__genre');
let fonFilm = document.querySelector('.promo__bg');
let movieList = document.querySelector('.promo__interactive-list');

spamBlock.forEach(itemblock =>{
itemblock.remove();
});

janreFilm.textContent = 'Драма';

fonFilm.style.cssText =
	'background: url("../img/bg.jpg") center center/cover no-repeat;';

console.log(movieList);

movieList.innerHTML = '';


movieDB.movies.sort();

movieDB.movies.forEach((film, i)=>{
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}: ${film}
       <div class="delete"></div>
     </li>
    `;
});


// console.log(movieDB.movies);