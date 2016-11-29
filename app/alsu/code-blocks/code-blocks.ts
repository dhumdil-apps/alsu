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

        let i: number;
        if ( this.blocks.length > this.selectedId[0] + 1 ) {
            i = this.selectedId[0] + 1;
        } else {
            i = this.selectedId[0]++;
        }

        this.blocks.splice(i, 0, b);
        this.select( b.id );

    }
    public move(id: number): void {

        let b: Block = this.remove();

        if ( b !== null ) {
            this.select(id);
            this.add(b);
        } else {
            console.log("Ups, something went wrong...");
        }

    }
    public remove(): Block {

        let b: Block = this.blocks[this.selectedId[0]];

        if ( this.selectedId[1] > 0 ) {

            this.blocks.splice(this.selectedId[0], 1);

            if ( this.blocks[ this.selectedId[0] ].id === -2 ) {
                this.select( --this.selectedId[0] );
            } else {
                this.select( this.selectedId[0] );
            }

            return b;

        } else {
            console.log("Ups, something went wrong...");
        }

        return null;
    }
    public select(id: number): number {

        this.blocks[this.selectedId[0]].selected = false;
        if ( id > 0 ) {
            this.blocks[this.selectedId[0]].disabled = true;
        }

        let n: number = this.blocks.length,
            i: number;
        for (i = 0; i < n; i++) {
            if ( this.blocks[i].id === id ) {
                this.selectedId = [i, id];
                break;
            }
        }

        this.blocks[this.selectedId[0]].selected = true;
        if ( id > 0 ) {
            this.blocks[this.selectedId[0]].disabled = false;
        }

        return this.selectedId[0];
    }
    public compile(): any {

        let output: any = [];

        this.blocks.forEach( b => {
            if ( b.id > 0 ) {
                b.disabled = true;
                b.selected = false;
                output.push({
                    "type": b.type,
                    "data": b.data
                });
            }
        });

        return output;
    }

}
