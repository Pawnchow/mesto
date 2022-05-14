export default class Card {
    constructor(data, api, userId, { cardTemplateSelector, handleCardClick, handleCardDeleteConfirmation, handleLikesClick }) {
        this._api = api;
        this._id = data._id;
        this._name = data.name;
        this._link = data.link;
        this._likes = data.likes;
        this._ownerId = data.owner._id;
        this._userId = userId;

        this._cardTemplateSelector = cardTemplateSelector;
        this._handleCardClick = handleCardClick;
        this._handleCardDeleteConfirmation = handleCardDeleteConfirmation;
        this._handleLikesClick = handleLikesClick;
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
        this._getLikesActive()
        this._setEventListeners();

        return this._element;
    }

    _hideButtonDelete() {
        if(this._userId !== this._ownerId) {
            this._delete.style.display = 'none'
        }
    }

    _getLikesActive() {
        this._likes.find(item => {
            if(item._id === this._userId) {
                this._likeButton.classList.add('photo__like_active');
            }
        })
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._handleLikesClick();
        });

        this._delete.addEventListener('click', () => {
            this._handleCardDeleteConfirmation();
        });

        this._image.addEventListener('click', () => {
            this._handleCardClick({
                name: this._name,
                src: this._link
            });
        });
    }

    handleDelete() {
        this._element.remove();
        this._element = null;
    }

    handleCardLike() {
        if(!this._likeButton.classList.contains('.photo__like_active')) {
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
    /*
    handleCardLike() {
        if(!this._likeButton.classList.contains('.photo__like_active')) {
            this._api.addLike(this._id)
                .then(res => {
                    this._likeButton.classList.add('photo__like_active');
                    this._likeCounter.textContent = res.likes.length
                })
                .catch(err => {alert(`Ошибка: ${err}`)})
        }
        else {
            this._api.deteteLike(this._id)
                .then(res => {
                    this._likeButton.classList.remove('photo__like_active');
                    this._likeCounter.textContent = res.likes.length
                })
                .catch(err => {alert(`Ошибка: ${err}`)})
        }
    }



    
    _hideButtonDelete() {
        if(this._userId !== this._ownerId) {
            this._delete.style.display = 'none'
        }
    }

    _getLikesActive() {
        this._likes.some(item => {
            if(item._id === this._userId) {
                this._likeButton.classList.add('photo__like_active');
            }
        })
    }

    _setEventListeners() {
        this._likeButton.addEventListener('click', () => {
            this._handleLikesUpdate();
        });

        this._delete.addEventListener('click', () => {
            this._handleCardDeleteConfirmation();
        });

        this._image.addEventListener('click', () => {
            this._handleCardClick();
        });
    }




    renderCard() {
        this._getTemplate();
        this._text.textContent = this._name;
        this._image.src = this._link;
        this._image.alt = this._name;
        this._likeCounter.textContent = this._likes.length;
        this._hideButtonDelete();
        this._getLikesActive()
        this._setEventListeners();

        return this._element;
    }
}

*/
//////////////////////////////////////////

/*

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

    _handleLikesUpdate() {
        this._like.classList.toggle('photo__like_active');
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

*/