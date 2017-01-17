import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Block } from '../code-blocks/block/block'
import { Simple } from '../code-blocks/block/types/simple';

@Component({
    selector: 'pop-up',
    templateUrl: './pop-up.html',
    styleUrls: ['./pop-up.css']
})

export class PopUpComponent {

    @Input() type: string;
    @Output() close = new EventEmitter();

    block: Block[];

    constructor() {
        this.block = [];

        // assign
        this.block.push(new Simple('x = 1', 'assign'));
        this.block[0].disabled = this.block[0].draggable = false;

        // write
        this.block.push(new Simple('Hello World!', 'write'));
        this.block[1].disabled = this.block[1].draggable = false;
    }

    emitClose(): void {
        this.close.emit();
    }
}
