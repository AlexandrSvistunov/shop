$(document).ready(function () {
  // ********Мобильное всплывающее меню**********

  let menuButton = document.querySelector(".header__burger");
  let menuClose = document.querySelector(".header__nav-close");
  let cartClear = document.getElementById("clear");
  let menuNav = document.querySelector(".header__nav");
  let cartItem = document.querySelector(".cart__item"); 
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

  // Очищаем корзину
  cartClear.addEventListener("click", function () {
    $(".cart__form-group").addClass("cart__item--clear");
  });


  // Закрываем карточку

  $('.cart__item-close').on("click", function () {
    $(this).parents('fieldset').addClass("cart__item--clear");
    });

});
