import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Block } from './block';

@Component({
    selector: 'alsu-block',
    templateUrl: './alsu-block.html',
    styleUrls: ['./alsu-block.css']
})

export class BlockComponent {

    @Input() block: Block;
    @Output() remove = new EventEmitter();

    removeBlock(): void {
        if (this.block.id > 0) {
            this.remove.emit();
        }
    }

    clearText(): void {
        this.block.data = '';
    }

}
