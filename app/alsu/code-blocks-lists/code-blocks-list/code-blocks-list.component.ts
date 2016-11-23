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

  constructor() {
    this.editMode = {};
    this.editMode.enabled = true;
    this.editMode.run = "play_arrow";
    this.list = new CodeBlocksList();
  }

  add(event: Block): void {
    this.list.add(event);
  }

  remove(): void {
    this.list.remove();
  }

  // TODO: DRAG AND DROP!
  // move(steps: number): void {
  //   this.list.move(steps);
  // }

  run(): void {
    this.editMode.enabled = !this.editMode.enabled;
    this.editMode.run = this.editMode.run === "play_arrow" ? "stop" : "play_arrow";
    this.outputData = this.list.compile();
  }

}
