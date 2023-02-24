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
exports.Catalog = void 0;
var Item_1 = require("./Item");
var Catalog = /** @class */ (function (_super) {
    __extends(Catalog, _super);
    function Catalog(name) {
        var _this = _super.call(this, name, "catalog") || this;
        _this.items = [];
        return _this;
    }
    Catalog.prototype.addItem = function (item) {
        this.items.push(item);
    };
    Catalog.prototype.getDetails = function () {
        console.log(this.name);
        this.items.forEach(function (item) { return item.getDetails(); });
    };
    return Catalog;
}(Item_1.Item));
exports.Catalog = Catalog;
