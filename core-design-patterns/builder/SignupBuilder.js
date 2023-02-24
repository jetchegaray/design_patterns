"use strict";
exports.__esModule = true;
exports.SignupBuilder = void 0;
var Signup_1 = require("./Signup");
var SignupBuilder = /** @class */ (function () {
    function SignupBuilder(name, email, password) {
        this.name = name;
        this.email = email;
        this.password = password;
    }
    SignupBuilder.prototype.setNickName = function (nickname) {
        this.nickname = nickname;
        return this;
    };
    SignupBuilder.prototype.setAge = function (age) {
        this.age = age;
        return this;
    };
    SignupBuilder.prototype.setPhoto = function (photo) {
        this.photo = photo;
        return this;
    };
    SignupBuilder.prototype.setFavoriteTopic = function (favoriteTopic) {
        this.favoriteTopic = favoriteTopic;
        return this;
    };
    SignupBuilder.prototype.setIsAdmin = function (isAdmin) {
        this.isAdmin = isAdmin;
        return this;
    };
    SignupBuilder.prototype.setIsModerator = function (isModerator) {
        this.isModerator = isModerator;
        return this;
    };
    SignupBuilder.prototype.create = function () {
        return new Signup_1.Signup(this.name, this.email, this.password, this.age, this.photo, this.nickname, this.favoriteTopic, this.isAdmin, this.isModerator);
    };
    return SignupBuilder;
}());
exports.SignupBuilder = SignupBuilder;
