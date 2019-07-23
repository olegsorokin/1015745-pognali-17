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
