/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/js/modules/select.js
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var select_select = document.querySelector('.product-box__select'),
    sizes = select_select.querySelector('.product-box__sizes'),
    radios = sizes.querySelectorAll('.product-box__radio'),
    selectName = select_select.querySelector('.product-box__select-name');

var toggleSelect = function toggleSelect() {
  select_select.classList.toggle('active');
  sizes.classList.toggle('active');
};

var sizeSelect = function sizeSelect() {
  select_select.addEventListener('click', function (e) {
    toggleSelect();
  });
  document.addEventListener('click', function (e) {
    var target = e.target;
    var its_select = target == select_select || select_select.contains(target);
    var its_sizes = target == sizes;
    var menu_is_active = select_select.classList.contains('active');

    if (!its_select && !its_sizes && menu_is_active) {
      toggleSelect();
    }
  });

  var _iterator = _createForOfIteratorHelper(radios),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var radio = _step.value;
      radio.addEventListener('change', function (e) {
        selectName.textContent = e.target.value;
        select_select.classList.remove('active');
        sizes.classList.remove('active');
      });
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};
;// CONCATENATED MODULE: ./src/assets/js/modules/imageView.js
function imageView_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = imageView_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function imageView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return imageView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return imageView_arrayLikeToArray(o, minLen); }

function imageView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var thumnbale = document.querySelectorAll('.product-box__thumnbale'),
    mainImage = document.querySelector('.product-box__img').querySelector('picture'),
    styledMain = document.querySelector('.styled__main').querySelector('picture'),
    styledThumb = document.querySelectorAll('.styled__image');

var removeActives = function removeActives(collection) {
  var _iterator = imageView_createForOfIteratorHelper(collection),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var col = _step.value;
      col.classList.remove('active');
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
};

var viewFunc = function viewFunc(a, b) {
  a.forEach(function (item) {
    item.addEventListener('click', function (e) {
      b.innerHTML = e.currentTarget.querySelector('picture').innerHTML;
      removeActives(a);
      e.currentTarget.classList.add('active');
    });
  });
};

var imageView = function imageView() {
  viewFunc(thumnbale, mainImage);
  viewFunc(styledThumb, styledMain);
};
;// CONCATENATED MODULE: ./src/assets/js/modules/product.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var cartButton = document.querySelector('.product-box__addCart');
var favoriteButton = document.querySelector('.product-box__favorite');
var quantityInput = document.querySelector('.product-box__quantity-input');
var quantity = parseInt(quantityInput.value);
var productimage = document.querySelector('.product-box__img').querySelector('picture');
var productName = document.querySelector('.product-box__title').textContent;
var productPrice = document.querySelector('.product-box__price-new').innerHTML;
var count = '0';
var modalNotify = document.createElement('div');
modalNotify.classList.add('modal-notify');
var backdrop = document.createElement('div');
backdrop.classList.add('backdrop');

var clearContent = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            backdrop.remove();
            modalNotify.classList.remove('closed');
            modalNotify.remove();
            modalNotify.innerHTML = '';
            document.body.classList.remove('overfolow');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function clearContent() {
    return _ref.apply(this, arguments);
  };
}();

var updateWidget = function updateWidget(e) {
  var widget = e.currentTarget.dataset.widget;
  var widgetBox = document.querySelector(widget);
  quantity = parseInt(quantityInput.value);
  count = widgetBox.textContent;
  widgetBox.innerHTML = +count + parseInt(quantityInput.value);
  widgetBox.classList.add('active');
};

