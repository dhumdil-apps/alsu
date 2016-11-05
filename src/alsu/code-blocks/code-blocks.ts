import { Block } from './block/block.js';

export class CodeBlocks {

    head: Block;
    index: Block;
    tail: Block;

    constructor(head: Block = null, index: Block = null, tail: Block = null) {

        this.head = head;
        if (this.head !== null) {
            this.head.previous = null;
        }

        this.index = index;

        this.tail = tail;
        if (this.tail !== null) {
            this.tail.next = null;
        }
        
    }

    public isEmpty(): boolean {
        return this.index === null;
    }

    public isHead(): boolean {
        return this.index === this.head;
    }

    public isTail(): boolean {
        return this.index === this.tail;
    }

}
