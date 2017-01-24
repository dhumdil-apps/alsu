webpackJsonp([0,3],{

/***/ 299:
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

/***/ 300:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block__ = __webpack_require__(299);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Single; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};

var Single = (function (_super) {
    __extends(Single, _super);
    function Single(data, type) {
        _super.call(this);
        this.setType(type);
        this.setData(data);
    }
    Single.prototype.setIds = function (previous, id, next) {
        this.previous = previous;
        this.id = id;
        this.next = next;
    };
    Single.prototype.setData = function (data) {
        try {
            this.data = data;
        }
        catch (err) {
            console.log(err);
        }
    };
    Single.prototype.setType = function (type) {
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
    return Single;
}(__WEBPACK_IMPORTED_MODULE_0__block__["a" /* Block */]));
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/single.js.map

/***/ },

/***/ 301:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PopUpService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PopUpService = (function () {
    function PopUpService(http) {
        this.http = http;
        // URL to web API
        this.url = 'alsu/pop-up/dummy-data.json';
    }
    PopUpService.prototype.getData = function () {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    PopUpService.prototype.extractData = function (res) {
        var body = res.json();
        return body.data || {};
    };
    PopUpService.prototype.handleError = function (error) {
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
    PopUpService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === 'function' && _a) || Object])
    ], PopUpService);
    return PopUpService;
    var _a;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/pop-up.service.js.map

/***/ },

/***/ 343:
/***/ function(module, exports) {

module.exports = ".side-panel_active {\n  position: relative;\n  height: calc(100% - 50px);\n  width: 300px;\n  background-color: #336699;\n}\n.side-panel_active__header {\n  margin-bottom: 50px;\n}\n.side-panel_active__header__title {\n  width: 250px;\n  padding: 13px 0;\n  text-transform: uppercase;\n  font-size: 24px;\n}\n.side-panel_active__header span {\n  position: relative;\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #333333;\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n}\n.side-panel_active__header:hover span {\n  color: #eeeeee;\n}\n.side-panel_inactive {\n  position: relative;\n  height: 100%;\n  width: 50px;\n  cursor: pointer;\n  background-color: #336699;\n  -webkit-transition: all 150ms ease-in-out;\n  transition: all 150ms ease-in-out;\n}\n.side-panel_inactive:hover {\n  background-color: rgba(33, 66, 99, 0.5);\n}\n.side-panel_inactive:hover span {\n  color: #eeeeee;\n}\n.side-panel_inactive:active {\n  background-color: rgba(33, 66, 99, 0.9);\n}\n.side-panel_inactive__title {\n  position: relative;\n  top: 0;\n  padding: 0 8px 0 18px;\n  font-size: 24px;\n}\n.side-panel_inactive__button {\n  top: calc(50% - 50px);\n}\n"

/***/ },

/***/ 350:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 350;


/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(471);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(470);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(469);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/main.js.map

/***/ },

/***/ 459:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block__ = __webpack_require__(299);
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
            template: __webpack_require__(630),
            styles: [__webpack_require__(624)]
        }), 
        __metadata('design:paramtypes', [])
    ], BlockComponent);
    return BlockComponent;
    var _a;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/block.component.js.map

/***/ },

/***/ 460:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
        if (this.codeblocks.list.selectedId[1] !== this.codeblocks.draggingId) {
            this.codeblocks.list.move(this.codeblocks.draggingId);
        }
        this.codeblocks.dragging = false;
    };
    CodeBlocksComponent.prototype.dragOver = function (ev, id) {
        if (id !== this.codeblocks.list.selectedId[1]) {
            if (id > 0) {
                ev.preventDefault();
                this.codeblocks.list.select(id);
            }
        }
    };
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
            template: __webpack_require__(631),
            styles: [__webpack_require__(625)]
        }), 
        __metadata('design:paramtypes', [])
    ], CodeBlocksComponent);
    return CodeBlocksComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/code-blocks.component.js.map

/***/ },

