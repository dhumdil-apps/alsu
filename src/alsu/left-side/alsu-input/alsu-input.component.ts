import { Component, Output, EventEmitter } from '@angular/core';
import { Block } from '../../code-blocks/block/block';
import { Simple } from '../../code-blocks/block/types/simple';

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
        this.blocks.push(new Simple('', 'assign'));
        this.blocks.push(new Simple('', 'write'));
        this.blocks.forEach(b => {
            b.disabled = b.draggable = false;
        });
    }

    addEmit(block: Block): void {
        try {
            this.add.emit(new Simple(block.data, block.type));
        } catch (err) {
            console.log(err.message);
        }
    }
}
