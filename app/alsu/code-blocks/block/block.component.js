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
// import { Directive, ElementRef, AfterViewInit } from '@angular/core';
var block_1 = require('./block');
// @Directive({
//     selector: 'input[type=text]'
// })
// export class FocusInput implements AfterViewInit {
//     private firstTime: boolean = true;
//     constructor(public elem: ElementRef) {
//     }
//
//     ngAfterViewInit() {
//         if (this.firstTime) {
//             this.elem.nativeElement.focus();
//             this.firstTime = false;
//         }
//     }
// }
var BlockComponent = (function () {
    function BlockComponent() {
        this.remove = new core_1.EventEmitter();
    }
    BlockComponent.prototype.removeBlock = function () {
        if (this.block.id > 0) {
            this.remove.emit();
        }
    };
    BlockComponent.prototype.clearText = function () {
        this.block.data = '';
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', block_1.Block)
    ], BlockComponent.prototype, "block", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], BlockComponent.prototype, "remove", void 0);
    BlockComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'block',
            templateUrl: './block.html',
            styleUrls: ['./block.css']
        }), 
        __metadata('design:paramtypes', [])
    ], BlockComponent);
    return BlockComponent;
}());
exports.BlockComponent = BlockComponent;
//# sourceMappingURL=block.component.js.map