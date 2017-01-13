webpackJsonp([0,3],{

/***/ 297:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Block; });
var Block = (function () {
    function Block() {
    }
    return Block;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/block.js.map

/***/ },

/***/ 298:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block__ = __webpack_require__(297);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Simple; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var Simple = (function (_super) {
    __extends(Simple, _super);
    function Simple(data, type) {
        _super.call(this);
        this.setType(type);
        this.setData(data);
    }
    Simple.prototype.setIds = function (previous, id, next) {
        this.previous = previous;
        this.id = id;
        this.next = next;
    };
    Simple.prototype.setData = function (data) {
        try {
            this.data = data;
        }
        catch (err) {
            console.log(err);
        }
    };
    // types: read, write, assign, begin, end....
    Simple.prototype.setType = function (type) {
        switch (type) {
            case 'assign':
                this.type = 'assign';
                this.selected = true;
                this.disabled = false;
                this.draggable = true;
                this.setIds(0, 0, 0);
                break;
            case 'write':
                this.type = 'write';
                this.selected = true;
                this.disabled = false;
                this.draggable = true;
                this.setIds(0, 0, 0);
                break;
            case 'begin':
                this.type = 'begin';
                this.selected = false;
                this.disabled = true;
                this.draggable = false;
                this.setIds(0, 1, 2);
                break;
            case 'end':
                this.type = 'end';
                this.selected = false;
                this.disabled = true;
                this.draggable = false;
                this.setIds(2, -1, 0);
                break;
            default: break;
        }
    };
    return Simple;
}(__WEBPACK_IMPORTED_MODULE_0__block__["a" /* Block */]));
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/simple.js.map

/***/ },

/***/ 299:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_types_simple__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CodeBlocks; });

