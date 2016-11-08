"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var block_js_1 = require('./block/block.js');
var code_blocks_js_1 = require('./code-blocks.js');
var CodeBlocksComponent = (function () {
    function CodeBlocksComponent(router) {
        this.router = router;
        this.blocks = new code_blocks_js_1.CodeBlocks(null, null, null, null);
        this.codeBlocks = [];
        this.destroy();
    }
    CodeBlocksComponent.prototype.pointTo = function (block) {
        if (!this.isPointer(block) && block !== this.blocks.tail) {
            this.blocks = new code_blocks_js_1.CodeBlocks(this.blocks.head, block, block.next, this.blocks.tail);
        }
    };
    // just to see what's up! defenetly not efficient!!!
    // use instead: slice/splice/push/pop...
    CodeBlocksComponent.prototype.updateList = function () {
        var tmpB = this.blocks.head;
        this.codeBlocks = [];
        while (tmpB !== null) {
            this.codeBlocks.push(tmpB);
            tmpB = tmpB.next;
        }
        // console.log("updated!", this.codeBlocks);
    };
    CodeBlocksComponent.prototype.swap = function () {
        if (!this.isFirst()) {
            if (this.isHead() || this.isTail()) {
                return;
            }
            else if (this.blocks.i1.previous !== null && this.blocks.i2.next !== null) {
                this.blocks.i1.previous.next = this.blocks.i2;
                this.blocks.i2.next.previous = this.blocks.i1;
                this.blocks.i2.previous = this.blocks.i1.previous;
                this.blocks.i1.next = this.blocks.i2.next;
                this.blocks.i1.previous = this.blocks.i2;
                this.blocks.i2.next = this.blocks.i1;
                this.blocks = new code_blocks_js_1.CodeBlocks(this.blocks.head, this.blocks.i1, this.blocks.i1.next, this.blocks.tail);
                // console.log(this.blocks);
                this.updateList();
            }
        }
    };
    CodeBlocksComponent.prototype.moveDown = function () {
        this.swap();
    };
    CodeBlocksComponent.prototype.moveUp = function () {
        if (!this.isHead() && this.blocks.i1.previous.previous !== null) {
            this.pointTo(this.blocks.i1.previous);
            this.swap();
            this.blocks = new code_blocks_js_1.CodeBlocks(this.blocks.head, this.blocks.i1.previous, this.blocks.i1, this.blocks.tail);
        }
    };
    CodeBlocksComponent.prototype.toPrevious = function () {
        if (this.blocks.i1 !== this.blocks.head) {
            this.blocks = new code_blocks_js_1.CodeBlocks(this.blocks.head, this.blocks.i1.previous, this.blocks.i1, this.blocks.tail);
        }
    };
    CodeBlocksComponent.prototype.toNext = function () {
        if (this.blocks.i1 !== this.blocks.tail) {
            this.blocks = new code_blocks_js_1.CodeBlocks(this.blocks.head, this.blocks.i2, this.blocks.i2.next, this.blocks.tail);
        }
    };
    CodeBlocksComponent.prototype.toFirst = function () {
        if (this.blocks.i1 !== this.blocks.head) {
            this.blocks = new code_blocks_js_1.CodeBlocks(this.blocks.head, this.blocks.head, this.blocks.head.next, this.blocks.tail);
        }
    };
    CodeBlocksComponent.prototype.toLast = function () {
        if (this.blocks.i1 !== this.blocks.tail) {
            this.blocks = new code_blocks_js_1.CodeBlocks(this.blocks.head, this.blocks.tail, null, this.blocks.tail);
        }
    };
    CodeBlocksComponent.prototype.isPointer = function (block) {
        return this.blocks.i1 === block;
    };
    CodeBlocksComponent.prototype.isFirst = function () {
        return this.blocks.head === this.blocks.tail;
    };
    CodeBlocksComponent.prototype.isTail = function () {
        return this.blocks.i1 === this.blocks.tail;
    };
    CodeBlocksComponent.prototype.isEmpty = function () {
        return !this.blocks.i1 === null;
    };
    CodeBlocksComponent.prototype.isHead = function () {
        return this.blocks.i1 === this.blocks.head;
    };
    CodeBlocksComponent.prototype.add = function (data) {
        if (this.isFirst()) {
        }
        else if (this.isTail()) {
        }
        else {
            this.blocks = between(this.blocks);
            // console.log("between added!", this.blocks);
            this.updateList();
        }
        function second(b) {
            //b.i2 = new Block(data);
            //b.i2.setPointers(b.head, null);
            //b.head.next = b.i1 = b.tail = b.i2;
            return new code_blocks_js_1.CodeBlocks(b.head, b.i1, null, b.tail);
        }
        function last(b) {
            //b.i2 = new Block(data);
            //b.i2.setPointers(b.i1, null);
            //b.i1.setPointers(b.i1.previous, b.i2);
            //b.i1 = b.tail = b.i2;
            return new code_blocks_js_1.CodeBlocks(b.head, b.i1, null, b.tail);
        }
        function between(b) {
            var tmpB = new block_js_1.Block(b.i1, b.i2, data, "assign");
            b.i1.next = tmpB;
            b.i2.previous = tmpB;
            return new code_blocks_js_1.CodeBlocks(b.head, tmpB, tmpB.next, b.tail);
        }
    };
    CodeBlocksComponent.prototype.pop = function () {
        if (this.isHead()) {
        }
        else if (this.isTail()) {
        }
        else {
            this.blocks = fromInBetween(this.blocks);
        }
        this.updateList();
        function fromHead(b) {
            return new code_blocks_js_1.CodeBlocks(b.i2, b.i2, b.i2.next, b.tail);
        }
        function fromTail(b) {
            // b.i1.previous.setPointers(b.i1.previous.previous, null);
            return new code_blocks_js_1.CodeBlocks(b.head, b.i1.previous, null, b.i1.previous);
        }
        function fromInBetween(b) {
            b.i1.previous.next = b.i2;
            b.i2.previous = b.i1.previous;
            if (b.i2.next !== null) {
                return new code_blocks_js_1.CodeBlocks(b.head, b.i2, b.i2.next, b.tail);
            }
            return new code_blocks_js_1.CodeBlocks(b.head, b.i2.previous, b.i2, b.tail);
        }
    };
    CodeBlocksComponent.prototype.destroy = function () {
        this.blocks.i2 = new block_js_1.Block();
        this.blocks.i1 = new block_js_1.Block(null, this.blocks.i2, "begin");
        this.blocks.i2.set(this.blocks.i1, null, "end");
        this.blocks.head = this.blocks.i1;
        this.blocks.tail = this.blocks.i2;
        this.blocks = new code_blocks_js_1.CodeBlocks(this.blocks.head, this.blocks.i1, this.blocks.i2, this.blocks.tail);
        // console.log("List initialized!", this.blocks);
        this.updateList();
    };
    CodeBlocksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'code-blocks',
            templateUrl: 'code-blocks.component.html',
            styleUrls: ['code-blocks.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], CodeBlocksComponent);
    return CodeBlocksComponent;
}());
exports.CodeBlocksComponent = CodeBlocksComponent;
//# sourceMappingURL=code-blocks.component.js.map