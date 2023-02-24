import { scoreBoardInstance } from "./ScoreBoard";

export default class Player {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  wins(points: number): void {
    scoreBoardInstance.update(this, points);
  }

  loses(points: number): void {
    scoreBoardInstance.update(this, -points);
  }
}
