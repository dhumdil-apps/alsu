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
        this.blocks = new code_blocks_js_1.CodeBlocks();
        this.codeblocks = [];
    }
    CodeBlocksComponent.prototype.ngOnInit = function () {
        // for (let data of getBlocksData()) {
        //     this.add(data);
        // }
        // function getBlocksData(): any {
        //     return [
        //         'int x;',
        //         'x = 0;',
        //         'x++;',
        //     ];
        // }
    };
    // on - selected
    CodeBlocksComponent.prototype.toPrevious = function () {
        if (!this.blocks.isHead) {
            this.blocks = new code_blocks_js_1.CodeBlocks(this.blocks.head, this.blocks.index.previous, this.blocks.tail);
        }
    };
    CodeBlocksComponent.prototype.toNext = function () {
        if (!this.blocks.isTail) {
            this.blocks = new code_blocks_js_1.CodeBlocks(this.blocks.head, this.blocks.index.next, this.blocks.tail);
        }
    };
    CodeBlocksComponent.prototype.toFirst = function () {
        if (!this.blocks.isHead)
            this.blocks = new code_blocks_js_1.CodeBlocks(this.blocks.head, this.blocks.head, this.blocks.tail);
    };
    CodeBlocksComponent.prototype.toLast = function () {
        if (!this.blocks.isTail)
            this.blocks = new code_blocks_js_1.CodeBlocks(this.blocks.head, this.blocks.tail, this.blocks.tail);
    };
    CodeBlocksComponent.prototype.add = function (data) {
        if (this.blocks.isEmpty()) {
            console.log("adding first", data);
            first(this.blocks);
        }
        else if (this.blocks.isTail()) {
            console.log("adding last", data);
            this.blocks = last(this.blocks);
        }
        else {
            console.log("adding between", data);
            this.blocks = between(this.blocks);
        }
        this.update();
        function first(b) {
            b.head = b.index = b.tail = new block_js_1.Block(data);
        }
        function last(b) {
            b.index.next = new block_js_1.Block(data);
            b.index.next.setPointers(b.index, null);
            return new code_blocks_js_1.CodeBlocks(b.head, b.tail.next, b.tail.next);
        }
        function between(b) {
            var tmpBlock = new block_js_1.Block(data);
            tmpBlock.setPointers(b.index, b.index.next);
            b.index = new block_js_1.Block(b.index.data);
            tmpBlock.setPointers(b.index.previous, tmpBlock);
            b.index.next = new block_js_1.Block(b.index.next.data);
            tmpBlock.setPointers(tmpBlock, b.index.next.next);
            return new code_blocks_js_1.CodeBlocks(b.head, tmpBlock, b.tail);
        }
    };
    CodeBlocksComponent.prototype.pop = function () {
        if (!this.blocks.isEmpty) {
            if (this.blocks.isHead) {
                console.log("pop fromHead");
                fromHead(this.blocks);
            }
            else if (this.blocks.isTail) {
                console.log("pop fromTail");
                fromTail(this.blocks);
            }
            else {
                console.log("pop fromInBetween");
                fromInBetween(this.blocks);
            }
            this.update();
        }
        function fromHead(b) {
            if (b.head === b.tail)
                b = new code_blocks_js_1.CodeBlocks();
            else
                b = new code_blocks_js_1.CodeBlocks(b.head.next, b.head.next, b.tail);
        }
        function fromTail(b) {
            b = new code_blocks_js_1.CodeBlocks(b.head, b.index.previous, b.tail.previous);
        }
        function fromInBetween(b) {
            var tmpB = new block_js_1.Block(b.index.next.data);
            tmpB.setPointers(b.index.previous, b.index.next.next);
            b.index.next = tmpB;
            b.index = tmpB;
            b = new code_blocks_js_1.CodeBlocks(b.head, b.index, b.tail);
        }
    };
    CodeBlocksComponent.prototype.destroy = function () {
        console.log("List destroyed!");
        this.blocks = new code_blocks_js_1.CodeBlocks();
        this.update();
    };
    CodeBlocksComponent.prototype.update = function () {
        console.log(this.codeblocks, "updating...");
        this.codeblocks = updatedList(this.blocks.head);
        function updatedList(b) {
            var tmpList;
            tmpList = [];
            while (b !== null) {
                tmpList.push(b);
                b = b.next;
            }
            return tmpList;
        }
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