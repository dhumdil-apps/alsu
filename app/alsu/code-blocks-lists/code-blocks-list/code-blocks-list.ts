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

  // adding at current position to list
  public add(inputData: Block): void {
    inputData.id = this.uniqueId++;
    this.blocks.splice(this.getPosition(this.selectedId[0]++), 0, inputData);
    this.selectedId[1] = this.blocks[this.selectedId[0]].id;
  }
  private getPosition(n: number): number {
    return this.blocks.length > n+1 ? n+1 : n;
  }

  // removing from the current position from the list
  public remove(): void {
    if ( this.selectedId[0] > 0 && this.selectedId[0] < this.blocks.length-1 ) {
      this.blocks.splice(this.selectedId[0], 1);
      this.selectedId[1] = this.blocks[this.selectedId[0]].id;
    } else if ( this.selectedId[0] === 0 && this.selectedId[0] < this.blocks.length-2 ) {
      this.blocks.splice(++this.selectedId[0], 1);
      this.selectedId[1] = this.blocks[this.selectedId[0]].id;
    } else if ( this.selectedId[0] > 1 && this.selectedId[0] === this.blocks.length-1 ) {
      this.blocks.splice(--this.selectedId[0], 1);
      this.selectedId[1] = this.blocks[this.selectedId[0]].id;
    } else { }
  }

  // changing the current position
  public selectId(id: number): void {
    this.selectedId[0] = this.blocks.findIndex(b => b.id === id);
    this.selectedId[1] = id;
  }

  // moving (up/down)
  public move(direction: string): void {
    if (direction === 'up') {
      this.swap(--this.selectedId);
    } else if (direction === 'down') {
      this.swap(this.selectedId++);
    }
  }
  private swap(index: number) {
    let tmpBlock = this.blocks[index];
    this.blocks[index] = this.blocks[index+1];
    this.blocks[index+1] = tmpBlock;
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
