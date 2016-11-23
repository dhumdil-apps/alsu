export abstract class Block {

  id: number;
  type: string;
  data: any;

  abstract set(id: number, type: string, data: any): void;

}
