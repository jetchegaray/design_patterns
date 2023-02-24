import { Phone, PhoneConfiguration } from "./Phone";

export class IPhoneXSMaxFactory extends Phone {
  constructor(serialNum: string) {
    super(
      serialNum,
      new PhoneConfiguration(
        "iPhone Xs Max",
        "A12 bionic",
        "4 GB",
        77.7,
        157.5,
        7.9,
        "1242 x 2688"
      )
    );
  }
}
