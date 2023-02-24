"use strict";
exports.__esModule = true;
exports.Signup = void 0;
var User_1 = require("./User");
var UserPreferences_1 = require("./UserPreferences");
var Signup = /** @class */ (function () {
    function Signup(name, email, password, age, photo, nickname, favoriteTopic, isAdmin, isModerator) {
        //supposed these are hitting to the DB
        this.user = new User_1.User(name, email, password);
        this.preferences = new UserPreferences_1.UserPreferences(this.user, age, photo, nickname, favoriteTopic, isAdmin, isModerator);
    }
    return Signup;
}());
exports.Signup = Signup;
