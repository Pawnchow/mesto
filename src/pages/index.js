import Card from '../components/Card.js'
import { initialCards, validationConfig, serverOptions } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';

import '../pages/index.css'
import Api from '../components/Api.js';

const buttonEditProfile = document.querySelector(".profile__edit-button");
const profile = ".popup_profile";
const photo = ".popup_photo";
const popupFormProfile = document.querySelector(".popup__form_profile");
const popupFormPhoto = document.querySelector(".popup__form_add-photo");
const inputName = document.querySelector('input[name="editName"]');
const inputAbout = document.querySelector('input[name="editAbout"]');
const buttonAdd = document.querySelector(".profile__add-button");
const photoItems = ".photo__items";
const popupPhotoFull = ".popup_full";


/* const api = new Api({
  baseUrl: serverOptions.baseUrl,
  headers: {
    authorization: serverOptions.token,
    'Content-type': 'application/json'
  }
})



*/














// Включение валидации
const profileFormValidator = new FormValidator(validationConfig, popupFormProfile);
profileFormValidator.enableValidation();
const photoFormValidator = new FormValidator(validationConfig, popupFormPhoto);
photoFormValidator.enableValidation();

const userInfo = new UserInfo({ nameSelector: '.profile__name', aboutSelector: '.profile__user-text' });

// Попап профиля
const popupProfile = new PopupWithForm(profile, { handleFormSubmit: (input) => {
  userInfo.setUserInfo({
    name: input.editName,
    about: input.editAbout
  })
}
});
popupProfile.setEventListeners();

// Попап фото
const popupPhoto = new PopupWithForm(photo, { handleFormSubmit: (input) => {
  addPhoto.renderItems([{
    name: input.cardName,
    link: input.cardLink
  }])
}});
popupPhoto.setEventListeners();

// Открытие попапа редактирования профиля
buttonEditProfile.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  inputName.value = info.name;
  inputAbout.value = info.about;
  profileFormValidator.resetValidation();
  popupProfile.open();

})

// Открытие попапа добавления фото
buttonAdd.addEventListener('click', () => {
  photoFormValidator.resetValidation();
  popupPhoto.open();
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