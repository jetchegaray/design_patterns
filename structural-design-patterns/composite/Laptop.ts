import { Item } from "./Item";

export class Laptop extends Item {
  model: string;
  cost: number;

  constructor(name: string, model: string, cost: number) {
    super(name, "Laptop");
    this.model = model;
    this.cost = cost;
  }

  getDetails(): void {
    console.log(`${this.name} :: ${this.model} :: ${this.cost}}`);
  }
}
