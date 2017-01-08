export class Block {

    previous: Block;
    next: Block;
    data: string;
    type: string;
    selected: boolean;

    constructor(previous: Block = null, next: Block = null, data: string = "", type: string = "") {
        this.set(previous, next, data, type);
    }

    public set(previous: Block, next: Block, data: string, type?: string): void {
        this.previous = previous;
        this.data = data;
        this.next = next;
        this.type = type ? type : "";
    }

}
