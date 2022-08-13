// Создать таблицу с юзерами, дизайн может быть любой.
//
//     Src урла для колонки photo https://random.imagecdn.app/500/500
//
//     1) Таблица должна содержать 6 колонок
// 1.1) Картинка
// 1.2) Имя фамилия
// 1.3) мобильный телефон
// 1.4) емаил
// 1.5) статус
// 1.6) операции
// .name, .phone, .email, (status - новый елемент. нужно добавить), (operations - сложная хуйня. разобрать и добавить)
//
// 2) Колонка имени, емаил, статус должны сортироваться при нажатии на колонку хедера таблицы например на Status
// 2.1) При нажатии первый раз появляется стрелка вниз рядом с именем колонки что означает что мы сортируем по убыванию
// 2.2) При нажатии второй раз стрелка вниз меняеется на стрелку вверх что означает что мы сортируем по возрастанию
// 2.3) При нажатии третий раз стрелка исчерает таблица возвращается в исходное положение
// 2.4) Одновременно сортироваться может только одна колонка(если что то сортировали, и нажали на другой хедер таблицы то в новом месте появляется стрелка в старом пропадает)
//
// 3) Операции
// 3.1) Информация
// 3.1.1) Кликая на строку таблицы появляется модальное окно с всеми данными о пользователе
// 3.2) Эдит
// 3.2.1) Кликаем на иконку карандаша появляется модальное окно где есть 3 инпута и мультиселект для статуса
// 3.2.2) В каждом поле должна отобржаться предыдущая информация
// 3.2.3) Каждое поле можно изменить
// 3.2.4) Должна быть кнопка сохранить изменения кликая на которую в таблице у данного юзера появляются новые данные которые вводились в модальном окне
// 3.3) Удаление
// 3.3.1) Появляется подтверждение точно ли вы хотите удалить этого юзера? Если да то юзер исчезает с таблицы, если нет то ничего не происходит
//
// 4) Сделать где то кнопку добавить нового пользователя
// 4.1) Кликая по ней появляется модалка где есть 3 инпута и мультиселект для статуса, заполняем, сохраняем, юзер должен появится вконце таблицы
//
//
// 5*) Сделать пагинацию 10 человек на странице
// 5.1) Отображается общее количество страниц зависящее от количества пользователей, пример: всего 100 пользователей , 10 пользователей на 1 странице, всего 10 страниц от 1 до 10
// 5.2) Жмем на страницу и получаем юзеров на этой странице (сортировка при этом отменяется).
// 5.3) Если применена пагинация и мы хотим сделать сортировку то пагинация меняется на 1ю страницу

//Апишка https://jsonplaceholder.typicode.com/users
const wrapper = document.querySelector('.wrapper');
const container = document.querySelector('.container')
const header = document.querySelector('.options--container');
const nameButton = document.querySelector('.name');
const emailButton = document.querySelector('.email');
const statusButton = document.querySelector('.status');
const optionsContainer = document.querySelector('.options--container')

//========================= КЛИКИ =========================

// function clicking(num = 1) {
//     let counter = 0;
//     return function (def) {
//         counter += num;
//         if (counter === 3) {
//             counter = 0;
//         } if (def) {
//             counter = 0
//         }
//         console.log(counter, 'COUNTER');
//         return counter;
//     };
// }




//==================== ХЕДДЕР РЕНДЕР КЛИКИ =========================


const apiImages = "https://random.imagecdn.app/500/500";

// function optionsField (users){                             // ДОБАВЛЕНИЕ ПОЛЯ ОПШНС С ВЛОЖЕННЫЙМИ ПОЛЯМИ- ФЛАГАМИ
//     users.forEach((el, idx) => el.options = options);
//     return console.log(users)
//
// }

// const options = {
//     status: {
//         sortMin: 0,
//         sortMax: 0,
//         sortDefault: 0
//     },
//     operations: {
//         info: 0,
//         edit: 0,
//         deleteUser: 0
//     }
// };

// const responseData = fetch(apiUrl)
//     .then((response) => response.json()
//         .then((users) => renderUser(users)));


// const status = ['Active', 'Inactive']   // <------------------------------------------ STATUS ARRAY
let [nameClick, emailClick, statusClick] = [0, 0, 0];
function renderHeader() {
    let result = '';
    switch (nameClick) {
        case 1 :
            result +=
                `<img class="arrow--down--name" src="icons8-стрелка-вниз-в-круге-64.png" alt="">`;
            break;
        case 2 :
            result +=
                `<img class="arrow--up--name" src="icons8-стрелка-вверх-в-круге-64.png" alt="">`;
            break;
    }switch (emailClick) {
        case 1 :
            result +=
                `<img class="arrow--up--email" src="icons8-стрелка-вниз-в-круге-64.png" alt="">`;
            break;
        case 2 :
            result +=
                `<img class="arrow--up--email" src="icons8-стрелка-вверх-в-круге-64.png" alt="">`;
            break;
    }switch (statusClick) {
        case 1 :
            result +=
                `<img class="arrow--up--status" src="icons8-стрелка-вниз-в-круге-64.png" alt="">`;
            break;
        case 2 :
            result +=
                `<img class="arrow--up--status" src="icons8-стрелка-вверх-в-круге-64.png" alt="">`;
            break;
    }
    return header.innerHTML = result;
}

let users;

let usersDefault = [];
(async () => {
    users = await api("https://jsonplaceholder.typicode.com/users");
    users.forEach(el => {
        el.status = 'Active';
        el.id = getRandomId();
        el.flag = 0;
        el.flagInfo = 0
    })
    renderUser(users)
    console.log(users);
    // const userCard = document.querySelectorAll('.card')
    // console.log(userCard);

})();


