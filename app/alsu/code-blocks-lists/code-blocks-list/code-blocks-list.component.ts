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
  editMode: any;
  outputData: any;

  constructor() {
    this.editMode = {
      enabled: true,
      run: "play_arrow",
      drag: ""
    };
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
    this.editMode.run = ( this.editMode.run === "play_arrow" ) ? "stop" : "play_arrow";
    this.outputData = this.list.compile();
  }

  select(block: any): string {
    this.list.selectId(block.id);
    return (block.id === this.list.selectedId[1]) ? "selected" : "";
  }

  dragStart() {
    this.editMode.drag = "drag-start";
  }
  dragOver(ev: any, id: number): void {
    if ( this.list.selectedId[1] > 0 && this.list.selectedId[1] !== id ) {
      ev.preventDefault();
      this.editMode.drag = "drag-over";
    }
  }
  dragEnd() {
    this.editMode.drag = "";
  }
  drop(ev: any, id: number): void {
    ev.preventDefault();
    this.list.move(id);
  }

}
