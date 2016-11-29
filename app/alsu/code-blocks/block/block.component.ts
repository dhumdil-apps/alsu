import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Block } from './block';

@Component({
    moduleId: module.id,
    selector: 'block',
    templateUrl: './block.html',
    styleUrls: ['./block.css']
})

export class BlockComponent {

    @Input() block: Block;
    @Input() style: string;

    @Output() select = new EventEmitter();
    @Output() move = new EventEmitter();
    @Output() remove = new EventEmitter();

    // expressions
    dragging: boolean;

    // events
    selectBlock(): void {
        if ( !this.block.selected && this.block.id !== 0 ) {
            this.select.emit( this.block.id );
        }
    }
    moveBlock(id: number): void {
        this.move.emit( id );
    }
    removeBlock(): void {
        this.remove.emit();
    }

    // methods
    clearText(): void {
        this.block.data = '';
    }

    // drag & drop
    dragStart() {
        this.dragging = true;
    }
    dragEnd(): void {
        this.dragging = false;
    }
    dragOver(ev: any, id: number): void {
        if ( id !== 0 ) {
            ev.preventDefault();
        }
    }
    drop(ev: any, id: number): void {
        ev.preventDefault();
        this.moveBlock( id );
    }

}