/***/ 461:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_types_single__ = __webpack_require__(300);
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
        this.blocks.push(new __WEBPACK_IMPORTED_MODULE_0__block_types_single__["a" /* Single */]('BEGIN', 'begin'));
        this.blocks[0].setIds(0, 1, -1);
        // 2nd
        this.blocks.push(new __WEBPACK_IMPORTED_MODULE_0__block_types_single__["a" /* Single */]('END', 'end'));
        this.blocks[1].setIds(1, -1, 0);
        this.blocks.forEach(function (b) {
            b.selected = false;
        });
        this.selectedId = [0, 1];
        this.blocks[0].selected = true;
        console.log(this.blocks);
    };
    CodeBlocks.prototype.setData = function (data) {
        // console.log(data);
        var _this = this;
        this.blocks = [];
        this.uniqueId = 0;
        data.forEach(function (b) {
            _this.blocks.push(new __WEBPACK_IMPORTED_MODULE_0__block_types_single__["a" /* Single */](b.data, b.type));
            _this.blocks[_this.uniqueId].setIds(b.previous, b.id, b.next);
            _this.blocks[_this.uniqueId].selected = false;
            _this.uniqueId++;
        });
        this.selectedId = [0, 1];
        this.blocks[0].selected = true;
        // console.log(this.blocks);
        return {};
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

/***/ 462:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_blocks_code_blocks__ = __webpack_require__(461);
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
    function MainComponent(_cookieService) {
        this._cookieService = _cookieService;
        this.main = {
            'mode': {},
            'code-blocks': {},
            'input': {},
            'output': {}
        };
        this.init();
    }
    // Initialize
    MainComponent.prototype.init = function () {
        // Mode
        this.main['mode'] = {
            'edit-active': true,
            'debug-active': false,
            'help-active': false,
            'setting-active': false,
            'popup': {
                'active': false,
                'type': ''
            }
        };
        // Code-Blocks
        this.main['code-blocks'] = {
            'list': new __WEBPACK_IMPORTED_MODULE_2__code_blocks_code_blocks__["a" /* CodeBlocks */](),
            'output-data': [],
            'input': false,
            'dragging': false,
            'draggingId': 0
        };
        // Load cookies if there are some...
        if (this._cookieService.getObject('blocks') && this._cookieService.getObject('unique-id')) {
            this.main['code-blocks']['list']['blocks'] = this._cookieService.getObject('blocks');
            this.main['code-blocks']['list']['uniqueId'] = this._cookieService.getObject('unique-id');
            this.main['code-blocks']['list'].select(1);
        }
    };
    /**
     *  MODES
     */
    // Debug
    MainComponent.prototype.activateDebugMode = function () {
        this.main['mode']['debug-active'] = true;
        this.main['mode']['edit-active'] = false;
        this.openPopup('', '');
        this.main['code-blocks']['output-data'] = this.main['code-blocks']['list'].compile();
    };
    // Edit
    MainComponent.prototype.activateEditMode = function () {
        this.main['mode']['edit-active'] = true;
        this.main['mode']['debug-active'] = false;
        this.main['code-blocks']['list'].select(1);
    };
    // Pop-Up
    MainComponent.prototype.openPopup = function (mode, type) {
        this.main['mode']['popup'].active = true;
        this.main['mode']['popup'].type = type;
        if (mode !== '') {
            this.main['mode'][mode] = true;
        }
    };
    MainComponent.prototype.closePopup = function () {
        if (this.main['mode']['setting-active']) {
            this.main['mode']['setting-active'] = false;
        }
        else if (this.main['mode']['help-active']) {
            this.main['mode']['help-active'] = false;
            this.main['mode']['popup'].active = false;
        }
        else {
            this.activateEditMode();
            this.main['mode']['popup'].active = false;
        }
    };
    /**
     * EVENTS
     */
    // Add
    MainComponent.prototype.addEvent = function (block) {
        this.main['code-blocks']['list'].add(block);
    };
    // Remove
    MainComponent.prototype.removeEvent = function () {
        this.main['code-blocks']['list'].remove();
    };
    // Select
    MainComponent.prototype.selectEvent = function (block) {
        if (!block.selected && block.id !== 0) {
            if (block.id === -1) {
                this.main['code-blocks']['list'].select(1);
            }
            else {
                this.main['code-blocks']['list'].select(block.id);
            }
        }
    };
    // Help
    MainComponent.prototype.helpEvent = function () {
        this.openPopup('help-active', 'assign');
    };
    MainComponent.prototype.settingEvent = function () {
        this.openPopup('setting-active', 'ajax');
    };
    MainComponent.prototype.setDataEvent = function (data) {
        this.main['code-blocks']['list'].setData(data);
        this.closePopup();
        this.main['mode']['popup'].active = false;
        this.activateEditMode();
    };
    MainComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'main',
            template: __webpack_require__(632),
            styles: [__webpack_require__(626)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1_angular2_cookie_core__["CookieService"]) === 'function' && _a) || Object])
    ], MainComponent);
    return MainComponent;
    var _a;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/main.component.js.map

