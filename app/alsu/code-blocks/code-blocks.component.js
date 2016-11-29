import { Component } from '@angular/core';
import { CodeBlocks } from './code-blocks';
export var CodeBlocksComponent = (function () {
    // init
    function CodeBlocksComponent() {
        this.editMode = {
            enabled: true,
            toolbarIcon: "play_arrow",
            output: []
        };
        this.list = new CodeBlocks();
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
    CodeBlocksComponent.decorators = [
        { type: Component, args: [{
                    moduleId: module.id,
                    selector: 'code-blocks',
                    templateUrl: './code-blocks.html',
                    styleUrls: ['./code-blocks.css']
                },] },
    ];
    /** @nocollapse */
    CodeBlocksComponent.ctorParameters = [];
    return CodeBlocksComponent;
}());
//# sourceMappingURL=code-blocks.component.js.map