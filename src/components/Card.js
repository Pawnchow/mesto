export default class Card {
    constructor(text, image, cardTemplateSelector, handleCardClick) {
        this._textInput = text;
        this._imageInput = image;
        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
    }

    _getTemplate() {
        this._element = document
        .querySelector(this._cardTemplateSelector)
        .content
        .querySelector('.photo__item')
        .cloneNode(true);

        this._text = this._element.querySelector('.photo__text');
        this._image = this._element.querySelector('.photo__img');
        this._like = this._element.querySelector('.photo__like');
        this._delete = this._element.querySelector('.photo__remove');
    }

    _handleToggleLike() {
        this._like.classList.toggle('photo__like_active');
    }

    _handleDelete() {
        this._delete.closest('.photo__item').remove();
    }

    _setEventListeners() {
        this._like.addEventListener('click', () => {
            this._handleToggleLike();
        });

        this._delete.addEventListener('click', () => {
            this._handleDelete();
        });

        this._image.addEventListener('click', () => {
            this._handleCardClick(this._textInput, this._imageInput);
        });
    }

    renderCard() {
        this._getTemplate();
        this._text.textContent = this._textInput;
        this._image.src = this._imageInput;
        this._image.alt = this._textInput;
        this._setEventListeners();

        return this._element;
    }
}