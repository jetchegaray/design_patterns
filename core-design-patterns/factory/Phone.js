"use strict";
exports.__esModule = true;
exports.Phone = exports.PhoneConfiguration = void 0;
var PhoneConfiguration = /** @class */ (function () {
    function PhoneConfiguration(model, processor, RAM, width, height, depth, resolution) {
        if (model === void 0) { model = "generic"; }
        if (processor === void 0) { processor = "generic"; }
        if (RAM === void 0) { RAM = "2 GB"; }
        if (width === void 0) { width = 67.3; }
        if (height === void 0) { height = 138.4; }
        if (depth === void 0) { depth = 7.5; }
        if (resolution === void 0) { resolution = "750 x 1334"; }
        this.model = model;
        this.processor = processor;
        this.RAM = RAM;
        this.width = width;
        this.height = height;
        this.depth = depth;
        this.resolution = resolution;
    }
    return PhoneConfiguration;
}());
exports.PhoneConfiguration = PhoneConfiguration;
var Phone = /** @class */ (function () {
    function Phone(serialNum, configuration) {
        (this.serialNum = serialNum), (this.configuration = configuration);
    }
    Phone.prototype.dial = function (num) {
        console.log("Now dialing ".concat(num));
    };
    Phone.prototype.displayConfig = function () {
        console.log(this.configuration);
    };
    return Phone;
}());
exports.Phone = Phone;
