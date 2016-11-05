"use strict";
var Block = (function () {
    function Block(data) {
        this.previous = null;
        this.data = data;
        this.next = null;
        this.selected = false;
    }
    Block.prototype.setPointers = function (previous, next) {
        this.previous = previous;
        this.next = next;
    };
    return Block;
}());
exports.Block = Block;
//# sourceMappingURL=block.js.map