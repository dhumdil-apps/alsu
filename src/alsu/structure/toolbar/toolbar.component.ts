import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'toolbar',
    templateUrl: './toolbar.html',
    styleUrls: ['./toolbar.css']
})

export class ToolbarComponent {

    @Input() config: any;
    @Output() compile = new EventEmitter();

    emitCompile(): void {
        this.compile.emit();
    }
}
