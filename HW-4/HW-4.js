// 1) Даны два массива: ['a', 'b', 'c'] и [1, 2, 3]. Объедините их вместе.


// const arr1 = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3];
// const arr3 = arr1 + arr2;
// console.log(arr3);

// const arr1 = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3];
// const arr3 = [arr1 + arr2];
// console.log(arr3);

// let arr1 = ['a', 'b', 'c'];
// const arr2 = [1, 2, 3];
// arr1 = [...arr1, ...arr2];
// console.log(arr1);


// 2) Дан массив ['a', 'b', 'c']. Добавьте ему в конец элементы 1, 2, 3. (через push и через splice)


// const arr = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
//     arr.push(i.toString());
// }
// console.log(arr);

// let arr = ['a', 'b', 'c'];
// for (let i = 1; i <= 3; i++) {
//     arr.splice(arr.length, 0, i.toString());
// }
// console.log(arr);

// 3) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice преобразуйте массив в [1, 4, 5].


// const array = [1, 2, 3, 4, 5];
// array.splice(1, 2,);
// console.log(array);


// 4) Дан массив [1, 2, 3, 4, 5]. С помощью метода splice сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].


// 5) Дан массив const arr = [1, 2, 3, 4, 5]. Создать новый пустой массив arr1. Обойти массив arr через цикл for, каждый элемент массива arr умножить на 10 и результат положить в массив arr1.
// 6) Вывести числа от 4 до 400 на экран.
// 7) Вывести числа в последовательности: 4 7 10 13 с помощью цикла.
// 8) Вывести числа 654 653 652 до нуля.
// 9) Вывести все годы с 1983 до 2017.
// 10) Вывести числа -4 -2 0 2 4 6 ...100.
// 11) Найти сумму чисел от 0 до 100 (включительно). (0+1+2+3+4+5)
// 12) Заполните массив следующим образом: в первый элемент запишите 'x',
//     во второй 'xx', в третий 'xxx' и так далее. Длину массива вводить через prompt.


// const num = +prompt();
// const exes = [];
// for (let i = 0; i < num; i++) {
//     let str = '';
//     for (let j = 0; j <= i; j++) {
//         str += 'x';
//     }
//     exes.push(str);
// }
// console.log(exes);


// 13) Заполните массив следующим образом: в первый элемент запишите '1',
//     во второй '22', в третий '333' и так далее. Длину массива вводить через prompt.


// const num = +prompt();
// const arrOfNumbers = [];
// for (let i = 1; i <= num; i++) {
//     let numbers = '';
//     for (let j = 1; j <= i; j++) {
//         numbers += i;
//     }
//     arrOfNumbers.push(numbers);
// }
// console.log(arrOfNumbers);


//
// 14*) нарисовать матрицу x должны быть по краям, 0 в центре. ( длина и высота матрицы не меньше 10 )
// ['x', 'x', 'x', 'x', 'x' 'x', 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 0, 0, 0, 0, 0, 0, 0, 0, 'x']
//     ['x', 'x', 'x', 'x', 'x', 'x','x']


const arr = [];
for (let i = 0; i < 10; i++) {
    const arrInArr = [];
    for (let j = 0; j < 10; j++) {
        const value = ( i === 0 || i === 9 || j === 0 || j === 9 ) ?    // в скобки взял для лучшей читаемости кода
            arrInArr.push('x') :
            arrInArr.push(0);
    }
    arr.push(arrInArr);
}
console.log(arr);


// 15*) нарисовать матрицу (таблица умножения)
// 0: (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1: (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
// 2: (10) [3, 6, 9, 12, 15, 18, 21, 24, 27, 30]
// 3: (10) [4, 8, 12, 16, 20, 24, 28, 32, 36, 40]
// 4: (10) [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
// 5: (10) [6, 12, 18, 24, 30, 36, 42, 48, 54, 60]
// 6: (10) [7, 14, 21, 28, 35, 42, 49, 56, 63, 70]
// 7: (10) [8, 16, 24, 32, 40, 48, 56, 64, 72, 80]
// 8: (10) [9, 18, 27, 36, 45, 54, 63, 72, 81, 90]
// 9: (10) [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

/* j будет равняться j * i (джей умноженная на ай) в каждой новой ай*/
//
// 16*)	Написать программу которая будет склонять слово
// 	“товар” в зависимости от количества товаров в корзине.
//     Например 1 - товар, 4 - товара, 6 - товаров.
//


// const num = prompt('Введите число товаров');
// const lastNum = num[num.length - 1];
// let str;
// if (+lastNum === 1) {
//     str = `В корзине ${+num} товар`;
// } else if (+lastNum >= 2 && +lastNum <= 4) {
//     str = `В корзине ${+num} товара`;
// } else if (+lastNum >= 5 && +lastNum <= 9) {
//     str = `В корзине ${+num} товаров`;
// } else str = 'Ту матч, братик. Откуда столько денег?';
// alert(str);





