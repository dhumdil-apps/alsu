"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var block_1 = require('./../block');
var End = (function (_super) {
    __extends(End, _super);
    function End() {
        _super.call(this);
        this.id = -2;
        this.type = "end";
        this.selected = false;
        this.disabled = true;
        this.draggable = false;
        this.set("END");
    }
    End.prototype.set = function (data) {
        this.data = data;
    };
    return End;
}(block_1.Block));
exports.End = End;
//# sourceMappingURL=end.js.map