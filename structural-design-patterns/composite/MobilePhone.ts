import { Item } from "./Item";

export class MobilePhone extends Item {
  color: string;
  cost: number;

  constructor(name: string, color: string, cost: number) {
    super(name, "Mobile Phone");
    this.color = color;
    this.cost = cost;
  }

  getDetails(): void {
    console.log(`${this.name} :: ${this.color} :: ${this.cost}}`);
  }
}
