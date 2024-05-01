// создаем иметацию json файла с beckend

const clothes = [
  {
    id: 1,
    title: "футбоолка белая",
    type: "T-Shirt",
    color: "black",
    desc: "blablabla",
    price: "20.99$",
    image: "images/wite.png",
  },
  {
    id: 2,
    title: "футбоолка белая",
    type: "T-Shirt",
    color: "black",
    desc: "blablabla",
    price: "20.99$",
    image: "images/wite.png",
  },
  {
    id: 3,
    title: "футбоолка белая",
    type: "T-Shirt",
    color: "black",
    desc: "blablabla",
    price: "20.99$",
    image: "images/wite.png",
  },
  {
    id: 4,
    title: "футбоолка белая",
    type: "T-Shirt",
    color: "black",
    desc: "blablabla",
    price: "20.99$",
    image: "images/wite.png",
  },
  {
    id: 5,
    title: "футбоолка белая",
    type: "T-Shirt",
    color: "black",
    desc: "blablabla",
    price: "20.99$",
    image: "images/wite.png",
  },
  {
    id: 6,
    title: "футбоолка белая",
    type: "dress",
    color: "black",
    desc: "blablabla",
    price: "20.99$",
    image: "images/wite.png",
  },
  {
    id: 7,
    title: "футбоолка белая",
    type: "dress",
    color: "black",
    desc: "blablabla",
    price: "20.99$",
    image: "images/wite.png",
  },
];

const app = document.getElementById("app");

// Nav
const nav = document.createElement("div");

// Main.
const main = document.createElement("div");
// вывели на страницу с помощью добавления
app.appendChild(nav);
nav.className = "nav";
app.appendChild(main);
main.className = "main";

nav.textContent = "navigation";

// добавление карточки
const cardCreat = () => {
  for (let i = 0; i < clothes.length; i++) {
    // создаем карточку товара
    let card = document.createElement("div");
    card.className = "card";
    main.appendChild(card);

    // добавляем фото
    let cardImage = document.createElement("img");
    card.appendChild(cardImage);

    // // добавляем content
    let cardTitle = document.createElement("h3");
    cardTitle.className = "card-title";
    card.appendChild(cardTitle);

    let cardPrice = document.createElement("h3");
    cardPrice.className = "card-price";
    card.appendChild(cardPrice);

    const addCard = () => {
      cardImage.src = clothes[i].image;
      cardTitle.textContent = clothes[i].title;
      cardPrice.textContent = clothes[i].price;
    };
    addCard();
  }
};
cardCreat();
