import { Component, Output, EventEmitter } from '@angular/core';
import { Block } from '../block/block';
import { Simple } from '../block/types/simple';

@Component({
    moduleId: module.id,
    selector: 'input-data',
    templateUrl: 'input.html',
    styleUrls: ['./input.css']
})

export class InputComponent {

    @Output() add = new EventEmitter();

    blocks: Block[];

    constructor() {
        this.blocks = [];
        this.blocks.push(new Simple('', 'assign'));
        this.blocks.push(new Simple('', 'write'));
        this.blocks.forEach(b => {
            b.disabled = false;
            b.draggable = false;
        });
    }

    addBlock(block: Block): void {
        try {
            this.add.emit(new Simple(block.data, block.type));
        } catch (err) {
            console.log(err.message);
        }
    }
}
