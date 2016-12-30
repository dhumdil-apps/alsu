import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'toolbar',
    templateUrl: './toolbar.html',
    styleUrls: ['./toolbar.css']
})

export class ToolbarComponent {

    @Input() toolbar: any;
    @Output() compile = new EventEmitter();

    emitCompile(): void {
        this.compile.emit();
    }
}
