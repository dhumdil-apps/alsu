webpackJsonp([0,3],{

/***/ 200:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block__ = __webpack_require__(300);
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
                this.setIds(0, 1, -1);
                break;
            case 'end':
                this.type = 'end';
                this.selected = false;
                this.disabled = true;
                this.draggable = false;
                this.setIds(1, -1, 0);
                break;
            default: break;
        }
    };
    return Simple;
}(__WEBPACK_IMPORTED_MODULE_0__block__["a" /* Block */]));
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/simple.js.map

/***/ },

/***/ 300:
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

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_types_simple__ = __webpack_require__(200);
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
        // total: 2
        this.uniqueId = 2;
        // 1st
        this.blocks.push(new __WEBPACK_IMPORTED_MODULE_0__block_types_simple__["a" /* Simple */]('BEGIN', 'begin'));
        this.blocks[0].setIds(0, 1, -1);
        // 2nd
        this.blocks.push(new __WEBPACK_IMPORTED_MODULE_0__block_types_simple__["a" /* Simple */]('END', 'end'));
        this.blocks[1].setIds(1, -1, 0);
        this.blocks.forEach(function (b) {
            b.selected = false;
        });
        this.selectedId = [0, 1];
        this.blocks[0].selected = true;
        console.log(this.blocks);
    };
    CodeBlocks.prototype.dummyData = function (data) {
        var _this = this;
        console.log(data);
        this.blocks = [];
        this.uniqueId = 0;
        data.forEach(function (b) {
            _this.blocks.push(new __WEBPACK_IMPORTED_MODULE_0__block_types_simple__["a" /* Simple */](b.data, b.type));
            _this.blocks[_this.uniqueId].setIds(b.previous, b.id, b.next);
            _this.blocks[_this.uniqueId].selected = false;
            _this.uniqueId++;
        });
        this.selectedId = [0, 1];
        this.blocks[0].selected = true;
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

/***/ 302:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MainService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainService = (function () {
    function MainService(http) {
        this.http = http;
        this.url = 'database/dummy_data.json'; // URL to web API
    }
    MainService.prototype.getDummyData = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    MainService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    MainService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        var errMsg;
        if (error instanceof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Response */]) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    MainService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], MainService);
    return MainService;
    var _a;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/main.service.js.map

/***/ },

/***/ 349:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 349;


/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(438);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(469);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(468);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/main.js.map

/***/ },

