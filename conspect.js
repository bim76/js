'use strict';












// переменные, интерполяция данных










/*
let number = 4.6;
let name = 'alex';


console.log(name + 'мне' + number + 'лет')
console.log(number + 10)

let full = 'Илья' + 37 + 'лет';

const obj ={
    name: 'ivan',
    clichka: 'loh',
    age: 25,
    vork: false
};

let arr = ['pomp', 'pamp99', 9999, {}, []]

console.log(arr[0]);
console.log(obj.name);
console.log(['clichka']);


const result = confirm('сколько вам лет?')
console.log(result)

const answer = prompt('Через сколько дней у тебя ДР?', 'ХЗ');
console.log(answer);
console.log(typeof(answer));

alert(full);*/

// общзение с пользователем

/*
const answers = [];

answers[0] = prompt('Как ваше имя?', '');
answers[1] = prompt('Как ваше фамилия?', '');
answers[2] = prompt('Сколько лет?', '');

document.write(answers[2]);
console.log(answers);

const category = 'toys';

console.log('https://uuu.com/' + category + '/' + '5');

console.log(`https://uuu.com/${category}/55555`);

const user = 'user';

alert(`Привет, ${user}`);
*/















// Инкремент/декремент
// Операторы сравнения
//Одной из наиболее частых числовых операций является увеличение или уменьшение на единицу.



















/*
console.log('arr' + + 5 + 'two');


let incr = 10,
    decr = 10;

incr++;    
decr--;

console.log(incr);
console.log(decr);

console.log(5%2);

console.log(3*5 == 15);
console.log(3*5 != 5);
console.log(3*5 >= 15);
console.log(3*5 < 15);
console.log(3*5 === '15');
console.log(3*5 == '15');

console.log(2 + 3*5 === '17');


const istCheked = true,
       isClose = true;

       console.log(istCheked && isClose)
       console.log(istCheked || !isClose)
*/
















// Условия



















/*
let question =  prompt('Как вас зовут?')
if(question === null || question === ""){
    document.write('Привет незнакомец')
 } else {
document.write('Привет ' + question)
};


const num = +prompt('Сколько вам лет?', '');

if (num === null || num === "") {
    document.write(', напиши ответ мля')
} else if (num >= 18) {   
document.write(', заходи');
} else if (num < 18 || num > 0){
document.write(' ,прочь, молокосос');
}
else {
    document.write(', напиши ответ мля');
}

(num === 50) ? document.write('ок') : document.write('error');


switch (num) {
    case 49:
         document.write('error');
        break;
    case 50:
        document.write('ок');
        break;
    default: 
        document.write('fuck');
        break;
}
*/

















// Циклы


















