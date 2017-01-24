import { Component, Output, EventEmitter } from '@angular/core';

import { Block }  from '../../code-blocks/block/block';
import { Single } from '../../code-blocks/block/types/single';
// import { Double } from "../../code-blocks/block/types/double";

@Component({
    selector: 'alsu-input',
    templateUrl: './alsu-input.html',
    styleUrls: ['./alsu-input.css']
})

export class AlsuInputComponent {

    @Output() add = new EventEmitter();

    blocks: Block[];

    constructor() {
        this.blocks = [];
        this.blocks.push(new Single('', 'assign'));
        this.blocks.push(new Single('', 'write'));

        this.blocks.forEach(b => {
            b.disabled = b.draggable = false;
        });

        // this.blocks.push(new Double('', 'if-else'));
        // this.blocks.push(new Double('', 'while'));
    }

    emitAdd(block: Block): void {
        try {
            this.add.emit(new Single(block.data, block.type));
        } catch (err) {
            console.log(err.message);
        }
    }

}