/***/ 458:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block__ = __webpack_require__(300);
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
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    BlockComponent.prototype.ngAfterViewInit = function () {
        var canvas = this.myBlock.nativeElement;
        this.context = canvas.getContext("2d");
        var ctx = this.context;
        ctx.lineWidth = 2;
        ctx.beginPath();
        if (this.block.type === "begin" || this.block.type === "end") {
            // rounded rectangle
            ctx.lineTo(175, 49);
            ctx.arc(25, 25, 24, Math.PI / 2, Math.PI * (1.5), false);
            ctx.lineTo(175, 1);
            ctx.arc(175, 25, 24, Math.PI * (1.5), Math.PI / 2, false);
        }
        else if (this.block.type === "assign") {
            // rectangle
            ctx.moveTo(0, 1);
            ctx.lineTo(199, 1);
            ctx.lineTo(199, 49);
            ctx.lineTo(1, 49);
            ctx.lineTo(1, 1);
        }
        else if (this.block.type === "write") {
            // parallelogram
            ctx.moveTo(25, 1);
            ctx.lineTo(199, 1);
            ctx.lineTo(175, 49);
            ctx.lineTo(1, 49);
            ctx.lineTo(25, 1);
        }
        ctx.fillStyle = "#fff";
        ctx.fill();
        ctx.stroke();
    };
    BlockComponent.prototype.emitRemove = function () {
        if (this.block.id > 0) {
            this.remove.emit();
        }
    };
    BlockComponent.prototype.clearText = function () {
        this.block.data = '';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__block__["a" /* Block */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__block__["a" /* Block */]) === 'function' && _a) || Object)
    ], BlockComponent.prototype, "block", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], BlockComponent.prototype, "remove", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])("myBlock"), 
        __metadata('design:type', Object)
    ], BlockComponent.prototype, "myBlock", void 0);
    BlockComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'block',
            template: __webpack_require__(633),
            styles: [__webpack_require__(624)]
        }), 
        __metadata('design:paramtypes', [])
    ], BlockComponent);
    return BlockComponent;
    var _a;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/block.component.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__code_blocks__ = __webpack_require__(301);
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
        this.select = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.remove = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__code_blocks__["a" /* CodeBlocks */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__code_blocks__["a" /* CodeBlocks */]) === 'function' && _a) || Object)
    ], CodeBlocksComponent.prototype, "list", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], CodeBlocksComponent.prototype, "codeblocks", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], CodeBlocksComponent.prototype, "select", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], CodeBlocksComponent.prototype, "remove", void 0);
    CodeBlocksComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'code-blocks',
            template: __webpack_require__(634),
            styles: [__webpack_require__(625)]
        }), 
        __metadata('design:paramtypes', [])
    ], CodeBlocksComponent);
    return CodeBlocksComponent;
    var _a;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/code-blocks.component.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__code_blocks_block_types_simple__ = __webpack_require__(200);
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
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.help = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
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
    AlsuInputComponent.prototype.emitHelp = function (type) {
        this.help.emit(type);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], AlsuInputComponent.prototype, "add", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], AlsuInputComponent.prototype, "help", void 0);
    AlsuInputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alsu-input',
            template: __webpack_require__(635),
            styles: [__webpack_require__(626)]
        }), 
        __metadata('design:paramtypes', [])
    ], AlsuInputComponent);
    return AlsuInputComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/alsu-input.component.js.map

/***/ },

/***/ 461:
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
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.help = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LeftSideComponent.prototype.emitAdd = function (block) {
        this.add.emit(block);
    };
    LeftSideComponent.prototype.emitHelp = function (type) {
        this.help.emit(type);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], LeftSideComponent.prototype, "activated", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], LeftSideComponent.prototype, "dummyData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], LeftSideComponent.prototype, "add", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], LeftSideComponent.prototype, "help", void 0);
    LeftSideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'left-side',
            template: __webpack_require__(636),
            styles: [__webpack_require__(627)]
        }), 
        __metadata('design:paramtypes', [])
    ], LeftSideComponent);
    return LeftSideComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/left-side.component.js.map

