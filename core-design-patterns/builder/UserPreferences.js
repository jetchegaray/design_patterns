"use strict";
exports.__esModule = true;
exports.UserPreferences = void 0;
var UserPreferences = /** @class */ (function () {
    function UserPreferences(user, age, photo, nickname, favoriteTopic, isAdmin, isModerator) {
        this.user = user;
        this.age = age;
        this.photo = photo;
        this.nickname = nickname;
        this.favoriteTopic = favoriteTopic;
        this.isAdmin = isAdmin;
        this.isModerator = isModerator;
    }
    return UserPreferences;
}());
exports.UserPreferences = UserPreferences;
