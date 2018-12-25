import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-table-column',
  templateUrl: './beer-table-column.component.html',
  styleUrls: ['./beer-table-column.component.scss']
})
export class BeerTableColumnComponent implements OnInit {

  @Input() columnName: string;

  columnsToDisplay: string[] = ['name', 'type', 'price', 'thumbnail'];

  constructor() { }

  ngOnInit() {
  }

}
