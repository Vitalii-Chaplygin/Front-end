// Задача3:
// Сделать кнопку, которая добавляет карточки на странице
// в каждой карточке есть заголовок, текст и картинка (url картинки можо использовать одинаковый)

const addCard = () => {
  const newCard = document.createElement("div");
  newCard.classList.add("card-wrapper");

  newCard.innerHTML = `
    <a class="card-img" href="#">
      <img
        id="img-cards"
        class="img-cards-pfoto"
        src="./img/intermediate-composite-basketball.jpg"
        alt="basketball"
      />
    </a>
    <h3 class="title">Intermediate Size Basketball</h3>
    <div class="product-rating-container">
      <img class="product-rating-stars" src="./img/rating-4.png" />
      <div class="product-rating-count link-primary">127</div>
    </div>
    <div class="product-price">$28.99</div>
    <div class="product-quantity-container">
      <select class="quantity-selector">
        <option selected="" value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <button class="button button-primary" data-testid="add-to-cart-button">
      Add to Cart
    </button>
  `;

  const cardSection = document.getElementById("cardSection");
  cardSection.appendChild(newCard);
};
