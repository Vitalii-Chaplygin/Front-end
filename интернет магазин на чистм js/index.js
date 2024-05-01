const app = document.getElementById('app')


// Nav
const nav = document.createElement('div');

// Main.
const main = document.createElement('div');
// вывели на страницу с помощью добавления 
app.appendChild(nav)
nav.className = 'nav'
app.appendChild(main)
main.className='main'


nav.textContent = 'navigation'

// создаем карточку товара
let card = document.createElement('div')
card.className ='card'
main.appendChild(card)

// добавляем фото
let image = document.createElement('img')
image.src= 



