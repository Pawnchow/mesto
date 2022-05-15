(()=>{"use strict";var e={};function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.p="";var n=function(){function e(t,n,r,o){var i=o.cardTemplateSelector,a=o.handleCardClick,u=o.handleDeleteClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._api=n,this._id=t._id,this._name=t.name,this._link=t.link,this._likes=t.likes,this._ownerId=t.owner._id,this._userId=r,this._cardTemplateSelector=i,this._handleCardClick=a,this._handleDeleteClick=u}var n,r;return n=e,(r=[{key:"_getTemplate",value:function(){this._element=document.querySelector(this._cardTemplateSelector).content.querySelector(".photo__item").cloneNode(!0),this._text=this._element.querySelector(".photo__text"),this._image=this._element.querySelector(".photo__img"),this._likeButton=this._element.querySelector(".photo__like"),this._likeCounter=this._element.querySelector(".photo__like_counter"),this._delete=this._element.querySelector(".photo__remove")}},{key:"renderCard",value:function(){return this._getTemplate(),this._text.textContent=this._name,this._image.src=this._link,this._image.alt=this._name,this._likeCounter.textContent=this._likes.length,this._hideButtonDelete(),this._renderCurrentUserActiveLikes(),this._setEventListeners(),this._element}},{key:"_hideButtonDelete",value:function(){this._userId!==this._ownerId&&(this._delete.style.display="none")}},{key:"_renderCurrentUserActiveLikes",value:function(){var e=this;this._likes.find((function(t){t._id===e._userId&&e._likeButton.classList.add("photo__like_active")}))}},{key:"deleteCard",value:function(){this._element.remove(),this._element=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeButton.addEventListener("click",(function(){e._handleLikesClick()})),this._delete.addEventListener("click",(function(){e._handleDeleteClick()})),this._image.addEventListener("click",(function(){e._handleCardClick({name:e._name,src:e._link})}))}},{key:"_handleLikesClick",value:function(){var e=this;this._likeButton.classList.contains("photo__like_active")?this._api.deleteLike(this._id).then((function(t){e._likeButton.classList.remove("photo__like_active"),e._likeCounter.textContent=t.likes.length})).catch((function(e){alert("Ошибка: ".concat(e))})):this._api.addLike(this._id).then((function(t){e._likeButton.classList.add("photo__like_active"),e._likeCounter.textContent=t.likes.length})).catch((function(e){alert("Ошибка: ".concat(e))}))}}])&&t(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),e}();e.p,e.p,e.p,e.p,e.p,e.p;var r={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__save-button",inactiveButtonClass:"popup__save-button_inactive",inputErrorClass:"popup__input-error"};function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var i=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._formElement=n,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveButtonClass=t.inactiveButtonClass,this._inputErrorClass=t.inputErrorClass,this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._submitButtonElement=this._formElement.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"_showError",value:function(e){this._formElement.querySelector("#".concat(e.id,"-error")).textContent=e.validationMessage,e.classList.add(this._inputErrorClass)}},{key:"_hideError",value:function(e){this._formElement.querySelector("#".concat(e.id,"-error")).textContent="",e.classList.remove(this._inputErrorClass)}},{key:"_checkValidity",value:function(e){e.validity.valid?this._hideError(e):this._showError(e)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput=this._inputList.some((function(e){return!e.validity.valid})),this._hasInvalidInput?(this._submitButtonElement.classList.add(this._inactiveButtonClass),this._submitButtonElement.setAttribute("disabled",!0)):(this._submitButtonElement.classList.remove(this._inactiveButtonClass),this._submitButtonElement.removeAttribute("disabled"))}},{key:"_setEventListeners",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkValidity(t),e._toggleButtonState()}))}))}},{key:"enableValidation",value:function(){this._setEventListeners()}},{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideError(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popup=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this),this._popupButtonSubmit=this._popup.querySelector(".popup__save-button")}var t,n;return t=e,n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"renderLoading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранить",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Сохранение...";this._popupButtonSubmit.textContent=e?n:t}},{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup")||t.target.classList.contains("popup__close-button"))&&e.close()}))}}],n&&c(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=y(e)););return e}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function _(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}var v=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=y(r);if(o){var n=y(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return _(this,e)});function a(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=r,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=n._popupForm.querySelectorAll(".popup__input"),n}return t=a,(n=[{key:"_getInputValues",value:function(){var e=this;return this._formValues={},this._inputList.forEach((function(t){e._formValues[t.name]=t.value})),this._formValues}},{key:"setEventListeners",value:function(){var e=this;p(y(a.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._getInputValues())}))}},{key:"close",value:function(){p(y(a.prototype),"close",this).call(this),this._popupForm.reset()}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=E(e)););return e}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function w(e,t){if(t&&("object"===m(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function E(e){return E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},E(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=E(r);if(o){var n=E(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return w(this,e)});function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e))._img=t._popup.querySelector(".popup__full-img"),t._text=t._popup.querySelector(".popup__full-text"),t}return t=a,(n=[{key:"open",value:function(e){k(E(a.prototype),"open",this).call(this),this._img.src=e.link,this._text.textContent=e.name,this._img.alt=e.name}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var L=function(){function e(t){var n=t.nameSelector,r=t.aboutSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=n,this._aboutSelector=r,this._avatarSelector=o,this._name=document.querySelector(this._nameSelector),this._about=document.querySelector(this._aboutSelector),this._avatar=document.querySelector(this._avatarSelector)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._name.textContent,about:this._about.textContent}}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;this._name.textContent=t,this._about.textContent=n}},{key:"setUserAvatar",value:function(e){this._avatar.src=e}},{key:"getUserId",value:function(){return this._userId}},{key:"setUserId",value:function(e){this._userId=e}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"_getResponse",value:function(e,t){return fetch(this._baseUrl+e,t).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}},{key:"getInitialCards",value:function(){return this._getResponse("cards",{headers:this._headers})}},{key:"getUserInfo",value:function(){return this._getResponse("users/me",{headers:this._headers})}},{key:"setUserInfo",value:function(e,t){return this._getResponse("users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e,about:t})})}},{key:"setAvatar",value:function(e){return this._getResponse("users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e})})}},{key:"setCard",value:function(e,t){return this._getResponse("cards",{method:"POST",headers:this._headers,body:JSON.stringify({name:e,link:t})})}},{key:"deleteCard",value:function(e){return this._getResponse("cards/".concat(e),{method:"DELETE",headers:this._headers})}},{key:"addLike",value:function(e){return this._getResponse("cards/likes/".concat(e),{method:"PUT",headers:this._headers})}},{key:"deleteLike",value:function(e){return this._getResponse("cards/likes/".concat(e),{method:"DELETE",headers:this._headers})}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function I(e){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(e)}function R(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function B(){return B="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=q(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},B.apply(this,arguments)}function q(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=U(e)););return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}function x(e,t){if(t&&("object"===I(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function U(e){return U=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},U(e)}var A=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&T(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=U(r);if(o){var n=U(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e,t){var n,r=t.handleFormSubmit;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._handleFormSubmit=r,n}return t=a,(n=[{key:"open",value:function(e){B(U(a.prototype),"open",this).call(this),this._card=e,this._cardId=e._id}},{key:"setEventListeners",value:function(){var e=this;B(U(a.prototype),"setEventListeners",this).call(this),this._popup.addEventListener("submit",(function(t){t.preventDefault(),e._handleFormSubmit(e._card,e._cardId)}))}}])&&R(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(s);function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V=document.querySelector(".profile__edit-button"),F=document.querySelector(".profile__avatar"),N=document.querySelector(".popup__form_profile"),J=document.querySelector(".popup__form_add-photo"),H=document.querySelector(".popup__form_avatar-edit"),M=document.querySelector('input[name="editName"]'),z=document.querySelector('input[name="editAbout"]'),$=document.querySelector(".profile__add-button"),G=new P({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-40/",headers:{authorization:"e84f36fa-3432-4afc-bd0c-317440cd59c0","Content-type":"application/json"}}),K=new L({nameSelector:".profile__name",aboutSelector:".profile__user-text",avatarSelector:".profile__img"});Promise.all([G.getUserInfo(),G.getInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],a=!0,u=!1;try{for(n=n.call(e);!(a=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);a=!0);}catch(e){u=!0,o=e}finally{try{a||null==n.return||n.return()}finally{if(u)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return D(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?D(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];K.setUserInfo({name:o.name,about:o.about}),K.setUserAvatar(o.avatar),K.setUserId(o._id),re.renderItems(i)})).catch((function(e){return alert("Ошибка: ".concat(e))}));var Q=new i(r,N);Q.enableValidation();var W=new i(r,J);W.enableValidation();var X=new i(r,H);X.enableValidation();var Y=new v(".popup_profile",{handleFormSubmit:function(e){Y.renderLoading(!0),G.setUserInfo(e.editName,e.editAbout).then((function(e){K.setUserInfo({name:e.name,about:e.about}),Y.close()})).catch((function(e){return alert("Ошибка: ".concat(e))})).finally((function(){return Y.renderLoading(!1)}))}});Y.setEventListeners();var Z=new v(".popup_photo",{handleFormSubmit:function(e){Z.renderLoading(!0),G.setCard(e.cardName,e.cardLink).then((function(e){re.renderItems([e]),Z.close()})).catch((function(e){return alert("Ошибка: ".concat(e))})).finally((function(){return Z.renderLoading(!1)}))}});Z.setEventListeners();var ee=new v(".popup_avatar-edit",{handleFormSubmit:function(e){ee.renderLoading(!0),G.setAvatar(e.avatar).then((function(e){K.setUserAvatar(e.avatar),ee.close()})).catch((function(e){return alert("Ошибка: ".concat(e))})).finally((function(){return ee.renderLoading(!1)}))}});ee.setEventListeners();var te=new A(".popup_photo-delete",{handleFormSubmit:function(e){te.renderLoading(!0,"Да","Удаление..."),G.deleteCard(e._id).then((function(){oe.deleteCard(),te.close(),oe=null})).catch((function(e){return alert("Ошибка: ".concat(e))})).finally((function(){return te.renderLoading(!1,"Да")}))}});te.setEventListeners(),F.addEventListener("click",(function(){X.resetValidation(),ee.open()})),V.addEventListener("click",(function(){var e=K.getUserInfo();M.value=e.name,z.value=e.about,Q.resetValidation(),Y.open()})),$.addEventListener("click",(function(){W.resetValidation(),Z.open()}));var ne=new C(".popup_full");ne.setEventListeners();var re=new u({renderer:function(e){var t=function(e){var t=new n(e,G,K.getUserId(),{cardTemplateSelector:".photo-template",handleCardClick:function(){ne.open(e)},handleDeleteClick:function(){oe=t,te.open(e)}});return t.renderCard()}(e);re.addItem(t)}},".photo__items"),oe=null})();