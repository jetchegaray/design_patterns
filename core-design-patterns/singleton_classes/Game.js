"use strict";
exports.__esModule = true;
var ScoreBoard_1 = require("./ScoreBoard");
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.join = function (player) {
        ScoreBoard_1.scoreBoardInstance.join(player);
    };
    Game.prototype.scores = function () {
        return ScoreBoard_1.scoreBoardInstance;
    };
    Game.prototype.getWinner = function () {
        return ScoreBoard_1.scoreBoardInstance.sort()[0];
    };
    return Game;
}());
exports["default"] = Game;
