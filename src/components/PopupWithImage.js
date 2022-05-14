import Popup from './Popup.js';
export default class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._img = this._popup.querySelector('.popup__full-img');
        this._text = this._popup.querySelector('.popup__full-text');;
    }

    open(data) {
        super.open();
        this._img.src = data.link;
        this._text.textContent = data.name;
        this._img.alt = data.name;
    }
}