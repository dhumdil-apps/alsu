import { Component } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { CodeBlocks } from './code-blocks/code-blocks';
import { Block } from './code-blocks/block/block';
import { MainService } from './main.service';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.css']
})

export class MainComponent {

    public main: any;

    constructor(private mainService: MainService) {
        this.main = {
            "config": {
                "activated": false,
                "run": "play_arrow",
                "help": false,
                "helpType": ""
            },
            "code-blocks": {
                "input": false,
                "dragging": false,
                "draggingId": 0
            },
            "output": {
                "data": []
            },
            "list": new CodeBlocks(),
            "dummy-data": this.getData()
        };
    }

    /**
     * Ajax - get
     */
    private getData(): void {
        this.mainService
            .getDummyData()
            .subscribe(data => this.main['dummy-data'] = data[0]);
    }

    public setData(data: any): void {
        this.main['list'].dummyData(data);
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
        this.main['output'].data = this.main['list'].compile();
    }

    /**
     * Add Event
     */
    public addEvent(block: Block): void {
        this.main['list'].add(block);
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
    public selectEvent(block: Block): void {
        if (!block.selected && block.id !== 0) {
            if (block.id === -1) {
                this.main['list'].select(1);
            } else {
                this.main['list'].select(block.id);
            }
        }
    }

    /**
     * Help Event
     */
    public helpEvent(type: string): void {
        this.main['config'].helpType = type;
        this.main['config'].help = true;
    }

    /**
     * Pop-up Event
     */
    public popUpEvent(): void {
        this.main['config'].help = false;
    }
}