/***/ },

/***/ 463:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pop_up_service__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__ = __webpack_require__(302);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__);
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
    function PopUpComponent(_cookieService, popupService) {
        this._cookieService = _cookieService;
        this.popupService = popupService;
        this.ajax = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.close = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.text = false;
    }
    PopUpComponent.prototype.showText = function () {
        this.text = true;
    };
    PopUpComponent.prototype.setType = function (type) {
        this.mode['popup'].type = type;
    };
    // Ajax
    PopUpComponent.prototype.getDummyData = function () {
        var _this = this;
        this.popupService
            .getData()
            .subscribe(function (data) { return _this.data = data[0]; });
        // this.ajax.emit(this.data);
    };
    // Cookies
    PopUpComponent.prototype.setCookies = function () {
        this.showText();
        this._cookieService.putObject('blocks', this.blocks);
        this._cookieService.putObject('unique-id', this.uniqueId);
    };
    // Events
    PopUpComponent.prototype.emitClose = function () {
        this.close.emit();
    };
    PopUpComponent.prototype.emitAjax = function (index) {
        switch (index) {
            case 0:
                this.ajax.emit(this.data['empty']);
                break;
            case 1:
                this.ajax.emit(this.data['hello-world']);
                break;
            case 2:
                this.ajax.emit(this.data['swap-two-variables-values']);
                break;
            default: break;
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PopUpComponent.prototype, "mode", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PopUpComponent.prototype, "blocks", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], PopUpComponent.prototype, "uniqueId", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], PopUpComponent.prototype, "ajax", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], PopUpComponent.prototype, "close", void 0);
    PopUpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'pop-up',
            template: __webpack_require__(633),
            styles: [__webpack_require__(627)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_angular2_cookie_core__["CookieService"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__pop_up_service__["a" /* PopUpService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__pop_up_service__["a" /* PopUpService */]) === 'function' && _b) || Object])
    ], PopUpComponent);
    return PopUpComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/pop-up.component.js.map

/***/ },

/***/ 464:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__code_blocks_block_types_single__ = __webpack_require__(300);
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


// import { Double } from "../../code-blocks/block/types/double";
var AlsuInputComponent = (function () {
    function AlsuInputComponent() {
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.blocks = [];
        this.blocks.push(new __WEBPACK_IMPORTED_MODULE_1__code_blocks_block_types_single__["a" /* Single */]('', 'assign'));
        this.blocks.push(new __WEBPACK_IMPORTED_MODULE_1__code_blocks_block_types_single__["a" /* Single */]('', 'write'));
        this.blocks.forEach(function (b) {
            b.disabled = b.draggable = false;
        });
        // this.blocks.push(new Double('', 'if-else'));
        // this.blocks.push(new Double('', 'while'));
    }
    AlsuInputComponent.prototype.emitAdd = function (block) {
        try {
            this.add.emit(new __WEBPACK_IMPORTED_MODULE_1__code_blocks_block_types_single__["a" /* Single */](block.data, block.type));
        }
        catch (err) {
            console.log(err.message);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], AlsuInputComponent.prototype, "add", void 0);
    AlsuInputComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'alsu-input',
            template: __webpack_require__(634),
            styles: [__webpack_require__(628)]
        }), 
        __metadata('design:paramtypes', [])
    ], AlsuInputComponent);
    return AlsuInputComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/alsu-input.component.js.map

