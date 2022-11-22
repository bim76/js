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
// let formFilm = document.getElementsByClassName('adding__input').value;
// let inputFilmButton = document.querySelector('button');

spamBlock.forEach(itemblock =>{
itemblock.remove();
});

janreFilm.textContent = 'Драма';

fonFilm.style.cssText =
	'background: url("../img/bg.jpg") center center/cover no-repeat;';

console.log(movieList);

movieList.innerHTML = '';

movieDB.movies.sort();


// const newFilm =('click', (e) => {
//     let formFilm = document.getElementsByClassName('adding__input').value;
// 		console.log(formFilm);
// 		movieDB.movies.push(formFilm);
// 	});

// inputFilmButton.addEventListener('click', newFilm); 


movieDB.movies.forEach((film, i)=>{
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1}: ${film}
       <div class="delete"></div>
     </li>
    `;
});


console.log(movieDB.movies);