import Game from "./Game";
import Player from "./Player";
import { Score } from "./ScoreBoard";

const pete: Player = new Player("Pete");
const mike: Player = new Player("Mike");

const poker: Game = new Game();

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

console.log(
  `scoreBoard ${poker
    .scores()
    .getBoard()
    .map((score: Score) => `(${score.player.name},${score.points})`)}`
);

console.log(
  `Winner  ${poker.getWinner().player.getName()} with ${
    poker.getWinner().points
  } points`
);
