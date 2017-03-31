"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var preact_1 = require("preact");
var HelloWorld = (function (_super) {
    __extends(HelloWorld, _super);
    function HelloWorld() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HelloWorld.prototype.render = function (props) {
        return preact_1.h("p", null,
            "Hello ",
            props.name,
            "...");
    };
    return HelloWorld;
}(preact_1.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = HelloWorld;
//# sourceMappingURL=HelloWorld.js.map