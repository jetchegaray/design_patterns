import { Phone, PhoneConfiguration } from "./Phone";

export class IPhoneXRFactory extends Phone {
  constructor(serialNum: string) {
    super(
      serialNum,
      new PhoneConfiguration(
        "iPhone Xr",
        "A12 bionic",
        "3 GB",
        75.7,
        150.5,
        8.4,
        "828 x1789"
      )
    );
  }
}
