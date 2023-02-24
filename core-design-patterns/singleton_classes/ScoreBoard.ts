import Player from "./Player";

export class Score {
  player: Player;
  points: number;

  constructor(player: Player, points: number) {
    this.player = player;
    this.points = points;
  }
}

export class ScoreBoard {
  board: Score[];

  constructor() {
    this.board = new Array();
  }

  join(player: Player): void {
    this.board.push(new Score(player, 0));
  }

  level(playerLevel: Player): void {
    this.board = this.board.filter(
      (score) => score.player.name === playerLevel.name
    );
  }

  update(player: Player, points: number): void {
    const scoreIndex = this.board.findIndex(
      (score) => score.player.name === player.name
    );
    if (scoreIndex > -1) {
      this.board[scoreIndex].points += points;
    }
  }

  getBoard(): Score[] {
    return this.board;
  }

  sort(): Score[] {
    return this.board.sort((x, y) => y.points - x.points);
  }
}

export const scoreBoardInstance = new ScoreBoard(); // singleton , it returns a private instance not a class
