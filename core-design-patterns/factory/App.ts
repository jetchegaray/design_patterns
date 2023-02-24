import { Phone } from "./Phone";
import { IPhoneXRFactory } from "./IPhoneXRFactory";
import { IPhoneXSFactory } from "./IPhoneXSFactory";
import { IPhoneXSMaxFactory } from "./IPhoneXSMaxFactory";

const myNewIphoneXr: Phone = new IPhoneXRFactory("XR-0001");

const myNewIphoneXs: Phone = new IPhoneXSFactory("XS-0001");

const myNewIphoneXsMax: Phone = new IPhoneXSMaxFactory("XSMax-0001");

myNewIphoneXr.dial("287392783");
myNewIphoneXr.displayConfig();

myNewIphoneXs.dial("287392783");
myNewIphoneXs.displayConfig();

myNewIphoneXsMax.dial("287392783");
myNewIphoneXsMax.displayConfig();
