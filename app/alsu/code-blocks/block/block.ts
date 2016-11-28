export abstract class Block {

    id: number;
    type: any;
    data: any;
    selected: boolean;
    disabled: boolean;
    draggable: boolean;

    abstract set(data: any): void;

}
