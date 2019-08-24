/*-----Скрыть/показать модальные окна-----*/
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

/*-----Подмена цвета изображения-----*/
var changeLogoColor = function (currentColor, newColor) {

  /*-Получаем все source контейнера-*/
  var logoSources = document.querySelectorAll(".header__logo source");
  var logoSrc = document.querySelector(".logo-link__image");

  /*-Перебираем в массив-*/
  var sourceArray = [];
  for (var i = 0; i < logoSources.length; i++) {
    sourceArray.push(logoSources[i]);
  }

  /*-Подменяем в каждом источнике путь на новый-*/
  for (var j = 0; j < sourceArray.length; j++) {
    var currentSource = sourceArray[j];

    if (currentSource.srcset) {
      var newSource = currentSource.srcset.replace(new RegExp(currentColor, 'gi'), newColor);
      currentSource.srcset = newSource;
    } else {
      var newSource = currentSource.outerHTML.replace(new RegExp(currentColor, 'gi'), newColor);
      currentSource.outerHTML = newSource;
    }
  }
  /*-Подменяем в каждом источнике путь на новый для img-*/
  if (logoSrc.srcset) {
    var newSrc = logoSrc.src.replace(new RegExp(currentColor, 'gi'), newColor);
    logoSrc.src = newSrc;

    var newSrcset = logoSrc.srcset.replace(new RegExp(currentColor, 'gi'), newColor);
    logoSrc.srcset = newSrcset;

  } else {
    var newSrc = logoSrc.outerHTML.replace(new RegExp(currentColor, 'gi'), newColor);
    logoSrc.outerHTML = newSrc;
  }
}

/*-----Скрыть/показать элементы header-----*/
var jsOn = function () {
  /*-Определяем переменные-*/
  var header = document.querySelector(".header");
  var headerMenuButton = document.querySelector(".header__menu-button");
  var headerNav = document.querySelector(".header__nav");
  var headerFunctions = document.querySelector(".header__functions");
  var headerSocial = document.querySelector(".header__socials");
  var headerContacts = document.querySelector(".header__contacts");

  /*-Базовые установки при включенном JS-*/
  header.classList.add("header--dark");
  header.classList.add("header--scroll");
  headerMenuButton.classList.remove("menu-button--hide");
  headerMenuButton.classList.add("menu-button--close");
  headerNav.classList.add("nav--hide");
  headerFunctions.classList.add("functions-list--hide");
  headerContacts.classList.add("header__contacts--hide");
  headerSocial.classList.add("header__socials--hide");

  /*-Обработчик событий на переключение-*/
  headerMenuButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    if ((headerMenuButton.classList.contains("menu-button--close")) && (window.pageYOffset == 0)) {
      headerMenuButton.classList.remove("menu-button--close");
      headerNav.classList.remove("nav--hide");
      headerFunctions.classList.remove("functions-list--hide");
      headerContacts.classList.remove("header__contacts--hide");
      headerSocial.classList.remove("header__socials--hide");
      header.classList.remove("header--dark");
      changeLogoColor('white', 'blue');
    } else if (headerMenuButton.classList.contains("menu-button--close")) {
      headerMenuButton.classList.remove("menu-button--close");
      headerNav.classList.remove("nav--hide");
      headerFunctions.classList.remove("functions-list--hide");
      headerContacts.classList.remove("header__contacts--hide");
      headerSocial.classList.remove("header__socials--hide");
    } else if ((!headerMenuButton.classList.contains("menu-button--close")) && (window.pageYOffset == 0)) {
      headerMenuButton.classList.add("menu-button--close");
      headerNav.classList.add("nav--hide");
      headerFunctions.classList.add("functions-list--hide");
      headerContacts.classList.add("header__contacts--hide");
      headerSocial.classList.add("header__socials--hide");
      header.classList.add("header--dark");
      changeLogoColor('blue', 'white');
    } else {
      headerMenuButton.classList.add("menu-button--close");
      headerNav.classList.add("nav--hide");
      headerFunctions.classList.add("functions-list--hide");
      headerContacts.classList.add("header__contacts--hide");
      headerSocial.classList.add("header__socials--hide");
    }
  });
}

