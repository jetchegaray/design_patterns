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
exports.IPhoneXSMaxFactory = void 0;
var Phone_1 = require("./Phone");
var IPhoneXSMaxFactory = /** @class */ (function (_super) {
    __extends(IPhoneXSMaxFactory, _super);
    function IPhoneXSMaxFactory(serialNum) {
        return _super.call(this, serialNum, new Phone_1.PhoneConfiguration("iPhone Xs Max", "A12 bionic", "4 GB", 77.7, 157.5, 7.9, "1242 x 2688")) || this;
    }
    return IPhoneXSMaxFactory;
}(Phone_1.Phone));
exports.IPhoneXSMaxFactory = IPhoneXSMaxFactory;
