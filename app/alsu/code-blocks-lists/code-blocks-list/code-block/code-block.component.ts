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

  clearText(): void {
    this.block.data = '';
  }

  removeBlock(): void {
    this.remove.emit();
  }

  disabled():boolean {
    return this.block.type === 'begin' || this.block.type === 'end';
  }

  type(): string {
    return ( this.block.id === 0 ) ? "" : this.block.type;
  }

  selected(): string {
    return ( this.block.id === this.selectedId[1] ) ? "selected" : "";
  }

}
