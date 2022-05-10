export default class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._handleEscClose = this._handleEscClose.bind(this);
    }
    
    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }
    _closePopupOverlay(evt) {
        if (evt.target.classList.contains('popup')) {
        this.close();
        }
    }

    _closePopupButton(evt) {
        if (evt.target.classList.contains('popup__close-button')) {
          this.close();
        }
    }

    open() {
        this._popup.classList.add('popup_opened');
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove('popup_opened');
        document.removeEventListener('keydown', this._handleEscClose);
    }

    setEventListeners() {
        this._popup.addEventListener('mousedown', this._closePopupOverlay.bind(this));
        this._popup.addEventListener('mousedown', this._closePopupButton.bind(this));
    }
}