/*-----Смена цвета при прокрутке-----*/
var changeHeaderTheme = function () {
  var headerMenuButton = document.querySelector(".header__menu-button");
  var header = document.querySelector(".header");

  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0) {
      changeLogoColor('white', 'blue');
      header.classList.remove("header--dark");
      header.classList.add("header--scroll-active");
    } else if ((window.pageYOffset == 0) && (headerMenuButton.classList.contains("menu-button--close"))) {
      changeLogoColor('blue', 'white');
      header.classList.add("header--dark");
      header.classList.remove("header--scroll-active");
    } else if ((window.pageYOffset == 0) && (!headerMenuButton.classList.contains("menu-button--close"))) {
      changeLogoColor('white', 'blue');
      header.classList.remove("header--scroll-active");
    } else {
      changeLogoColor('blue', 'white');
      header.classList.add("header--scroll-active");
    }
  });
}

/*-----Выпадающий фильт по странам (catalog.html)-----*/
var countryFilter = function () {
  var formClose = document.querySelector(".country-filter__button-close");
  var formCloseInner = document.querySelector(".country-filter__button-close-inner");
  var formOpen = document.querySelector(".country-filter__button-show");
  var regionsList = document.querySelector(".country-filter__regions");
  var innerFilter = document.querySelector(".country-filter__inner");

  formClose.classList.add("close-button--hide");
  formCloseInner.classList.add("close-button--hide");
  regionsList.classList.add("regions-list--hide");
  innerFilter.classList.add("letter-filter--hide");
  formOpen.classList.remove("show-more-button--hide");

  formOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    formClose.classList.remove("close-button--hide");
    formCloseInner.classList.remove("close-button--hide");
    regionsList.classList.remove("regions-list--hide");
    innerFilter.classList.remove("letter-filter--hide");
    formOpen.classList.add("show-more-button--hide");;
  });

  formClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    formClose.classList.add("close-button--hide");
    formCloseInner.classList.add("close-button--hide");
    regionsList.classList.add("regions-list--hide");
    innerFilter.classList.add("letter-filter--hide");
    formOpen.classList.remove("show-more-button--hide");;
  });

  formCloseInner.addEventListener("click", function (evt) {
    evt.preventDefault();
    formClose.classList.add("close-button--hide");
    formCloseInner.classList.add("close-button--hide");
    regionsList.classList.add("regions-list--hide");
    innerFilter.classList.add("letter-filter--hide");
    formOpen.classList.remove("show-more-button--hide");;
  });
}

/*-----Показать/скрыть элементы фильтра попутчиков (catalog.html)-----*/
var formLinesShowHide = function () {
  var formLabels = document.querySelectorAll(".form-line__title");
  var form = document.querySelector(".companion-form");

  var labelsArray = [];
  for (var i = 0; i < formLabels.length; i++) {
    labelsArray.push(formLabels[i]);
  }

  for (var j = 0; j < labelsArray.length; j++) {
    labelsArray[j].classList.add('form-line__title--close');
    labelsArray[j].nextElementSibling.classList.add('form-line__wrap--close');
  }

  form.addEventListener("click", function (event) {
    var target;
    if (Element.prototype.closest) {
      target = event.target.closest('.form-line__title');
    } else {
      target = event.target;
    }
    if (target.classList.contains('form-line__title')) {
      target.classList.toggle('form-line__title--close');
      target.nextElementSibling.classList.toggle('form-line__wrap--close');
    }
  });
}

/*-----Смена списка стран (catalog.html)-----*/
var changeLetterList = function () {
  var letterFilter = document.querySelector(".letter-filter");

  letterFilter.addEventListener("click", function (event) {
    var buttonLetterCurrent = document.querySelector(".letter-filter__item-title--current");
    var countryListCurrent = document.querySelector(".countries-list--current");
    buttonLetterCurrent.classList.remove("letter-filter__item-title--current");
    countryListCurrent.classList.remove("countries-list--current");

    var target;
    if (Element.prototype.closest) {
      target = event.target.closest(".letter-filter__item-title");
    } else {
      target = event.target;
    }

    if (target) {
      target.classList.add("letter-filter__item-title--current");
      target.nextElementSibling.classList.add("countries-list--current");
    }
  });
}

