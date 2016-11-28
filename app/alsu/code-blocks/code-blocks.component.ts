import { Component } from '@angular/core';

import { CodeBlocks } from './code-blocks';
import { Block } from './block/block';

@Component({
  moduleId: module.id,
  selector: 'code-blocks',
  templateUrl: './code-blocks.html',
  styleUrls: ['./code-blocks.css']
})

export class CodeBlocksComponent {

    // expressions
    list: CodeBlocks;
    editMode: any;

    // init
    constructor() {
        this.editMode = {
            enabled: true,
            toolbarIcon: "play_arrow",
            output: []
        };
        this.list = new CodeBlocks();
    }

    // event listeners
    add(b: Block): void {
        this.list.add( b );
    }
    select(id: number): void {
        this.list.select( id );
    }
    move(id: number) {
        this.list.move( id );
    }
    remove(): void {
        this.list.remove();
    }
    compile(): void {
        if ( this.editMode.enabled ) {
            this.setEditMode(false, "stop");
            this.editMode.output = this.list.compile();
        } else {
            this.setEditMode(true, "play_arrow");
        }
    }

    // methods
    setEditMode(enable: boolean, icon: string) {
        this.editMode.enabled = enable;
        this.editMode.toolbarIcon = icon;
    }

}