/***/ },

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_blocks_code_blocks__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main_service__ = __webpack_require__(302);
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
    function MainComponent(mainService, _cookieService) {
        this.mainService = mainService;
        this._cookieService = _cookieService;
        this.main = {
            "config": {
                "activated": false,
                "run": "play_arrow",
                "help": false,
                "helpType": ""
            },
            "code-blocks": {
                "input": false,
                "dragging": false,
                "draggingId": 0
            },
            "output": {
                "data": []
            },
            "list": new __WEBPACK_IMPORTED_MODULE_2__code_blocks_code_blocks__["a" /* CodeBlocks */](),
            "dummy-data": this.getData()
        };
        if (this.getCookie('list')) {
            console.log("cookies in action...", this.getCookie('list'));
            this.main['list'].blocks = this.getCookie('list')['blocks'];
            this.main['list'].selectedId = this.getCookie('list')['selectedId'];
            this.main['list'].uniqueId = this.getCookie('list')['uniqueId'];
        }
    }
    /**
     * Ajax
     */
    MainComponent.prototype.getData = function () {
        var _this = this;
        this.mainService
            .getDummyData()
            .subscribe(function (data) { return _this.main['dummy-data'] = data[0]; });
    };
    MainComponent.prototype.setData = function (data) {
        this.main['list'].dummyData(data);
    };
    /**
     * Cookies
     */
    MainComponent.prototype.getCookie = function (key) {
        return this._cookieService.getObject(key);
    };
    MainComponent.prototype.putCookie = function (key, value) {
        return this._cookieService.putObject(key, value);
    };
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
        console.log(this.getCookie('list'));
    };
    MainComponent.prototype.activateConfig = function () {
        this.main['config'].run = "stop";
        this.main['config'].activated = true;
        this.main['output'].data = this.main['list'].compile();
        this.putCookie('list', this.main['list']);
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
    /**
     * Help Event
     */
    MainComponent.prototype.helpEvent = function (type) {
        this.main['config'].helpType = type;
        this.main['config'].help = true;
    };
    /**
     * Pop-up Event
     */
    MainComponent.prototype.popUpEvent = function () {
        this.main['config'].help = false;
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'main',
            template: __webpack_require__(637),
            styles: [__webpack_require__(628)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__main_service__["a" /* MainService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__main_service__["a" /* MainService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _b) || Object])
    ], MainComponent);
    return MainComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/main.component.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__code_blocks_block_types_simple__ = __webpack_require__(200);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PopUpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopUpComponent = (function () {
    function PopUpComponent() {
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.load = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.block = [];
        // assign
        this.block.push(new __WEBPACK_IMPORTED_MODULE_1__code_blocks_block_types_simple__["a" /* Simple */]('x = 1', 'assign'));
        this.block[0].disabled = this.block[0].draggable = false;
        // write
        this.block.push(new __WEBPACK_IMPORTED_MODULE_1__code_blocks_block_types_simple__["a" /* Simple */]('Hello World!', 'write'));
        this.block[1].disabled = this.block[1].draggable = false;
    }
    PopUpComponent.prototype.emitClose = function () {
        this.close.emit();
    };
    PopUpComponent.prototype.emitLoadData = function (data) {
        this.load.emit(data);
    };
    PopUpComponent.prototype.setAssign = function () {
        this.type = 'assign';
    };
    PopUpComponent.prototype.setWrite = function () {
        this.type = 'write';
    };
    PopUpComponent.prototype.setDummyData = function () {
        this.type = 'dummy-data';
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PopUpComponent.prototype, "type", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', String)
    ], PopUpComponent.prototype, "dummyData", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], PopUpComponent.prototype, "close", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], PopUpComponent.prototype, "load", void 0);
    PopUpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pop-up',
            template: __webpack_require__(638),
            styles: [__webpack_require__(629)]
        }), 
        __metadata('design:paramtypes', [])
    ], PopUpComponent);
    return PopUpComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/pop-up.component.js.map

/***/ },

/***/ 464:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], AlsuOutputComponent.prototype, "output", void 0);
    AlsuOutputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alsu-output',
            template: __webpack_require__(639),
            styles: [__webpack_require__(630)]
        }), 
        __metadata('design:paramtypes', [])
    ], AlsuOutputComponent);
    return AlsuOutputComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/alsu-output.component.js.map

/***/ },

/***/ 465:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], RightSideComponent.prototype, "activated", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], RightSideComponent.prototype, "output", void 0);
    RightSideComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'right-side',
            template: __webpack_require__(640),
            styles: [__webpack_require__(631)]
        }), 
        __metadata('design:paramtypes', [])
    ], RightSideComponent);
    return RightSideComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/right-side.component.js.map

/***/ },

/***/ 466:
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
        this.compile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ToolbarComponent.prototype.emitCompile = function () {
        this.compile.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], ToolbarComponent.prototype, "config", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], ToolbarComponent.prototype, "compile", void 0);
    ToolbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'toolbar',
            template: __webpack_require__(641),
            styles: [__webpack_require__(632)]
        }), 
        __metadata('design:paramtypes', [])
    ], ToolbarComponent);
    return ToolbarComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/toolbar.component.js.map

/***/ },

/***/ 467:
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app',
            template: "<main></main>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/app.component.js.map

/***/ },

