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
var code_blocks_1 = require("./code-blocks");
var CodeBlocksComponent = (function () {
    // Init
    function CodeBlocksComponent() {
        this.style = {
            editMode: true,
            toolbar: {
                run: "glyphicon-play"
            },
            output: [],
            blocks: {
                input: false,
                dragging: false,
                draggingId: 0
            }
        };
        this.list = new code_blocks_1.CodeBlocks();
    }
    // Event Listeners
    CodeBlocksComponent.prototype.add = function (b) {
        this.list.add(b);
    };
    CodeBlocksComponent.prototype.remove = function () {
        this.list.remove();
    };
    CodeBlocksComponent.prototype.compile = function () {
        if (this.style.editMode) {
            this.setEditMode(false, "glyphicon-stop");
            this.style.output = this.list.compile();
        }
        else {
            this.setEditMode(true, "glyphicon-play");
            this.list.select(1);
        }
    };
    CodeBlocksComponent.prototype.setEditMode = function (mode, icon) {
        this.style.editMode = mode;
        this.style.toolbar.run = icon;
    };
    CodeBlocksComponent.prototype.selectBlock = function (b) {
        if (!b.selected && b.id > 0) {
            this.list.select(b.id);
        }
    };
    CodeBlocksComponent.prototype.dragStart = function (id) {
        this.style.blocks.draggingId = id;
        this.style.blocks.dragging = true;
    };
    CodeBlocksComponent.prototype.dragEnd = function () {
        if (this.list.selectedId[1] !== this.style.blocks.draggingId) {
            this.list.move(this.style.blocks.draggingId);
        }
        this.style.blocks.dragging = false;
    };
    CodeBlocksComponent.prototype.dragOver = function (ev, id) {
        if (id !== this.list.selectedId[1]) {
            if (id > 0) {
                ev.preventDefault();
                this.list.select(id);
            }
        }
    };
    return CodeBlocksComponent;
}());
CodeBlocksComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'code-blocks',
        templateUrl: './code-blocks.html',
        styleUrls: ['./code-blocks.css']
    }),
    __metadata("design:paramtypes", [])
], CodeBlocksComponent);
exports.CodeBlocksComponent = CodeBlocksComponent;
//# sourceMappingURL=code-blocks.component.js.map