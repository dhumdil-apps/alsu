import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { Directive, ElementRef, AfterViewInit } from '@angular/core';
import { Block } from './block';

// @Directive({
//     selector: 'input[type=text]'
// })
// export class FocusInput implements AfterViewInit {
//     private firstTime: boolean = true;
//     constructor(public elem: ElementRef) {
//     }
//
//     ngAfterViewInit() {
//         if (this.firstTime) {
//             this.elem.nativeElement.focus();
//             this.firstTime = false;
//         }
//     }
// }

@Component({
    moduleId: module.id,
    selector: 'block',
    templateUrl: './block.html',
    styleUrls: ['./block.css']
})

export class BlockComponent {

    @Input() block: Block;
    @Output() remove = new EventEmitter();

    removeBlock(): void {
        if (this.block.id > 0) {
            this.remove.emit();
        }
    }

    clearText(): void {
        this.block.data = '';
    }

}
