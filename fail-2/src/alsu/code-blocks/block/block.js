"use strict";
var Block = (function () {
    function Block(previous, next, data, type) {
        if (previous === void 0) { previous = null; }
        if (next === void 0) { next = null; }
        if (data === void 0) { data = ""; }
        if (type === void 0) { type = ""; }
        this.set(previous, next, data, type);
    }
    Block.prototype.set = function (previous, next, data, type) {
        this.previous = previous;
        this.data = data;
        this.next = next;
        this.type = type ? type : "";
    };
    return Block;
}());
exports.Block = Block;
//# sourceMappingURL=block.js.map