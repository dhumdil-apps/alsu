import { Block } from './../block';

export class End extends Block {

  id: number;
  type: string;
  data: any;

  constructor() {
    super();
    this.set(-2, "end", "END");
  }

  public set(id: number, type: string, data: any): void {
    this.id = id;
    this.type = type;
    this.data = data;
  }

}
