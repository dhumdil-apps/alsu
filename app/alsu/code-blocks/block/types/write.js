"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var block_1 = require('./../block');
var Write = (function (_super) {
    __extends(Write, _super);
    function Write(data) {
        _super.call(this);
        this.id = 0;
        this.type = "write";
        this.selected = true;
        this.disabled = true;
        this.draggable = true;
        this.set(data);
    }
    Write.prototype.set = function (data) {
        this.data = data;
    };
    return Write;
}(block_1.Block));
exports.Write = Write;
//# sourceMappingURL=write.js.map