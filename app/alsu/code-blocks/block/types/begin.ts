import { Block } from './../block';

export class Begin extends Block {

    id: number;
    type: string;
    data: any;
    selected: boolean;
    disabled: boolean;
    draggable: boolean;

    constructor() {
        super();
        this.id = -1;
        this.type = "begin";
        this.selected = false;
        this.disabled = true;
        this.draggable = false;
        this.set("BEGIN");
    }

    public set(data: any): void {
        this.data = data;
    }

}