/***/ },

/***/ 465:
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
        var blocks = this.output;
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
            this.output = result;
        }
        catch (error) {
            console.log(error);
            this.output = [error];
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
            template: __webpack_require__(635),
            styles: [__webpack_require__(629)]
        }), 
        __metadata('design:paramtypes', [])
    ], AlsuOutputComponent);
    return AlsuOutputComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/alsu-output.component.js.map

/***/ },

/***/ 466:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LeftPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LeftPanelComponent = (function () {
    function LeftPanelComponent() {
        this.add = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.help = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.debug = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    LeftPanelComponent.prototype.emitAdd = function (block) {
        this.add.emit(block);
    };
    LeftPanelComponent.prototype.emitHelp = function () {
        this.help.emit();
    };
    LeftPanelComponent.prototype.emitDebug = function () {
        this.debug.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], LeftPanelComponent.prototype, "active", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], LeftPanelComponent.prototype, "add", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], LeftPanelComponent.prototype, "help", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], LeftPanelComponent.prototype, "debug", void 0);
    LeftPanelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'left-panel',
            template: __webpack_require__(636),
            styles: [__webpack_require__(343)]
        }), 
        __metadata('design:paramtypes', [])
    ], LeftPanelComponent);
    return LeftPanelComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/left-panel.component.js.map

/***/ },

/***/ 467:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RightPanelComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RightPanelComponent = (function () {
    function RightPanelComponent() {
        this.setting = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.edit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    RightPanelComponent.prototype.emitEdit = function () {
        this.edit.emit();
    };
    RightPanelComponent.prototype.emitSetting = function () {
        this.setting.emit();
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Boolean)
    ], RightPanelComponent.prototype, "active", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], RightPanelComponent.prototype, "output", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], RightPanelComponent.prototype, "setting", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], RightPanelComponent.prototype, "edit", void 0);
    RightPanelComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'right-panel',
            template: __webpack_require__(637),
            styles: [__webpack_require__(343)]
        }), 
        __metadata('design:paramtypes', [])
    ], RightPanelComponent);
    return RightPanelComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/right-panel.component.js.map

/***/ },

/***/ 468:
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
            template: "<main class=\"layout-row\"></main>"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/app.component.js.map

/***/ },

/***/ 469:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__ = __webpack_require__(305);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__alsu_main_component__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__alsu_code_blocks_code_blocks_component__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__alsu_code_blocks_block_block_component__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__alsu_side_panel_left_panel_component__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__alsu_side_panel_right_panel_component__ = __webpack_require__(467);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__alsu_side_panel_alsu_input_alsu_input_component__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alsu_side_panel_alsu_output_alsu_output_component__ = __webpack_require__(465);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__alsu_pop_up_pop_up_component__ = __webpack_require__(463);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__alsu_pop_up_pop_up_service__ = __webpack_require__(301);
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
                __WEBPACK_IMPORTED_MODULE_7__alsu_code_blocks_code_blocks_component__["a" /* CodeBlocksComponent */],
                __WEBPACK_IMPORTED_MODULE_8__alsu_code_blocks_block_block_component__["a" /* BlockComponent */],
                __WEBPACK_IMPORTED_MODULE_9__alsu_side_panel_left_panel_component__["a" /* LeftPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_11__alsu_side_panel_alsu_input_alsu_input_component__["a" /* AlsuInputComponent */],
                __WEBPACK_IMPORTED_MODULE_10__alsu_side_panel_right_panel_component__["a" /* RightPanelComponent */],
                __WEBPACK_IMPORTED_MODULE_12__alsu_side_panel_alsu_output_alsu_output_component__["a" /* AlsuOutputComponent */],
                __WEBPACK_IMPORTED_MODULE_13__alsu_pop_up_pop_up_component__["a" /* PopUpComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4_angular2_cookie_services_cookies_service__["CookieService"],
                __WEBPACK_IMPORTED_MODULE_14__alsu_pop_up_pop_up_service__["a" /* PopUpService */]
            ],
            bootstrap: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/app.module.js.map

