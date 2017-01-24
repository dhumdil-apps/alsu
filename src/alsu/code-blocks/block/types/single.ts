import { Block } from '../block';

export class Single extends Block {

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
            this.data = data;
        } catch (err) {
            console.log(err);
        }
    }

    private setType(type: string): void {
        switch (type) {

            case 'assign':
                this.type = 'assign';
                this.selected = true;
                this.disabled = false;
                this.draggable = true;
                this.setIds(0, 0, 0);
                break;

            case 'write':
                this.type = 'write';
                this.selected = true;
                this.disabled = false;
                this.draggable = true;
                this.setIds(0, 0, 0);
                break;

            case 'begin':
                this.type = 'begin';
                this.selected = false;
                this.disabled = true;
                this.draggable = false;
                this.setIds(0, 1, -1);
                break;

            case 'end':
                this.type = 'end';
                this.selected = false;
                this.disabled = true;
                this.draggable = false;
                this.setIds(1, -1, 0);
                break;

            default: break;
        }
    }

}