/***/ 468:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alsu_main_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alsu_main_service__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alsu_code_blocks_code_blocks_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__alsu_code_blocks_block_block_component__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__alsu_left_side_left_side_component__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alsu_left_side_alsu_input_alsu_input_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alsu_right_side_right_side_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__alsu_right_side_alsu_output_alsu_output_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__alsu_toolbar_toolbar_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__alsu_pop_up_pop_up_component__ = __webpack_require__(463);
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
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__alsu_main_component__["a" /* MainComponent */],
                __WEBPACK_IMPORTED_MODULE_8__alsu_code_blocks_code_blocks_component__["a" /* CodeBlocksComponent */], __WEBPACK_IMPORTED_MODULE_9__alsu_code_blocks_block_block_component__["a" /* BlockComponent */],
                __WEBPACK_IMPORTED_MODULE_10__alsu_left_side_left_side_component__["a" /* LeftSideComponent */], __WEBPACK_IMPORTED_MODULE_11__alsu_left_side_alsu_input_alsu_input_component__["a" /* AlsuInputComponent */],
                __WEBPACK_IMPORTED_MODULE_12__alsu_right_side_right_side_component__["a" /* RightSideComponent */], __WEBPACK_IMPORTED_MODULE_13__alsu_right_side_alsu_output_alsu_output_component__["a" /* AlsuOutputComponent */],
                __WEBPACK_IMPORTED_MODULE_14__alsu_toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_15__alsu_pop_up_pop_up_component__["a" /* PopUpComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_7__alsu_main_service__["a" /* MainService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/app.module.js.map

/***/ },

/***/ 469:
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

/***/ 470:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(485);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(478);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(472);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(483);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(481);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(659);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/polyfills.js.map

/***/ },

/***/ 624:
/***/ function(module, exports) {

module.exports = "canvas {\n  position: absolute;\n  top: 10px;\n  left: 50px;\n  cursor: pointer;\n}\n.input {\n  position: absolute;\n  left: 72px;\n  top: 20px;\n  width: 145px;\n  height: 20px;\n  outline: 0;\n  border: none;\n  text-align: center;\n  padding: 5px;\n  cursor: pointer;\n}\n.input[type=\"text\"]:disabled {\n  background-color: transparent;\n}\n.remove-text {\n  top: 10px;\n  right: 70px;\n  width: 18px;\n  height: 18px;\n  padding: 16px 1px;\n  color: rgba(0, 0, 0, 0.2);\n  font-size: 14px;\n}\n.remove-text:hover {\n  color: #000;\n}\n.remove-text i {\n  font-size: 18px;\n}\n.remove-block {\n  top: 10px;\n  right: 0;\n  color: rgba(0, 0, 0, 0.2);\n}\n.remove-block:hover {\n  color: #000;\n}\n.selected {\n  cursor: text;\n  background-color: transparent;\n}\n.begin,\n.end {\n  background-color: #eee;\n}\n.connect-top {\n  position: absolute;\n  left: 149px;\n  top: 0;\n  width: 2px;\n  height: 10px;\n  background-color: #333;\n}\n.connect-bottom {\n  position: absolute;\n  left: 149px;\n  top: 60px;\n  width: 2px;\n  height: 10px;\n  background-color: #333;\n}\n"

/***/ },

/***/ 625:
/***/ function(module, exports) {

module.exports = ".code-blocks {\n  width: 300px;\n  margin: auto;\n  color: #333;\n  padding-top: 50px;\n}\n.blocks {\n  position: relative;\n  width: 300px;\n  height: 70px;\n}\nspan {\n  top: 10px;\n  left: 0;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.block-drag {\n  z-index: 10;\n  display: none;\n}\n.block-drop {\n  width: 300px;\n  height: 50px;\n  background-color: rgba(0, 0, 0, 0);\n  padding: 0;\n}\n.selected {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.visible {\n  display: block;\n}\n"

/***/ },

/***/ 626:
/***/ function(module, exports) {

module.exports = ".alsu-input {\n  position: relative;\n  width: 300px;\n  height: 70px;\n}\n.add {\n  top: 10px;\n  right: 0;\n  color: #333;\n}\n.add:active {\n  color: #eee;\n}\n.help {\n  top: 10px;\n  left: 0;\n  color: rgba(0, 0, 0, 0.2);\n}\n.help:hover {\n  color: #333;\n}\n:host /deep/ block .connect-bottom,\n:host /deep/ block .connect-top {\n  visibility: hidden;\n}\n"

/***/ },