/***/ },

/***/ 470:
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

/***/ 471:
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(655);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/martin-peter/umb/alsu-umb/src/polyfills.js.map

/***/ },

/***/ 624:
/***/ function(module, exports) {

module.exports = "canvas {\n  position: absolute;\n  top: 10px;\n  left: 50px;\n  cursor: pointer;\n}\n.input {\n  position: absolute;\n  left: 72px;\n  top: 20px;\n  width: 145px;\n  height: 20px;\n  outline: 0;\n  border: none;\n  text-align: center;\n  padding: 5px;\n  cursor: pointer;\n}\n.input[type=\"text\"]:disabled {\n  background-color: transparent;\n}\n.remove-text {\n  top: 10px;\n  right: 70px;\n  width: 18px;\n  height: 18px;\n  padding: 16px 1px;\n  color: rgba(0, 0, 0, 0.2);\n  font-size: 14px;\n}\n.remove-text:hover {\n  color: #000;\n}\n.remove-text i {\n  font-size: 18px;\n}\n.remove-block {\n  top: 10px;\n  right: 0;\n  color: rgba(0, 0, 0, 0.2);\n}\n.remove-block:hover {\n  color: #000;\n}\n.selected {\n  cursor: text;\n  background-color: transparent;\n}\n.begin,\n.end {\n  background-color: #eeeeee;\n}\n.connect-top {\n  position: absolute;\n  left: 149px;\n  top: 0;\n  width: 2px;\n  height: 10px;\n  background-color: #333333;\n}\n.connect-bottom {\n  position: absolute;\n  left: 149px;\n  top: 60px;\n  width: 2px;\n  height: 10px;\n  background-color: #333333;\n}\n"

/***/ },

/***/ 625:
/***/ function(module, exports) {

module.exports = ".code-blocks {\n  width: 300px;\n  color: #333333;\n  margin: 0 auto auto auto;\n}\n.blocks {\n  position: relative;\n  width: 300px;\n  height: 70px;\n}\nspan {\n  top: 10px;\n  left: 0;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.block-drag {\n  z-index: 10;\n  display: none;\n}\n.block-drop {\n  width: 300px;\n  height: 50px;\n  background-color: rgba(0, 0, 0, 0);\n  padding: 0;\n}\n.selected {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.visible {\n  display: block;\n}\n"

/***/ },

/***/ 626:
/***/ function(module, exports) {

module.exports = "code-blocks {\n  position: relative;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  padding: 50px 0;\n  overflow-y: scroll;\n  z-index: 100;\n  background-color: #eeeeee;\n}\nleft-panel,\nright-panel {\n  position: relative;\n  height: 100%;\n  z-index: 100;\n  background-color: #336699;\n}\npop-up {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n"

/***/ },

