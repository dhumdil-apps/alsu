import { Block } from './code-block/blocks/block';
import { Begin } from './code-block/blocks/types/begin';
import { End } from './code-block/blocks/types/end';

export class CodeBlocksList {

  public blocks: Block[];
  private uniqueId: number; // 0 being the default value aka not unique
  public selectedId: any; // [array-index, unique-index]

  constructor() {
    this.blocks = []; // init the 'Blocks' array
    this.uniqueId = 1; // begin from 1
    this.selectedId = [0, -1]; // selecting the 'Begin' Blocks
    this.blocks.push(new Begin());
    this.blocks.push(new End());
  }

  // adding at current position
  public add(inputData: Block): void {
    inputData.id = this.uniqueId++;

    this.blocks.splice(getPosition(this.blocks.length, this.selectedId[0]++), 0, inputData);
    this.selectedId[1] = this.blocks[this.selectedId[0]].id;

    function getPosition(len, n: number): number {
      return len > n+1 ? n+1 : n;
    }
  }


  // removing from current position
  public remove(): Block {
    let b: Block = this.blocks[this.selectedId[0]];
    if ( this.selectedId[0] > 0 && this.selectedId[0] < this.blocks.length-1 ) {
      this.blocks.splice(this.selectedId[0], 1);
      this.selectedId[1] = this.blocks[this.selectedId[0]].id;
    } else if ( this.selectedId[0] === 0 && this.selectedId[0] < this.blocks.length-2 ) {
      this.blocks.splice(++this.selectedId[0], 1);
      this.selectedId[1] = this.blocks[this.selectedId[0]].id;
    } else if ( this.selectedId[0] > 1 && this.selectedId[0] === this.blocks.length-1 ) {
      this.blocks.splice(--this.selectedId[0], 1);
      this.selectedId[1] = this.blocks[this.selectedId[0]].id;
    } else {
      return null;
    }
    return b;
  }

  // changing the current position
  public selectId(id: number): void {
    this.selectedId[0] = this.blocks.findIndex(b => b.id === id);
    this.selectedId[1] = id;
  }

  public move(id: number): void {
    let i = this.selectedId[0];
    let b = this.remove();

    if ( b !== null ) {
      this.selectId(id);
      if ( i > this.selectedId[0] && this.selectedId[0] > 0 ) {
        this.selectedId[0]--;
      }
      this.add(b);
    }

  }

  // running the code!
  public compile(): any {
    let output: any = [];
    this.blocks.forEach( b => {
      output.push(b.data);
    });
    return output;
  }

}
