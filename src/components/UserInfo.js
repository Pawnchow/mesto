export default class UserInfo {
    constructor( {nameSelector, aboutSelector, avatarSelector} ) {
            this._nameSelector = nameSelector;
            this._aboutSelector = aboutSelector;
            this._avatarSelector = avatarSelector;
            this._name = document.querySelector(this._nameSelector);
            this._about = document.querySelector(this._aboutSelector);
            this._avatar = document.querySelector(this._avatarSelector);
    }
    getUserInfo() {
        return {
            name: this._name.textContent,
            about: this._about.textContent
        }
    }

    setUserInfo({ name, about }) {
        this._name.textContent = name;
        this._about.textContent = about;
    }

    setUserAvatar(avatar) {
        this._avatar.src = avatar;
    }

    getUserId() {
        return this._userId
    }

    setUserId(userId) {
        this._userId = userId
    }
}