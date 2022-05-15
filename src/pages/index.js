import Card from '../components/Card.js'
import { validationConfig, serverOptions } from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithImage from '../components/PopupWithImage.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';
import PopupWithConfirmation from '../components/PopupWithConfirmation.js';

import '../pages/index.css'

const buttonEditProfile = document.querySelector(".profile__edit-button");
const buttonEditAvatar = document.querySelector(".profile__avatar")
const profile = ".popup_profile";
const photo = ".popup_photo";
const avatar = ".popup_avatar-edit"
const confirmationDelete = ".popup_photo-delete";
const popupFormProfile = document.querySelector(".popup__form_profile");
const popupFormPhoto = document.querySelector(".popup__form_add-photo");
const popupFormAvatar = document.querySelector(".popup__form_avatar-edit")
const inputName = document.querySelector('input[name="editName"]');
const inputAbout = document.querySelector('input[name="editAbout"]');
const buttonAdd = document.querySelector(".profile__add-button");
const photoItems = ".photo__items";
const popupPhotoFull = ".popup_full";


const api = new Api(serverOptions)

const userInfo = new UserInfo({ nameSelector: '.profile__name', aboutSelector: '.profile__user-text', avatarSelector: '.profile__img' });

// Получение информации о пользователе и загрузка карточек с сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about
    });
    userInfo.setUserAvatar(userData.avatar);
    userInfo.setUserId(userData._id);
    addPhoto.renderItems(cardData);
  })
  .catch(err => alert(`Ошибка: ${err}`));

// Включение валидации
const profileFormValidator = new FormValidator(validationConfig, popupFormProfile);
profileFormValidator.enableValidation();
const photoFormValidator = new FormValidator(validationConfig, popupFormPhoto);
photoFormValidator.enableValidation();
const avatarFormValidator = new FormValidator(validationConfig, popupFormAvatar);
avatarFormValidator.enableValidation();

// Попап профиля
const popupProfile = new PopupWithForm(profile, { handleFormSubmit: (input) => {
  popupProfile.renderLoading(true);
  api.setUserInfo(input.editName, input.editAbout)
    .then(res => {
      userInfo.setUserInfo({
        name: res.name,
        about: res.about
      });
      popupProfile.close()
    })
    .catch(err => alert(`Ошибка: ${err}`))
    .finally(() => popupProfile.renderLoading(false))
  }
});
popupProfile.setEventListeners();

// Попап фото
const popupPhoto = new PopupWithForm(photo, { handleFormSubmit: (input) => {
  popupPhoto.renderLoading(true);
  api.setCard(input.cardName, input.cardLink)
    .then(res => {
      addPhoto.renderItems([res]);
      popupPhoto.close()
    })
    .catch(err => alert(`Ошибка: ${err}`))
    .finally(() => popupPhoto.renderLoading(false))
  }
});
popupPhoto.setEventListeners();

// Попап аватара
const popupAvatar = new PopupWithForm(avatar, { handleFormSubmit: (input) => {
  popupAvatar.renderLoading(true);
  api.setAvatar(input.avatar)
    .then(res => {
      userInfo.setUserAvatar(res.avatar);
      popupAvatar.close();
    })
    .catch(err => alert(`Ошибка: ${err}`))
    .finally(() => popupAvatar.renderLoading(false))
}
});
popupAvatar.setEventListeners();

// Попап подтверждения удаления
const popupCardDeleteConfirmation = new PopupWithConfirmation(confirmationDelete, { handleFormSubmit: (data) => {
  popupCardDeleteConfirmation.renderLoading(true, 'Да', 'Удаление...');
  api.deleteCard(data._id)
    .then(() => {
      tempCard.deleteCard();
      popupCardDeleteConfirmation.close();
      tempCard = null;
    })
    .catch(err => alert(`Ошибка: ${err}`))
    .finally(() => popupCardDeleteConfirmation.renderLoading(false, 'Да'))
  }
});
popupCardDeleteConfirmation.setEventListeners();

// Открытие попапа редактирования аватара
buttonEditAvatar.addEventListener('click', () => {
  avatarFormValidator.resetValidation();
  popupAvatar.open();
});

// Открытие попапа редактирования профиля
buttonEditProfile.addEventListener('click', () => {
  const info = userInfo.getUserInfo();
  inputName.value = info.name;
  inputAbout.value = info.about;
  profileFormValidator.resetValidation();
  popupProfile.open();
});

// Открытие попапа добавления фото
buttonAdd.addEventListener('click', () => {
  photoFormValidator.resetValidation();
  popupPhoto.open();
});

// Открытие полной фотографии
const popupFullImg = new PopupWithImage(popupPhotoFull);
popupFullImg.setEventListeners();

// Создание карточки
const createCard = (data) => {
  const card = new Card(data, api, userInfo.getUserId(), {
    cardTemplateSelector: '.photo-template',
    handleCardClick: () => {
      popupFullImg.open(data);
    },
    handleDeleteClick: () => {
      tempCard = card;
      popupCardDeleteConfirmation.open(data)
    }
  })
  return card.renderCard()
}

// Добавление карточки на страницу
const addPhoto = new Section({ renderer: (data) => {
  const card = createCard(data);
  addPhoto.addItem(card);
  }
}, photoItems);

let tempCard = null;