const editButtonProfile = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const popupProfile = document.querySelector(".popup_profile");
const popupPhoto = document.querySelector(".popup_photo");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__user-text");
const closeButtonProfile = document.querySelector(".popup__close-button_profile");
const closeButtonPhoto = document.querySelector(".popup__close-button_photo");
const popupFormProfile = document.querySelector(".popup__form_profile");
const popupFormPhoto = document.querySelector(".popup__form_add-photo");
const inputName = document.querySelector('input[name="editName"]');
const inputAbout = document.querySelector('input[name="editAbout"]');
const addButton = document.querySelector(".profile__add-button");
const photoTemplate = document.querySelector(".photo-template");
const photoItems = document.querySelector(".photo__items");


 /*function openPopup() {
  popup.classList.add(" ");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}
*/
/*
function openPopup() {
  popup.classList.add("popup_opened");
}
function closePopup() {
  popup.classList.remove("popup_opened");
}
function openPopupProfile() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup();
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup();
}

popupForm.addEventListener("submit", handleProfileFormSubmit);
editButton.addEventListener("click", openPopupProfile);
closeButton.addEventListener("click", closePopup);


addButton.addEventListener("click", document.querySelector(".popup_photo").openPopup);

*/

// Initial cards
const initialCards = [
  {
    name: '#надиете',
    link: './images/photo/1.jfif'
  },
  {
    name: '#магиявнехогвартса',
    link: './images/photo/2.jfif'
  },
  {
    name: '#кудагонишьбрат',
    link: './images/photo/3.jfif'
  },
  {
    name: '#яумамыинвестор',
    link: './images/photo/4.jfif'
  },
  {
    name: '#язабылочки',
    link: './images/photo/5.jfif'
  },
  {
    name: '#этиглазанапротив',
    link: './images/photo/6.jfif'
  }
];

// Функции открытия и закрытия попапов
function openPopup(item) {
  item.classList.add("popup_opened");
};
function closePopup(item) {
  item.classList.remove("popup_opened");
};

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup(popupProfile);
};

// Лайк и отмена лайка
function toggleLike (target) {
  target.classList.toggle("photo__like_active");
};

// Добавление карточки в начало
function addPhoto(item) {
  photoItems.prepend(item);
};

// Рендер карточек с фотографиями
function renderPhotoCard(name, link) {
  const newPhoto = photoTemplate.content.cloneNode(true);
  const photoImg = newPhoto.querySelector(".photo__img");
  const photoText = newPhoto.querySelector(".photo__text");
  const photoLike = newPhoto.querySelector(".photo__like");
  photoImg.src = link;
  photoImg.alt = name;
  photoText.textContent = name;
  photoLike.addEventListener("click", toggleLike);
  return newPhoto;
};

// Наполнение страницы стартовыми карточками
initialCards.forEach(function(item) {
  addPhoto(renderPhotoCard(item.name, item.link));
});

// Добавление новой карточки
function handlePhotoFormSubmit(event) {
  event.preventDefault();
  addPhoto(renderPhotoCard(document.querySelector('input[name="cardName"]').value, document.querySelector('input[name="cardLink"]').value));
  closePopup(popupPhoto);
  popupFormPhoto.reset();
};


// Обработчики попапа редактирования профиля
editButtonProfile.addEventListener("click", function() {
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
  openPopup(popupProfile);
});
closeButtonProfile.addEventListener("click", function() {
  closePopup(popupProfile);
});
popupFormProfile.addEventListener("submit", handleProfileFormSubmit);



// Обработчики попапа добавления фотографии
addButton.addEventListener("click", function() {
  openPopup(popupPhoto);
});
closeButtonPhoto.addEventListener("click", function() {
  closePopup(popupPhoto);
});
popupFormPhoto.addEventListener("submit", handlePhotoFormSubmit);