var CodeBlocks = (function () {
    function CodeBlocks() {
        this.init();
    }
    CodeBlocks.prototype.select = function (id) {
        if (this.selectedId[0] < 0) {
            // console.log("selecting - ERROR!");
            this.selectedId = [0, 1];
            return;
        }
        try {
            this.unsetSelected(this.selectedId[0]);
            this.selectedId = [this.getId(id), id];
            this.setSelected(this.selectedId[0]);
            // console.log("selected!", this.selectedId[0]);
            return this.selectedId[0];
        }
        catch (err) {
            // console.log("selecting - ERROR!", err.message);
            this.init();
            return;
        }
    };
    CodeBlocks.prototype.add = function (b, id) {
        if (id === void 0) { id = this.selectedId[1]; }
        if (id <= 0) {
            // console.log("adding - ERROR!");
            this.init();
            return;
        }
        try {
            var i = this.getId(id);
            b.id = this.uniqueId++;
            b.previous = id;
            b.next = this.blocks[i].next;
            this.blocks[this.getId(this.blocks[i].next)].previous = b.id;
            this.blocks[i].next = b.id;
            this.blocks.splice(i + 1, 0, b);
            // console.log("adding!", b);
            this.select(b.id);
        }
        catch (err) {
            // console.log("adding - ERROR!", err.message);
            this.init();
            return;
        }
    };
    CodeBlocks.prototype.move = function (id) {
        if (this.selectedId[1] < 2 || id < 2) {
            // console.log("moving - ERROR!");
            this.select(id);
            return;
        }
        try {
            console.log('Moving: from', this.getId(id), 'to', this.selectedId[0]);
            var i = (this.getId(id) > this.getId(this.selectedId[1])) ? this.blocks[this.selectedId[0]].previous : this.selectedId[1];
            this.select(id);
            var b = this.remove();
            this.select(i);
            this.add(b);
        }
        catch (err) {
            console.log('Moving - ERROR!', err.message);
            this.init();
        }
    };
    CodeBlocks.prototype.remove = function () {
        if (this.selectedId[1] < 2) {
            // console.log("Can't remove! (The selected block id can't be removed)", this.selectedId, this.blocks);
            this.init();
            return;
        }
        try {
            var b = this.blocks[this.selectedId[0]];
            this.blocks[this.getId(b.next)].previous = b.previous;
            this.blocks[this.getId(b.previous)].next = b.next;
            this.blocks.splice(this.selectedId[0], 1);
            if (b.next !== -1) {
                this.selectedId = [this.getId(b.next), b.next];
            }
            else {
                this.selectedId = [this.getId(b.previous), b.previous];
            }
            this.setSelected(this.selectedId[0]);
            // console.log("removed!", b);
            return b;
        }
        catch (err) {
            // console.log("removing - ERROR!", err.message);
            this.init();
        }
    };
    CodeBlocks.prototype.compile = function () {
        var output = [];
        this.blocks.forEach(function (b) {
            b.selected = false;
            if (b.id > 0) {
                b.disabled = true;
                output.push({
                    type: b.type,
                    data: b.data
                });
            }
        });
        // console.log('Compiling...', output);
        return output;
    };
    CodeBlocks.prototype.init = function () {
        this.blocks = [];
        this.uniqueId = 3;
        this.blocks.push(new __WEBPACK_IMPORTED_MODULE_0__block_types_simple__["a" /* Simple */]('BEGIN', 'begin'));
        this.blocks.push(new __WEBPACK_IMPORTED_MODULE_0__block_types_simple__["a" /* Simple */]('Hello World!', 'write'));
        this.blocks[1].setIds(1, 2, -1);
        this.selectedId = [1, 2];
        this.blocks.push(new __WEBPACK_IMPORTED_MODULE_0__block_types_simple__["a" /* Simple */]('END', 'end'));
        console.log(this.blocks);
    };
    CodeBlocks.prototype.unsetSelected = function (id) {
        this.blocks[id].selected = false;
        this.blocks[id].disabled = true;
    };
    CodeBlocks.prototype.setSelected = function (id) {
        this.blocks[id].selected = true;
        this.blocks[id].disabled = (id === 0);
    };
    CodeBlocks.prototype.getId = function (id) {
        for (var i = 0; i < this.blocks.length; i++) {
            if (this.blocks[i].id === id) {
                return i;
            }
        }
        return 0;
    };
    return CodeBlocks;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/code-blocks.js.map

/***/ },

/***/ 341:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 341;


/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(460);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["_37" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/main.js.map

/***/ },

/***/ 451:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block__ = __webpack_require__(297);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return BlockComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlockComponent = (function () {
    function BlockComponent() {
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    BlockComponent.prototype.emitRemove = function () {
        if (this.block.id > 0) {
            this.remove.emit();
        }
    };
    BlockComponent.prototype.clearText = function () {
        this.block.data = '';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__block__["a" /* Block */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__block__["a" /* Block */]) === 'function' && _a) || Object)
    ], BlockComponent.prototype, "block", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], BlockComponent.prototype, "remove", void 0);
    BlockComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'block',
            template: __webpack_require__(623),
            styles: [__webpack_require__(615)]
        }), 
        __metadata('design:paramtypes', [])
    ], BlockComponent);
    return BlockComponent;
    var _a;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/block.component.js.map

/***/ },

/***/ 452:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__code_blocks__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CodeBlocksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CodeBlocksComponent = (function () {
    function CodeBlocksComponent() {
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    /**
     * Events
     */
    CodeBlocksComponent.prototype.emitSelect = function (block) {
        this.select.emit(block);
    };
    CodeBlocksComponent.prototype.emitRemove = function () {
        this.remove.emit();
    };
    /**
     * Drag'n Drop
     */
    CodeBlocksComponent.prototype.dragStart = function (id) {
        this.codeblocks.draggingId = id;
        this.codeblocks.dragging = true;
    };
    CodeBlocksComponent.prototype.dragEnd = function () {
        if (this.list.selectedId[1] !== this.codeblocks.draggingId) {
            this.list.move(this.codeblocks.draggingId);
        }
        this.codeblocks.dragging = false;
    };
    CodeBlocksComponent.prototype.dragOver = function (ev, id) {
        if (id !== this.list.selectedId[1]) {
            if (id > 0) {
                ev.preventDefault();
                this.list.select(id);
            }
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__code_blocks__["a" /* CodeBlocks */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__code_blocks__["a" /* CodeBlocks */]) === 'function' && _a) || Object)
    ], CodeBlocksComponent.prototype, "list", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], CodeBlocksComponent.prototype, "codeblocks", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], CodeBlocksComponent.prototype, "select", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], CodeBlocksComponent.prototype, "remove", void 0);
    CodeBlocksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'code-blocks',
            template: __webpack_require__(624),
            styles: [__webpack_require__(616)]
        }), 
        __metadata('design:paramtypes', [])
    ], CodeBlocksComponent);
    return CodeBlocksComponent;
    var _a;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/code-blocks.component.js.map

