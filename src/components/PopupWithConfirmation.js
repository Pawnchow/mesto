import Popup from "./Popup";
export default class PopupWithConfirmation extends Popup {
    constructor(popupSelector, { handleFormSubmit }) {
        super(popupSelector);
        this._handleFormSubmit = handleFormSubmit;
    }

    open(data) {
        super.open();
        this._card = data;
        this._cardId = data._id;
    }

    setEventListeners() {
        super.setEventListeners();
        this._popup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._handleFormSubmit(this._card, this._cardId);
        })
    }
}