/***/ 627:
/***/ function(module, exports) {

module.exports = ".left-side {\n  height: 100%;\n  width: 100%;\n  box-shadow: 2px 0 10px #333;\n}\n.left-side__title {\n  display: inline-block;\n  padding: 5px;\n  margin-bottom: 50px;\n  text-transform: uppercase;\n  width: calc(100% - 10px);\n  text-align: center;\n  background-color: #333;\n  color: #eee;\n}\n"

/***/ },

/***/ 628:
/***/ function(module, exports) {

module.exports = "toolbar {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 35px;\n  z-index: 100;\n}\nleft-side {\n  left: 0;\n  width: 0;\n  background-color: #369;\n  height: 100%;\n  z-index: 90;\n  -webkit-transition: width 150ms ease;\n  transition: width 150ms ease;\n}\nright-side {\n  right: 0;\n  width: 0;\n  background-color: #369;\n  height: 100%;\n  z-index: 90;\n  -webkit-transition: width 150ms ease;\n  transition: width 150ms ease;\n}\n.main {\n  position: relative;\n  top: 35px;\n  height: calc(100% - 35px);\n  width: 100%;\n  background-color: #eee;\n  overflow: hidden;\n}\n.main .body {\n  position: relative;\n  height: 100%;\n  margin: auto;\n}\n.main .body code-blocks {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  min-height: 768px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n.main .body code-blocks::-webkit-scrollbar {\n  width: 0;\n}\n.main .body .body_disabled {\n  display: block;\n  position: fixed;\n  top: 35px;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 200;\n}\n"

/***/ },

/***/ 629:
/***/ function(module, exports) {

module.exports = ".pop-up {\n  position: absolute;\n  width: calc(100% - 100px);\n  height: calc(100% - 100px);\n  top: 50px;\n  left: 50px;\n  background-color: rgba(0, 0, 0, 0.1);\n  box-shadow: 2px 2px 15px 2px #333;\n  z-index: 200;\n}\n.pop-up .title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: calc(100% - 50px);\n  height: 50px;\n  padding-left: 50px;\n  background-color: #333;\n  color: #eee;\n  text-transform: uppercase;\n}\n.pop-up .content {\n  padding: 50px;\n  height: calc(100% - 100px);\n  background: #eee;\n}\n.pop-up span {\n  color: #eee;\n  position: relative;\n  top: 0;\n}\n.pop-up span:hover {\n  color: #fff;\n}\n.pop-up .block {\n  position: relative;\n  left: -50px;\n  margin: 50px 0;\n}\n.pop-up .output {\n  position: absolute;\n  top: 30px;\n  left: 350px;\n}\n.pop-up h5 {\n  padding: 0 10px;\n  cursor: pointer;\n}\n"

/***/ },

/***/ 630:
/***/ function(module, exports) {

module.exports = ".alsu-output__item {\n  cursor: pointer;\n  font-size: 20px;\n  color: #fff;\n  padding: 10px;\n}\n.alsu-output__item:hover {\n  background-color: #19334d;\n}\n"

/***/ },

/***/ 631:
/***/ function(module, exports) {

module.exports = ".right-side {\n  height: 100%;\n  width: 100%;\n  box-shadow: -2px 0 10px #333;\n}\n.right-side__title {\n  display: inline-block;\n  padding: 5px;\n  text-transform: uppercase;\n  width: calc(100% - 10px);\n  text-align: center;\n  background-color: #333;\n  color: #eee;\n}\n"

/***/ },

/***/ 632:
/***/ function(module, exports) {

module.exports = ".toolbar {\n  width: 100%;\n  height: 35px;\n  background-color: #eee;\n  box-shadow: 0 2px 5px #333;\n  z-index: 100;\n}\nspan {\n  position: relative;\n  top: 0;\n  margin: auto;\n  padding: 5.5px;\n}\nspan:active {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n"

/***/ },

