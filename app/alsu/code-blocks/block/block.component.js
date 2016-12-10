"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
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
        core_1.Input()
    ], BlockComponent.prototype, "block");
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