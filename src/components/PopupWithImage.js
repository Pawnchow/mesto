import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
    }

    open(text, image) {
        super.open();
        this._popup.querySelector('.popup__full-img').src = image;
        this._popup.querySelector('.popup__full-text').textContent = text;
        this._popup.querySelector('.popup__full-img').alt = text;
    }
}