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
const container = document.querySelector('.container');
const header = document.querySelector('.options--container');
const nameButton = document.querySelector('.name');
const emailButton = document.querySelector('.email');
const statusButton = document.querySelector('.status');
const createUserButton = document.querySelector('.new--user--button');


const apiImages = "https://random.imagecdn.app/500/500";

async function api(api, options) {
    return (await fetch(api, options)).json();
}

let [nameClick, emailClick, statusClick] = [0, 0, 0];

nameButton.addEventListener('click', () => {
    usersDefault = [...users, usersDefault];
    nameClick++;
    [emailClick, statusClick] = [0, 0];
    nameClick = nameClick === 3 ? 0 : nameClick;
    renderHeader();
    if (nameClick !== 0) {
        sortBy(usersDefault, 'name', nameClick);
        renderUser(usersDefault);
    } else renderUser(users);
});

emailButton.addEventListener('click', () => {
    usersDefault = [...users, usersDefault];
    emailClick++;
    [nameClick, statusClick] = [0, 0];
    emailClick = emailClick === 3 ? 0 : emailClick;
    renderHeader();
    if (emailClick !== 0) {
        sortBy(usersDefault, 'phone', emailClick);
        renderUser(usersDefault);
    } else renderUser(users);

});

statusButton.addEventListener('click', () => {
    usersDefault = [...users, usersDefault];
    statusClick++;
    [nameClick, emailClick] = [0, 0];
    statusClick = statusClick === 3 ? 0 : statusClick;
    renderHeader();
    if (statusClick !== 0) {
        sortBy(usersDefault, 'status', statusClick);
        renderUser(usersDefault);
    } else renderUser(users);
});

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
    }
    switch (emailClick) {
        case 1 :
            result +=
                `<img class="arrow--up--email" src="icons8-стрелка-вниз-в-круге-64.png" alt="">`;
            break;
        case 2 :
            result +=
                `<img class="arrow--up--email" src="icons8-стрелка-вверх-в-круге-64.png" alt="">`;
            break;
    }
    switch (statusClick) {
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
        el.status = 'ACTIVE';
        el.id = getRandomId();
        el.flag = 0;
        el.flagInfo = 0;
        el.flagDeleteUser = 0;
        el.flagAddUser = 0;
        el.flagNewUser = 0;
    });
    renderUser(users);
    console.log(users);

})();

function renderUser(users) {
    let result = '';
    users.forEach(el => {

        result += `<div class="card">
<button onclick="flagInfoClicker(${el.id})" class="card--button"></button>
    <img src="${apiImages}" alt="IMG IS HERE">
    <div class="userName">${el.name}</div>
    <div class="userPhone">Phone: ${el.phone}</div>
    <div class="userEmail">Email: ${el.email}</div>
    <div class="userStatus">STATUS: ${el.status}</div>
    <button class="options" onclick="flagClicker(${el.id})">EDIT</button>
    <button class="delete--user" onclick="flagDeleteUserClicker(${el.id})">DELETE<br>USER</button>
</div>
        `;
        if (el.flagInfo === 1) {
            result += `<div onclick="flagInfoClicker(${el.id})" class="card">
<button onclick="flagInfoClicker(${el.id})" class="card--button"></button>
    <img src="${apiImages}" alt="IMG IS HERE">
    <div class="userName">${el.name}</div>
    <div class="userPhone">Phone: ${el.phone}</div>
    <div class="userEmail">Email: ${el.email}</div>
    <div class="userStatus">STATUS: ${el.status}</div>
    <button class="options" onclick="flagClicker(${el.id})">EDIT</button>
    <button class="delete--user" onclick="flagDeleteUserClicker(${el.id})">DELETE<br>USER</button>
        
        </div>
<div class="user--info"> INFO (json)<br> ${JSON.stringify(el)}
    <button class="info--delete--btn" onclick="flagInfoClicker(${el.id})">X</button>
</div>
        `;
        } if (el.flag === 1) {
            result += `<div class="card">
    <button onclick="flagInfoClicker(${el.id})" class="card--button"></button>
    <img src="${apiImages}" alt="IMG IS HERE">
    <div class="userName">${el.name}</div>
    <div class="userPhone">Phone: ${el.phone}</div>
    <div class="userEmail">Email: ${el.email}</div>
    <div class="userStatus">STATUS: ${el.status}</div>
    <button class="options" onclick="flagClicker(${el.id})">EDIT</button>
    <button class="delete--user" onclick="flagDeleteUserClicker(${el.id})">DELETE<br>USER</button>
    <div class="options--field">
        <input type="text" onchange="changeUserName(this.value, ${el.id})" value="${el.name}">
        <input type="text" onchange="changeUserPhone(this.value, ${el.id})" value="${el.phone}">
        <input type="text" onchange="changeUserEmail(this.value, ${el.id})" value="${el.email}">
        <button class="status--btn active" onclick="statusActive(${el.id})" >STATUS ACTIVE</button>
        <button class="status--btn inactive" onclick="statusINActive(${el.id})" >STATUS INACTIVE</button>
        <button class="apply--button" onclick="applyChanges(${el.id})" >APPLY</button>
    </div>
</div>
        `;
        } if (el.flagDeleteUser === 1) {
            result += `<div class="card">
<button onclick="flagInfoClicker(${el.id})" class="card--button"></button>
    <img src="${apiImages}" alt="IMG IS HERE">
    <div class="userName">${el.name}</div>
    <div class="userPhone">Phone: ${el.phone}</div>
    <div class="userEmail">Email: ${el.email}</div>
    <div class="userStatus">STATUS: ${el.status}</div>
    <button class="options" onclick="flagClicker(${el.id})">EDIT</button>
    <button class="delete--user" onclick="flagDeleteUserClicker(${el.id})">DELETE<br>USER</button>
</div>
<div class="delete--field"> Are you sure you want to delete this user?
<button class="delete--user--button--yes" onclick="deleteUser(${el.id})">YES</button>
<button class="delete--user--button--no" onclick="flagDeleteUserClicker(${el.id})">NO</button>
</div>
`;
        } if (el.flagNewUser === 1) {
            result += `<div class="card">
<button onclick="flagInfoClicker(${el.id})" class="card--button"></button>
    <img src="${apiImages}" alt="IMG IS HERE">
    <div class="userName">${el.name}</div>
    <div class="userPhone">Phone: ${el.phone}</div>
    <div class="userEmail">Email: ${el.email}</div>
    <div class="userStatus">STATUS: ${el.status}</div>
    <button class="options" onclick="flagClicker(${el.id})">EDIT</button>
    <button class="delete--user" onclick="flagDeleteUserClicker(${el.id})">DELETE<br>USER</button>
</div> 
<div class="options--field">
        <input type="text" onchange="newUserName(this.value)" value="'NAME'">
        <input type="text" onchange="newUserPhone(this.value)" value="'PHONE'">
        <input type="text" onchange="newUserEmail(this.value)" value="EMAIL">
        <button class="status--btn active" onclick="newStatusActive()" >STATUS ACTIVE</button>
        <button class="status--btn inactive" onclick="newStatusINActive()" >STATUS INACTIVE</button>
        <button class="apply--button" onclick="createNewUser()" >APPLY</button>
    </div>
`
        }
    });
    wrapper.innerHTML = result;
}

