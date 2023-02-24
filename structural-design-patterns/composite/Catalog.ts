import { Item } from "./Item";

export class Catalog extends Item {
  items: Array<Item>;
  constructor(name) {
    super(name, "catalog");
    this.items = [];
  }

  addItem(item: Item) {
    this.items.push(item);
  }

  getDetails(): void {
    console.log(this.name);
    this.items.forEach((item) => item.getDetails());
  }
}