/***/ 627:
/***/ function(module, exports) {

module.exports = ".pop-up {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 500;\n}\n.help-mode,\n.setting-mode {\n  position: absolute;\n  top: 0;\n  width: 300px;\n  height: 100%;\n  background-color: #eeeeee;\n  box-shadow: 2px 2px 15px 2px #333333;\n  cursor: auto;\n}\n.help-mode .title,\n.setting-mode .title {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 50px;\n  background-color: #333333;\n  color: #eeeeee;\n  text-transform: uppercase;\n}\n.help-mode .content,\n.setting-mode .content {\n  position: relative;\n  top: 50px;\n  padding: 25px;\n  height: calc(100% - 100px);\n  background: #eeeeee;\n}\n.help-mode span,\n.setting-mode span {\n  color: #eeeeee;\n  position: relative;\n  top: 0;\n}\n.help-mode span:hover,\n.setting-mode span:hover {\n  color: #336699;\n}\n.help-mode .output,\n.setting-mode .output {\n  position: absolute;\n  top: 30px;\n  left: 350px;\n}\n.help-mode h3,\n.setting-mode h3 {\n  text-transform: uppercase;\n}\n.help-mode h4,\n.setting-mode h4 {\n  cursor: pointer;\n}\n.help-mode h4:hover,\n.setting-mode h4:hover {\n  color: #336699;\n}\n.help-mode h5,\n.setting-mode h5 {\n  padding: 20px;\n  cursor: pointer;\n  margin: 0;\n}\n.help-mode h5:hover,\n.setting-mode h5:hover {\n  color: #336699;\n}\n.setting-mode {\n  right: -300px;\n}\n.help-mode {\n  left: 0;\n}\n.backdrop {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.debug-mode {\n  width: calc(100% - 300px);\n}\n.debug-mode .backdrop {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n"

/***/ },

/***/ 628:
/***/ function(module, exports) {

module.exports = ".alsu-input {\n  position: relative;\n  width: 300px;\n  height: 70px;\n  margin: 25px 0;\n}\n.add {\n  top: 10px;\n  right: 0;\n  color: #333333;\n}\n.add:active {\n  color: #eeeeee;\n}\n:host /deep/ block .connect-bottom,\n:host /deep/ block .connect-top {\n  visibility: hidden;\n}\n"

/***/ },

/***/ 629:
/***/ function(module, exports) {

module.exports = ".alsu-output__item {\n  cursor: pointer;\n  font-size: 20px;\n  color: #fff;\n  padding: 10px;\n}\n.alsu-output__item:hover {\n  background-color: #19334d;\n}\n"

/***/ },

/***/ 630:
/***/ function(module, exports) {

module.exports = "<!-- Shape -->\n<canvas #myBlock width=\"200\" height=\"50\"></canvas>\n<canvas *ngIf=\"block.type === 'if-else' || block.type === 'while'\" #myBlock width=\"300\" height=\"100\"></canvas>\n\n<div class=\"connect-top\" *ngIf=\"block.type !== 'begin'\"></div>\n<div class=\"connect-bottom\" *ngIf=\"block.type !== 'end'\"></div>\n\n<!-- Input -->\n<input [ngClass]=\"{'selected': block.selected}\"\n       class=\"input {{ block.type }}\"\n       placeholder=\"{{ block.type }}\"\n       [disabled]=\"block.disabled\"\n       [(ngModel)]=\"block.data\"\n       type=\"text\"\n/>\n\n<!-- Buttons -->\n<div *ngIf=\"block.selected && block.draggable\">\n    <span class=\"remove-text\"\n          (click)=\"clearText()\">\n          <i class=\"material-icons\">close</i>\n    </span>\n    <span class=\"remove-block\"\n          (click)=\"emitRemove()\">\n          <i class=\"material-icons\">delete</i>\n    </span>\n</div>\n"

/***/ },

/***/ 631:
/***/ function(module, exports) {

module.exports = "<div class=\"code-blocks layout-column\">\n    <!-- Blocks -->\n    <div class=\"blocks\" *ngFor=\"let block of codeblocks.list.blocks\">\n\n        <!-- Block -->\n        <block [block]=\"block\"\n               (click)=\"emitSelect(block)\"\n               (remove)=\"emitRemove()\">\n        </block>\n\n        <!-- Drag'n Drop -->\n        <span class=\"block-drag\" *ngIf=\"block.id > 1\"\n              [ngClass]=\"{'visible': block.selected}\"\n              (dragstart)=\"dragStart(block.id)\"\n              (dragend)=\"dragEnd()\"\n              draggable=\"true\">\n              <i class=\"material-icons\">arrow_forward</i>\n        </span>\n        <span class=\"block-drop\"\n              [ngClass]=\"{'selected': block.selected }\"\n              (dragover)=\"dragOver($event, block.id)\"\n              *ngIf=\"codeblocks.dragging && block.id\">\n        </span>\n\n    </div>\n</div>\n"

/***/ },

