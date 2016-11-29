import { Component, Input, Output, EventEmitter } from '@angular/core';
export var BlockComponent = (function () {
    function BlockComponent() {
        this.select = new EventEmitter();
        this.move = new EventEmitter();
        this.remove = new EventEmitter();
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
    BlockComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'block',
                    templateUrl: './block.html',
                    styleUrls: ['./block.css']
                },] },
    ];
    /** @nocollapse */
    BlockComponent.ctorParameters = [];
    BlockComponent.propDecorators = {
        'block': [{ type: Input },],
        'style': [{ type: Input },],
        'select': [{ type: Output },],
        'move': [{ type: Output },],
        'remove': [{ type: Output },],
    };
    return BlockComponent;
}());
//# sourceMappingURL=block.component.js.map