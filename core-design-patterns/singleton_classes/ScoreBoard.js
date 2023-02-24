"use strict";
exports.__esModule = true;
exports.scoreBoardInstance = exports.ScoreBoard = exports.Score = void 0;
var Score = /** @class */ (function () {
    function Score(player, points) {
        this.player = player;
        this.points = points;
    }
    return Score;
}());
exports.Score = Score;
var ScoreBoard = /** @class */ (function () {
    function ScoreBoard() {
        this.board = new Array();
    }
    ScoreBoard.prototype.join = function (player) {
        this.board.push(new Score(player, 0));
    };
    ScoreBoard.prototype.level = function (playerLevel) {
        this.board = this.board.filter(function (score) { return score.player.name === playerLevel.name; });
    };
    ScoreBoard.prototype.update = function (player, points) {
        var scoreIndex = this.board.findIndex(function (score) { return score.player.name === player.name; });
        if (scoreIndex > -1) {
            this.board[scoreIndex].points += points;
        }
    };
    ScoreBoard.prototype.getBoard = function () {
        return this.board;
    };
    ScoreBoard.prototype.sort = function () {
        return this.board.sort(function (x, y) { return y.points - x.points; });
    };
    return ScoreBoard;
}());
exports.ScoreBoard = ScoreBoard;
exports.scoreBoardInstance = new ScoreBoard(); // singleton , it returns a private instance not a class
