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
// 3.1.1) Кликая на строку таблицы появляется модальное окно с всемя данными о пользователе
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

const header = document.querySelector('.options--container');
const wrapper = document.querySelector('.wrapper');
const nameButton = document.querySelector('.name');
const emailButton = document.querySelector('.email');
const statusButton = document.querySelector('.status');

//========================= КЛИКИ =========================

function clicking(num = 1) {
    let counter = 0;
    return function () {
        counter += num;
        if (counter === 3) {
            counter = 0;
        }
        console.log(counter, 'COUNTER');
        return counter;
    };
}

let clickArr = [0, 0, 0];

const nameClick = clicking();
const emailClick = clicking();
const statusClick = clicking();

//============ ИВЕНТ ЛИССЕНЕРЫ НА КЛИКИ =========================

nameButton.addEventListener('click', () => {
    clickArr[0] = nameClick();
    renderHeader();
});

emailButton.addEventListener('click', () => {
    clickArr[1] = emailClick();
    renderHeader();
});

statusButton.addEventListener('click', () => {
    clickArr[2] = statusClick();
    renderHeader();
})

//==================== ХЕДДЕР РЕНДЕР КЛИКИ =========================

function renderHeader() {
    let result = '';

    result += clickArr[0] === 1 ?

        `<img class="arrow--down--name" src="icons8-стрелка-вниз-в-круге-64.png" alt="">` :
        clickArr[0] === 2 ?
            `<img class="arrow--up--name" src="icons8-стрелка-вверх-в-круге-64.png" alt="">` :
            result;

    result += clickArr[1] === 1 ?
        `<img class="arrow--down--email" src="icons8-стрелка-вниз-в-круге-64.png" alt="">` :
        clickArr[1] === 2 ?
            `<img class="arrow--up--email" src="icons8-стрелка-вверх-в-круге-64.png" alt="">` :
            result;

    result += clickArr[2] === 1 ?
        `<img class="arrow--down--status" src="icons8-стрелка-вниз-в-круге-64.png" alt="">` :
        clickArr[2] === 2 ?
            `<img class="arrow--up--status" src="icons8-стрелка-вверх-в-круге-64.png" alt="">` :
            result

    return header.innerHTML = result;


}


const apiUrl = "https://jsonplaceholder.typicode.com/users";
const apiImages = "https://random.imagecdn.app/500/500";

// function optionsField (users){                             // ДОБАВЛЕНИЕ ПОЛЯ ОПШНС С ВЛОЖЕННЫЙМИ ПОЛЯМИ- ФЛАГАМИ
//     users.forEach((el, idx) => el.options = options);
//     return console.log(users)
//
// }

(async () => {
    const users = await api(apiUrl);
    console.log(users, 'usersFunction');
})();

async function api(api, options) {
    return (await fetch(api, options)).json();
}


// const responseImages = fetch(apiImages)
//     .then((response) => )

const options = {
    status: {
        sortMin: 0,
        sortMax: 0,
        sortDefault: 0
    },
    operations: {
        info: 0,
        edit: 0,
        deleteUser: 0
    }
};

const responseData = fetch(apiUrl)
    .then((response) => response.json()
        .then((users) => renderUser(users)));


// const status = ['Active', 'Inactive']   // <------------------------------------------ STATUS ARRAY


function renderUser(users) {          // <------------------------------------------ RENDER USERS
    let result = '';
    users.forEach(el => {
        result += `<div class="card">
        <img src="${apiImages}" alt="IMG IS HERE">
        <div class="userName">${el.name}</div>
        <div class="userPhone">Phone: ${el.phone}</div>
        <div class="userEmail">Email: ${el.email}</div>
        <div class="userStatus">STATUS</div>
        <div class="options">${options.status.sortMin}</div>
        </div>
        `;
    });
    wrapper.innerHTML = result;
}


// responseData.then((users) => renderUser(users))
// responseData.then((users) => console.log(users))