/***/ },

/***/ 453:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__code_blocks_block_types_simple__ = __webpack_require__(298);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlsuInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlsuInputComponent = (function () {
    function AlsuInputComponent() {
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
        this.blocks = [];
        this.blocks.push(new __WEBPACK_IMPORTED_MODULE_1__code_blocks_block_types_simple__["a" /* Simple */]('', 'assign'));
        this.blocks.push(new __WEBPACK_IMPORTED_MODULE_1__code_blocks_block_types_simple__["a" /* Simple */]('', 'write'));
        this.blocks.forEach(function (b) {
            b.disabled = b.draggable = false;
        });
    }
    AlsuInputComponent.prototype.emitAdd = function (block) {
        try {
            this.add.emit(new __WEBPACK_IMPORTED_MODULE_1__code_blocks_block_types_simple__["a" /* Simple */](block.data, block.type));
        }
        catch (err) {
            console.log(err.message);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], AlsuInputComponent.prototype, "add", void 0);
    AlsuInputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'alsu-input',
            template: __webpack_require__(625),
            styles: [__webpack_require__(617)]
        }), 
        __metadata('design:paramtypes', [])
    ], AlsuInputComponent);
    return AlsuInputComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/alsu-input.component.js.map

/***/ },

/***/ 454:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LeftSideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftSideComponent = (function () {
    function LeftSideComponent() {
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    LeftSideComponent.prototype.emitAdd = function (block) {
        this.add.emit(block);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], LeftSideComponent.prototype, "activated", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], LeftSideComponent.prototype, "add", void 0);
    LeftSideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'left-side',
            template: __webpack_require__(626),
            styles: [__webpack_require__(618)]
        }), 
        __metadata('design:paramtypes', [])
    ], LeftSideComponent);
    return LeftSideComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/left-side.component.js.map

/***/ },

