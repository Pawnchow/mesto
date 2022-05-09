import Card from '../components/Card.js'
import { initialCards, validationConfig } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

import '../pages/index.css'

const editButtonProfile = document.querySelector(".profile__edit-button");
const profile = document.querySelector(".popup_profile");
const photo = document.querySelector(".popup_photo");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__user-text");
const popupFormProfile = document.querySelector(".popup__form_profile");
const popupFormPhoto = document.querySelector(".popup__form_add-photo");
const inputName = document.querySelector('input[name="editName"]');
const inputAbout = document.querySelector('input[name="editAbout"]');
const addButton = document.querySelector(".profile__add-button");
const photoItems = document.querySelector(".photo__items");
const popupPhotoFull = document.querySelector(".popup_full");
const cardName = document.querySelector('input[name="cardName"]');
const cardLink = document.querySelector('input[name="cardLink"]');


// Включение валидации
const profileFormValidator = new FormValidator(validationConfig, popupFormProfile);
profileFormValidator.enableValidation();
const photoFormValidator = new FormValidator(validationConfig, popupFormPhoto);
photoFormValidator.enableValidation();

const userInfo = new UserInfo(profileName, profileAbout);

// Попап профиля
const popupProfile = new PopupWithForm(profile, { handleFormSubmit: () => {
  userInfo.setUserInfo({
    name: inputName.value,
    about: inputAbout.value
  })
}
});
popupProfile.setEventListeners();

// Попап фото
const popupPhoto = new PopupWithForm(photo, { handleFormSubmit: () => {
  addPhoto.renderItems([{
    name: cardName.value,
    image: cardLink.value
  }])
}});
popupPhoto.setEventListeners();

// Открытие попапа редактирования профиля
editButtonProfile.addEventListener('click', () => {
  inputName.value = userInfo.getUserInfo().name;
  inputAbout.value = userInfo.getUserInfo().about;
  popupProfile.open();
  profileFormValidator.resetValidation();
})

// Открытие попапа добавления фото
addButton.addEventListener('click', () => {
  popupPhoto.open();
  photoFormValidator.resetValidation();
});

// Открытие полной фотографии
const popupFullImg = new PopupWithImage(popupPhotoFull);
popupFullImg.setEventListeners();

const handleCardClick = (text, image) => {
  popupFullImg.open(text, image)
};

// Создание новой карточки
const createCard = (text, image) => {
  const card = new Card(text, image, '.photo-template', handleCardClick);
  const cardElement = card.renderCard();
  return cardElement;
};

// Добавление карточки
const addPhoto = new Section({ renderer: (item) => {
    const card = createCard(item.name, item.link);
    addPhoto.addItem(card);
    }
  },
  photoItems
);

// Наполнение страницы стартовыми карточками
addPhoto.renderItems(initialCards);