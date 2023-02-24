"use strict";
exports.__esModule = true;
var ScoreBoard_1 = require("./ScoreBoard");
var Player = /** @class */ (function () {
    function Player(name) {
        this.name = name;
    }
    Player.prototype.getName = function () {
        return this.name;
    };
    Player.prototype.wins = function (points) {
        ScoreBoard_1.scoreBoardInstance.update(this, points);
    };
    Player.prototype.loses = function (points) {
        ScoreBoard_1.scoreBoardInstance.update(this, -points);
    };
    return Player;
}());
exports["default"] = Player;
