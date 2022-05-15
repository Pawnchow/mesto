export default class Card {
    constructor(data, api, userId, { cardTemplateSelector, handleCardClick, handleDeleteClick }) {
        this._api = api;
        this._id = data._id;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._ownerId = data.owner._id;
        this._userId = userId;

        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
        this._handleDeleteClick = handleDeleteClick;
    }

    _getTemplate() {
        this._element = document
        .querySelector(this._cardTemplateSelector)
        .content
        .querySelector('.photo__item')
        .cloneNode(true);

        this._text = this._element.querySelector('.photo__text');
        this._image = this._element.querySelector('.photo__img');
        this._likeButton = this._element.querySelector('.photo__like');
        this._likeCounter = this._element.querySelector('.photo__like_counter');
        this._delete = this._element.querySelector('.photo__remove');
    }

    renderCard() {
        this._getTemplate();
        this._text.textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        this._likeCounter.textContent = this._likes.length;

        this._hideButtonDelete();
        this._renderCurrentUserActiveLikes()
        this._setEventListeners();

        return this._element;
    }

    _hideButtonDelete() {
        if(this._userId !== this._ownerId) {
            this._delete.style.display = 'none'
        }
    }

    _renderCurrentUserActiveLikes() {
        this._likes.find(item => {
            if(item._id === this._userId) {
                this._likeButton.classList.add('photo__like_active');
            }
        })
    }

    deleteCard() {
        this._element.remove();
        this._element = null;
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._handleLikesClick();
        });

        this._delete.addEventListener('click', () => {
            this._handleDeleteClick();
        });

        this._image.addEventListener('click', () => {
            this._handleCardClick({
                name: this._name,
                src: this._link
            });
        });
    }

    _handleLikesClick() {
        if(!this._likeButton.classList.contains('photo__like_active')) {
            this._api.addLike(this._id)
                .then(res => {
                    this._likeButton.classList.add('photo__like_active');
                    this._likeCounter.textContent = res.likes.length
                })
                .catch(err => {alert(`Ошибка: ${err}`)})
        }
        else {
            this._api.deleteLike(this._id)
                .then(res => {
                    this._likeButton.classList.remove('photo__like_active');
                    this._likeCounter.textContent = res.likes.length
                })
                .catch(err => {alert(`Ошибка: ${err}`)})
        }
    }
}