/***/ 633:
/***/ function(module, exports) {

module.exports = "<!-- Shape -->\n<canvas #myBlock width=\"200\" height=\"50\"></canvas>\n<div class=\"connect-top\" *ngIf=\"block.type !== 'begin'\"></div>\n<div class=\"connect-bottom\" *ngIf=\"block.type !== 'end'\"></div>\n\n<!-- Input -->\n<input [ngClass]=\"{'selected': block.selected}\"\n       class=\"input {{ block.type }}\"\n       placeholder=\"{{ block.type }}\"\n       [disabled]=\"block.disabled\"\n       [(ngModel)]=\"block.data\"\n       type=\"text\"\n/>\n\n<!-- Buttons -->\n<div *ngIf=\"block.selected && block.draggable\">\n    <span class=\"remove-text\"\n          (click)=\"clearText()\">\n          <i class=\"material-icons\">close</i>\n    </span>\n    <span class=\"remove-block\"\n          (click)=\"emitRemove()\">\n          <i class=\"material-icons\">delete</i>\n    </span>\n</div>\n"

/***/ },

/***/ 634:
/***/ function(module, exports) {

module.exports = "<div class=\"code-blocks layout-column\">\n    <!-- Blocks -->\n    <div class=\"blocks\" *ngFor=\"let block of list.blocks\">\n\n        <!-- Block -->\n        <block [block]=\"block\"\n               (click)=\"emitSelect(block)\"\n               (remove)=\"emitRemove()\">\n        </block>\n\n        <!-- Drag'n Drop -->\n        <span class=\"block-drag\" *ngIf=\"block.id > 1\"\n              [ngClass]=\"{'visible': block.selected}\"\n              (dragstart)=\"dragStart(block.id)\"\n              (dragend)=\"dragEnd()\"\n              draggable=\"true\">\n              <i class=\"material-icons\">arrow_forward</i>\n        </span>\n        <span class=\"block-drop\"\n              [ngClass]=\"{'selected': block.selected }\"\n              (dragover)=\"dragOver($event, block.id)\"\n              *ngIf=\"codeblocks.dragging && block.id\">\n        </span>\n\n    </div>\n</div>\n"

/***/ },

/***/ 635:
/***/ function(module, exports) {

module.exports = "<div class=\"alsu-input\" *ngFor=\"let block of blocks\">\n\n    <block [block]=\"block\"></block>\n\n    <!-- Buttons -->\n    <span class=\"add\" (click)=\"emitAdd(block)\">\n        <i class=\"material-icons\">add</i>\n    </span>\n    <span class=\"help\" (click)=\"emitHelp(block.type)\">\n        <i class=\"material-icons\">help_outline</i>\n    </span>\n\n</div>\n"

/***/ },

/***/ 636:
/***/ function(module, exports) {

module.exports = "<div class=\"left-side layout-column\" *ngIf=\"!activated\">\n\n    <div class=\"left-side__title\">Input</div>\n    <alsu-input class=\"layout-column\" (add)=\"emitAdd($event)\" (help)=\"emitHelp($event)\"></alsu-input>\n\n</div>\n"

/***/ },

/***/ 637:
/***/ function(module, exports) {

module.exports = "<toolbar [config]=\"main.config\"\n         (compile)=\"compileEvent()\">\n</toolbar>\n\n<div class=\"main layout-row\">\n    <left-side [activated]=\"main.config.activated\"\n               (add)=\"addEvent($event)\"\n               (help)=\"helpEvent($event)\"\n               [ngClass]=\"{\n                    'side-panel': !main.config.activated\n                }\">\n    </left-side>\n\n    <div class=\"body layout-row\">\n        <code-blocks [list]=\"main['list']\"\n                     [codeblocks]=\"main['code-blocks']\"\n                     (select)=\"selectEvent($event)\"\n                     (remove)=\"removeEvent()\">\n        </code-blocks>\n        <div (click)=\"popUpEvent()\" [ngClass]=\"{\n                'body_disabled': main.config.activated || main['config'].help\n             }\">\n        </div>\n        <pop-up *ngIf=\"main['config'].help\"\n                [type]=\"main['config'].helpType\"\n                [dummyData]=\"main['dummy-data']\"\n                (load)=\"setData($event)\"\n                (close)=\"popUpEvent()\">\n        </pop-up>\n    </div>\n\n    <right-side [activated]=\"main.config.activated\"\n                [output]=\"main.output\"\n                [ngClass]=\"{\n                    'side-panel': main.config.activated\n                }\">\n    </right-side>\n\n</div>\n"

/***/ },

