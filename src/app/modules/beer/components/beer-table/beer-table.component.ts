import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-beer-table',
  templateUrl: './beer-table.component.html',
  styleUrls: ['./beer-table.component.scss']
})
export class BeerTableComponent implements OnInit {

  columnNames: string[] = ['First Brewery', 'Second Brewery', 'Third Brewery'];
  
  constructor() {
  }

  ngOnInit() {
  }
}
