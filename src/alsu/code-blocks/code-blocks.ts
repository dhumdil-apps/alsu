import { Block } from './block/block.js';

export class CodeBlocks {

    head: Block;
    i1: Block;
    i2: Block;
    tail: Block;

    constructor(head: Block, i1: Block, i2: Block, tail: Block) {
        this.head = head;
        this.i1 = i1;
        this.i2 = i2;
        this.tail = tail;
    }

}
