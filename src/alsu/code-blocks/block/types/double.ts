import { Block } from '../block';

export class Double extends Block {

    constructor(data: any, type: string) {
        super();

        this.setType(type);
        this.setData(data);
    }

    public setIds(previous: number, id: number, next: number): void {
        this.previous = previous;
        this.id = id;
        this.next = next;
    }

    public setData(data: any): void {
        try {
            // this.data = [];
            // this.data[0] = data[0];
            // this.data[1] = data[1];
            this.data = data;
        } catch (err) {
            console.log(err);
        }
    }

    private setType(type: string): void {
        switch (type) {

            case 'if-else':
                this.type = 'if-else';
                this.selected = false;
                this.disabled = true;
                this.draggable = false;
                this.setIds(0, 0, 0);
                break;

            case 'while':
                this.type = 'while';
                this.selected = false;
                this.disabled = true;
                this.draggable = false;
                this.setIds(0, 0, 0);
                break;

            default: break;
        }
    }

}
