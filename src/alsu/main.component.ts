import { Component } from '@angular/core';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.css']
})

export class MainComponent {

    public main: any;

    constructor() {
        this.main = {

            // toolbar
            "config": {
                "activated": false,
                "run": "play_arrow"
            },

            // left-side
            "input": {},

            // right-side
            "output": {
                "data": [
                    {"type": "write","data": "1"},
                    {"type": "write","data": "2"},
                    {"type": "write","data": "3"}
                ]
            },

            // lists
            "lists": [
                ['1', '2', '3']
            ]

        };
    }

    /**
     * Compile Event
     */
    public compileEvent(): void {
        this.isActivatedConfig() ? this.deactivateConfig() : this.activateConfig();
        console.log('compileEvent()');
    }
    private isActivatedConfig(): boolean {
        return this.main.config.activated;
    }
    private deactivateConfig(): void {
        this.main.config.run = "play_arrow";
        this.main.config.activated = false;
    }
    private activateConfig(): void {
        this.main.config.run = "stop";
        this.main.config.activated = true;
    }

}
