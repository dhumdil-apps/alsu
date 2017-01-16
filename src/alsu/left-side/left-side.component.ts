import { Component, Input, Output, EventEmitter } from '@angular/core';
import {Block} from "../code-blocks/block/block";

@Component({
    selector: 'left-side',
    templateUrl: './left-side.html',
    styleUrls: ['./left-side.css']
})

export class LeftSideComponent {

    @Input() activated: any;
    @Output() add = new EventEmitter();
    @Output() help = new EventEmitter();

    public emitAdd(block: Block) {
        this.add.emit(block);
    }
    public emitHelp(type: string) {
        this.help.emit(type);
    }
}