/***/ 632:
/***/ function(module, exports) {

module.exports = "<!-- Backdrop/Help -->\n<pop-up      *ngIf=\"main['mode']['popup'].active\"\n             [mode]=\"main['mode']\"\n             [blocks]=\"main['code-blocks']['list']['blocks']\"\n             [uniqueId]=\"main['code-blocks']['list']['uniqueId']\"\n             (ajax)=\"setDataEvent($event)\"\n             (close)=\"closePopup()\">\n</pop-up>\n\n<!-- Input/Navigation -->\n<left-panel  [active]=\"main['mode']['edit-active']\"\n             (add)=\"addEvent($event)\"\n             (help)=\"helpEvent()\"\n             (debug)=\"activateEditMode()\">\n</left-panel>\n\n<!-- Main -->\n<code-blocks [codeblocks]=\"main['code-blocks']\"\n             (select)=\"selectEvent($event)\"\n             (remove)=\"removeEvent()\">\n</code-blocks>\n\n<!-- Output/Navigation -->\n<right-panel  [active]=\"main['mode']['debug-active']\"\n              [output]=\"main['code-blocks']['output-data']\"\n              (setting)=\"settingEvent()\"\n              (edit)=\"activateDebugMode()\">\n</right-panel>\n"

/***/ },

/***/ 633:
/***/ function(module, exports) {

module.exports = "<div class=\"pop-up\"\n     [ngClass]=\"{\n         'debug-mode': !mode['help-active']\n     }\">\n\n    <!-- Backdrop-->\n    <div class=\"backdrop\" (click)=\"emitClose()\"></div>\n    <!-- Help -->\n    <div class=\"help-mode\" *ngIf=\"mode['help-active']\">\n        <div class=\"title layout-row\">\n            <span (click)=\"emitClose()\">\n                <i class=\"material-icons\">close</i>\n            </span>\n            <div class=\"flex\"></div>\n            <h5 (click)=\"setType('assign')\">assign</h5>\n            <h5 (click)=\"setType('write')\">write</h5>\n        </div>\n\n        <div class=\"content layout-column\">\n            <div>\n                <div *ngIf=\"mode['popup'].type === 'assign'\">\n                    <h3>assign</h3>\n                    <p>This type of block is used to declare variables, and do some operations.</p>\n                    <h4 (click)=\"showText()\">Rules?</h4>\n                    <div *ngIf=\"text\">\n                        <p>- Every single variable and operation must be separated with spaces (' ')</p>\n                        <p>- There always must be a single equals-sign ('=')</p>\n                        <p>- On left side of equals-sign must be a single variable</p>\n                        <p>- The right side of equals-sign must contain only variables (declared) and operations (+ - * / %)</p>\n                    </div>\n                </div>\n                <div *ngIf=\"mode['popup'].type === 'write'\">\n                    <h3>write</h3>\n                    <p>This type of block is used print data to output</p>\n                    <h4 (click)=\"showText()\">Rules?</h4>\n                    <div *ngIf=\"text\">\n                        <p>- Everything inside this block will be displayed on output screen</p>\n                        <p>- To display a variable value:</p>\n                        <p>-- must be declared</p>\n                        <p>-- no other text than the variable itself must be inside this block</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Setting -->\n    <div class=\"setting-mode\" *ngIf=\"mode['setting-active']\">\n        <div class=\"title layout-row\">\n            <h5 (click)=\"setType('ajax')\">ajax</h5>\n            <h5 (click)=\"setType('cookies')\">cookies</h5>\n            <div class=\"flex\"></div>\n            <span (click)=\"emitClose()\">\n                <i class=\"material-icons\">close</i>\n            </span>\n        </div>\n\n        <div class=\"content layout-column\">\n            <div>\n                <div *ngIf=\"mode['popup'].type === 'ajax'\">\n                    <h3>ajax</h3>\n                    <p>Use ajax to load some dummy data.</p>\n                    <h4 (click)=\"getDummyData()\">Try it!</h4>\n                    <div *ngIf=\"data\">\n                        <h4 (click)=\"emitAjax(0)\">- Empty?</h4>\n                        <h4 (click)=\"emitAjax(1)\">- Hello World?</h4>\n                        <h4 (click)=\"emitAjax(2)\">- Swap Two Variable Values?</h4>\n                    </div>\n                </div>\n                <div *ngIf=\"mode['popup'].type === 'cookies'\">\n                    <h3>cookies</h3>\n                    <p>Use cookies to save current state of the diagram.</p>\n                    <h4 (click)=\"setCookies()\">Try it!</h4>\n                    <div *ngIf=\"text\">\n                        <p>- is it working? Refresh the page and see your work being saved!</p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>\n"

/***/ },

