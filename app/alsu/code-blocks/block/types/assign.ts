import { Block } from './../block';

export class Assign extends Block {

    id: number;
    type: string;
    data: any;
    selected: boolean;
    disabled: boolean;
    draggable: boolean;

    constructor(data: any) {
        super();
        this.id = 0;
        this.type = "assign";
        this.selected = true;
        this.disabled = false;
        this.draggable = true;
        this.set(data);
    }

    public set(data: any): void {
        this.data = data;
    }

}
