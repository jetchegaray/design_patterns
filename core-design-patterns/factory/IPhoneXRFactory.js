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
exports.IPhoneXRFactory = void 0;
var Phone_1 = require("./Phone");
var IPhoneXRFactory = /** @class */ (function (_super) {
    __extends(IPhoneXRFactory, _super);
    function IPhoneXRFactory(serialNum) {
        return _super.call(this, serialNum, new Phone_1.PhoneConfiguration("iPhone Xr", "A12 bionic", "3 GB", 75.7, 150.5, 8.4, "828 x1789")) || this;
    }
    return IPhoneXRFactory;
}(Phone_1.Phone));
exports.IPhoneXRFactory = IPhoneXRFactory;
