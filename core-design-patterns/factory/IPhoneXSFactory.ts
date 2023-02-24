import { Phone, PhoneConfiguration } from "./Phone";

export class IPhoneXSFactory extends Phone {
  constructor(serialNum: string) {
    super(
      serialNum,
      new PhoneConfiguration(
        "iPhone Xs",
        "A12 bionic",
        "4 GB",
        70.7,
        143.5,
        8.4,
        "1125 x 2436"
      )
    );
  }
}
