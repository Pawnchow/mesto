import img1 from "../images/photo/1.jfif";
import img2 from "../images/photo/2.jfif";
import img3 from "../images/photo/3.jfif";
import img4 from "../images/photo/4.jfif";
import img5 from "../images/photo/5.jfif";
import img6 from "../images/photo/6.jfif";

export const initialCards = [
    {
      name: "#надиете",
      link: img1,
    },
    {
      name: "#магиявнехогвартса",
      link: img2,
    },
    {
      name: "#кудагонишьбрат",
      link: img3,
    },
    {
      name: "#яумамыинвестор",
      link: img4,
    },
    {
      name: "#язабылочки",
      link: img5,
    },
    {
      name: "#этиглазанапротив",
      link: img6,
    },
];

export const validationConfig = {
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__save-button",
    inactiveButtonClass: "popup__save-button_inactive",
    inputErrorClass: "popup__input-error",
};

export const serverOptions = {
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-40',
  headers: {
    authorization: 'e84f36fa-3432-4afc-bd0c-317440cd59c0',
    'Content-type': 'application/json'
  }
}