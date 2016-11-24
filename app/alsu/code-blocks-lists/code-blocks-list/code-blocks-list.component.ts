import { Component } from '@angular/core';

import { CodeBlocksList } from './code-blocks-list';
import { Block } from './code-block/blocks/block';

@Component({
  moduleId: module.id,
  selector: 'code-blocks-list',
  templateUrl: './code-blocks-list.html',
  styleUrls: ['./code-blocks-list.css']
})

export class CodeBlocksListComponent {

  list: CodeBlocksList;
  outputData: any;
  editMode: any;
  dragging: boolean;

  constructor() {
    this.editMode = {
      enabled: true,
      run: "play_arrow"
    };
    this.dragging = false;
    this.list = new CodeBlocksList();
  }

  add(event: Block): void {
    this.list.add(event);
  }

  remove(): void {
    this.list.remove();
  }

  run(): void {
    this.editMode.enabled = !this.editMode.enabled;
    this.editMode.run = this.editMode.run === "play_arrow" ? "stop" : "play_arrow";
    this.outputData = this.list.compile();
  }

  dragStart() {
    this.dragging = true;
  }
  dragOver(ev, id): void {
    if ( this.list.selectedId[1] > 0 && this.list.selectedId[1] !== id ) {
      ev.preventDefault();
      // highlight!
    }
  }
  dragEnd() {
    this.dragging = false;
  }
  drop(ev, id): void {
    ev.preventDefault();
    console.log(id);
    this.list.move(id);
  }

}
