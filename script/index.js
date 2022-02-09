const editButton = document.querySelector(".profile__edit-button");
const popup = document.querySelector(".popup");
const profileName = document.querySelector(".profile__name");
const profileAbout = document.querySelector(".profile__user-text");
const closeButton = document.querySelector(".popup__close-button");
const popupForm = document.querySelector(".popup__form");
const inputName = document.querySelector('input[name="editName"]');
const inputAbout = document.querySelector('input[name="editAbout"]');

function openPopup() {
  popup.classList.add("popup_opened");
  inputName.value = profileName.textContent;
  inputAbout.value = profileAbout.textContent;
}
function closePopup() {
  popup.classList.remove("popup_opened");
}

function handleProfileFormSubmit(event) {
  event.preventDefault();
  profileName.textContent = inputName.value;
  profileAbout.textContent = inputAbout.value;
  closePopup();
}

popupForm.addEventListener("submit", handleProfileFormSubmit);
editButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);