/*-----Увеличение/уменьшение значения в счётчике (form.html)-----*/
var formCounterChangeValue = function () {
  var counterList = document.querySelectorAll(".counter");

  var counterArray = [];
  for (var i = 0; i < counterList.length; i++) {
    counterArray.push(counterList[i]);
  }

  for (var j = 0; j < counterArray.length; j++) {
    var counter = counterArray[j];

    counter.addEventListener('click', function () {

      var target;
      if (Element.prototype.closest) {
        target = event.target.closest("button");
      } else {
        target = event.target;
      }
      if (!target) return
      if (target.classList.contains("counter__button-plus")) {
        target.previousElementSibling.value++
      } else if (target.classList.contains("counter__button-minus")) {
        if (target.nextElementSibling.value > 0) {
          target.nextElementSibling.value--
        }
      }
    });
  }
}

/*-----Переключение этапов формы добавления плана (form.html)-----*/
var changeFormStage = function () {
  var formPlan = document.querySelector(".plan-form");
  var formPlanButtonsNext = document.querySelectorAll(".form-next-link");
  var formPlanButtonsPrev = document.querySelectorAll(".form-prev-link");

  var buttonsNextArray = [];
  var buttonsPrevArray = [];

  for (var i = 0; i < formPlanButtonsNext.length; i++) {
    buttonsNextArray.push(formPlanButtonsNext[i]);
  }

  for (var j = 0; j < buttonsNextArray.length; j++) {
    var buttonNext = buttonsNextArray[j];
    buttonNext.addEventListener('click', function (event) {
      formPlan.addEventListener('click', function () {
        if (Element.prototype.closest) {
          var target = event.target.closest('.form-step');
          target.classList.remove("form-step--current");
          target.nextElementSibling.classList.add("form-step--current");
        } else {
          var target = event.target;
          while (!target.classList.contains("form-next-link")) {
            target = target.parentElement;
          }
          var parent = target.parentElement;
          parent.classList.remove("form-step--current");
          parent.nextElementSibling.classList.add("form-step--current");
        }
      });
    });
  }

  for (var k = 0; k < formPlanButtonsPrev.length; k++) {
    buttonsPrevArray.push(formPlanButtonsPrev[k]);
  }

  for (var l = 0; l < buttonsPrevArray.length; l++) {
    var buttonPrev = buttonsPrevArray[l];
    buttonPrev.addEventListener('click', function (event) {
      formPlan.addEventListener('click', function () {
        if (Element.prototype.closest) {
          var target = event.target.closest('.form-step');
          target.classList.remove("form-step--current");
          target.previousElementSibling.classList.add("form-step--current");
        } else {
          var target = event.target;
          while (!target.classList.contains("form-prev-link")) {
            target = target.parentElement;
          }
          var parent = target.parentElement;
          parent.classList.remove("form-step--current");
          parent.previousElementSibling.classList.add("form-step--current");
        }
      });
    });
  }
}

/*-----Базовые вызовы при включённом JS-----*/
jsOn();
changeLogoColor('blue', 'white');
changeHeaderTheme();

/*-----Вызовы модального окна с прайс-листом (index.html)-----*/
if (document.querySelector(".modal-prices") !== null) {
  modalShowHide(".prices__link", ".modal-prices__close", ".modal-prices", "modal-show");
}

/*-----Вызов выпадающего фитра по странам (catalog.html)-----*/
if (document.querySelector(".country-filter") !== null) {
  countryFilter();
}

/*-----Вызов выпадания элементов в фильтре попутчиков (catalog.html)-----*/
if (document.querySelector(".companion-form") !== null) {
  formLinesShowHide();
}

/*-----Вызов смены списка стран (catalog.html)-----*/
if (document.querySelector(".letter-filter") !== null) {
  changeLetterList();
}

/*-----Вызов модального окна с списком стран (form.html)-----*/
if (document.querySelector(".route-list__item--new") !== null) {
  modalShowHide(".route-list__item--new .route-list__button-dropdown", ".modal-add-country__close-button", ".route-list__item--new", "route-list__item--modal-show");
}

/*----- Вызов увеличения/уменьшения значения в счётчике (form.html)-----*/
if (document.querySelector(".counter") !== null) {
  formCounterChangeValue();
}

/*----- Вызов переключения этапов формы при добавлении плана (form.html)-----*/
if (document.querySelector(".plan-form") !== null) {
  changeFormStage();
}
