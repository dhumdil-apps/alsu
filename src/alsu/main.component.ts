import { Component }   from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

import { CodeBlocks }  from './code-blocks/code-blocks';
import { Block }       from './code-blocks/block/block';

@Component({
    selector: 'main',
    templateUrl: './main.html',
    styleUrls: ['./main.css']
})

export class MainComponent {

    public main: any;

    constructor(private _cookieService: CookieService) {
        this.main = {
            'mode': {},
            'code-blocks': {},
            'input': {},
            'output': {}
        };
        this.init();
    }

    // Initialize
    private init(): void {

        // Mode
        this.main['mode'] = {
            'edit-active'   : true,
            'debug-active'  : false,
            'help-active'   : false,
            'setting-active': false,
            'popup': {
                'active': false,
                'type'  : ''
            }
        };

        // Code-Blocks
        this.main['code-blocks'] = {
            'list': new CodeBlocks(),
            'output-data': [],
            'input': false,
            'dragging': false,
            'draggingId': 0
        };

        // Load cookies if there are some...
        if (this._cookieService.getObject('blocks') && this._cookieService.getObject('unique-id')) {
            this.main['code-blocks']['list']['blocks'] = this._cookieService.getObject('blocks');
            this.main['code-blocks']['list']['uniqueId'] = this._cookieService.getObject('unique-id');
            this.main['code-blocks']['list'].select(1);
        }
    }

    /**
     *  MODES
     */
    // Debug
    public activateDebugMode(): void {
        this.main['mode']['debug-active'] = true;
        this.main['mode']['edit-active'] = false;
        this.openPopup('', '');
        this.main['code-blocks']['output-data'] = this.main['code-blocks']['list'].compile();
    }
    // Edit
    public activateEditMode(): void {
        this.main['mode']['edit-active'] = true;
        this.main['mode']['debug-active'] = false;
        this.main['code-blocks']['list'].select(1);
    }
    // Pop-Up
    public openPopup(mode: string, type: string): void {
        this.main['mode']['popup'].active = true;
        this.main['mode']['popup'].type = type;
        if (mode !== '') {
            this.main['mode'][mode] = true;
        }
    }
    public closePopup(): void {
        if (this.main['mode']['setting-active']) {
            this.main['mode']['setting-active'] = false;
        } else if (this.main['mode']['help-active']) {
            this.main['mode']['help-active'] = false;
            this.main['mode']['popup'].active = false;
        } else {
            this.activateEditMode();
            this.main['mode']['popup'].active = false;
        }
    }

    /**
     * EVENTS
     */
    // Add
    public addEvent(block: Block): void {
        this.main['code-blocks']['list'].add(block);
    }
    // Remove
    public removeEvent(): void {
        this.main['code-blocks']['list'].remove();
    }
    // Select
    public selectEvent(block: Block): void {
        if (!block.selected && block.id !== 0) {
            if (block.id === -1) {
                this.main['code-blocks']['list'].select(1);
            } else {
                this.main['code-blocks']['list'].select(block.id);
            }
        }
    }
    // Help
    public helpEvent(): void {
        this.openPopup('help-active', 'assign');
    }
    public settingEvent(): void {
        this.openPopup('setting-active', 'ajax');
    }
    public setDataEvent(data: any): void {
        this.main['code-blocks']['list'].setData(data);
        this.closePopup();
        this.main['mode']['popup'].active = false;
        this.activateEditMode();
    }

}
