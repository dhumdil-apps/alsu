import { Begin } from './block/types/begin';
import { End } from './block/types/end';
export var CodeBlocks = (function () {
    function CodeBlocks() {
        this.blocks = [];
        this.uniqueId = 1;
        this.selectedId = [0, -1];
        this.blocks.push(new Begin());
        this.blocks.push(new End());
        this.select(-1);
    }
    CodeBlocks.prototype.add = function (b) {
        b.id = this.uniqueId++;
        var i;
        if (this.blocks.length > this.selectedId[0] + 1) {
            i = this.selectedId[0] + 1;
        }
        else {
            i = this.selectedId[0]++;
        }
        this.blocks.splice(i, 0, b);
        this.select(b.id);
    };
    CodeBlocks.prototype.move = function (id) {
        var b = this.remove();
        if (b !== null) {
            this.select(id);
            this.add(b);
        }
        else {
            console.log("Ups, something went wrong...");
        }
    };
    CodeBlocks.prototype.remove = function () {
        var b = this.blocks[this.selectedId[0]];
        if (this.selectedId[1] > 0) {
            this.blocks.splice(this.selectedId[0], 1);
            if (this.blocks[this.selectedId[0]].id === -2) {
                this.select(--this.selectedId[0]);
            }
            else {
                this.select(this.selectedId[0]);
            }
            return b;
        }
        else {
            console.log("Ups, something went wrong...");
        }
        return null;
    };
    CodeBlocks.prototype.select = function (id) {
        this.blocks[this.selectedId[0]].selected = false;
        if (id > 0) {
            this.blocks[this.selectedId[0]].disabled = true;
        }
        var n = this.blocks.length, i;
        for (i = 0; i < n; i++) {
            if (this.blocks[i].id === id) {
                this.selectedId = [i, id];
                break;
            }
        }
        this.blocks[this.selectedId[0]].selected = true;
        if (id > 0) {
            this.blocks[this.selectedId[0]].disabled = false;
        }
        return this.selectedId[0];
    };
    CodeBlocks.prototype.compile = function () {
        var output = [];
        this.blocks.forEach(function (b) {
            if (b.id > 0) {
                b.disabled = true;
                b.selected = false;
                output.push({
                    "type": b.type,
                    "data": b.data
                });
            }
        });
        return output;
    };
    return CodeBlocks;
}());
//# sourceMappingURL=code-blocks.js.map