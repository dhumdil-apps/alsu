import { Component, Input, Output, EventEmitter, AfterViewInit, ViewChild } from '@angular/core';
import { Block } from './block';

@Component({
    selector: 'block',
    templateUrl: './block.html',
    styleUrls: ['./block.css']
})

export class BlockComponent implements AfterViewInit {

    @Input() block: Block;
    @Output() remove = new EventEmitter();
    @ViewChild("myBlock") myBlock;

    context: CanvasRenderingContext2D;

    ngAfterViewInit() {
        let canvas = this.myBlock.nativeElement;
        this.context = canvas.getContext("2d");

        let ctx = this.context;
        ctx.lineWidth = 2;
        ctx.beginPath();

        if (this.block.type === "begin" || this.block.type === "end") {
            // rounded rectangle
            // left arc
            ctx.arc(25, 25, 24, Math.PI/2, Math.PI*(1.5), false);
            // top-line
            ctx.moveTo(25,1);
            ctx.lineTo(175,1);
            // bottom-line
            ctx.moveTo(25,49);
            ctx.lineTo(175,49);
            // right arc
            ctx.arc(175, 25, 24, Math.PI/2, Math.PI*(1.5), true);
        } else if (this.block.type === "assign") {
            // rectangle
            ctx.moveTo(0,1);
            ctx.lineTo(199,1);
            ctx.lineTo(199,49);
            ctx.lineTo(1,49);
            ctx.lineTo(1,1);
        } else if (this.block.type === "write") {
            // parallelogram
            ctx.moveTo(25,1);
            ctx.lineTo(199,1);
            ctx.lineTo(175,49);
            ctx.lineTo(1,49);
            ctx.lineTo(25,1);
        }

        // ctx.fillStyle = "#ff0000";
        // ctx.fill();
        ctx.stroke();
    }

    emitRemove(): void {
        if (this.block.id > 0) {
            this.remove.emit();
        }
    }

    clearText(): void {
        this.block.data = '';
    }

}
