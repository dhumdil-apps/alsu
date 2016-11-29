"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var code_blocks_1 = require('./code-blocks');
var CodeBlocksComponent = (function () {
    // init
    function CodeBlocksComponent() {
        this.editMode = {
            enabled: true,
            toolbarIcon: "play_arrow",
            output: []
        };
        this.list = new code_blocks_1.CodeBlocks();
    }
    // event listeners
    CodeBlocksComponent.prototype.add = function (b) {
        this.list.add(b);
    };
    CodeBlocksComponent.prototype.select = function (id) {
        this.list.select(id);
    };
    CodeBlocksComponent.prototype.move = function (id) {
        this.list.move(id);
    };
    CodeBlocksComponent.prototype.remove = function () {
        this.list.remove();
    };
    CodeBlocksComponent.prototype.compile = function () {
        if (this.editMode.enabled) {
            this.setEditMode(false, "stop");
            this.editMode.output = this.list.compile();
        }
        else {
            this.setEditMode(true, "play_arrow");
            this.list.select(-1);
        }
    };
    // methods
    CodeBlocksComponent.prototype.setEditMode = function (enable, icon) {
        this.editMode.enabled = enable;
        this.editMode.toolbarIcon = icon;
    };
    CodeBlocksComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'code-blocks',
            templateUrl: './code-blocks.html',
            styleUrls: ['./code-blocks.css']
        })
    ], CodeBlocksComponent);
    return CodeBlocksComponent;
}());
exports.CodeBlocksComponent = CodeBlocksComponent;
//# sourceMappingURL=code-blocks.component.js.map