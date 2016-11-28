import { Component, Output, EventEmitter } from '@angular/core';

import { Block } from './../block/block';
import { Assign } from './../block/types/assign';

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
        this.blocks.push(new Assign("x = 5"));
        this.blocks.push(new Assign("y = 7"));
        this.blocks[0].draggable = false;
        this.blocks[1].draggable = false;
        // this.blocks.push(new Read("x"));
        // this.blocks.push(new Write("7"));
    }

    addBlock(block: Block): void {

        let b: Block;

        switch (block.type) {
            case 'assign': b = new Assign(block.data); break;
            // case 'read': b = new Read(block.data); break;
            // case 'write': b = new Write(block.data); break;
            default: b = null; break;
        }

        if ( b !== null ) {
            this.add.emit(b);
        } else {
            console.log("Ups, something went wrong...");
        }
    }

}
