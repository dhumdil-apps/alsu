import { Block } from './block/block';
import { Simple } from './block/types/simple';

export class CodeBlocks {

    public blocks: Block[];
    public selectedId: any; // [array-index, unique-id]
    private uniqueId: number;

    constructor() {
        this.init();
    }

    private init(): void {
        this.blocks = [];
        this.uniqueId = 3;

        this.blocks.push(new Simple('BEGIN', 'begin'));

        this.blocks.push(new Simple('Hello World!', 'write'));
        this.blocks[1].setIds(1, 2, -1);
        this.selectedId = [1, 2];

        this.blocks.push(new Simple('END', 'end'));

        console.log(this.blocks);
    }

    public select(id: number): number {
        if (this.selectedId[0] < 0) {
            // console.log("selecting - ERROR!");
            this.selectedId = [0, 1];
            return;
        }

        try {

            this.unselectSelected(this.selectedId[0]);
            this.selectedId = [this.getId(id), id];
            this.selectSelected(this.selectedId[0]);

            // console.log("selected!", this.selectedId[0]);
            return this.selectedId[0];

        } catch (err) {
            // console.log("selecting - ERROR!", err.message);
            this.init();
            return;
        }
    }

    public add(b: Block, id: number = this.selectedId[1]): void {
        if (id <= 0) {
            // console.log("adding - ERROR!");
            this.init();
            return;
        }

        try {
            let i: number = this.getId(id);

            b.id = this.uniqueId++;
            b.previous = id;
            b.next = this.blocks[i].next;

            this.blocks[this.getId(this.blocks[i].next)].previous = b.id;
            this.blocks[i].next = b.id;

            this.blocks.splice(i+1, 0, b);

            // console.log("adding!", b);
            this.select(b.id);

        } catch (err) {
            // console.log("adding - ERROR!", err.message);
            this.init();
            return;
        }
    }

    public move(id: number): void {
        if (this.selectedId[1] < 2 || id < 2) {
            // console.log("moving - ERROR!");
            this.select(id);
            return;
        }

        try {
            console.log('Moving: from', this.getId(id), 'to', this.selectedId[0]);

            let i = (this.getId(id) > this.getId(this.selectedId[1])) ? this.blocks[this.selectedId[0]].previous : this.selectedId[1];

            this.select(id);
            let b: Block = this.remove();

            this.select(i);
            this.add(b);

        } catch (err) {
            console.log('Moving - ERROR!', err.message);
            this.init();
        }
    }

    public remove(): Block {
        if (this.selectedId[1] < 2) {
            // console.log("Can't remove! (The selected block id can't be removed)", this.selectedId, this.blocks);
            this.init();
            return;
        }

        try {
            let b: Block = this.blocks[this.selectedId[0]];

            this.blocks[this.getId(b.next)].previous = b.previous;
            this.blocks[this.getId(b.previous)].next = b.next;

            this.blocks.splice(this.selectedId[0], 1);

            if (b.next !== -1) {
                this.selectedId = [this.getId(b.next), b.next];
            } else {
                this.selectedId = [this.getId(b.previous), b.previous];
            }

            this.selectSelected(this.selectedId[0]);

            // console.log("removed!", b);
            return b;

        } catch (err) {
            // console.log("removing - ERROR!", err.message);
            this.init();
        }
    }

    public compile(): any {
        let output: any = [];

        this.blocks.forEach(b => {
            b.selected = false;
            if (b.id > 0) {
                b.disabled = true;
                output.push({
                    type: b.type,
                    data: b.data
                });
            }
        });

        // console.log('Compiling...', output);
        return output;
    }

    private unselectSelected(id: number): void {
        this.blocks[id].selected = false;
        this.blocks[id].disabled = true;
    }
    private selectSelected(id: number): void {
        this.blocks[id].selected = true;
        this.blocks[id].disabled = (id === 0);
    }
    private getId(id: number): number {
        for (let i = 0; i < this.blocks.length; i++) {
            if (this.blocks[i].id === id) {
                return i;
            }
        }
        return 0;
    }

}
