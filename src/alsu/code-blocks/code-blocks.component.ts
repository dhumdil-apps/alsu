import { Component, Input } from '@angular/core';

@Component({
    selector: 'code-blocks',
    templateUrl: './code-blocks.html',
    styleUrls: ['./code-blocks.css']
})

export class CodeBlocksComponent {

    @Input() main: any;

    /**
     * Drag'n Drop
     */
    public dragStart(id: number): void {
        this.main['code-blocks'].draggingId = id;
        this.main['code-blocks'].dragging = true;
    }
    public dragEnd(): void {
        if (this.main['list'].selectedId[1] !== this.main['code-blocks'].draggingId) {
            this.main['list'].move(this.main['code-blocks'].draggingId);
        }
        this.main['code-blocks'].dragging = false;
    }
    public dragOver(ev: any, id: number): void {
        if (id !== this.main['list'].selectedId[1]) {
            if (id > 0) {
                ev.preventDefault();
                this.main['list'].select(id);
            }
        }
    }

}
