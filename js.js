'use strict';










// ����������, ������������ ������








/*
let number = 4.6;
let name = 'alex';


console.log(name + '���' + number + '���')
console.log(number + 10)

let full = '����' + 37 + '���';

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


const result = confirm('������� ��� ���?')
console.log(result)

const answer = prompt('����� ������� ���� � ���� ��?', '��');
console.log(answer);
console.log(typeof(answer));

alert(full);*/

// �������� � �������������

/*
const answers = [];

answers[0] = prompt('��� ���� ���?', '');
answers[1] = prompt('��� ���� �������?', '');
answers[2] = prompt('������� ���?', '');

document.write(answers[2]);
console.log(answers);

const category = 'toys';

console.log('https://uuu.com/' + category + '/' + '5');

console.log(`https://uuu.com/${category}/55555`);

const user = 'user';

alert(`������, ${user}`);
*/














// ���������/���������
// ��������� ���������
//����� �� �������� ������ �������� �������� �������� ���������� ��� ���������� �� �������.
















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















// �������
















/*
let question =  prompt('��� ��� �����?')
if(question === null || question === ""){
    document.write('������ ����������')
 } else {
document.write('������ ' + question)
};


const num = +prompt('������� ��� ���?', '');

if (num === null || num === "") {
    document.write(', ������ ����� ���')
} else if (num >= 18) {   
document.write(', ������');
} else if (num < 18 || num > 0){
document.write(' ,�����, ���������');
}
else {
    document.write(', ������ ����� ���');
}

(num === 50) ? document.write('��') : document.write('error');


switch (num) {
    case 49:
         document.write('error');
        break;
    case 50:
        document.write('��');
        break;
    default: 
        document.write('fuck');
        break;
}
*/















// �����

















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

let result = confirm ('��� ������������� �������� ��?');
let name = prompt('���� ���?', '');


(name == '����') ? console.log('�� ������!') :  console.log('��� �� ����');
(name == '����') ? document.write('�����, ��� ����� ��') : console.log('�');

 console.log();

if (name != null && result != false) {
 let number = +prompt('����� ������� ���� � ��� ��?', '')
 console.log(`�����������, ��� � ���� ��������, ${name}`);
 console.log(`${name}, ����� ��� ����������� ����� ${number} ����`);
}else{
 alert(`����������, ����� ��� ����������� ����� ��� ����� ������� ����`);   
};


let userName = prompt("��� ���?", '');

if (userName === '�����') {

  let pass = prompt('������?', '');

  if (pass === '� �������') {
    alert( '������������!' );
  } else if (pass === '' || pass === null) {
    alert( '��������' );
  } else {
    alert( '�������� ������' );
  }

} else if (userName === '' || userName === null) {
  alert( '��������' );
} else {
  alert( "� ��� �� ����" );
}



let height = +prompt('��� ������?','');
while (height == NaN){
  height = prompt('��� ���','');  
}
console.log(`������ ����� ���� ${height ?? 23}`)

let age = +prompt('�������� �����', '');

while(age != 18){
 alert("�������")   
 age = prompt('�������� ��� ��� �����', '');
 if(age == null){
    alert("����� ���� ������!")   
    age = prompt('�������� ��� ��� �����', '');
 }
}

alert('�������');
document.write('�����������')


do{
 alert("�������");   
age = prompt('�������� ��� ��� �����', '');
}while (age != 18);


let age;

for(age = +prompt('�������� �����', ''); age != 18;){

if (age == null || age == '') {
    break;   
} 

if(age == 19) {
alert('����� �������');
} 

age = prompt('�������� ��� ��� �����', '');

}

(age == null || age == '') ? alert('���������� � �� ���') : alert(`������� ${age}`);


let number = +prompt('�������� �����', '');;


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


let browser = prompt('����� �������?',"");

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



const number = +prompt('������� ����� ����� 0 � 3', '');

switch (number) {
    case 0:
       alert('�� ����� ����� 0');
    break;
    case 1:
       alert('�� ����� ����� 1');
    break;
      case 2:
      case 3:
       alert('�� ����� ����� 2, � ����� � 3');
    break;
}
*/















//�������
















