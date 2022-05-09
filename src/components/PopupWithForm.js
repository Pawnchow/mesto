import Popup from './Popup.js';
export default class PopupWithForm extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
        this._popupForm = this._popup.querySelector('.popup__form');
    }

    _getInputValues() {
        this._inputList = this._popup.querySelectorAll('.popup__input');
        return Array.from(this._inputList).map(item => {
            return item.value
        });
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._getInputValues());
            this.close();
        });
    }

    close() {
        super.close();
        this._popupForm.reset();
    }
}