/***/ 634:
/***/ function(module, exports) {

module.exports = "<div class=\"alsu-input\" *ngFor=\"let block of blocks\">\n\n    <block [block]=\"block\"></block>\n\n    <!-- Buttons -->\n    <span class=\"add\" (click)=\"emitAdd(block)\">\n        <i class=\"material-icons\">add</i>\n    </span>\n\n</div>\n"

/***/ },

/***/ 635:
/***/ function(module, exports) {

module.exports = "<div class=\"alsu-output\" *ngFor=\"let item of output\">\n    <div class=\"alsu-output__item\">{{ item }}</div>\n</div>\n"

/***/ },

/***/ 636:
/***/ function(module, exports) {

module.exports = "<!-- I/O -->\n<div class=\"side-panel_active layout-column\" *ngIf=\"active\">\n    <div class=\"side-panel_active__header layout-row\" (click)=\"emitHelp()\">\n        <span class=\"side-panel_active__header__help\">\n            <i class=\"material-icons\">help_outline</i>\n        </span>\n        <span class=\"flex\"></span>\n        <span class=\"side-panel_active__header__title\" style=\"text-align: left\">Input</span>\n    </div>\n\n    <alsu-input class=\"layout-column\" (add)=\"emitAdd($event)\"></alsu-input>\n</div>\n\n<!-- Navigation -->\n<div class=\"side-panel_inactive layout-column\" *ngIf=\"!active\" (click)=\"emitDebug()\">\n    <span class=\"side-panel_inactive__button\">\n        <i class=\"material-icons\">keyboard_arrow_right</i>\n    </span>\n</div>\n"

/***/ },

/***/ 637:
/***/ function(module, exports) {

module.exports = "<!-- I/O -->\n<div class=\"side-panel_active layout-column\" *ngIf=\"active\">\n    <div class=\"side-panel_active__header layout-row\" (click)=\"emitSetting()\">\n        <span class=\"side-panel_active__header__title\" style=\"text-align: right\">Output</span>\n        <span class=\"flex\"></span>\n        <span class=\"side-panel_active__header__help\">\n            <i class=\"material-icons\">help_outline</i>\n        </span>\n    </div>\n\n    <alsu-output class=\"layout-column\" [output]=\"output\"></alsu-output>\n</div>\n\n<!-- Navigation -->\n<div class=\"side-panel_inactive layout-column\" *ngIf=\"!active\" (click)=\"emitEdit()\">\n    <span class=\"side-panel_inactive__title\">O</span>\n    <span class=\"side-panel_inactive__title\">U</span>\n    <span class=\"side-panel_inactive__title\">T</span>\n    <span class=\"side-panel_inactive__title\">P</span>\n    <span class=\"side-panel_inactive__title\">U</span>\n    <span class=\"side-panel_inactive__title\">T</span>\n    <span class=\"side-panel_inactive__button\">\n        <i class=\"material-icons\">keyboard_arrow_left</i>\n    </span>\n</div>\n"

/***/ },

/***/ 656:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(351);


/***/ }

},[656]);
//# sourceMappingURL=main.bundle.map