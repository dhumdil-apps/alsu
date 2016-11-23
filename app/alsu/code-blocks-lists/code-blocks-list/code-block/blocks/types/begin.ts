import { Block } from './../block';

export class Begin extends Block {

  id: number;
  type: string;
  data: any;

  constructor() {
    super();
    this.set(-1, "begin", "BEGIN");
  }

  public set(id: number, type: string, data: any): void {
    this.id = id;
    this.type = type;
    this.data = data;
  }

}