var productButtons = function productButtons() {
  cartButton.addEventListener('click', function (e) {
    clearContent();
    updateWidget(e);
    var modallInnerContent = "<div class=\"modal-content\">\n                                        <div class=\"modal-img\">\n                                            ".concat(productimage.outerHTML, "\n                                        </div>\n                                        <div class=\"modal-info\">\n                                            <h3>\u0412\u044B \u043A\u0443\u043F\u0438\u043B\u0438 <strong>").concat(productName, "</strong></h3>\n                                            <p>").concat(+count + parseInt(quantityInput.value), " \u0448\u0442. \u043F\u043E \u0446\u0435\u043D\u0435:<span class=\"modal-price\">").concat(productPrice, "</span></p>\n\n                                            <div class=\"modal-buttons\">\n                                                <span class=\"modal-close\">\u041F\u0440\u043E\u0434\u043E\u043B\u0436\u0438\u0442\u044C \u043F\u043E\u043A\u0443\u043F\u043A\u0438</span>\n                                                <span class=\"modal-cart-redirect\">\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u043A\u043E\u0440\u0437\u0438\u043D\u0443</span>\n                                            </div>\n                                            \n                                        </div>\n                                    </div>");
    modalNotify.insertAdjacentHTML('afterbegin', modallInnerContent);
    backdrop.insertAdjacentElement('beforeend', modalNotify);
    document.body.insertAdjacentElement('beforeend', backdrop);
    document.body.classList.add('overfolow');
  });
  document.addEventListener('click', function (e) {
    if (e.target.className === 'modal-close' || e.target.className === 'backdrop') {
      document.querySelector('body .modal-notify').classList.add('closed');
      setTimeout(function () {
        clearContent();
      }, 500);
    }
  });
  favoriteButton.addEventListener('click', function (e) {
    var widget = e.currentTarget.dataset.widget;
    var widgetBox = document.querySelector(widget);
    count = widgetBox.textContent;
    var modallInnerContent = "<div class=\"modal-content modal-content--favorite\">\n                                        <div class=\"modal-favorite\">\n                                            <h3>\n                                            ".concat(widgetBox.classList.contains('active') ? 'Успешно удалено из избранных' : 'Товар добавлен в избранные', "\n                                            </h3>\n                                        </div>\n                                    </div>");

    if (!widgetBox.classList.contains('active')) {
      widgetBox.innerHTML = +count + 1;
    } else {
      widgetBox.innerHTML = +count - 1;
    }

    widgetBox.classList.toggle('active');
    modalNotify.insertAdjacentHTML('afterbegin', modallInnerContent);
    backdrop.insertAdjacentElement('beforeend', modalNotify);
    document.body.insertAdjacentElement('beforeend', backdrop);
    document.body.classList.add('overfolow');
    setTimeout(function () {
      clearContent();
    }, 3000);
  });
};
;// CONCATENATED MODULE: ./src/assets/js/modules/incriment.js
var increment = document.querySelector('.product-box__increment');
var decriment = document.querySelector('.product-box__decriment');
var quantityIinput = document.querySelector('.product-box__quantity-input');
var max = 100;
var min = 1;
var incrementHandler = function incrementHandler() {
  quantityIinput.addEventListener('input', function (e) {
    var value = e.target.value;
    e.target.value = value.replace(/\D/g, '');

    if (parseInt(value) > max) {
      e.target.value = max;
    }

    if (parseInt(value) < min) {
      e.target.value = min;
    }
  });
  quantityIinput.addEventListener('blur', function (e) {
    var value = e.target.value;
    e.target.value = value.replace(/\D/g, '');

    if (!e.target.value || e.target.value < min) {
      e.target.value = min;
    }
  });
  increment.addEventListener('click', function (e) {
    quantityIinput.value = parseInt(quantityIinput.value) + 1;

    if (parseInt(quantityIinput.value) > max) {
      quantityIinput.value = max;
    }
  });
  decriment.addEventListener('click', function (e) {
    if (parseInt(quantityIinput.value) > min) {
      quantityIinput.value = parseInt(quantityIinput.value) - 1;
    }
  });
};
;// CONCATENATED MODULE: ./src/assets/js/modules/subscribe.js
var subscribe_form = document.querySelector('.footer__form');
var formInput = document.querySelector('.footer__form-input');
var errorBox = document.querySelector('.email-error');
var test = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

var isValidEmail = function isValidEmail(value) {
  return test.test(value);
};

var validateEmail = function validateEmail() {
  subscribe_form.addEventListener('submit', function (e) {
    e.preventDefault();
    var value = formInput.value;

    if (!isValidEmail(value)) {
      errorBox.textContent = 'Не корректный email адрес';
    }
  });
  formInput.addEventListener('input', function () {
    errorBox.textContent = '';
  });
  formInput.addEventListener('blur', function (e) {
    if (!isValidEmail(e.target.value)) {
      errorBox.textContent = 'Не корректный email адрес';
    }

    if (!e.target.value) {
      errorBox.textContent = '';
    }
  });
};
;// CONCATENATED MODULE: ./src/assets/js/modules/fixTopMenu.js
var fixTopMenu = function fixTopMenu() {
  var position = 0;
  var header = document.querySelector('.header');
  window.addEventListener('scroll', function (e) {
    var current = document.documentElement.scrollTop;

    if (current > position) {
      header.classList.add('faded');
    } else {
      header.classList.remove('faded');
    }

    position = current;
  });
};
;// CONCATENATED MODULE: ./src/assets/js/modules/mobileMenu.js
var toggler = document.querySelector('.header__toggler');
var mobile_menu = document.querySelector('.menu-mobile');
var closeMenuMobile = document.querySelector('.menu-mobile__close');
var mobileMenu = function mobileMenu() {
  toggler.addEventListener('click', function () {
    mobile_menu.classList.add('active');
  });
  closeMenuMobile.addEventListener('click', function () {
    mobile_menu.classList.remove('active');
  });
  document.addEventListener('mouseup', function (e) {
    if (e.target.className != 'header__toggler') {
      mobile_menu.classList.remove('active');
    }
  });
};
;// CONCATENATED MODULE: ./src/assets/js/app.js







imageView();
sizeSelect();
productButtons();
incrementHandler();
validateEmail();
fixTopMenu();
mobileMenu();
/******/ })()
;