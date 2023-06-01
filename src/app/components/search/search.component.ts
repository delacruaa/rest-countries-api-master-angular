import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() dataEvent = new EventEmitter<string>();
  public value: string = '';

  valueToParent(): void {
    this.dataEvent.emit(this.value);
  }
  onInputChange(): void {
    this.valueToParent();
  }
}
