export abstract class Block {

    // basic info's
    id: number;
    type: any;
    data: any;

    // unique id's
    previous: number;
    next: number;

    // style attr's
    selected: boolean;
    disabled: boolean;
    draggable: boolean;

    public abstract setData(data: any): void;
    public abstract setIds(previous: number, id: number, next: number): void;

}
