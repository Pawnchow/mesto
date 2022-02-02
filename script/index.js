const editButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const profileName = document.querySelector('.profile__name');
const profileAbout = document.querySelector('.profile__user-text');
const closeButton = document.querySelector('.popup__close-button');
const popupForm = document.querySelector('.popup__form');
const inputName = document.getElementsByName('editName')[0];
const inputAbout = document.getElementsByName('editAbout')[0];



function popupOpen() {
    popup.classList.add('popup_opened');
    inputName.value = profileName.textContent;
    inputAbout.value = profileAbout.textContent;
}
function popupClose() {
    popup.classList.remove('popup_opened');
}

function formSubmit(event) {
    event.preventDefault();
    profileName.textContent = inputName.value;
    profileAbout.textContent = inputAbout.value;
    popupClose();
}

popupForm.addEventListener('submit', formSubmit);
editButton.addEventListener('click', popupOpen);
closeButton.addEventListener('click', popupClose);