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

/*
 const api = new Api(serverOptions);
console.log(serverOptions);
*/
const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40/',
  headers: {
    authorization: 'e84f36fa-3432-4afc-bd0c-317440cd59c0',
    'Content-type': 'application/json'
  }
});

const userInfo = new UserInfo({ nameSelector: '.profile__name', aboutSelector: '.profile__user-text', avatarSelector: '.profile__img' });

// Получение информации о пользователе и загрузка карточек с сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cardData]) => {
    userInfo.setUserInfo({
      name: userData.name,
      about: userData.about
    });
    userInfo.setUserAvatar(userData.avatar);
    //userInfo.setUserId(userData._id);
    userId = userData._id;
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
const popupCardDeleteConfirmation = new PopupWithConfirmation(confirmationDelete, { handleFormSubmit: (cardId) => {
  popupCardDeleteConfirmation.renderLoading(true, 'Да', 'Удаление...');
  api.deleteCard(cardId)
    .then(() => {
      card.handleCardDelete()
      popupCardDeleteConfirmation.close()
    })
    .catch(err => alert(`Ошибка: ${err}`))
    .finally(() => popupCardDeleteConfirmation.renderLoading(false))
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


// новая попытка
const createCard = (data) => {
  const card = new Card(data, api, userId, {
    cardTemplateSelector: '.photo-template',
    handleCardClick: () => {
      popupFullImg.open(data);
    },
    //поправить подтверждение удаления
    handleCardDeleteConfirmation: () => {
      popupCardDeleteConfirmation.open()
    },
    handleLikesClick: () => {
      card.handleCardLike()
    }
  })
  return card.renderCard()
}

const addPhoto = new Section({ renderer: (item) => {
  const card = createCard(item);
  addPhoto.addItem(card);
  }
}, photoItems);

let userId;






//новая попытка-2
/*
const handleCardDeleteConfirmation = (cardId, card) => {
  popupCardDeleteConfirmation.open(cardId, card);
};

const handleLikesUpdate = (cardId, likeButton) => {
  if(!likeButton.classList.contains('.photo__like_active') {
    api.addLike(cardId)
      .then(res => card.upda)
  })
};
*/



/*

const createCard = (cardId, userId) => {
  const card = new Card(cardId, userId, text, image, '.photo-template', handleCardClick, handleCardDeleteConfirmation, handleLikesUpdate)
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





















// Обработчик лайков
const handleCardLike = (card) => {
  if(likeButton.classList.contains('.photo__like_active')) {
    api.addLike(card._id)
        .then(res => {
            likeButton.classList.add('photo__like_active');
            likeCounter.textContent = res.likes.length
        })
        .catch(err => {alert(`Ошибка: ${err}`)})
  }
  else {
    api.deteteLike(card._id)
        .then(res => {
            likeButton.classList.remove('photo__like_active');
            likeCounter.textContent = res.likes.length
        })
        .catch(err => {alert(`Ошибка: ${err}`)})
  }
}

*/






////////////////////////////////////////////////////////////////////////////////////////////

/*
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

*/