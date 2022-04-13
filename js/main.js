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
    $(menuNav).addClass('header__nav--active');
  });

  // Кликаем на крестик
  menuClose.addEventListener("click", function () {
    $(menuNav).removeClass('header__nav--active');
  });

  // Очищаем корзину
  $('#clear').on("click", function () {
    $('.cart__form-group').addClass('cart__item--clear');
    });

  // Закрываем карточку

  $('.cart__item-close').on("click", function () {
    $(this).parents('fieldset').addClass('cart__item--clear');
    });


  // Открываем фильтр
  $('.products__header-title').on("click", function () {
    $(".filter").addClass('filter--active');
    });

  // Закрываем фильтр
  $('.filter__title').on("click", function () {
    $(".filter").removeClass('filter--active');
    });


  // Подменю фильтра
  $('.filter__list-title').on("click", function () {
    $(this).siblings().toggle('filter__submenu--active');
  });

  // Меню сортировки открываем
  $('.sort__item').on("click", function () {
    $(this).children('.sort__submenu').toggle('sort__submenu--active');
  });

  $('.sort__submenu').click(function (e) {
    e.stopPropagation(); // Отменяем всплытие события от вслывающего меню
  });

});


