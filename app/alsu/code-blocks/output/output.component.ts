import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'output-data',
  templateUrl: './output.html',
  styleUrls: ['./output.css']
})

export class OutputComponent {
  @Input() outputData: any;
}
