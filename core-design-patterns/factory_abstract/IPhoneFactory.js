"use strict";
exports.__esModule = true;
exports.IPhoneFactoryInstance = exports.IPHONE_TYPES = void 0;
var IPhoneXRFactory_1 = require("../factory/IPhoneXRFactory");
var IPhoneXSFactory_1 = require("../factory/IPhoneXSFactory");
var IPhoneXSMaxFactory_1 = require("../factory/IPhoneXSMaxFactory");
var IPHONE_TYPES;
(function (IPHONE_TYPES) {
    IPHONE_TYPES["XR"] = "IPhone XR";
    IPHONE_TYPES["XS"] = "IPhone XS";
    IPHONE_TYPES["XSMax"] = "IPhone XSMax";
})(IPHONE_TYPES = exports.IPHONE_TYPES || (exports.IPHONE_TYPES = {}));
var IPhoneFactory = /** @class */ (function () {
    function IPhoneFactory() {
    }
    IPhoneFactory.prototype.create = function (type, serialNum) {
        switch (type) {
            case IPHONE_TYPES.XR:
                return new IPhoneXRFactory_1.IPhoneXRFactory(serialNum);
            case IPHONE_TYPES.XS:
                return new IPhoneXSFactory_1.IPhoneXSFactory(serialNum);
            case IPHONE_TYPES.XSMax:
                return new IPhoneXSMaxFactory_1.IPhoneXSMaxFactory(serialNum);
            default:
                console.log("unknow iphone ".concat(type));
        }
    };
    return IPhoneFactory;
}());
exports.IPhoneFactoryInstance = new IPhoneFactory(); //exporting a singleton of the factory