/***/ 455:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__code_blocks_code_blocks__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MainComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainComponent = (function () {
    function MainComponent() {
        this.main = {
            "config": {
                "activated": false,
                "run": "play_arrow"
            },
            "code-blocks": {
                "input": false,
                "dragging": false,
                "draggingId": 0
            },
            "output": {
                "data": []
            },
            "list": new __WEBPACK_IMPORTED_MODULE_1__code_blocks_code_blocks__["a" /* CodeBlocks */]()
        };
    }
    /**
     * Compile Event
     */
    MainComponent.prototype.compileEvent = function () {
        this.isActivatedConfig() ? this.deactivateConfig() : this.activateConfig();
    };
    MainComponent.prototype.isActivatedConfig = function () {
        return this.main['config'].activated;
    };
    MainComponent.prototype.deactivateConfig = function () {
        this.main['config'].run = "play_arrow";
        this.main['config'].activated = false;
        this.main['list'].select(1);
    };
    MainComponent.prototype.activateConfig = function () {
        this.main['config'].run = "stop";
        this.main['config'].activated = true;
        this.main['output'].data = this.main['list'].compile();
    };
    /**
     * Add Event
     */
    MainComponent.prototype.addEvent = function (block) {
        this.main['list'].add(block);
    };
    /**
     * Remove Event
     */
    MainComponent.prototype.removeEvent = function () {
        this.main['list'].remove();
    };
    /**
     * Select Event
     */
    MainComponent.prototype.selectEvent = function (block) {
        if (!block.selected && block.id !== 0) {
            if (block.id === -1) {
                this.main['list'].select(1);
            }
            else {
                this.main['list'].select(block.id);
            }
        }
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'main',
            template: __webpack_require__(627),
            styles: [__webpack_require__(619)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainComponent);
    return MainComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/main.component.js.map

/***/ },

/***/ 456:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AlsuOutputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AlsuOutputComponent = (function () {
    function AlsuOutputComponent() {
    }
    AlsuOutputComponent.prototype.ngOnInit = function () {
        this.evaluateExpression();
    };
    // demo only (eval is evil)
    AlsuOutputComponent.prototype.evaluateExpression = function () {
        var blocks = this.output.data;
        var result = [];
        var geval = eval;
        var param = { "key": '', "val": null };
        var vars = [{ '': null }];
        try {
            blocks.forEach(function (block) {
                if (block.type === 'assign') {
                    if (isValidEqual(block.data)) {
                        param.key = leftSide(block.data);
                        param.val = rightSide(block.data);
                        if (!param.val.length) {
                            console.log('No params on right side!');
                            result.push('Syntax error!');
                            return;
                        }
                        else if (!isKey(param.key)) {
                            vars.push(createVar(param.key));
                            console.log("Created new variable");
                        }
                        vars[isKey(param.key)].val = geval(param.val);
                    }
                    else {
                        // check for ++/-- || function call
                        console.log('single param in assign block!');
                        result.push('Syntax error!');
                    }
                }
                if (block.type === 'write') {
                    param.key = block.data.trim();
                    for (var i = 0; i < vars.length; i++) {
                        if (vars[i].key === param.key) {
                            result.push(geval(vars[i].val));
                            return;
                        }
                    }
                    result.push(block.data);
                }
            });
            console.log(vars);
            this.output.data = result;
        }
        catch (error) {
            console.log(error);
            this.output.data = [error];
        }
        function isValidEqual(str) {
            return (str.trim() === '=') ? 0 : (str.trim().match(/=/g) || []).length;
        }
        function createVar(str) {
            return { key: str, val: null };
        }
        function isKey(key) {
            for (var i = 0; i < vars.length; i++) {
                if (vars[i].key === key) {
                    return i;
                }
            }
            return 0;
        }
        function leftSide(key) {
            key = key.substring(0, key.indexOf('=')).trim();
            if ((key.match(/ /g) || []).length) {
                result.push('Syntax error! (more than one parameter on left side)');
                return '';
            }
            var words = key.match(/\w/g);
            if (words !== null) {
                if (key.length > words.length) {
                    result.push('possible binary operations)');
                    return '';
                }
            }
            return key;
        }
        function rightSide(val) {
            val = val.substring(val.indexOf('=') + 1, val.length).trim();
            if ((val.match(/ /g) || []).length) {
                // console.log("More than one param on right side");
                var paramerters = val.split(' ');
                paramerters.forEach(function (paramerter) {
                    // console.log('paramerter', paramerter);
                    var digits = paramerter.match(/\d/g);
                    var words = paramerter.match(/\w/g);
                    // console.log('all digits', digits === null);
                    // console.log('all words', words !== null);
                    if (words !== null && digits === null) {
                        // console.log('words.length === paramerter.length', words.length === paramerter.length);
                        if (words.length === paramerter.length) {
                            var i = isKey(paramerter);
                            if (vars[i].val === null) {
                                // console.log("paramerter not found || isn't initialized");
                                return '';
                            }
                            else {
                                // console.log(vars[i].key, "=>", vars[i].val);
                                // buggy... but for now it's enought
                                val = val.split(vars[i].key).join(vars[i].val);
                            }
                        }
                    }
                });
            }
            return val;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], AlsuOutputComponent.prototype, "output", void 0);
    AlsuOutputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'alsu-output',
            template: __webpack_require__(628),
            styles: [__webpack_require__(620)]
        }), 
        __metadata('design:paramtypes', [])
    ], AlsuOutputComponent);
    return AlsuOutputComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/alsu-output.component.js.map

/***/ },

