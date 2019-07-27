/*---Открытие/закрытие меню в header---*/
var menuButton = document.querySelector(".header__menu-button");

menuButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (menuButton.classList.contains("menu-button--close") == true) {
    menuButton.classList.remove("menu-button--close");
  } else {
    menuButton.classList.add("menu-button--close");
  }
});


/*---Открытие/закрытие прайса с бизнес-тарифами---*/
var priceLink = document.querySelector(".prices__link");
var priceModal = document.querySelector(".modal-prices");
var priceClose = document.querySelector(".modal-prices__close");

priceLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  priceModal.classList.add("modal-show");
});

priceClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  priceModal.classList.remove("modal-show");
});