/*
let num = 50;

while (num < 55) {
    console.log(num);
    num++;
};  


do {
   console.log(num + ' 2222');
    num++; 
}
while (num < 65); 


for (let i = 1; i < 12; i++) {

     if (i == 5){
        break;
     } else if (i == 3) {
        continue;
     }

    console.log(i);
}


let srt = 1244241;
let num = Number(srt);
let str2 = String(num);

let result = confirm ('Вам действительно сегогдня ДР?');
let name = prompt('Ваше имя?', '');


(name == 'Илья') ? console.log('Эй парень!') :  console.log('Это не Илья');
(name == 'Илья') ? document.write('Илюха, это снова ты') : console.log('Э');

 console.log();

if (name != null && result != false) {
 let number = +prompt('Через сколько дней у вас ДР?', '')
 console.log(`Поздравляем, вас с днем Рождения, ${name}`);
 console.log(`${name}, Будем вас поздравлять через ${number} дней`);
}else{
 alert(`Незнакомец, Будем вас поздравлять через хуй знает сколько дней`);   
};


let userName = prompt("Кто там?", '');

if (userName === 'Админ') {

  let pass = prompt('Пароль?', '');

  if (pass === 'Я главный') {
    alert( 'Здравствуйте!' );
  } else if (pass === '' || pass === null) {
    alert( 'Отменено' );
  } else {
    alert( 'Неверный пароль' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Отменено' );
} else {
  alert( "Я вас не знаю" );
}



let height = +prompt('Ваш размер?','');
while (height == NaN){
  height = prompt('еще раз','');  
}
console.log(`Размер вашей ноги ${height ?? 23}`)

let age = +prompt('Угадайте число', '');

while(age != 18){
 alert("Неверно")   
 age = prompt('Угадайте еще раз число', '');
 if(age == null){
    alert("Охуел жать отмена!")   
    age = prompt('Угадайте еще раз число', '');
 }
}

alert('Угадали');
document.write('УРААААААААА')


do{
 alert("Неверно");   
age = prompt('Угадайте еще раз число', '');
}while (age != 18);


let age;

for(age = +prompt('Угадайте число', ''); age != 18;){

if (age == null || age == '') {
    break;   
} 

if(age == 19) {
alert('почти угадали');
} 

age = prompt('Угадайте еще раз число', '');

}

(age == null || age == '') ? alert('Попробуйте в сл раз') : alert(`Угадали ${age}`);


let number = +prompt('Угадайте число', '');;


switch (number) {
    case 10:
        console.log('10')
        break;
    case 20:
        console.log('20')
        break;        
    default:
       console.log('UPSSSS')
        break;
}


let browser = prompt('какой браузер?',"");

if (browser == "Edge"){
  alert( "You've got the Edge!" );  
} else if (browser == 'Chrome' 
    || browser == 'Firefox' 
    || browser =='Safari'
    || browser == 'Opera'){
  alert( 'Okay we support these browsers too' );   
} else{
  alert( 'We hope that this page looks ok!' );
}



const number = +prompt('Введите число между 0 и 3', '');

switch (number) {
    case 0:
       alert('Вы ввели число 0');
    break;
    case 1:
       alert('Вы ввели число 1');
    break;
      case 2:
      case 3:
       alert('Вы ввели число 2, а может и 3');
    break;
}
*/













//Функции














/*
function showMessage(name, age) {
name = prompt('Name?', '');
age = prompt('Name?', '');
if(name == null || age == null){
   name = 'Неизвестный';
   age = 'ХЗ';
}
  alert(name + ": " + age);
}

showMessage(); 

function sum(a, b) {
  return a + b;
}

let name = +prompt('Name?', ''),
    twoName = +prompt('Name2?', '')

let result = sum(name, twoName);
alert(result); 


function checkAge(age) {

  if (age >= 18) {
    return alert('Welcome');
  } else {
    return confirm('Родители разрешили?');
  }
}

 let  age = +prompt('Вами есть 18?','18');

checkAge(age);

function min(a ,b) {
  
    if(a < b){
     return (a);    
    }
     return (b); 
  }

console.log(min(1, 4))


function pow(x,n) {

  return (x * n)  
}

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}
function showOk() {
  alert( "Вы согласны." );
}
function showCancel() {
  alert( "Вы отменили выполнение." );
}

ask("Вы согласны?", showOk, showCancel);


let sum = (a, b) => a * b;

console.log( sum (3, 10));


let ask = (question, yes, no) => 

let name = 'ivAn name:';

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.indexOf('name:'));
console.log(name.slice(5, 10));
console.log(name.substring(5, 10));
console.log(name.subst(5, 5));

let nameBig = `BIG ${name.toUpperCase()}`;

console.log(nameBig);

let num = 12.3;
let test = "12.3px";

console.log(Math.round(num));
console.log(parseInt(test));
console.log(parseFloat(test));
*/















// Обекты

















