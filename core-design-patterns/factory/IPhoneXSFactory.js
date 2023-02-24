"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.IPhoneXSFactory = void 0;
var Phone_1 = require("./Phone");
var IPhoneXSFactory = /** @class */ (function (_super) {
    __extends(IPhoneXSFactory, _super);
    function IPhoneXSFactory(serialNum) {
        return _super.call(this, serialNum, new Phone_1.PhoneConfiguration("iPhone Xs", "A12 bionic", "4 GB", 70.7, 143.5, 8.4, "1125 x 2436")) || this;
    }
    return IPhoneXSFactory;
}(Phone_1.Phone));
exports.IPhoneXSFactory = IPhoneXSFactory;
