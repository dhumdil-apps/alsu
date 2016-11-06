export class Block {

    previous: Block;
    data: string;
    next: Block;
    selected: boolean;

    constructor(data?: string) {
        this.previous = null;
        this.data = data ? data : "";
        this.next = null;
        this.selected = false;
    }

    public setPointers(previous: Block, next: Block): void {
        this.previous = previous;
        this.next = next;
    }

}