/*
let options = {
    name: 'test',
    width: 1024,
    height: 768,
    colors: {
        border: 'black',
        bg: 'red'
    },
    oneTest: function() {
        console.log('TEST');
    }
};

console.log(Object.keys(options).length);
options.oneTest();

const {border, bg} = options.colors;

console.log(border);

console.log(options.name);

delete options.name;

console.log(options);


console.log(options['colors']['border']);

let counter = 0;
for (let key in options){
    if (typeof(options[key]) == 'object') {
        for (let i in options[key]){
            console.log(`Свойство ${i} имет значение ${options[key] [i]}`);
        counter++;
        }  
    } else {
            console.log(`Свойство ${key} имеет значение: ${options[key]}`);
            counter++;
    }
}

console.log(counter);



let user = {
    name: prompt ('Ваше имя?',''),
    age: +prompt ('Лет?', ''),
    famyli: prompt ('Вы женаты?', ''),
    auto: prompt ('Есть авто?', 'yes'),
    markauto: confirm ('Русское авто?'),
    men: '',
    autos: ''
}


user.isBens = +prompt('Сколько вы тратитие на бензин?','');

if (user.auto == "yes" && user.markauto == true){
    user.autos = 'Русское АВТО';
    user.men = 'Четкий пацан';
}else if (user.auto == "yes" && user.markauto == false){
    user.autos = 'IN АВТО';
    user.men = 'MAjor';
} else {
user.autos = 'Без авто';
user.men = 'Пешеход';  
}

delete user.markauto;


for (let key in user){
    console.log(`${key} : ${user[key]}`);
};
*/


















// Методы объектов




















/*
function copy(oneMan) {
    let obgCopy = {};
    let key;
    for (key in oneMan) {
        obgCopy[key] = oneMan[key];
    }

    return obgCopy;
}

// Клонирвание объекта

const woomen = {
    name: 'Marina',
    age: 53,
    hair: {
        color: 'white',
        lengt: 'big',
    }
};


let woomenThre = {
    name2: 'Olga',
    age2: 18,
}

let clone = Object.assign({}, woomenThre);

clone.name2 ='Nastya';
console.log(clone);

console.log(Object.assign(woomen, woomenThre));

let woomenTwo = copy(woomen);
    woomenTwo.age = 22;
    woomenTwo.hair.color = 'black';

    console.log(woomenTwo);
    console.log(woomen);


let auto = ['bmw', '200ls', '20000$'];

let newAuto = auto.slice();

newAuto[0] ='VAZ';
console.log(auto);
console.log(newAuto);


const   sites = ['pornhub', 'xxx', 'videored'],
        visits = ['1200', '3545', '5665'],
        marketing = [...sites, ...visits, 'soedinil']; 

console.log(marketing);


function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
};


const num = [12, 33, 455];
log(...num);


const bmw = {
    model: 3,
    engine: 200,
};


const newBmw = {...bmw};

console.log(newBmw);


const auto = {
	mark: prompt('Марка авто?', 'ХЗ какая') ?? 'ХЗ какая',
	price: prompt('Цена вашего ведра?', 'Оно бесценно') ?? 'Оно бесценно',
	itsAuto: function () {
		console.log(
			`Best vedro: ${auto.mark}, цвета ${auto.color}, po chene: ${auto.price}`
		);
	},
};

auto.color = prompt('Цвет авто?', '') ?? 'ХЗ какая';

const auto2 = Object.create(auto);

auto.mark = prompt('Марка авто?');
if(auto.mark == null || auto.mark == ""){
 auto.mark ='ХЗ какая';    
};

const auto2 = Object.create(auto);

Object.setPrototypeOf(auto2, auto);

console.log();
auto.itsAuto();

console.log(auto);

auto2.itsAuto();
*/

















//Массивы


















