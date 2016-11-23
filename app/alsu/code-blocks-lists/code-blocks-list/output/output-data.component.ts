import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'output-data',
  templateUrl: './output-data.html',
  styleUrls: ['./output-data.css']
})

export class OutputDataComponent {
  @Input() outputData: any;
}
