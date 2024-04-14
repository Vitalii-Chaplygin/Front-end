

// Задача2:
// На странице есть div с текстом и кнопка ok,
// сделать так , чтобы кнопка красила текст в красный цвет при нажатии

const colorTheText = () => {
  const searchElementById = document.getElementById("text").className;
  const button = document.getElementById("text");

  // console.log(searchElementById);
  if (searchElementById == "originalText") { // originalText- это класс нашего текста <p id="text" class="originalText">
    button.classList.add("changeColor"); // changeColor - это стили которые мы хотим применить при нажатии на кнопку 
  } else {
    button.classList.remove('changeColor');
  }
}
