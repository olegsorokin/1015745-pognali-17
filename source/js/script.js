var modalShowHide = function (buttonOpen, buttonClose, modalBlock, classToggle) {
  var linkOpen = document.querySelector(buttonOpen);
  var linkClose = document.querySelector(buttonClose);
  var modal = document.querySelector(modalBlock);

  linkOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.add(classToggle);
  });

  linkClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    modal.classList.remove(classToggle);
  });
}

if (document.querySelector(".modal-prices") !== null) {
  modalShowHide(".prices__link", ".modal-prices__close", ".modal-prices", "modal-show");
}

if (document.querySelector(".route-list__item--new") !== null) {
  modalShowHide(".route-list__item--new .route-list__button-dropdown", ".modal-add-country__close-button", ".route-list__item--new", "route-list__item--modal-show");
}
