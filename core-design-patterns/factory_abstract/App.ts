import { IPhoneFactoryInstance, IPHONE_TYPES } from "./IPhoneFactory";
import { Phone } from "../factory/Phone";

const myNewIphoneXr: Phone = IPhoneFactoryInstance.create(
  IPHONE_TYPES.XR,
  "XR-0001"
);

const myNewIphoneXs: Phone = IPhoneFactoryInstance.create(
  IPHONE_TYPES.XS,
  "XS-0001"
);

const myNewIphoneXsMax: Phone = IPhoneFactoryInstance.create(
  IPHONE_TYPES.XSMax,
  "XSMax-0001"
);

myNewIphoneXr.dial("287392783");
myNewIphoneXr.displayConfig();

myNewIphoneXs.dial("287392783");
myNewIphoneXs.displayConfig();

myNewIphoneXsMax.dial("287392783");
myNewIphoneXsMax.displayConfig();
