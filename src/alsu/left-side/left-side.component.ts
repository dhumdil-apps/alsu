import { Component, Input } from '@angular/core';

@Component({
    selector: 'left-side',
    templateUrl: './left-side.html',
    styleUrls: ['./left-side.css']
})

export class LeftSideComponent {

    @Input() config: any;
    @Input() input: any;

}
