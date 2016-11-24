import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Block } from './blocks/block';

@Component({
  moduleId: module.id,
  selector: 'code-block',
  templateUrl: './code-block.html',
  styleUrls: ['./code-block.css']
})

export class CodeBlockComponent {

  @Input() block: Block;
  @Input() selectedId: any;
  @Output() remove = new EventEmitter();

  clear(): void {
    this.block.data = '';
  }

  removeSelected(): void {
    this.remove.emit();
  }

  // refactor!
  isDisabled():boolean {
    return this.block.type === 'begin' || this.block.type === 'end';
  }

}
