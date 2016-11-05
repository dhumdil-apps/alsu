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

    blocks: CodeBlocks;
    codeblocks: Block[];

    constructor (private router: Router) {
        this.blocks = new CodeBlocks();
        this.codeblocks = [];
    }

    ngOnInit(): void {

        // for (let data of getBlocksData()) {
        //     this.add(data);
        // }

        // function getBlocksData(): any {
        //     return [
        //         'int x;',
        //         'x = 0;',
        //         'x++;',
        //     ];
        // }

    }

    // on - selected

    public toPrevious(): void {
        if (!this.blocks.isHead) {
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.index.previous, this.blocks.tail);
        }
    }
    public toNext(): void {
        if (!this.blocks.isTail) {
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.index.next, this.blocks.tail);
        }
    }
    public toFirst(): void {
        if (!this.blocks.isHead)
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.head, this.blocks.tail);
    }
    public toLast(): void {
        if (!this.blocks.isTail)
            this.blocks = new CodeBlocks(this.blocks.head, this.blocks.tail, this.blocks.tail);                
    }

    public add(data: string): void {
        
        if (this.blocks.isEmpty()) {
            console.log("adding first", data);
            first(this.blocks);
        } else if (this.blocks.isTail()) {
            console.log("adding last", data);
            this.blocks = last(this.blocks);
        } else {
            console.log("adding between", data);
            this.blocks = between(this.blocks);
        }

        this.update();

        function first(b: CodeBlocks) {
            b.head = b.index = b.tail = new Block(data);
        }

        function last(b: CodeBlocks): CodeBlocks {
            b.index.next = new Block(data);
            b.index.next.setPointers(
                b.index,
                null
            );

            return new CodeBlocks(b.head, b.tail.next, b.tail.next);
        }

        function between(b: CodeBlocks): CodeBlocks {
            let tmpBlock = new Block(data);
            tmpBlock.setPointers(
                b.index,
                b.index.next
            );

            b.index = new Block(b.index.data);
            tmpBlock.setPointers(
                b.index.previous,
                tmpBlock
            );

            b.index.next = new Block(b.index.next.data);
            tmpBlock.setPointers(
                tmpBlock,
                b.index.next.next
            );

            return new CodeBlocks(b.head, tmpBlock, b.tail);
        }
 
    }

    public pop(): void {
        if (!this.blocks.isEmpty) {
            if (this.blocks.isHead) {
                console.log("pop fromHead");
                fromHead(this.blocks);
            } else if (this.blocks.isTail) {
                console.log("pop fromTail");
                fromTail(this.blocks);
            } else {
                console.log("pop fromInBetween");
                fromInBetween(this.blocks);
            }
            this.update();        
        }

        function fromHead(b: CodeBlocks) {
            if (b.head === b.tail)
                b = new CodeBlocks();
            else
                b = new CodeBlocks(b.head.next, b.head.next, b.tail);
        }

        function fromTail(b: CodeBlocks) {
            b = new CodeBlocks(b.head, b.index.previous, b.tail.previous);
        }

        function fromInBetween(b: CodeBlocks) {
            let tmpB = new Block(b.index.next.data);
            tmpB.setPointers(
                b.index.previous,
                b.index.next.next
            );
            b.index.next = tmpB;
            b.index = tmpB;

            b = new CodeBlocks(b.head, b.index, b.tail);
        }

    }

    public destroy(): void {
        console.log("List destroyed!")
        this.blocks = new CodeBlocks();
        this.update();
    }

    update(): void {
        console.log(this.codeblocks, "updating...");            
        
        this.codeblocks = updatedList(this.blocks.head);

        function updatedList(b: Block) {
            let tmpList: Block[];
            tmpList = [];

            while (b !== null) {
                tmpList.push(b);
                b = b.next;
            }

            return tmpList;
        }

    }

}
