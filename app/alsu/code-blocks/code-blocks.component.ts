import {Component} from '@angular/core';
import { CodeBlocks } from './code-blocks';
import { Block } from './block/block';


@Component({
    moduleId: module.id,
    selector: 'code-blocks',
    templateUrl: './code-blocks.html',
    styleUrls: ['./code-blocks.css']
})

export class CodeBlocksComponent {

    // Expressions
    list: CodeBlocks;
    style: any;

    // Init
    constructor() {
        this.style = {
            editMode: true,
            toolbar: {
                run: "glyphicon-play"
            },
            output: [],
            blocks: {
                input: false,
                dragging: false,
                draggingId: 0
            }
        };
        this.list = new CodeBlocks();
    }

    // Event Listeners
    add(b: Block): void {
        this.list.add(b);
    }
    remove(): void {
        this.list.remove();
    }

    compile(): void {
        if (this.style.editMode) {
            this.setEditMode(false, "glyphicon-stop");
            this.style.output = this.list.compile();
        } else {
            this.setEditMode(true, "glyphicon-play");
            this.list.select(1);
        }
    }

    setEditMode(mode: boolean, icon: string): void {
        this.style.editMode = mode;
        this.style.toolbar.run = icon;
    }

    selectBlock(b: Block): void {
        if (!b.selected && b.id > 0) {
            this.list.select(b.id);
        }
    }

    dragStart(id: number): void {
        this.style.blocks.draggingId = id;
        this.style.blocks.dragging = true;
    }

    dragEnd(): void {
        if (this.list.selectedId[1] !== this.style.blocks.draggingId) {
            this.list.move(this.style.blocks.draggingId);
        }
        this.style.blocks.dragging = false;
    }

    dragOver(ev: any, id: number): void {
        if (id !== this.list.selectedId[1]) {
            if (id > 0) {
                ev.preventDefault();
                this.list.select(id);
            }
        }
    }

}
