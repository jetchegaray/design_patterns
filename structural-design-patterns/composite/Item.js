"use strict";
exports.__esModule = true;
exports.Item = void 0;
var Item = /** @class */ (function () {
    function Item(name, type) {
        var _this = this;
        this.getType = function () {
            return _this.type;
        };
        this.name = name;
        this.type = type;
    }
    Item.prototype.toString = function () {
        return "".concat(this.name, " (").concat(this.type, ")");
    };
    Item.prototype.getName = function () {
        return this.name;
    };
    return Item;
}());
exports.Item = Item;
