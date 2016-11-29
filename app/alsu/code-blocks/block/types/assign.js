var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Block } from './../block';
export var Assign = (function (_super) {
    __extends(Assign, _super);
    function Assign(data) {
        _super.call(this);
        this.id = 0;
        this.type = "assign";
        this.selected = true;
        this.disabled = true;
        this.draggable = true;
        this.set(data);
    }
    Assign.prototype.set = function (data) {
        this.data = data;
    };
    return Assign;
}(Block));
//# sourceMappingURL=assign.js.map