/*
const arr = [12, 23, 31, 5, 1, 10];
arr.sort(numSort);
console.log(arr);

function numSort(a, b) {
	return a - b;
}

arr[6] = 26;
console.log(arr.length);
arr.pop();
arr.push(12);

arr.forEach(function (item, i, arr) {
	console.log(`Элемент массива ${item} идет по порядку ${i} в массиве ${arr}`);
});

for (let i = 0; i < arr.length; i++) {
	console.log(arr[i]);
}

for (let item of arr) {
	console.log(item);
}

for (let item in arr) {
	console.log(arr[item]);
}

const woomen = prompt('', '');
const whois = woomen.split(', ');
whois.sort();
console.log(whois);
document.write(whois.join('; '));

let men = [];

men[0] = prompt('Ваше имя', '');
men[1] = prompt('Фамилия', '');
men[2] = +prompt('Возраст', '');

if (men[2] >= 18) {
	men[2] = `Bам ${men[2]} лет`;
	alert(`${men[0]}, добро пожаловать на сайт`);
	men[3] = prompt('Введите ваш пароль');
} else {
	men[2] = `Bам слишком мало лет`;
	alert(`${men[0]}, этот сайт только для совершеннолетних`);
}

alert(men.pop()); // удаляем последний элемент и выводим его
men.shift(); // массива первый элемент

men.push(`Вот так, ${men[0]}`); // Добавляет элемент в конец массива

men.unshift(`Пользователь #1 имеет свойства:`); //Добавляет элемент в начало массива
men.join(', ');

console.log(men);

document.write(men);

for (let item of men) {
	console.log(item);
}

men.length = 2; // укорачиваем до двух элементов

men.forEach(function (a, b, c) {
	console.log(`${a}: ${b}`);
});

for (let i = 0; i < men.length; i++) {
	alert(men[i]);
}
*/

















// Динамическая типизация данных


















/*
console.log (typeof(String(4)));
console.log(typeof(4 + 'rrr'));
const num = 5;
console.log('https://site/catalog/' + num);

const fontsize = 26 +'px';

console.log(typeof(Number('4')));


let summ = null;
if (summ) {
  console.log('LAVEEE')
};

summ = 1;
if (summ) {
  console.log('LAVEEE')
};


console.log(typeof Boolean('4'));
console.log(typeof(!!'4'));
*/














//Получение элементов со страницы

















// console.log(document.head);
// console.log(document.childElementCount);
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.firstElementChild);

// console.log(document.querySelector('#current').parentNode);

// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('#current').parentNode.parentNode);

// console.log(document.querySelector('[data-current="3"]').nextSibling);

// console.log(document.querySelector('[data-current="3"]').nextElementSibling);

// console.log(document.querySelector('[data-current="3"]').previousSibling);

// for (let node of document.body.childNodes) {
//     if (node.nodeName == '#text'){
//     continue;
// };

//   console.log(node);
// };














// Получение элементов со страницы















/*
const box = document.getElementById('box');
            
const buttons = document.getElementsByTagName('button');
const button = document.getElementsByTagName('button')[1];

console.log(button);
console.log(buttons[3]);


const circles = document.getElementsByClassName('circle');// выводит объект
console.log(circles);
console.log(circles[2])

const hearts = document.querySelectorAll('.heart'); // выводит массив

hearts.forEach(item => {
console.log(item);
});

// console.log(hearts);

const oneHeart = document.querySelector('.heart'); // выводит первый элемент . который попался в DOM

console.log(oneHeart);
*/










// Действие с элементами на странице










// const box = document.getElementById('box'),
// 	btns = document.getElementsByTagName('button'),
// 	circles = document.getElementsByClassName('circle'),
// 	wrapper = document.querySelector('.wrapper'),
// 	hearts = wrapper.querySelectorAll('.heart'),
// 	oneHeart = wrapper.querySelector('.heart');
// console.dir(box);

// box.style.backgroundColor = 'green';

// box.style.width = '500px';

// let num = +prompt('Левый отступ?', '');

// box.style.cssText = `position: relative; top: -10px; left: ${num}px`;

// btns[1].style.border = '3px solid red';

// circle[2].style.backgroundColor = 'green';



// for (let i = 0; i < hearts.length; i++){
//    hearts[i].style.backgroundColor = 'green';
// };


// hearts.forEach(item => {
//   item.style.backgroundColor = 'green';
// })


// const div = document.createElement('div');
// const title = document.createElement('span');
// const boxTwo = document.createElement('div');

// const text = document.createTextNode('Element');

// div.classList.add('black');
// title.classList.add('h2style');
// boxTwo.classList.add('itembox');


// document.body.append(div);
// document.body.append('stroka');
// wrapper.append(title);

// wrapper.appendChild(div);

// wrapper.insertBefore(div, hearts[1]); // СТАРЫЙ МЕТОД
// circles.removeChild(hearts[1]); // СТАРЫЙ МЕТОД
// wrapper.replaceChildren(circles[1], hearts[1]); // СТАРЫЙ МЕТОД

