import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'right-panel',
    templateUrl: './right-panel.html',
    styleUrls: ['./side-panel.css']
})

export class RightPanelComponent {

    @Input() active: boolean;
    @Input() output: any;

    @Output() setting = new EventEmitter();
    @Output() edit = new EventEmitter();

    public emitEdit(): void {
        this.edit.emit();
    }
    public emitSetting(): void {
        this.setting.emit();
    }

}