createUserButton.addEventListener('click', () => {
    flagCreateNewUserClicker(users);
});

function newUserName(newName){
    userName = newName
}
function newUserPhone(newPhone){
    userPhone = newPhone
}
function newUserEmail(newEmail){
    userEmail = newEmail
}
function newStatusActive(){
    userStatus = 'ACTIVE'
}
function newStatusINActive(){
    userStatus = 'INACTIVE'
}
function createNewUser(){
    users = [...users, {
        name : userName,
        phone : userPhone,
        email : userEmail,
        status :userStatus,
        flagNewUser: 0
    }];
    users.forEach(el => el.flagNewUser = 0)
    renderUser(users)

}

let userName;
let userPhone;
let userEmail;
let userStatus;

function applyChanges(userId) {
    users.map(el => {
        if (el.id === userId) {
            el.name = !userName ? el.name : userName;
            el.phone = !userPhone ? el.phone : userPhone;
            el.email = !userEmail ? el.email : userEmail;
            el.status = !userStatus ? el.status : userStatus;
            el.flag = 0;
        }
        return el;
    });

    renderUser(users);
}

function changeUserName(value, userId) {

    users = users.map(el => {
        if (el.id === userId) {
            userName = value;
        }
        return el;
    });
}

function changeUserPhone(value, userId) {

    users = users.map(el => {
        if (el.id === userId) {
            userPhone = value;
        }
        return el;
    });
}

function changeUserEmail(value, userId) {

    users = users.map(el => {
        if (el.id === userId) {
            userEmail = value;
        }
        return el;
    });
}

function statusActive(userId) {
    users.map(el => {
        if (el.id === userId) {
            userStatus = 'ACTIVE';
        }
    });
}

function statusINActive(userId) {
    users.map(el => {
        if (el.id === userId) {
            userStatus = 'INACTIVE';
        }
    });
}


let numForFlag = 0;

function flagClicker(userId) {
    users.map(el => {
        if (el.id === userId) {
            if (numForFlag === 0) {
                numForFlag++;
            } else if (numForFlag === 1) {
                numForFlag--;
            }
            el.flag = numForFlag;
        }
        return el;
    });
    renderUser(users);
}

let numForFlagInfo = 0;

function flagInfoClicker(userId) {
    users.map(el => {
        if (el.id === userId) {
            if (numForFlagInfo === 0) {
                numForFlagInfo++;
            } else if (numForFlagInfo === 1) {
                numForFlagInfo--;
            }
            el.flagInfo = numForFlagInfo;
        }
        return el;
    });
    renderUser(users);
}

let numForFlagDeleteUser = 0;

function flagDeleteUserClicker(userId) {
    users.map(el => {
        if (el.id === userId) {
            if (numForFlagDeleteUser === 0) {
                numForFlagDeleteUser++;
            } else if (numForFlagDeleteUser === 1) {
                numForFlagDeleteUser--;
            }
            el.flagDeleteUser = numForFlagDeleteUser;
        }
        return el;
    });
    renderUser(users);
}



function flagCreateNewUserClicker(users) {
    users.map(el => {
        if (el.flagNewUser === 0) {
            el.flagNewUser = 1;
        } else if (el.flagNewUser === 1) {
            el.flagNewUser = 0;
        }
        console.log(el.flagNewUser, 'flagNewUser');
        return el;
    });
    renderUser(users);
}


function deleteUser(userId) {
    users = users.filter(el => {
        if (el.id !== userId) {
            return el;
        }
    });
    renderUser(users);
    numForFlagDeleteUser = 0;
}

function getRandomId() {
    return Math.floor(Math.random() * 1000000);
}

function sortBy(users, sortType, direction) {
    return users.sort((objA, objB) => {
        console.log(direction);
        if (objA[sortType] > objB[sortType]) {
            return direction === 1 ? -1 : 1;
        } else if (objA[sortType] < objB[sortType]) {
            return direction === 2 ? -1 : 1;
        }
    });
}
