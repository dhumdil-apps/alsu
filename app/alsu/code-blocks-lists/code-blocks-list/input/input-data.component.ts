import { Component, Output, EventEmitter } from '@angular/core';

import { Block } from './../code-block/blocks/block';
import { Assign } from './../code-block/blocks/types/assign';

@Component({
  moduleId: module.id,
  selector: 'input-data',
  templateUrl: './input-data.html',
  styleUrls: ['./input-data.css']
})

export class InputDataComponent {

  @Output() add = new EventEmitter();

  blocks: Block[];

  constructor() {
    this.blocks = [];
    this.blocks.push(new Assign("1+1"));
    // this.blocks.push(new Read("x"));
    // this.blocks.push(new Write("7"));
  }

  select(block: Block): void {
    let b: Block;
    switch (block.type) {
      case 'assign': b = new Assign(block.data); break;
      // case 'read': b = new Read(block.data); break;
      // case 'write': b = new Write(block.data); break;
      default: b = null; break;
    }
    this.add.emit(b);
  }

}
