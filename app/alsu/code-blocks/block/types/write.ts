import { Block } from './../block';

export class Write extends Block {

    id: number;
    type: string;
    data: any;
    selected: boolean;
    disabled: boolean;
    draggable: boolean;

    constructor(data: any) {
        super();
        this.id = 0;
        this.type = "write";
        this.selected = true;
        this.disabled = true;
        this.draggable = true;
        this.set(data);
    }

    public set(data: any): void {
        this.data = data;
    }

}
