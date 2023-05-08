import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input()
  filter: boolean;

  @Output()
  filterEvent = new EventEmitter();

  toggleFilter(): void {
    this.filterEvent.emit(false);
  }

}
