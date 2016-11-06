import { Component, OnInit } from '@angular/core';
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

export class CodeBlocksComponent implements OnInit {

    public blocks: CodeBlocks;
    public codeBlocks: Block[];

    constructor (private router: Router) {
        this.blocks = new CodeBlocks(null, null, null, null);
        this.codeBlocks = [];
    }

    ngOnInit(): void {
        this.destroy();
    }

    private select(block: Block) {
        if (block !== this.blocks.i1) {
            this.blocks = new CodeBlocks(this.blocks.head, block, block.next, this.blocks.tail);
            console.log("selected", this.blocks);
        }
    }

    private updateList(): void {
        let tmpB: Block = this.blocks.head;
        this.codeBlocks = [];
        
        while ( tmpB !== null ) {
            this.codeBlocks.push(tmpB);
            tmpB = tmpB.next;
        }

        console.log("updated!", this.codeBlocks);
    }

    private toPrevious(): void {
        if (this.blocks.i1 !== this.blocks.head) {
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.i1.previous, this.blocks.i1, this.blocks.tail);
        } else {
            console.log("impossible!");
        }
    }
    private toNext(): void {
        if (this.blocks.i1 !== this.blocks.tail) {
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.i2, this.blocks.i2.next, this.blocks.tail);
        } else {
            console.log("impossible!");            
        }
    }
    private toFirst(): void {
        if (this.blocks.i1 !== this.blocks.head) {
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.head, this.blocks.head.next, this.blocks.tail);
        } else {
            console.log("nothing to do!");
        }
    }
    private toLast(): void {
        if (this.blocks.i1 !== this.blocks.tail) {
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.tail, null, this.blocks.tail);
        } else {
            console.log("nothing to do!");            
        }
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
            console.log("second added!", this.blocks);

        } else if ( this.isTail() ) {
            this.blocks = last(this.blocks);
            console.log("last added!", this.blocks);

        } else {
            this.blocks = between(this.blocks);
            console.log("between added!", this.blocks);

        }

        this.updateList();

        function second(b: CodeBlocks): CodeBlocks {
            // create and set data 
            b.i2 = new Block(data);
            b.i2.setPointers(b.head, null);
            // edit pointers
            b.head.next = b.i1 = b.tail = b.i2;

            return new CodeBlocks(b.head, b.i1, null, b.tail);
        }

        function last(b: CodeBlocks): CodeBlocks {
            // create and set data 
            b.i2 = new Block(data);
            b.i2.setPointers(b.i1, null);
            // edit pointers
            b.i1.setPointers(b.i1.previous, b.i2);
            b.i1 = b.tail = b.i2;

            return new CodeBlocks(b.head, b.i1, null, b.tail);
        }

        function between(b: CodeBlocks): CodeBlocks {
            // create and set data             
            let tmpB = new Block(data);
            tmpB.setPointers(b.i1, b.i2);
            // edit pointers
            b.i1.setPointers(b.i1.previous, tmpB);
            b.i2.setPointers(tmpB, b.i2.next);

            return new CodeBlocks(b.head, tmpB, b.i2, b.tail);
        }

    }

    private pop(): void {

        if ( this.isHead() ) {

            if ( this.isFirst() ) {
                this.destroy();
                console.log("destroyed!", this.blocks);

            } else {
                this.blocks = fromHead(this.blocks);
                console.log("fromHead poped!", this.blocks);

            }

        } else if ( this.isTail() ) {
            this.blocks = fromTail(this.blocks);
            console.log("fromTail poped!", this.blocks);

        } else {
            this.blocks = fromInBetween(this.blocks);
            console.log("fromInBetween poped!", this.blocks);

        }

        this.updateList();

        function fromHead(b: CodeBlocks) {
            return new CodeBlocks(b.i2, b.i2, b.i2.next, b.tail);
        }

        function fromTail(b: CodeBlocks) {
            return new CodeBlocks(b.head, b.i1.previous, null, b.i1.previous);
        }

        function fromInBetween(b: CodeBlocks) {
            b.i1.previous.next = b.i2;
            b.i2.previous = b.i1.previous; 
            return new CodeBlocks(b.head, b.i2, b.i2.next, b.tail);
        }

    }

    private destroy(): void {
        this.blocks = new CodeBlocks(this.blocks.head, this.blocks.i1, null, this.blocks.tail);
        this.blocks.head = this.blocks.i1 = this.blocks.tail = new Block("START");
        console.log("List initialized!", this.blocks);
        this.updateList();        
    }

}
