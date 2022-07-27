// 1 - Создать переменную каждого типа данных.


// var number = 123;
// let number = 123;
// const number = 123;
// var string = 'string';
// let string = 'string';
// const string = 'string';
// var boolean = true;
// let boolean = true;
// const boolean = true;
// var nul = null;
// let nul = null;
// const nul = null;
// var undf = undefined;
// let undf = undefined;
// const undf = undefined;
// var bInt = 999999999999999999n;
// let bInt = 999999999999999999n;
// const bInt = 999999999999999999n;
// var obj = {};
// let obj = {};
// const obj = {};
// var sumb = Symbol('symbol');
// let sumb = Symbol('symbol');
// const sumb = Symbol('symbol');



// 2 - Создать переменную var, let, const. Перезаписать их значения(не для const).


// var num = 2;
// num = 3;
// let num = 2;
// mum = 4;
// const num = 2;



// 3 - Привести тип каждого типа данных хотя бы 2-3мя способами(Google).


// let str = 'str';
// str = 1;
// const str1 = str + 'str';

// let num = 1;
// num = '1';
// num = true;
// const boo = !num;

// let boolean = true;
// const numBoo = +boolean;
// const strBoo = `${boolean}123`;

// let nl = null
// const nl1 = +nl;
// nl = 2;
// nl = 'str';

// let und = undefined;
// const und1 = und < 1;
// und = 1;

// let bInt = 99n;
// bInt = 1;
// const bInt1 = typeof bInt;

// let symbol = Symbol('2');
// const symbol1 = typeof symbol;
// symbol = 2;
// symbol = '2';
// symbol = {};



// 4 - Сделать сложение: строка с каждым типом данных; числа с каждым типом данных.


// let number = 123;
// const numStr = number + 'str';
// const numNum = number + 1;
// let string = 'string';
// const strStr = string + 'str';
// const strNum = string + 1;
// let boolean = true;
// const booStr = boolean + 'str';
// const booNum = boolean + 1;
// let nul = null;
// const nulStr = nul + 'str';
// const nulNum = nul + 1;
// let undf = undefined;
// const undfStr = undf + 'str';
// const undfNum = undf + 1;
// let bInt = 999999999999999999n;
// const bIntStr = bInt + 'str';
// const bIntNum = bInt + 1;
// let sumb = Symbol('symbol');
// const sumStr = sumb + 'str';
// const sumNum = sumb + 1;



// 5 - Слелать отнимание: строка с каждым типом данных; числа с каждым типом данных.


// let number = 123;
// const numStr = number - 'str';
// const numNum = number - 1;
// let string = 'string';
// const strStr = string - 'str';
// const strNum = string - 1;
// let boolean = true;
// const booStr = boolean - 'str';
// const booNum = boolean - 1;
// let nul = null;
// const nulStr = nul - 'str';
// const nulNum = nul - 1;
// let undf = undefined;
// const undfStr = undf - 'str';
// const undfNum = undf - 1;
// let bInt = 999999999999999999n;
// const bIntStr = bInt - 'str';
// const bIntNum = bInt - 1;
// let sumb = Symbol('symbol');
// const sumStr = sumb - 'str';
// const sumNum = sumb - 1;



// 6 - Задача (Условный оператор)
//  Пользователь вводит логин и пароль.
//  Если логин и пароль совпадают с указанными ниже, (для проверки login: 'kykold' password: '1234asdQQ')
//  то выводится «Добро пожаловать». Если не совпадают –
//  то «Ошибка входа».


// if  (prompt('Enter login') === 'kukold' && prompt('Enter password') === '1234asdQQ'){
// alert('Welcome')
// }else{
//     alert('Enter valid values')
// }

//=====================================================

// const login = prompt('Enter login');
// const password = prompt('Enter password');
//
// if (login === 'kukold' && password === '1234asdQQ'){
//     alert('Welcome')
// }else{
//     alert('Enter valid values')
// }



//  7 - Задача (Условный оператор)
// Пользователь вводит год рождения. Программа показывает количество
// лет и если лет больше или равно 16, то пишет – «добро пожаловать»,
// если нет – «вход воспрещен».


// const age = new Date().getFullYear() - (+prompt('Enter your year of birth'));
// if (age >= 16){
//     alert('Welcome')
// }else {
//     alert('Entry denied')
// }



// 8 - Задача (Условный оператор)
//  Создайте программу, которая выводит надбавку за стаж.
//  Пользователь вводит стаж работы, а программа пишет ему надбавку.


// const experience = +prompt('Enter your years of work experience');
// if (experience >= 0 && experience <= 1){
//     alert("you don't have an premium")
// }else if (experience >=2 && experience <= 5){
//     alert("your premium is 300$")
// }else if (experience >=6 && experience <= 10){
//     alert("your premium is 600$")
// }



