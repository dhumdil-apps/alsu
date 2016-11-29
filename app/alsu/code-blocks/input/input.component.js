"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var assign_1 = require('./../block/types/assign');
var write_1 = require('./../block/types/write');
var InputComponent = (function () {
    function InputComponent() {
        this.add = new core_1.EventEmitter();
        this.blocks = [];
        this.blocks.push(new assign_1.Assign("assign"));
        this.blocks.push(new write_1.Write("write"));
        this.blocks.forEach(function (b) {
            b.disabled = false;
            b.draggable = false;
        });
    }
    InputComponent.prototype.addBlock = function (block) {
        var b;
        switch (block.type) {
            case 'assign':
                b = new assign_1.Assign(block.data);
                break;
            case 'write':
                b = new write_1.Write(block.data);
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
    __decorate([
        core_1.Output()
    ], InputComponent.prototype, "add");
    InputComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'input-data',
            templateUrl: './input.html',
            styleUrls: ['./input.css']
        })
    ], InputComponent);
    return InputComponent;
}());
exports.InputComponent = InputComponent;
//# sourceMappingURL=input.component.js.map