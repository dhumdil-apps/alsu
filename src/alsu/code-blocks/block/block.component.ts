import { Component, Input } from '@angular/core';

import { Block } from './block.js';

@Component({
    moduleId: module.id,
    selector: 'block',
    templateUrl: 'block.component.html',
    styleUrls: ['block.component.css']
})

export class BlockComponent {
    @Input() block: Block;
    
    selectedBlock: Block;
    blockData: string;

    constructor() { }

    select(block: Block): void {
        if (this.selectedBlock != null) {
            this.cancel();
        }
        this.blockData = block.data;
        this.selectedBlock = block;
        this.selectedBlock.selected = true;
        // emmit - selected
    }

    update(): void {
        this.selectedBlock.data = this.blockData;
        this.cancel();
    }

    cancel(): void {
        this.selectedBlock.selected = false;
    }

}
