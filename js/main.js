$(document).ready(function () {
  // ********Мобильное всплывающее меню**********

  let menuButton = document.querySelector(".header__burger");
  let menuClose = document.querySelector(".header__nav-close");
  let menuNav = document.querySelector(".header__nav");
  // //Кликаем на бургер
  // menuButton.addEventListener("click", function () {
  //   menuNav.classList.toggle("header__nav--active");
  // });

  // Наводим на бургер
  $(menuButton).hover(function() {
    $(menuNav).addClass("header__nav--active");
  });

  // Кликаем на крестик
  menuClose.addEventListener("click", function () {
    $(menuNav).removeClass("header__nav--active");
  });
});
