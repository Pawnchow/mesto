const editButtonProfile = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_profile");
const popupPhoto = document.querySelector(".popup_photo");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__user-text");
const closeButtonProfile = document.querySelector(
  ".popup__close-button_profile"
);
const closeButtonPhoto = document.querySelector(".popup__close-button_photo");
const closeButtonPhotoFull = document.querySelector(
  ".popup__close-button_full"
);
const popupFormProfile = document.querySelector(".popup__form_profile");
const popupFormPhoto = document.querySelector(".popup__form_add-photo");
const inputName = document.querySelector('input[name="editName"]');
const inputAbout = document.querySelector('input[name="editAbout"]');
const addButton = document.querySelector(".profile__add-button");
const photoTemplate = document.querySelector(".photo-template");
const photoItems = document.querySelector(".photo__items");
const popupPhotoFull = document.querySelector(".popup_full");
const photoFullImg = document.querySelector(".popup__full-img");
const photoFullText = document.querySelector(".popup__full-text");
const cardName = document.querySelector('input[name="cardName"]');
const cardLink = document.querySelector('input[name="cardLink"]');


// Функции открытия и закрытия попапов
const openPopup = (item) => {
  item.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupEsc);
};
const closePopup = (item) => {
  item.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupEsc);
};

// Закрытие попапа по Esc
const closePopupEsc = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

// Закрытие попапа по клику на оверлей
const closePopupOverlay = (evt) => {
  if (evt.target.classList.contains("popup")) {
    closePopup(evt.target);
  }
};

//  Закрытие попапа по кнопке
const closePopupButton = (evt) => {
  if (evt.target.classList.contains("popup__close-button")) {
    closePopup(evt.currentTarget);
  }
};

//  Обработчик закрытия попапа
const handleClosePopup = () => {
  const popupList = document.querySelectorAll(".popup");
  popupList.forEach((popupElement) => {
    popupElement.addEventListener("mousedown", (evt) => {
      closePopupOverlay(evt);
      closePopupButton(evt);
    });
  });
};
handleClosePopup();

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupProfile);
}

// Лайк и отмена лайка
function toggleLike(evt) {
  evt.target.classList.toggle("photo__like_active");
}

// Добавление карточки в начало
function addPhoto(item) {
  photoItems.prepend(item);
}

// Удаление карточки
function removePhoto(evt) {
  evt.target.closest(".photo__item").remove();
}

// Рендер карточек с фотографиями
function renderPhotoCard(name, link) {
  const newPhoto = photoTemplate.content.cloneNode(true);
  const photoImg = newPhoto.querySelector(".photo__img");
  const photoText = newPhoto.querySelector(".photo__text");
  const photoLikeBtn = newPhoto.querySelector(".photo__like");
  const photoRemoveBtn = newPhoto.querySelector(".photo__remove");
  photoImg.src = link;
  photoImg.alt = name;
  photoText.textContent = name;
  photoLikeBtn.addEventListener("click", toggleLike);
  photoRemoveBtn.addEventListener("click", removePhoto);
  photoImg.addEventListener("click", function () {
    photoFullImg.src = link;
    photoFullImg.alt = name;
    photoFullText.textContent = name;
    openPopup(popupPhotoFull);
  });
  return newPhoto;
};

// Наполнение страницы стартовыми карточками
initialCards.forEach(function (item) {
  addPhoto(renderPhotoCard(item.name, item.link));
});

// Добавление новой карточки
function handlePhotoFormSubmit(evt) {
  evt.preventDefault();
  addPhoto(renderPhotoCard(cardName.value, cardLink.value));
  closePopup(popupPhoto);
  popupFormPhoto.reset();
}

// Обработчики попапа редактирования профиля
editButtonProfile.addEventListener("click", function () {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupProfile);
  resetValidation(popupProfile);
});

popupFormProfile.addEventListener("submit", handleProfileFormSubmit);

// Обработчики попапа добавления фотографии
addButton.addEventListener("click", function () {
  openPopup(popupPhoto);
  resetValidation(popupPhoto);
});

popupFormPhoto.addEventListener("submit", handlePhotoFormSubmit);