// document.body.prepend(boxTwo);
// hearts[1].before(boxTwo);
// hearts[1].after(boxTwo);

// circles[1].style.background = 'green';
// circles[1].remove();

// hearts[2].replaceWith(circles[1]); // заменить элемент

// div.innerHTML = '<h1>insert text</h1>'; //Работает с HTML и текстом
// boxTwo.textContent = 'Hello'; //Работает только с текстом

// boxTwo.insertAdjacentHTML( "afterbegin", '<h3>wiord 11</h3>');
// boxTwo.insertAdjacentHTML("beforebegin", '<h3>wiord 22</h3>');
// boxTwo.insertAdjacentHTML("afterend", '<h3>wiord 33</h3>');










// HTML Атрибуты и свойства 










// for (let li of list) {
// 	li.setAttribute('id', 'liitem');
// }

// console.log(tableOne.getAttribute('id')); // получает значение атрибута.

// console.log(formSearch.hasAttribute('name')); //проверяет наличие атрибута.

// formSearch.setAttribute('name', 'search2'); //устанавливает значение атрибута.

// console.log(formSearch.getAttribute('name'));

// tableOne.removeAttribute('id'); // удаляет атрибут.

// tableOne.attributes //– это коллекция всех атрибутов.


// // setTimeout(() => document.body.style.background = '', 5000); // а через  5 секунд  вернём как было

// console.log(location.href);
// if (confirm('Перейти по ссылке')){
//   location.href = 'https://ya.ru';
// }

// let elements = document.querySelectorAll('ul > li:last-child');









//Изменение документа





// let btn = document.querySelector('input[name = "message"]');
// let btn2 = document.querySelector('input[name = "clone"]');
// let tableOne = document.getElementById('table-num');
// let btn3 = document.querySelector('input[name = "addtd"]');



// btn.addEventListener('click', e => {
// let div = document.createElement('div');
// div.className = 'alert';
// div.innerHTML = '<strong>Всем привет!</strong> Вы прочитали важное сообщение.';
//   setTimeout(() => div.remove(), 1000);
// document.body.append(div);
// });



// btn2.addEventListener('click', e => {
// 	let divTwo = tableOne.cloneNode(true); // Клонирование узлов: cloneNode
// 	tableOne.after(divTwo);
// });


// btn3.addEventListener('click', e => {
// ;

// function getItem() {

// let newTr = [];

// 	for (let i = 1; i <= 5; i++) {
// 		let td = document.createElement('td');
//     td.append(i);
// 		newTr.push(td);
// 	}
//   console.dir(newTr);
// 	return newTr;
// }

// item.append(...getItem());

// },{once: true});


























// Событие на странице









// let tableOne = document.getElementById('table-num');
// let formSearch = document.querySelector('form[name="search"]');
// let input = formSearch.querySelector('input');
// let addBtn = document.querySelector('input[name = "add"]');
// let delBtn = document.querySelector('input[name = "del"]');
// let list = document.querySelectorAll('ul > li');

// tableOne.rows[1].cells[1].style.background = '#6c4c';

// console.log(list);
// console.log(input);
// console.log(addBtn);
// console.dir(searchBtn); //выводит элемент в виде DOM-объекта, что удобно для анализа его свойств.

// addBtn.addEventListener('click', e => {
// 	let infLi = prompt('ЗНАЧЕНИЕ', '');
// 	while (infLi == null) {
// 		infLi = prompt('ЗНАЧЕНИЕ', '');
// 	}

// 	let li = document.createElement('li');
// 	li.textContent = `Новое свойство: ${infLi}`;
// 	list[0].after(li);
// });

// delBtn.addEventListener ('click', e =>{
// list[1].remove();
// });

// Свойство «hidden» указывает на то, видим ли мы элемент или нет

// delBtn.addEventListener('click', e => {
// 	list[1].hidden = true;
// });





