import { Block } from './../block';

export class Assign extends Block {

  id: number;
  type: string;
  data: any;

  constructor(data: any) {
    super();
    this.set(0, "assign", data);
  }

  public set(id: number, type: string, data: any): void {
    this.id = id;
    this.type = type;
    this.data = data;
  }

}
