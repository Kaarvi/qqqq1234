let page = document.querySelector('.color-button');
let themeButton = document.querySelector('.theme-button');

themeButton.onclick = function() {
  page.classList.toggle('red-button');
  page.classList.toggle('blue-button');
};