/*
function showMessage(name, age) {
name = prompt('Name?', '');
age = prompt('Name?', '');
if(name == null || age == null){
   name = '�����������';
   age = '��';
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
    return confirm('�������� ���������?');
  }
}

 let  age = +prompt('���� ���� 18?','18');

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
  alert( "�� ��������." );
}
function showCancel() {
  alert( "�� �������� ����������." );
}

ask("�� ��������?", showOk, showCancel);


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

















// ������


















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
            console.log(`�������� ${i} ���� �������� ${options[key] [i]}`);
        counter++;
        }  
    } else {
            console.log(`�������� ${key} ����� ��������: ${options[key]}`);
            counter++;
    }
}

console.log(counter);



let user = {
    name: prompt ('���� ���?',''),
    age: +prompt ('���?', ''),
    famyli: prompt ('�� ������?', ''),
    auto: prompt ('���� ����?', 'yes'),
    markauto: confirm ('������� ����?'),
    men: '',
    autos: ''
}


user.isBens = +prompt('������� �� �������� �� ������?','');

if (user.auto == "yes" && user.markauto == true){
    user.autos = '������� ����';
    user.men = '������ �����';
}else if (user.auto == "yes" && user.markauto == false){
    user.autos = 'IN ����';
    user.men = 'MAjor';
} else {
user.autos = '��� ����';
user.men = '�������';  
}

delete user.markauto;


for (let key in user){
    console.log(`${key} : ${user[key]}`);
};
*/















// ������ ��������
















/*
function copy(oneMan) {
    let obgCopy = {};
    let key;
    for (key in oneMan) {
        obgCopy[key] = oneMan[key];
    }

    return obgCopy;
}

// ����������� �������

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
	mark: prompt('����� ����?', '�� �����') ?? '�� �����',
	price: prompt('���� ������ �����?', '��� ��������') ?? '��� ��������',
	itsAuto: function () {
		console.log(
			`Best vedro: ${auto.mark}, ����� ${auto.color}, po chene: ${auto.price}`
		);
	},
};

auto.color = prompt('���� ����?', '') ?? '�� �����';

const auto2 = Object.create(auto);

auto.mark = prompt('����� ����?');
if(auto.mark == null || auto.mark == ""){
 auto.mark ='�� �����';    
};

const auto2 = Object.create(auto);

Object.setPrototypeOf(auto2, auto);

console.log();
auto.itsAuto();

console.log(auto);

auto2.itsAuto();
*/














//�������












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
	console.log(`������� ������� ${item} ���� �� ������� ${i} � ������� ${arr}`);
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

men[0] = prompt('���� ���', '');
men[1] = prompt('�������', '');
men[2] = +prompt('�������', '');

if (men[2] >= 18) {
	men[2] = `B�� ${men[2]} ���`;
	alert(`${men[0]}, ����� ���������� �� ����`);
	men[3] = prompt('������� ��� ������');
} else {
	men[2] = `B�� ������� ���� ���`;
	alert(`${men[0]}, ���� ���� ������ ��� ����������������`);
}

alert(men.pop()); // ������� ��������� ������� � ������� ���
men.shift(); // ������� ������ �������

men.push(`��� ���, ${men[0]}`); // ��������� ������� � ����� �������

men.unshift(`������������ #1 ����� ��������:`); //��������� ������� � ������ �������
men.join(', ');

console.log(men);

document.write(men);

for (let item of men) {
	console.log(item);
}

men.length = 2; // ����������� �� ���� ���������

men.forEach(function (a, b, c) {
	console.log(`${a}: ${b}`);
});

for (let i = 0; i < men.length; i++) {
	alert(men[i]);
}
*/







// ������������ ��������� ������








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










//��������� ��������� �� ��������









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











// ��������� ��������� �� ��������









const box = document.getElementById('box');
            
const buttons = document.getElementsByTagName('button');
const button = document.getElementsByTagName('button')[1];

console.log(button);
console.log(buttons[3]);


const circles = document.getElementsByClassName('circle');// ������� ������
console.log(circles);
console.log(circles[2])

const hearts = document.querySelectorAll('.heart'); // ������� ������

hearts.forEach(item => {
console.log(item);
});

// console.log(hearts);

const oneHeart = document.querySelector('.heart'); // ������� ������ ������� . ������� ������� � DOM

console.log(oneHeart);

