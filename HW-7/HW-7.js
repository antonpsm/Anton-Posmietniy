// Src урла для картинок https://random.imagecdn.app/500/500
//     FIGMA TEMPLATE https://www.figma.com/file/jJRtgzfB5JVV073excALFe/Untitled?node-id=0%3A1
//     Создать сайт, с карточками NFT.
// 1. За несовпадение по дизайну (апрува на ПР не будет) верстаем с душой.
// 2. В HTML У вас только контейнер, фон и кнопка, карточки идут рендером из JS.
// 3. Клик по кнопке GENERATE NEW NFT, создает новую карточку с рандомной картинкой по
// урле указанной выше ( img src= урла ), на данном этапе задача стоит только в создании
// карточек.
// 4. Добавить :hover еффект наведения на карточку, + реализовать удаление карточки из спика.

const btn = document.querySelector('.btn');
const card = document.querySelector('.container--bottom');
const deleteButton = document.querySelector('.moveEl::after')



let fieldForCards = [];

function randomId() {
    return Math.floor(Math.random() * 100000000)
}

function deleteUser(id) {
fieldForCards = fieldForCards.filter(el => el !== id)
    cardRender()
}

function cardRender () {
    let result = ``
    result += `<div class="card">
<div class="card--bg"></div>
<div class="img"></div>
<button class="moveEl" ></button>

</div>
`
    card.innerHTML = result
}
btn.addEventListener('click', () => {
    fieldForCards = [...fieldForCards, randomId()]
    cardRender()
})

// ДЕБАЖИТЬ И ПЕРЕДЕЛЫВАТЬ НАХУЙ







