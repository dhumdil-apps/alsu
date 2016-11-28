import { Block } from './block/block';
import { Begin } from './block/types/begin';
import { End } from './block/types/end';

export class CodeBlocks {

    public blocks: Block[];
    private uniqueId: number; // 0 being the default value aka not unique
    public selectedId: any; // [array-index, unique-index]

    constructor() {
        this.blocks = [];
        this.uniqueId = 1;
        this.selectedId = [0, -1];
        this.blocks.push(new Begin());
        this.blocks.push(new End());
        this.select(-1);
    }

    public add(b: Block): void {

        b.id = this.uniqueId++;
        this.blocks.splice(getPosition(this.blocks.length, this.selectedId[0]), 0, b);
        this.select( b.id );

        function getPosition(len, n: number): number {
            return len > n+1 ? n+1 : n;
        }

    }
    public move(id: number): void {

        // let i: number = this.selectedId[0];
        let b: Block = this.remove();

        if ( b !== null ) {
            this.select(id);
            // if ( i > this.selectedId[0] && this.selectedId[0] > 0 ) {
            //     this.selectedId[0]--;
            // }
            this.add(b);
        } else {
            console.log("Ups, something went wrong...");
        }

    }
    public remove(): Block {

        let b: Block = this.blocks[this.selectedId[0]];

        if ( this.blocks[this.selectedId[0]].id > 0 ) {
            this.blocks.splice(this.selectedId[0], 1);
            this.select(this.blocks[this.selectedId[0]-1].id);
            return b;
        } else {
            console.log("Ups, something went wrong...");
        }

        return null;
    }
    public select(id: number): number {

        this.blocks[this.selectedId[0]].selected = false;
        this.selectedId[0] = this.blocks.findIndex(b => b.id === id);

        if ( this.selectedId[0] === "undefined" || this.selectedId[0] === null) {
            console.log("Ups, something went wrong...");
        }

        this.blocks[this.selectedId[0]].selected = true;
        this.selectedId[1] = id;

        return this.selectedId[0];
    }
    public compile(): any {
        let output: any = [];
        this.blocks.forEach( b => {
            output.push(b.data);
        });
        return output;
    }

}
