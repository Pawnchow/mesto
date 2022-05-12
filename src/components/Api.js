export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
    }

    _getResponse(url, method = 'GET', body = undefined) {
        return fetch(this._baseUrl + url, {
            headers: this._headers,
            method: method,
            body: body
        })
        .then(res => {
            if(res.ok) {
                return res.json()
            }
            return Promise.reject(res.status);
        })
    }

    getInitialCards() {
        return this._getResponse('cards')
    }

    getUserInfo() {
        return this._getResponse('users/me')
    }

    //поправить деструктуризацию
    setUserInfo(info) {
        return this._getResponse('users/me', 'PATCH', {
            body: JSON.stringify({
                name: info.name,
                about: info.about
                })
        })
    }
    //поправить деструктуризацию
    setCard(info) {
        return this._getResponse('cards', 'POST', {
            body: JSON.stringify({
                name: info.name,
                link: info.link
                })
        })
    }

    deleteCard(cardId) {
        return this._getResponse(`cards/${cardId}`, 'DELETE')
    }

    addLike(cardId) {
        return this._getResponse(`cards/likes/${cardId}`, 'PUT')
    }

    deleteLike(cardId) {
        return this._getResponse(`cards/likes/${cardId}`, 'DELETE')
    }

    setAvatar(avatar) {
        return this._getResponse('users/me/avatar', 'PATCH', {
            body: JSON.stringify({
                avatar: avatar
                })
        })
    }
}