/***/ 638:
/***/ function(module, exports) {

module.exports = "<div class=\"pop-up\">\n\n    <div class=\"title layout-row\">\n        <h5 (click)=\"setAssign()\">assign</h5>\n        <h5 (click)=\"setWrite()\">write</h5>\n        <h5 (click)=\"setDummyData()\">dummy-data</h5>\n        <div class=\"flex\"></div>\n        <span (click)=\"emitClose()\">\n            <i class=\"material-icons\">close</i>\n        </span>\n    </div>\n\n    <div class=\"content layout-column\">\n\n        <div>\n            <div *ngIf=\"type === 'assign'\">\n                <p>This type of block is used to declare variables, and do some operations.</p>\n                <h4>Rules</h4>\n                <p>- Every single variable and operation must be separated with spaces (' ')</p>\n                <p>- There always must be a single equals-sign ('=')</p>\n                <p>- On left side of equals-sign must be a single variable</p>\n                <p>- The right side of equals-sign must contain only variables (declared) and operations (+ - * / %)</p>\n            </div>\n            <div *ngIf=\"type === 'write'\">\n                <p>This type of block is used print data to output</p>\n                <h4>Rules</h4>\n                <p>- Everything inside this block will be displayed on output screen</p>\n                <p>- To display a variable value:</p>\n                <p>-- must be declared</p>\n                <p>-- no other text than the variable itself must be inside this block</p>\n            </div>\n        </div>\n\n        <div class=\"layout-column\" *ngIf=\"type === 'assign'\">\n            <div class=\"block layout-row\">\n                <block [block]=\"block[0]\"></block>\n            </div>\n        </div>\n        <div class=\"layout-column\" *ngIf=\"type === 'write'\">\n            <div class=\"block layout-row\">\n                <block [block]=\"block[1]\"></block>\n                <div class=\"output\">{{ block[1].data }}</div>\n            </div>\n        </div>\n\n        <div class=\"layout-column\" *ngIf=\"type === 'dummy-data'\">\n            <h4>Dummy data:</h4>\n            <p (click)=\"emitLoadData(dummyData['empty'])\">- empty</p>\n            <p (click)=\"emitLoadData(dummyData['hello-world'])\">- hello-world</p>\n            <p (click)=\"emitLoadData(dummyData['swap-two-variables-values'])\">- swap-two-variables-values</p>\n        </div>\n\n    </div>\n\n</div>\n"

/***/ },

/***/ 639:
/***/ function(module, exports) {

module.exports = "<div class=\"alsu-output\" *ngFor=\"let item of output.data\">\n    <div class=\"alsu-output__item\">{{ item }}</div>\n</div>\n"

/***/ },

/***/ 640:
/***/ function(module, exports) {

module.exports = "<div class=\"right-side layout-column\" *ngIf=\"activated\">\n\n    <div class=\"right-side__title\">Output</div>\n    <alsu-output class=\"layout-column\" [output]=\"output\"></alsu-output>\n\n</div>\n"

/***/ },

/***/ 641:
/***/ function(module, exports) {

module.exports = "<div class=\"toolbar layout-row\">\n\n    <!-- Start/Stop - TAB -->\n    <span (click)=\"emitCompile()\">\n        <i class=\"material-icons\">{{ config.run }}</i>\n    </span>\n\n</div>\n"

/***/ },

/***/ 660:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(350);


/***/ }

},[660]);
//# sourceMappingURL=main.bundle.map