"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var block_1 = require("./../block");
var Simple = (function (_super) {
    __extends(Simple, _super);
    function Simple(data, type) {
        var _this = _super.call(this) || this;
        _this.setType(type);
        _this.setData(data);
        return _this;
    }
    Simple.prototype.setIds = function (previous, id, next) {
        this.previous = previous;
        this.id = id;
        this.next = next;
    };
    Simple.prototype.setData = function (data) {
        try {
            this.data = data;
        }
        catch (err) {
            console.log(err);
        }
    };
    // types: read, write, assign, begin, end....
    Simple.prototype.setType = function (type) {
        switch (type) {
            case 'assign':
                this.type = 'assign';
                this.selected = true;
                this.disabled = false;
                this.draggable = true;
                this.setIds(0, 0, 0);
                break;
            case 'write':
                this.type = 'write';
                this.selected = true;
                this.disabled = false;
                this.draggable = true;
                this.setIds(0, 0, 0);
                break;
            case 'begin':
                this.type = 'begin';
                this.selected = false;
                this.disabled = true;
                this.draggable = false;
                this.setIds(0, 1, 2);
                break;
            case 'end':
                this.type = 'end';
                this.selected = false;
                this.disabled = true;
                this.draggable = false;
                this.setIds(2, -1, 0);
                break;
            default: break;
        }
    };
    return Simple;
}(block_1.Block));
exports.Simple = Simple;
//# sourceMappingURL=simple.js.map