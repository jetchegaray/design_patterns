import { IPhoneXRFactory } from "../factory/IPhoneXRFactory";
import { IPhoneXSFactory } from "../factory/IPhoneXSFactory";
import { IPhoneXSMaxFactory } from "../factory/IPhoneXSMaxFactory";
import { Phone, PhoneConfiguration } from "../factory/Phone";

export enum IPHONE_TYPES {
  XR = "IPhone XR",
  XS = "IPhone XS",
  XSMax = "IPhone XSMax",
}

class IPhoneFactory {
  create(type: IPHONE_TYPES, serialNum: string): Phone {
    switch (type) {
      case IPHONE_TYPES.XR:
        return new IPhoneXRFactory(serialNum);
      case IPHONE_TYPES.XS:
        return new IPhoneXSFactory(serialNum);
      case IPHONE_TYPES.XSMax:
        return new IPhoneXSMaxFactory(serialNum);
      default: {
        console.log(`unknow iphone ${type}`);
        return new Phone("unknow iphone", new PhoneConfiguration());
      }
    }
  }
}

export const IPhoneFactoryInstance = new IPhoneFactory(); //exporting a singleton of the factory
