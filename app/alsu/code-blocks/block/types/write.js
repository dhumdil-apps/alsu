var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
import { Block } from './../block';
export var Write = (function (_super) {
    __extends(Write, _super);
    function Write(data) {
        _super.call(this);
        this.id = 0;
        this.type = "write";
        this.selected = true;
        this.disabled = true;
        this.draggable = true;
        this.set(data);
    }
    Write.prototype.set = function (data) {
        this.data = data;
    };
    return Write;
}(Block));
//# sourceMappingURL=write.js.map