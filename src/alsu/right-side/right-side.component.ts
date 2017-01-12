import { Component, Input } from '@angular/core';

@Component({
    selector: 'right-side',
    templateUrl: './right-side.html',
    styleUrls: ['./right-side.css']
})

export class RightSideComponent {

    @Input() activated: any;
    @Input() output: any;

}