// users.forEach(el => {
//     el.status = 'Active';
//     el.id = getRandomId();
//     el.flag = 0;
//     el.flagInfo = 0
// })
// renderUser(users)

nameButton.addEventListener('click', () => {
    usersDefault = [...users, usersDefault]
    nameClick ++;
    [emailClick, statusClick] = [0, 0];
    nameClick = nameClick === 3 ? 0 : nameClick;
    renderHeader();
    if (nameClick !== 0) {
        sortBy(usersDefault, 'name', nameClick)
        renderUser(usersDefault)
    } else renderUser(users)
});

emailButton.addEventListener('click', () => {
    usersDefault = [...users, usersDefault]
    emailClick ++;
    [nameClick, statusClick] = [0, 0];
    emailClick = emailClick === 3 ? 0 : emailClick;
    renderHeader();
    if (emailClick !== 0) {
        sortBy(usersDefault, 'phone', emailClick)
        renderUser(usersDefault)
    } else renderUser(users)

});

statusButton.addEventListener('click', () => {
    usersDefault = [...users, usersDefault]
    statusClick ++
    [nameClick, emailClick] = [0, 0];
    statusClick = statusClick === 3 ? 0 : statusClick;
    renderHeader();
    if (statusClick !== 0) {
        sortBy(usersDefault, 'status', statusClick)
        renderUser(usersDefault)
    } else renderUser(users);
});

function renderUser(users) {
    let result = '';
    users.forEach(el => {

        if (el.flag === 0) {
            result += `<div onclick="flagInfoActive(${el.id})" class="card">
        <img src="${apiImages}" alt="IMG IS HERE">
        <div class="userName">${el.name}</div>
        <div class="userPhone">Phone: ${el.phone}</div>
        <div class="userEmail">Email: ${el.email}</div>
        <div class="userStatus">ACTIVE</div>
        <button class="options" onclick="flagOne(${el.id})"></button>
        </div>
        `
        } if (el.flag === 1){
            result += `<div onclick="flagInfoActive(${el.id})" class="card">
        <img src="${apiImages}" alt="IMG IS HERE">
        <div class="userName">${el.name}</div>
        <div class="userPhone">Phone: ${el.phone}</div>
        <div class="userEmail">Email: ${el.email}</div>
        <div class="userStatus">ACTIVE</div>
        <button class="options" onclick="flagZero(${el.id})"></button>
        
        </div>
        <div class="options--field"> INFO <br> ${JSON.stringify(el)}
         <button class="info--delete--btn" onclick="flagZero(${el.id})" >X</button>
         </div>
         
        `
       }
        // if (el.flagInfo === 0){
        //     result += `<button onclick="flagInfoActive(${el.id})" class="card">
        // <img src="${apiImages}" alt="IMG IS HERE">
        // <div class="userName">${el.name}</div>
        // <div class="userPhone">Phone: ${el.phone}</div>
        // <div class="userEmail">Email: ${el.email}</div>
        // <div class="userStatus">ACTIVE</div>
        // <button class="options" onclick="flagZero(${el.id})"></button>
        // </button>
        // `
        // } else if (el.flagInfo === 1){
        //     result += `<button onclick="flagInfoDeActive(${el.id})" class="card">
        // <img src="${apiImages}" alt="IMG IS HERE">
        // <div class="userName">${el.name}</div>
        // <div class="userPhone">Phone: ${el.phone}</div>
        // <div class="userEmail">Email: ${el.email}</div>
        // <div class="userStatus">ACTIVE</div>
        // <button class="options" onclick="flagZero(${el.id})"></button>
        // </button>
        //  <div class="usre--info"> </div>
        // `}
    });
    wrapper.innerHTML =  result
}


function flagOne(userId) {
   users = users.map(el => {
        if (el.id === userId){
            el.flag = 1
        }
        return el
    })
// renderUser(users)
}
function flagZero(userId) {
    users = users.map(el => {
        if (el.id === userId){
            el.flag = 0
        }
        return el
    })
    renderUser(users)
}

function flagInfoActive(userId) {
    users = users.map(el => {
        if (el.id === userId){
            el.flagInfo = 1
        }
        return el
    });
    renderUser(users)
}

function flagInfoDeActive(userId) {
    users = users.map(el => {
        if (el.id === userId){
            el.flagInfo = 0
        }
        return el
    });
    // console.log('FLAG DEACTIVE!!');
    renderUser(users)
}



async function api(api, options) {
    return (await fetch(api, options)).json();
}

// function sortBy (users, type, direction){
//     return users.sort((a, b) => {
//         if (direction === 1){
//             return b - a
//         } else if (direction === 2){
//             return a - b
//         }
//     })
// }



function getRandomId() {
    return Math.floor(Math.random() * 1000000);
}


function sortBy(users, sortType, direction) {
    return users.sort((objA, objB) => {
    console.log(direction)
    if (objA[sortType] > objB[sortType]) {
      return direction === 1 ? -1 : 1;
    } else if (objA[sortType] < objB[sortType]) {
      return direction === 2 ? -1 : 1;
    }
  });
}







// responseData.then((users) => renderUser(users))
// responseData.then((users) => console.log(users))

// let array = [5,4,3,6,2,1,8,7,9];
// const sotrArr = (arr, num = 1) => {
//     return console.log(arr.sort((a,b) => num === 1 ? b - a : a - b))
// }
// sotrArr(array, 0)