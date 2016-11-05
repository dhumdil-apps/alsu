"use strict";
var CodeBlocks = (function () {
    function CodeBlocks(head, index, tail) {
        if (head === void 0) { head = null; }
        if (index === void 0) { index = null; }
        if (tail === void 0) { tail = null; }
        this.head = head;
        if (this.head !== null) {
            this.head.previous = null;
        }
        this.index = index;
        this.tail = tail;
        if (this.tail !== null) {
            this.tail.next = null;
        }
    }
    CodeBlocks.prototype.isEmpty = function () {
        return this.index === null;
    };
    CodeBlocks.prototype.isHead = function () {
        return this.index === this.head;
    };
    CodeBlocks.prototype.isTail = function () {
        return this.index === this.tail;
    };
    return CodeBlocks;
}());
exports.CodeBlocks = CodeBlocks;
//# sourceMappingURL=code-blocks.js.map