/***/ 457:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RightSideComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightSideComponent = (function () {
    function RightSideComponent() {
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], RightSideComponent.prototype, "activated", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], RightSideComponent.prototype, "output", void 0);
    RightSideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'right-side',
            template: __webpack_require__(629),
            styles: [__webpack_require__(621)]
        }), 
        __metadata('design:paramtypes', [])
    ], RightSideComponent);
    return RightSideComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/right-side.component.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
        this.compile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* EventEmitter */]();
    }
    ToolbarComponent.prototype.emitCompile = function () {
        this.compile.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Input */])(), 
        __metadata('design:type', Object)
    ], ToolbarComponent.prototype, "config", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Output */])(), 
        __metadata('design:type', Object)
    ], ToolbarComponent.prototype, "compile", void 0);
    ToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'toolbar',
            template: __webpack_require__(630),
            styles: [__webpack_require__(622)]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/toolbar.component.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["G" /* Component */])({
            selector: 'app',
            template: "<main></main>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/app.component.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alsu_main_component__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alsu_code_blocks_code_blocks_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alsu_code_blocks_block_block_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alsu_left_side_left_side_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__alsu_left_side_alsu_input_alsu_input_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__alsu_right_side_right_side_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alsu_right_side_alsu_output_alsu_output_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alsu_toolbar_toolbar_component__ = __webpack_require__(458);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__alsu_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_6__alsu_code_blocks_code_blocks_component__["a" /* CodeBlocksComponent */], __WEBPACK_IMPORTED_MODULE_7__alsu_code_blocks_block_block_component__["a" /* BlockComponent */],
                __WEBPACK_IMPORTED_MODULE_8__alsu_left_side_left_side_component__["a" /* LeftSideComponent */], __WEBPACK_IMPORTED_MODULE_9__alsu_left_side_alsu_input_alsu_input_component__["a" /* AlsuInputComponent */],
                __WEBPACK_IMPORTED_MODULE_10__alsu_right_side_right_side_component__["a" /* RightSideComponent */], __WEBPACK_IMPORTED_MODULE_11__alsu_right_side_alsu_output_alsu_output_component__["a" /* AlsuOutputComponent */],
                __WEBPACK_IMPORTED_MODULE_12__alsu_toolbar_toolbar_component__["a" /* ToolbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/app.module.js.map

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/environment.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/polyfills.js.map

/***/ },

/***/ 615:
/***/ function(module, exports) {

module.exports = ".block {\n  position: absolute;\n  left: 50px;\n  top: 10px;\n  height: 50px;\n  width: 200px;\n  background-color: #eee;\n  box-shadow: 0 0 2px 1px #333;\n}\n.block .input {\n  position: absolute;\n  left: 20px;\n  top: 10px;\n  width: 150px;\n  height: 20px;\n  outline: 0;\n  border: none;\n  text-align: center;\n  padding: 5px;\n  background-color: #eee;\n}\n.block .remove-text {\n  top: 0;\n  right: 20px;\n  width: 18px;\n  height: 18px;\n  padding: 16px 1px;\n  color: rgba(0, 0, 0, 0.2);\n  font-family: sans-serif;\n  font-size: 14px;\n}\n.block .remove-text:hover {\n  background-color: rgba(0, 0, 0, 0);\n  color: #000;\n}\n.block .remove-text:hover i {\n  background-color: #fff;\n}\n.block .remove-text i {\n  font-size: 18px;\n}\n.block .remove-block {\n  top: 0;\n  right: -50px;\n}\n.selected .input {\n  cursor: text;\n}\n.disabled {\n  cursor: pointer;\n}\n.disabled .input {\n  cursor: pointer;\n}\n.connect-top {\n  position: absolute;\n  top: -10px;\n  left: 99px;\n  width: 2px;\n  height: 10px;\n  background: #333;\n}\n.connect-bottom {\n  position: absolute;\n  top: 50px;\n  left: 99px;\n  width: 2px;\n  height: 10px;\n  background: #333;\n}\n.begin {\n  border-radius: 50px;\n}\n.begin .connect-top {\n  visibility: hidden;\n}\n.end {\n  border-radius: 50px;\n}\n.end .connect-bottom {\n  visibility: hidden;\n}\n.write::before {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 50px;\n  background-color: red;\n  left: 0;\n}\n.write::after {\n  content: \"\";\n  position: absolute;\n  width: 2px;\n  height: 50px;\n  background-color: red;\n  right: 0;\n}\n"

/***/ },

/***/ 616:
/***/ function(module, exports) {

module.exports = ".code-blocks {\n  width: 300px;\n  height: 100%;\n  margin: auto;\n  color: #333;\n  padding-top: 100px;\n}\n.blocks {\n  position: relative;\n  width: 300px;\n  height: 70px;\n}\nspan {\n  left: 0;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.block-drag {\n  z-index: 10;\n  display: none;\n}\n.block-drop {\n  width: 300px;\n  height: 50px;\n  background-color: rgba(0, 0, 0, 0);\n  padding: 0;\n}\n.selected {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.visible {\n  display: block;\n}\n"

/***/ },

/***/ 617:
/***/ function(module, exports) {

module.exports = ".alsu-input {\n  position: relative;\n  width: 300px;\n  height: 70px;\n}\nspan {\n  right: 0;\n}\n:host /deep/ block .connect-bottom,\n:host /deep/ block .connect-top {\n  visibility: hidden;\n}\n"

/***/ },

/***/ 618:
/***/ function(module, exports) {

module.exports = ".left-side {\n  height: 100%;\n  width: 100%;\n  box-shadow: 2px 0 10px #333;\n}\n.left-side__title {\n  display: inline-block;\n  padding: 5px;\n  text-transform: uppercase;\n  width: calc(100% - 10px);\n  text-align: center;\n  background-color: #333;\n  color: #eee;\n}\n"

/***/ },

/***/ 619:
/***/ function(module, exports) {

module.exports = "toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 35px;\n  z-index: 100;\n}\nleft-side {\n  left: 0;\n  width: 0;\n  background-color: #369;\n  height: 100%;\n  z-index: 90;\n  -webkit-transition: width 150ms ease;\n  transition: width 150ms ease;\n}\nright-side {\n  right: 0;\n  width: 0;\n  background-color: #369;\n  height: 100%;\n  z-index: 90;\n  -webkit-transition: width 150ms ease;\n  transition: width 150ms ease;\n}\n.main {\n  position: relative;\n  top: 35px;\n  height: calc(100% - 35px);\n  width: 100%;\n  background-color: #eee;\n}\n.main .body {\n  position: relative;\n  height: 100%;\n  margin: auto;\n}\n.main .body code-blocks {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  margin: auto;\n}\n.main .body .body_disabled {\n  display: block;\n  position: fixed;\n  top: 35px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 200;\n}\n"

/***/ },

/***/ 620:
/***/ function(module, exports) {

module.exports = ".alsu-output__item {\n  cursor: pointer;\n  font-size: 20px;\n  color: #fff;\n  padding: 10px;\n}\n.alsu-output__item:hover {\n  background-color: #19334d;\n}\n"

/***/ },

/***/ 621:
/***/ function(module, exports) {

module.exports = ".right-side {\n  height: 100%;\n  width: 100%;\n  box-shadow: -2px 0 10px #333;\n}\n.right-side__title {\n  display: inline-block;\n  padding: 5px;\n  text-transform: uppercase;\n  width: calc(100% - 10px);\n  text-align: center;\n  background-color: #333;\n  color: #eee;\n}\n"

/***/ },

/***/ 622:
/***/ function(module, exports) {

module.exports = ".toolbar {\n  width: 100%;\n  height: 35px;\n  background-color: #eee;\n  box-shadow: 0 2px 5px #333;\n  z-index: 100;\n}\nspan {\n  position: relative;\n  top: 0;\n  margin: auto;\n  padding: 5.5px;\n}\nspan:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n"

/***/ },

/***/ 623:
/***/ function(module, exports) {

module.exports = "<div class=\"block {{ block.type }} \"\n     [ngClass]=\"{\n         'selected': block.selected,\n         'disabled': block.disabled\n     }\">\n    <div class=\"connect-top\"></div>\n\n    <!-- Input -->\n    <input class=\"input\" type=\"text\"\n           [(ngModel)]=\"block.data\"\n           [disabled]=\"block.disabled\"\n           placeholder=\"{{ block.type }}\"\n    />\n\n    <!-- Buttons -->\n    <div *ngIf=\"block.selected && block.draggable\">\n        <span class=\"remove-text\"\n              (click)=\"clearText()\">\n              <i class=\"material-icons\">close</i>\n        </span>\n        <span class=\"remove-block\"\n              (click)=\"emitRemove()\">\n              <i class=\"material-icons\">delete</i>\n        </span>\n    </div>\n\n    <div class=\"connect-bottom\"></div>\n</div>\n"

/***/ },

/***/ 624:
/***/ function(module, exports) {

module.exports = "<div class=\"code-blocks layout-column\">\n    <!-- Blocks -->\n    <div class=\"blocks\" *ngFor=\"let block of list.blocks\">\n\n        <!-- Block -->\n        <block [block]=\"block\"\n               (click)=\"emitSelect(block)\"\n               (remove)=\"emitRemove()\">\n        </block>\n\n        <!-- Drag'n Drop -->\n        <span class=\"block-drag\" *ngIf=\"block.id > 1\"\n              [ngClass]=\"{'visible': block.selected}\"\n              (dragstart)=\"dragStart(block.id)\"\n              (dragend)=\"dragEnd()\"\n              draggable=\"true\">\n              <i class=\"material-icons\">arrow_forward</i>\n        </span>\n        <span class=\"block-drop\"\n              [ngClass]=\"{'selected': block.selected }\"\n              (dragover)=\"dragOver($event, block.id)\"\n              *ngIf=\"codeblocks.dragging && block.id\">\n        </span>\n\n    </div>\n</div>\n"

/***/ },

/***/ 625:
/***/ function(module, exports) {

module.exports = "<div class=\"alsu-input\" *ngFor=\"let block of blocks\">\n\n    <block [block]=\"block\"></block>\n    <span (click)=\"emitAdd(block)\">\n        <i class=\"material-icons\">add</i>\n    </span>\n\n</div>\n"

/***/ },

/***/ 626:
/***/ function(module, exports) {

module.exports = "<div class=\"left-side layout-column\" *ngIf=\"!activated\">\n\n    <div class=\"left-side__title\">Input</div>\n    <alsu-input class=\"layout-column\" (add)=\"emitAdd($event)\"></alsu-input>\n\n</div>\n"

/***/ },

/***/ 627:
/***/ function(module, exports) {

module.exports = "<toolbar [config]=\"main.config\"\n         (compile)=\"compileEvent()\">\n</toolbar>\n\n<div class=\"main layout-row\">\n    <left-side [activated]=\"main.config.activated\"\n               (add)=\"addEvent($event)\"\n               [ngClass]=\"{\n                    'side-panel': !main.config.activated\n                }\">\n    </left-side>\n\n    <div class=\"body layout-row\">\n        <code-blocks [list]=\"main['list']\"\n                     [codeblocks]=\"main['code-blocks']\"\n                     (select)=\"selectEvent($event)\"\n                     (remove)=\"removeEvent()\">\n        </code-blocks>\n        <div [ngClass]=\"{\n                'body_disabled': main.config.activated\n             }\">\n        </div>\n    </div>\n\n    <right-side [activated]=\"main.config.activated\"\n                [output]=\"main.output\"\n                [ngClass]=\"{\n                    'side-panel': main.config.activated\n                }\">\n    </right-side>\n</div>\n"

/***/ },

/***/ 628:
/***/ function(module, exports) {

module.exports = "<div class=\"alsu-output\" *ngFor=\"let item of output.data\">\n    <div class=\"alsu-output__item\">{{ item }}</div>\n</div>\n"

/***/ },

/***/ 629:
/***/ function(module, exports) {

module.exports = "<div class=\"right-side layout-column\" *ngIf=\"activated\">\n\n    <div class=\"right-side__title\">Output</div>\n    <alsu-output class=\"layout-column\" [output]=\"output\"></alsu-output>\n\n</div>\n"

/***/ },

/***/ 630:
/***/ function(module, exports) {

module.exports = "<div class=\"toolbar layout-row\">\n\n    <!-- Start/Stop - TAB -->\n    <span (click)=\"emitCompile()\">\n        <i class=\"material-icons\">{{ config.run }}</i>\n    </span>\n\n</div>\n"

/***/ },

/***/ 643:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(342);


/***/ }

},[643]);
//# sourceMappingURL=main.bundle.map