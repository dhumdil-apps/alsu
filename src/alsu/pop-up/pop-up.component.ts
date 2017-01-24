import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PopUpService } from './pop-up.service';
import { CookieService } from 'angular2-cookie/core';

@Component({
    selector: 'pop-up',
    templateUrl: './pop-up.html',
    styleUrls: ['./pop-up.css']
})

export class PopUpComponent {

    @Input() mode: any;
    @Input() blocks: any;
    @Input() uniqueId: any;
    @Output() ajax = new EventEmitter();
    @Output() close = new EventEmitter();

    text: boolean = false;
    data: any;

    constructor(private _cookieService: CookieService, private popupService: PopUpService) {}

    public showText(): void {
        this.text = true;
    }
    public setType(type: string): void {
        this.mode['popup'].type = type;
    }

    // Ajax
    public getDummyData(): void {
        this.popupService
            .getData()
            .subscribe(data => this.data = data[0]);

        // this.ajax.emit(this.data);
    }

    // Cookies
    public setCookies(): void {
        this.showText();
        this._cookieService.putObject('blocks', this.blocks);
        this._cookieService.putObject('unique-id', this.uniqueId);
    }

    // Events
    public emitClose(): void {
        this.close.emit();
    }
    public emitAjax(index: number): void {
        switch (index) {
            case 0:
                this.ajax.emit(this.data['empty']);
                break;

            case 1:
                this.ajax.emit(this.data['hello-world']);
                break;

            case 2:
                this.ajax.emit(this.data['swap-two-variables-values']);
                break;

            default: break;
        }
    }

}
