// 1) Написать функцию которая первым принимает значение, которым заполнять массив,
//     а вторым - сколько элементов должно быть в массиве.
//     Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].


// function arrayFill(a, b) {
//     const array = [];
//     for (let i = 0; i <= b; i++) {
//         array.push(a);
//     }
//     return array;
// }
//
// console.log(arrayFill(3, 10));


// 2) Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет,
//     что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.


// const isNumberInRange = (a) => (a > 0 && a < 10);
// console.log(isNumberInRange(5));


// 3) Сделайте функцию isEven() (even - это четный), которая параметром принимает
// целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.


// const isEvent = (a) => (a % 2 === 0)
// console.log(isEvent(2));


// 4) Дан массив с целыми числами. Создайте из него новый массив,
//     где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.


// let arr = [1,4,3,2,6,7,8,5];
// const arr1 = arr.reduce((acc, el) => {
//         if (isEvent(el)) {
//             acc = [...acc, el]
//         }
//         return acc
//     }, [])
// console.log(arr1);


// 5) Создайте функцию, которая получает два параметра – число и степень числа.
//     Используя ** внутри функции, возведите число в степень и выведите с помощью console.log.


// const exp = (a, b) => a ** b;
// console.log(exp(2,2));


// 6) Функция принимает параметр - возраст пользователя.
//     Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.


// const ageOfUser = (age) => age > 16 ? alert('Добро пожаловать') : alert ('Вы ещe молоды')
// console.log(ageOfUser(15));


// 7) Модифицируйте предыдущий пример – учтите вариант, если пользователь не передал параметр в функцию.
//     В таком случае выведите сообщение – “Введите возраст”.
// Реализуйте два вида проверки наличия аргумента – проверка на undefined и оператор ||.

// const ageOfUser = (age) => {
//     return age === undefined ?
//         alert('empty') :
//         age > 16 ?
//             alert('Welcome') :
//             alert('Go out')
// }
// console.log(ageOfUser());

// const ageOfUser = (age) => {
//     const a = age || null;
//         return a !== age ?
//             alert('empty') :
//                 age > 16 ?
//                     alert('Welcome') :
//                     alert('Go out')
// }
// console.log(ageOfUser());

// 8) Дана строка. Сделайте заглавным первый символ каждого слова этой строки.
//     Для этого сделайте вспомогательную функцию ucfirst, которая будет получать строку,
//     делать первый символ этой строки заглавным и возвращать обратно строку с заглавной первой буквой.

//
const ucfirst = (str) => str[0].toUpperCase() + str.slice(1);
// console.log(ucfirst('uuuuuu'));
//
//
// // 9) Дана строка вида 'var_text_hello'. Сделайте из него текст 'varTextHello'. ( с помощью функции, которая принимает строку)
//
//
const ucFirstTwo = (str) => str.split('_').map((el,idx) => idx !== 0 ? ucfirst(el) : el.toLowerCase()).join('');
console.log(ucFirstTwo('var_text_hello'));
//
//
// // 10) Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// //     Функция первым параметром должна принимать текст элемента, а вторым - массив,
// //     в котором делается поиск. Функция должна возвращать true или false.
//
//
// const inArray = (txt, arr) => arr.reduce((acc, el) => {
//     return acc = (el === txt);
// }, true);
// console.log(inArray('aa', ['a', 'aaa', 'aa']));
