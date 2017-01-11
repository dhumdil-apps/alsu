import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Block } from './block';

@Component({
    selector: 'block',
    templateUrl: './block.html',
    styleUrls: ['./block.css']
})

export class BlockComponent {

    @Input() block: Block;
    @Output() remove = new EventEmitter();

    removeEmit(): void {
        if (this.block.id > 0) {
            this.remove.emit();
        }
    }

    clearText(): void {
        this.block.data = '';
    }

}
