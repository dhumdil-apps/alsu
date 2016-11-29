import { Block } from './../block';

export class End extends Block {

    id: number;
    type: string;
    data: any;
    selected: boolean;
    disabled: boolean;
    draggable: boolean;

    constructor() {
        super();
        this.id = -2;
        this.type = "end";
        this.selected = false;
        this.disabled = true;
        this.draggable = false;
        this.set("END");
    }

    public set(data: any): void {
        this.data = data;
    }

}
