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
    
    data: string;

    select(block: Block): void {
        if (!block.selected) {
            this.data = block.data;
            block.selected = true;
        }
    }

    update(block: Block): void {
        block.data = this.data;
        this.cancel(block);
    }

    cancel(block: Block): void {
        block.selected = false;
    }

}
