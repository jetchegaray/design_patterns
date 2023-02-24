export class PhoneConfiguration {
  model: string;
  processor: string;
  RAM: string;
  width: number;
  height: number;
  depth: number;
  resolution: string;

  constructor(
    model: string = "generic",
    processor: string = "generic",
    RAM: string = "2 GB",
    width: number = 67.3,
    height: number = 138.4,
    depth: number = 7.5,
    resolution: string = "750 x 1334"
  ) {
    this.model = model;
    this.processor = processor;
    this.RAM = RAM;
    this.width = width;
    this.height = height;
    this.depth = depth;
    this.resolution = resolution;
  }
}

export class Phone {
  serialNum: string;
  configuration: PhoneConfiguration;

  constructor(serialNum: string, configuration: PhoneConfiguration) {
    (this.serialNum = serialNum), (this.configuration = configuration);
  }

  dial(num: string): void {
    console.log(`Now dialing ${num}`);
  }

  displayConfig() {
    console.log(this.configuration);
  }
}
