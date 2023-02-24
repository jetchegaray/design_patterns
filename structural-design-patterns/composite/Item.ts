export abstract class Item {
  name: string;
  type: string;

  constructor(name: string, type: string) {
    this.name = name;
    this.type = type;
  }

  toString() {
    return `${this.name} (${this.type})`;
  }

  getType = (): string => {
    return this.type;
  };

  getName(): string {
    return this.name;
  }

  abstract getDetails(): void;
}
