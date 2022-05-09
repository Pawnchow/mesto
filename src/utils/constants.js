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