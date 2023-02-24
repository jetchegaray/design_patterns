import Player from "./Player";
import { scoreBoardInstance, ScoreBoard, Score } from "./ScoreBoard";

export default class Game {
  join(player: Player): void {
    scoreBoardInstance.join(player);
  }

  scores(): ScoreBoard {
    return scoreBoardInstance;
  }

  getWinner(): Score {
    return scoreBoardInstance.sort()[0];
  }
}
