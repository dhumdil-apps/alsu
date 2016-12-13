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
var core_1 = require("@angular/core");
var simple_1 = require("./../block/types/simple");
var InputComponent = (function () {
    function InputComponent() {
        this.add = new core_1.EventEmitter();
        this.blocks = [];
        this.blocks.push(new simple_1.Simple('', 'assign'));
        this.blocks.push(new simple_1.Simple('', 'write'));
        this.blocks.forEach(function (b) {
            b.disabled = false;
            b.draggable = false;
        });
    }
    InputComponent.prototype.addBlock = function (block) {
        try {
            this.add.emit(new simple_1.Simple(block.data, block.type));
        }
        catch (err) {
            console.log(err.message);
        }
    };
    return InputComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], InputComponent.prototype, "add", void 0);
InputComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'input-data',
        templateUrl: './input.html',
        styleUrls: ['./input.css']
    }),
    __metadata("design:paramtypes", [])
], InputComponent);
exports.InputComponent = InputComponent;
//# sourceMappingURL=input.component.js.map