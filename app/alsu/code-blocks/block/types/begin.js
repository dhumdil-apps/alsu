var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Block } from './../block';
export var Begin = (function (_super) {
    __extends(Begin, _super);
    function Begin() {
        _super.call(this);
        this.id = -1;
        this.type = "begin";
        this.selected = false;
        this.disabled = true;
        this.draggable = false;
        this.set("BEGIN");
    }
    Begin.prototype.set = function (data) {
        this.data = data;
    };
    return Begin;
}(Block));
//# sourceMappingURL=begin.js.map