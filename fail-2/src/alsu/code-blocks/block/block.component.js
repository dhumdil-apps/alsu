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
var block_js_1 = require('./block.js');
var BlockComponent = (function () {
    function BlockComponent() {
    }
    BlockComponent.prototype.select = function (block) {
        if (!block.selected) {
            this.data = block.data;
            block.selected = true;
        }
    };
    BlockComponent.prototype.update = function (block) {
        block.data = this.data;
        this.cancel(block);
    };
    BlockComponent.prototype.cancel = function (block) {
        block.selected = false;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', block_js_1.Block)
    ], BlockComponent.prototype, "block", void 0);
    BlockComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'block',
            templateUrl: 'block.component.html',
            styleUrls: ['block.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BlockComponent);
    return BlockComponent;
}());
exports.BlockComponent = BlockComponent;
//# sourceMappingURL=block.component.js.map