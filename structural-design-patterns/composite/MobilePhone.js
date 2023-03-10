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
exports.MobilePhone = void 0;
var Item_1 = require("./Item");
var MobilePhone = /** @class */ (function (_super) {
    __extends(MobilePhone, _super);
    function MobilePhone(name, color, cost) {
        var _this = _super.call(this, name, "Mobile Phone") || this;
        _this.color = color;
        _this.cost = cost;
        return _this;
    }
    MobilePhone.prototype.getDetails = function () {
        console.log("".concat(this.name, " :: ").concat(this.color, " :: ").concat(this.cost, "}"));
    };
    return MobilePhone;
}(Item_1.Item));
exports.MobilePhone = MobilePhone;
