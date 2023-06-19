import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  onSearch(value: string) {
    this.search.emit(value);
  }
}
