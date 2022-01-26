import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  @Input() searchRequest!: string;
  @Output() searchRequestEvent = new EventEmitter<string>();
  searchValue: string = '';

  constructor() {}

  ngOnInit(): void {}

  searchQuery() {
    this.searchRequestEvent.emit(this.searchValue);
    this.searchValue = '';
  }

  onSubmit() {}

}
