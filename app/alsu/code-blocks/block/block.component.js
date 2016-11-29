"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var BlockComponent = (function () {
    function BlockComponent() {
        this.select = new core_1.EventEmitter();
        this.move = new core_1.EventEmitter();
        this.remove = new core_1.EventEmitter();
    }
    // events
    BlockComponent.prototype.selectBlock = function () {
        if (!this.block.selected && this.block.id !== 0) {
            this.select.emit(this.block.id);
        }
    };
    BlockComponent.prototype.moveBlock = function (id) {
        this.move.emit(id);
    };
    BlockComponent.prototype.removeBlock = function () {
        this.remove.emit();
    };
    // methods
    BlockComponent.prototype.clearText = function () {
        this.block.data = '';
    };
    // drag & drop
    BlockComponent.prototype.dragStart = function () {
        this.dragging = true;
    };
    BlockComponent.prototype.dragEnd = function () {
        this.dragging = false;
    };
    BlockComponent.prototype.dragOver = function (ev, id) {
        if (id !== 0) {
            ev.preventDefault();
        }
    };
    BlockComponent.prototype.drop = function (ev, id) {
        ev.preventDefault();
        this.moveBlock(id);
    };
    __decorate([
        core_1.Input()
    ], BlockComponent.prototype, "block");
    __decorate([
        core_1.Input()
    ], BlockComponent.prototype, "style");
    __decorate([
        core_1.Output()
    ], BlockComponent.prototype, "select");
    __decorate([
        core_1.Output()
    ], BlockComponent.prototype, "move");
    __decorate([
        core_1.Output()
    ], BlockComponent.prototype, "remove");
    BlockComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'block',
            templateUrl: './block.html',
            styleUrls: ['./block.css']
        })
    ], BlockComponent);
    return BlockComponent;
}());
exports.BlockComponent = BlockComponent;
//# sourceMappingURL=block.component.js.map