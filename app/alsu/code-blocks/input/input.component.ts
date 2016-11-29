import { Component, Output, EventEmitter } from '@angular/core';

import { Block } from './../block/block';
import { Assign } from './../block/types/assign';
import { Write } from './../block/types/write';

@Component({
    moduleId: module.id,
    selector: 'input-data',
    templateUrl: './input.html',
    styleUrls: ['./input.css']
})

export class InputComponent {

    @Output() add = new EventEmitter();

    blocks: Block[];

    constructor() {
        this.blocks = [];
        this.blocks.push(new Assign("assign"));
        this.blocks.push(new Write("write"));
        this.blocks.forEach(b => {
            b.disabled = false;
            b.draggable = false;
        });
    }

    addBlock(block: Block): void {

        let b: Block;

        switch (block.type) {
            case 'assign': b = new Assign(block.data); break;
            case 'write': b = new Write(block.data); break;
            default: b = null; break;
        }

        if ( b !== null ) {
            this.add.emit(b);
        } else {
            console.log("Ups, something went wrong...");
        }
    }

}