// const btns = document.querySelectorAll('button'),
//       btn2 = document.getElementById('btn2'),
//       btn3 = document.getElementById('btn3'),
//       overlay = document.querySelector('.overlay')

// btn.addEventListener('click', (event) => {
//   console.log(event);
//   document.body.append('click1');
// });

// btn2.addEventListener('click', (e) => {
//   e.target = confirm('Delete?');
//   if(e.target == true){
//     e.target.remove();
//   } console.log('no delete');
// });

// let i = 0;
// const deleteElem = (e) => {
//   console.log(e.currentTarget);
//   console.log(e.target);
//   console.log(e.type);
//   document.body.style.backgroundColor = 'red';
  // e.target.remove();
  // i++;
  // if (i == 1){
  //     btn3.removeEvenListener('click', deleteElem); // удаление события
  // };
// };

// btns[1].addEventListener('click', deleteElem); // создание события
// overlay.addEventListener('click', deleteElem); // всплытие событий


// вешаем сразу на несколько элементов обработчик


// for (let btn of btns){
//  btn.addEventListener('click', deleteElem);
// };


// btns.forEach (btn =>{
// 	btn.addEventListener('click', deleteElem, {once: true}); // метод addEventListener - выполнить один раз once: true
// })



// const link = document.querySelector('a');

// link.addEventListener('click', (event) => {
//       event.preventDefault();   // отмена стандартного события браузера

//      console.log(event.target); 
// });



// // setTimeout(() => document.body.style.background = '', 5000); // а через  5 секунд  вернём как было

// console.log(location.href);
// if (confirm('Перейти по ссылке')){
//   location.href = 'https://ya.ru';
// }

// let elements = document.querySelectorAll('ul > li:last-child');












//Стили и классы









// elem.classList.add/remove("class") //– добавить/удалить класс.
// elem.classList.toggle("class") //– добавить класс, если его нет, иначе удалить.
// elem.classList.contains("class")// – проверка наличия класса, возвращает true/false.

// elem.style.width = '100px';

// div.style.cssText = `color: red !important;
//   background-color: yellow;
//   width: 100px;
//   text-align: center;
// `;

// div.setAttribute('style', 'color: red...')


// getComputedStyle(element, [pseudo]); // получение стиля, 

// element
//     Элемент, значения для которого нужно получить
// pseudo
//     Указывается, если нужен стиль псевдоэлемента, например ::before. Пустая строка или отсутствие аргумента означают сам элемент. 













//Размеры и прокрутка элементов







// console.log(example.offsetParent); // «самыми внешними» метриками

// console.log(example.offsetLeft);//cодержат координаты x/y относительно верхнего левого угла
// console.log(example.offsetTop);

// console.log(example.offsetWidth); //  внешняя ширина блока
// console.log(example.offsetHeight); //внешняя высота блока


//отступы внутренней части элемента от внешней.
// console.log(example.clientLeft); //ширина левой рамки
// console.log(example.clientTop); //ширина верхней рамки

//Эти свойства – размер области внутри рамок элемента.
// console.log(example.clientHeight);
// console.log(example.clientWidth);


// console.log(example.scrollHeight);//полная внутренняя высота, включая прокрученную область.
// console.log(example.scrollWidth);//hолная внутренняя ширина, в



// распахнуть элемент на всю высоту
// element.style.height = `${element.scrollHeight}px`;
// let btnView = document.getElementById('showAll');
// btnView.addEventListener('click', e => {
// 	example.style.height = `${example.scrollHeight}px`;
// btnView.setAttribute('style', 'display: none;');
// }
// );



//При клике на следующий элемент будет выполняться код elem.scrollTop += 10. Поэтому он будет прокручиваться на 10px вниз.
// let a = document.getElementById('example');
// a.addEventListener('click', e =>{
//     a.scrollTop += 20;
// });



//задача с мячом
// let ball = document.getElementById('ball');
// ball.addEventListener('mouseover', e =>{
// ball.style.left = Math.round(field.clientWidth / 2 - ball.offsetWidth / 2) + 'px';
// ball.style.top = Math.round(field.clientHeight / 2 - ball.offsetHeight / 2) + 'px';
// });