// 9 - Задача (Условный оператор и свитч кейс)
//  Пользователь вводит число, показывает день недели в зависимости от числа (1 = 'Monday', 2 = 'Tuesday', и так далее)
//  9.1 Решить на иф елсах
//  9.2 Решить на свитч кейсе
//  9.3 Решить на тернарном операторе


// const dayOfWeek = +prompt('Enter day of week');
// if (dayOfWeek === 1){
//     alert('Monday')
// }else if (dayOfWeek === 2){
//     alert('Tuesday')
// }else if (dayOfWeek === 3){
//     alert('Wednesday')
// }else if (dayOfWeek === 4){
//     alert('Thursday')
// }else if (dayOfWeek === 5){
//     alert('Friday')
// }else if (dayOfWeek === 6){
//     alert('Saturday')
// }else if (dayOfWeek === 7){
//     alert('Sunday')
// }

//====================================================

// switch (dayOfWeek) {
//     case 1 :
//         alert('Monday');
//         break;
//
//     case 2 :
//         alert('Tuesday');
//         break;
//
//     case 3 :
//         alert('Wednesday');
//         break;
//
//     case 4 :
//         alert('Thursday');
//         break;
//
//     case 5 :
//         alert('Friday');
//         break;
//
//     case 6 :
//         alert('Saturday');
//         break;
//
//     case 7 :
//         alert('Sunday');
//         break;
//
// }

//====================================================

// const nameOfDay =  dayOfWeek === 1 ? alert('Monday') :
//     dayOfWeek === 2 ? alert('Tuesday') :
//         dayOfWeek === 3 ? alert('Wednesday') :
//             dayOfWeek === 4 ? alert('Thursday') :
//                 dayOfWeek === 5 ? alert('Friday') :
//                     dayOfWeek === 6 ? alert('Saturday') :
//                         dayOfWeek === 7 ? alert('Sunday') : null;



// 10 - Задача (Условный оператор)
//  Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:
//  1, если значение больше нуля,
//  -1, если значение меньше нуля,
//  0, если значение равно нулю.


// const num = +prompt('Enter number');
// if (num > 0){
//     alert(1)
// }else if (num < 0){
//     alert(-1)
// }else if (num === 0){
//     alert(0)
// }



// 11 - Задача (Тернарный оператор)
// Перепишите if..else с использованием нескольких операторов '?'.


// let message;
// //
// // if (login == 'Сотрудник') {
// //     message = 'Привет';
// // } else if (login == 'Директор') {
// //     message = 'Здравствуйте';
// // } else if (login == '') {
// //     message = 'Нет логина';
// // } else {
// //     message = '';
// // }
// const message1 = login == 'Cотрудник' ? message = 'Привет' :
//     login == 'Директор' ? message = 'Здравствуйте' :
//         login == '' ? message = 'Нет логина' : message = '';



// 12 - Задача (Условный оператор)
//  В первом подъезде квартиры с 1 по 20. Во втором с 21 по 48. В третьем с 49 по 90.
//  Пользователь вводит номер квартиры. Программа должна указать в каком подъезде находится данная квартира.


// const apartment = +prompt("Введите номер квартиры");
//
// let numOfApr = (apartment >=1 && apartment <=20 ) ? "Ваша квартира в первом подьезде" :
// (apartment >=21 && apartment <= 48) ? "Ваша квартира во втором подьезде" :
// (apartment >=49 && apartment <= 90 ) ? "Ваша квартира в третьем подьезде" : "Тут нет такой квартиры";
// alert(numOfApr);



// 13 - Задача (Условный оператор)
// Напишите if..else, соответствующий следующему switch:
//
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;
//
//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;
//
//   default:
//     alert( 'We hope that this page looks ok!' );
// }
//
// if (browser === 'Edge'){
//     alert("You've got the Edge!")
// }else if (browser === 'Chrome' ||
//     browser === 'Firefox' ||
//     browser === 'Safari' ||
//     browser === 'Opera'){
//     alert('Okay we support these browsers too')
// }else alert('We hope that this page looks ok!');



// 14 - Задача (свитч кейс)
// Переписать условия "if" на "switch"
// важность: 4
// Перепишите код с использованием одной конструкции switch:
//
//
//      const number = +prompt('Введите число между 0 и 3', '');
// //
// //     if (number === 0) {
// //         alert('Вы ввели число 0');
// //     }
// //
// //     if (number === 1) {
// //         alert('Вы ввели число 1');
// //     }
// //
// //     if (number === 2 || number === 3) {
// //         alert('Вы ввели число 2, а может и 3');
// //     }
//
// switch (number) {
//     case 0 :
//         alert('Вы ввели число 0');
//         break;
//     case 1 :
//         alert('Вы ввели число 1');
//         break;
//     case 2 :
//     case 3 :
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }







