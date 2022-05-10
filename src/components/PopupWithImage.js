import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._img = this._popup.querySelector('.popup__full-img');
        this._text = this._popup.querySelector('.popup__full-text');;
    }

    open(text, image) {
        super.open();
        this._img.src = image;
        this._text.textContent = text;
        this._img.alt = text;
    }
}