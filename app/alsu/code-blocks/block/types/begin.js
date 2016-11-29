"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var block_1 = require('./../block');
var Begin = (function (_super) {
    __extends(Begin, _super);
    function Begin() {
        _super.call(this);
        this.id = -1;
        this.type = "begin";
        this.selected = false;
        this.disabled = true;
        this.draggable = false;
        this.set("BEGIN");
    }
    Begin.prototype.set = function (data) {
        this.data = data;
    };
    return Begin;
}(block_1.Block));
exports.Begin = Begin;
//# sourceMappingURL=begin.js.map