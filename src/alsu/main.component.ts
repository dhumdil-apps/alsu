import { Component } from '@angular/core';
import { CodeBlocks } from './code-blocks/code-blocks';
import { Block } from './code-blocks/block/block';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.css']
})

export class MainComponent {

    public main: any;

    constructor() {
        this.main = {
            "config": {
                "activated": false,
                "run": "play_arrow"
            },
            "code-blocks": {
                "input": false,
                "dragging": false,
                "draggingId": 0
            },
            "output": {
                "data": []
            },
            "list": new CodeBlocks()
        };
    }

    /**
     * Compile Event
     */
    public compileEvent(): void {
        this.isActivatedConfig() ? this.deactivateConfig() : this.activateConfig();
    }
    private isActivatedConfig(): boolean {
        return this.main['config'].activated;
    }
    private deactivateConfig(): void {
        this.main['config'].run = "play_arrow";
        this.main['config'].activated = false;
        this.main['list'].select(1);
    }
    private activateConfig(): void {
        this.main['config'].run = "stop";
        this.main['config'].activated = true;
        this.main['config'].data = this.main['list'].compile();
    }

    /**
     * Add Event
     */
    public addEvent(b: Block): void {
        this.main['list'].add(b);
    }

    /**
     * Remove Event
     */
    public removeEvent(): void {
        this.main['list'].remove();
    }

    /**
     * Select Event
     */
    public selectEvent(b: Block): void {
        if (!b.selected && b.id > 0) {
            this.main['list'].select(b.id);
        }
    }
}
