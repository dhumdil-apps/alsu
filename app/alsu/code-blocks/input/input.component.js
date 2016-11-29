import { Component, Output, EventEmitter } from '@angular/core';
import { Assign } from './../block/types/assign';
import { Write } from './../block/types/write';
export var InputComponent = (function () {
    function InputComponent() {
        this.add = new EventEmitter();
        this.blocks = [];
        this.blocks.push(new Assign("assign"));
        this.blocks.push(new Write("write"));
        this.blocks.forEach(function (b) {
            b.disabled = false;
            b.draggable = false;
        });
    }
    InputComponent.prototype.addBlock = function (block) {
        var b;
        switch (block.type) {
            case 'assign':
                b = new Assign(block.data);
                break;
            case 'write':
                b = new Write(block.data);
                break;
            default:
                b = null;
                break;
        }
        if (b !== null) {
            this.add.emit(b);
        }
        else {
            console.log("Ups, something went wrong...");
        }
    };
    InputComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'input-data',
                    templateUrl: './input.html',
                    styleUrls: ['./input.css']
                },] },
    ];
    /** @nocollapse */
    InputComponent.ctorParameters = [];
    InputComponent.propDecorators = {
        'add': [{ type: Output },],
    };
    return InputComponent;
}());
//# sourceMappingURL=input.component.js.map