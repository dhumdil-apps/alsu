import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'code-blocks',
    templateUrl: './code-blocks.html',
    styleUrls: ['./code-blocks.css']
})

export class CodeBlocksComponent {

    @Input() codeblocks: any;
    @Output() select = new EventEmitter();
    @Output() remove = new EventEmitter();

    /**
     * Events
     */
    public emitSelect(block: any): void {
        this.select.emit(block);
    }
    public emitRemove(): void {
        this.remove.emit();
    }

    /**
     * Drag'n Drop
     */
    public dragStart(id: number): void {
        this.codeblocks.draggingId = id;
        this.codeblocks.dragging = true;
    }
    public dragEnd(): void {
        if (this.codeblocks.list.selectedId[1] !== this.codeblocks.draggingId) {
            this.codeblocks.list.move(this.codeblocks.draggingId);
        }
        this.codeblocks.dragging = false;
    }
    public dragOver(ev: any, id: number): void {
        if (id !== this.codeblocks.list.selectedId[1]) {
            if (id > 0) {
                ev.preventDefault();
                this.codeblocks.list.select(id);
            }
        }
    }

}
