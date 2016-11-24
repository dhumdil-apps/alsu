import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Block } from './blocks/block';

@Component({
  moduleId: module.id,
  selector: 'code-block',
  templateUrl: './code-block.html',
  styleUrls: ['./code-block.css']
})

export class CodeBlockComponent {

  @Input() block: Block;
  @Input() selectedId: any;
  @Output() remove = new EventEmitter();

  clearText(): void {
    this.block.data = '';
  }

  removeBlock(): void {
    this.remove.emit();
  }

  // refactor!
  disabled():boolean {
    return this.block.type === 'begin' || this.block.type === 'end';
  }

  type(): string {
    return ( this.block.id === 0 ) ? "" : this.block.type;
  }

  adjustInput(): void {

    // (no-jquery document.ready)
    function onReady(f) {
      "complete" === document.readyState ? f() : setTimeout(onReady, 10, f);
    }

    onReady(function() {
      [].forEach.call(document.querySelectorAll("input[type='text'].autoresize"), registerInput);
    });

    function registerInput(el) {

      el.size = 1;

      let style = el.currentStyle || window.getComputedStyle(el);
      let borderBox = style.boxSizing === "border-box";
      let boxSizing = borderBox ? parseInt(style.borderRightWidth, 10) + parseInt(style.borderLeftWidth, 10) : 0;

      if ("onpropertychange" in el) {
        el.onpropertychange = adjust;
      } else if ("oninput" in el) {
        el.oninput = adjust;
      }
      adjust();

      function adjust() {
        el.style.width = "";
        let newWidth = el.scrollWidth + boxSizing;
        el.style.width = newWidth + "px";
      }

    }

  }

}
