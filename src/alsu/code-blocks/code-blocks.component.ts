import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { BlockComponent } from './block/block.component.js';
import { Block } from './block/block.js';
import { CodeBlocks } from './code-blocks.js';

@Component({
    moduleId: module.id,
    selector: 'code-blocks',
    templateUrl: 'code-blocks.component.html',
    styleUrls: ['code-blocks.component.css']
})

export class CodeBlocksComponent {

    private blocks: CodeBlocks;
    private codeBlocks: Block[];
    private data: string;

    constructor (private router: Router) {
        this.blocks = new CodeBlocks(null, null, null, null);
        this.codeBlocks = [];
        this.destroy();
    }

    private pointTo(block: Block) {
        if ( !this.isPointer(block) ) {
            this.blocks = new CodeBlocks(this.blocks.head, block, block.next, this.blocks.tail);
            // console.log("pointing to", block);
        }
    }

    // just to see what's up! defenetly not efficient!!!
    private updateList(): void {
        let tmpB: Block = this.blocks.head;
        this.codeBlocks = [];

        while ( tmpB !== null ) {
            this.codeBlocks.push(tmpB);
            tmpB = tmpB.next;
        }

        // console.log("updated!", this.codeBlocks);
    }

    private swap(): void {

        if ( !this.isFirst() ) {

            if ( this.isHead() || this.isTail() ) {
                return;

            } else if (this.blocks.i1.previous !== null && this.blocks.i2.next !== null) {
                this.blocks.i1.previous.next = this.blocks.i2;
                this.blocks.i2.next.previous = this.blocks.i1;
                this.blocks.i2.previous = this.blocks.i1.previous;
                this.blocks.i1.next = this.blocks.i2.next;
                this.blocks.i1.previous = this.blocks.i2;
                this.blocks.i2.next = this.blocks.i1;
                this.blocks = new CodeBlocks(this.blocks.head, this.blocks.i1, this.blocks.i1.next, this.blocks.tail);
                // console.log(this.blocks);

                this.updateList();
            }

        }

    }

    private moveDown(): void {
        this.swap();
    }
    private moveUp(): void {
        if (this.blocks.i1.previous.previous !== null) {
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.i1.previous, this.blocks.i1, this.blocks.tail);
            this.swap();
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.i1.previous, this.blocks.i1, this.blocks.tail);        
        }
    }

    private toPrevious(): void {
        if (this.blocks.i1 !== this.blocks.head) {
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.i1.previous, this.blocks.i1, this.blocks.tail);
        }
    }
    private toNext(): void {
        if (this.blocks.i1 !== this.blocks.tail) {
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.i2, this.blocks.i2.next, this.blocks.tail);
        }
    }
    private toFirst(): void {
        if (this.blocks.i1 !== this.blocks.head) {
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.head, this.blocks.head.next, this.blocks.tail);
        }
    }
    private toLast(): void {
        if (this.blocks.i1 !== this.blocks.tail) {
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.tail, null, this.blocks.tail);
        }
    }

    private isPointer(block: Block) {
        return this.blocks.i1 === block;
    }
    private isFirst(): boolean {
        return this.blocks.head === this.blocks.tail;
    }
    private isTail(): boolean {
        return this.blocks.i1 === this.blocks.tail;
    }
    private isEmpty(): boolean {
        return !this.blocks.i1 === null;
    }
    private isHead(): boolean {
        return this.blocks.i1 === this.blocks.head;
    }

    private add(data: string): void {
        
        if ( this.isFirst() ) {
            this.blocks = second(this.blocks);
            // console.log("second added!", this.blocks);

        } else if ( this.isTail() ) {
            this.blocks = last(this.blocks);
            // console.log("last added!", this.blocks);

        } else {
            this.blocks = between(this.blocks);
            // console.log("between added!", this.blocks);

        }

        this.updateList();

        function second(b: CodeBlocks): CodeBlocks {
            b.i2 = new Block(data);
            b.i2.setPointers(b.head, null);
            b.head.next = b.i1 = b.tail = b.i2;
            return new CodeBlocks(b.head, b.i1, null, b.tail);
        }

        function last(b: CodeBlocks): CodeBlocks {
            b.i2 = new Block(data);
            b.i2.setPointers(b.i1, null);
            b.i1.setPointers(b.i1.previous, b.i2);
            b.i1 = b.tail = b.i2;
            return new CodeBlocks(b.head, b.i1, null, b.tail);
        }

        function between(b: CodeBlocks): CodeBlocks {
            let tmpB = new Block(data);
            tmpB.setPointers(b.i1, b.i2);
            b.i1.setPointers(b.i1.previous, tmpB);
            b.i2.setPointers(tmpB, b.i2.next);
            return new CodeBlocks(b.head, tmpB, b.i2, b.tail);
        }

    }

    private pop(): void {

        if ( this.isHead() ) {

            if ( this.isFirst() ) {
                this.destroy();
                // console.log("destroyed!", this.blocks);

            } else {
                this.blocks = fromHead(this.blocks);
                // console.log("fromHead poped!", this.blocks);

            }

        } else if ( this.isTail() ) {
            this.blocks = fromTail(this.blocks);
            // console.log("fromTail poped!", this.blocks);

        } else {
            this.blocks = fromInBetween(this.blocks);
            // console.log("fromInBetween poped!", this.blocks);

        }

        this.updateList();

        function fromHead(b: CodeBlocks) {
            return new CodeBlocks(b.i2, b.i2, b.i2.next, b.tail);
        }

        function fromTail(b: CodeBlocks) {
            b.i1.previous.setPointers(b.i1.previous.previous, null);
            return new CodeBlocks(b.head, b.i1.previous, null, b.i1.previous);
        }

        function fromInBetween(b: CodeBlocks) {
            b.i1.previous.next = b.i2;
            b.i2.previous = b.i1.previous; 
            return new CodeBlocks(b.head, b.i2, b.i2.next, b.tail);
        }

    }

    private destroy(): void {
        this.blocks = new CodeBlocks(this.blocks.head, this.blocks.i1, this.blocks.i2, this.blocks.tail);
        // this.blocks.i2 = new Block("END");
        this.blocks.head = this.blocks.i1 = this.blocks.tail = new Block("START");
        this.add('END');
        // console.log("List initialized!", this.blocks);
        this.updateList();        
    }

}
