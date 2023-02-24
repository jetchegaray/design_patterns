"use strict";
exports.__esModule = true;
var Game_1 = require("./Game");
var Player_1 = require("./Player");
var pete = new Player_1["default"]("Pete");
var mike = new Player_1["default"]("Mike");
var poker = new Game_1["default"]();
poker.join(pete);
poker.join(mike);
pete.wins(20);
mike.wins(30);
mike.wins(50);
mike.wins(60);
mike.wins(70);
mike.wins(80);
pete.wins(1000);
pete.loses(1000);
console.log("scoreBoard ".concat(poker
    .scores()
    .getBoard()
    .map(function (score) { return "(".concat(score.player.name, ",").concat(score.points, ")"); })));
console.log("Winner  ".concat(poker.getWinner().player.getName(), " with ").concat(poker.getWinner().points, " points"));
