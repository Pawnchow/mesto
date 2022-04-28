import { Card } from './card.js';
import { initialCards, validationConfig } from './constants.js';
import { FormValidator } from './formValidator.js';

const editButtonProfile = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_profile");
const popupPhoto = document.querySelector(".popup_photo");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__user-text");
const popupFormProfile = document.querySelector(".popup__form_profile");
const popupFormPhoto = document.querySelector(".popup__form_add-photo");
const inputName = document.querySelector('input[name="editName"]');
const inputAbout = document.querySelector('input[name="editAbout"]');
const addButton = document.querySelector(".profile__add-button");
const photoItems = document.querySelector(".photo__items");
const popupPhotoFull = document.querySelector(".popup_full");
const photoFullImg = document.querySelector(".popup__full-img");
const photoFullText = document.querySelector(".popup__full-text");
const cardName = document.querySelector('input[name="cardName"]');
const cardLink = document.querySelector('input[name="cardLink"]');


// Включение валидации
const profileFormValidator = new FormValidator(validationConfig, popupFormProfile);
profileFormValidator.enableValidation();
const photoFormValidator = new FormValidator(validationConfig, popupFormPhoto);
photoFormValidator.enableValidation();

// Функции открытия и закрытия попапов
const openPopup = (item) => {
  item.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};
const closePopup = (item) => {
  item.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
};

// Закрытие попапа по Esc
const closePopupEsc = (evt) => {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
};

// Закрытие попапа по клику на оверлей
const closePopupOverlay = (evt) => {
  if (evt.target.classList.contains('popup')) {
    closePopup(evt.target);
  }
};

//  Закрытие попапа по кнопке
const closePopupButton = (evt) => {
  if (evt.target.classList.contains('popup__close-button')) {
    closePopup(evt.currentTarget);
  }
};

// Обработчики попапа редактирования профиля
editButtonProfile.addEventListener('click', function () {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupProfile);
  profileFormValidator.resetValidation();
});



//  Обработчик закрытия попапа
const handleClosePopup = () => {
  const popupList = document.querySelectorAll('.popup');
  popupList.forEach((popupElement) => {
    popupElement.addEventListener('mousedown', (evt) => {
      closePopupOverlay(evt);
      closePopupButton(evt);
    });
  });
};
handleClosePopup();

const handleProfileFormSubmit = (evt) => {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupProfile);
};

popupFormProfile.addEventListener('submit', handleProfileFormSubmit);

// Обработчики попапа добавления фотографии
addButton.addEventListener('click', function () {
  openPopup(popupPhoto);
  photoFormValidator.resetValidation();
});

popupFormPhoto.addEventListener('submit', handlePhotoFormSubmit);

// Добавление новой карточки
function handlePhotoFormSubmit(evt) {
  evt.preventDefault();
  addPhoto(createCard(cardName.value, cardLink.value));
  closePopup(popupPhoto); 
  popupFormPhoto.reset();
};

// Добавление карточки в начало
const addPhoto = (item) => {
  photoItems.prepend(item);
};

// Открытие полной фотографии
const handleCardClick = (text, image) => {
  photoFullImg.src = image;
  photoFullImg.alt = text;
  photoFullText.textContent = text;
  openPopup(popupPhotoFull);
} 

// Создание новой карточки
const createCard = (text, image) => {
  const card = new Card(text, image, '.photo-template', handleCardClick);
  const cardElement = card.renderCard();

  return cardElement;
};

// Наполнение страницы стартовыми карточками
initialCards.forEach((item) => {
  const card = createCard(item.name, item.link);
  addPhoto(card);
})
