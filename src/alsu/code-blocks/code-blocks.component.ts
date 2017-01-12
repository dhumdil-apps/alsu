import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CodeBlocks } from './code-blocks';
import { Block } from './block/block';

@Component({
    selector: 'code-blocks',
    templateUrl: './code-blocks.html',
    styleUrls: ['./code-blocks.css']
})

export class CodeBlocksComponent {

    @Input() list: CodeBlocks;
    @Input() codeblocks: any;
    @Output() select = new EventEmitter();
    @Output() remove = new EventEmitter();

    /**
     * Events
     */
    public emitSelect(block: Block): void {
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
        if (this.list.selectedId[1] !== this.codeblocks.draggingId) {
            this.list.move(this.codeblocks.draggingId);
        }
        this.codeblocks.dragging = false;
    }
    public dragOver(ev: any, id: number): void {
        if (id !== this.list.selectedId[1]) {
            if (id > 0) {
                ev.preventDefault();
                this.list.select(id);
            }
        }
    }

}
