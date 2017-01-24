import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'left-panel',
    templateUrl: './left-panel.html',
    styleUrls: ['./side-panel.css']
})

export class LeftPanelComponent {

    @Input() active: boolean;

    @Output() add = new EventEmitter();
    @Output() help = new EventEmitter();
    @Output() debug = new EventEmitter();

    public emitAdd(block: any): void {
        this.add.emit(block);
    }
    public emitHelp(): void {
        this.help.emit();
    }
    public emitDebug(): void {
        this.debug.emit();
    }
}
