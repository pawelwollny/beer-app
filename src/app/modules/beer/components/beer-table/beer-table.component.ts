import { Component, OnInit } from '@angular/core';

import { Beer } from 'src/app/shared/models/beer';
import { BeerService } from '../../beer.service';

@Component({
  selector: 'app-beer-table',
  templateUrl: './beer-table.component.html',
  styleUrls: ['./beer-table.component.scss']
})
export class BeerTableComponent implements OnInit {

  allBeers: Beer[] = [];
  breweries: Set<string>;
  columnNames: string[] = ['First Brewery', 'Second Brewery', 'Third Brewery'];
  
  constructor(private beerService: BeerService) {
  }

  ngOnInit() {
    this.beerService.getAllBeers().subscribe(allBeers => {
      this.allBeers = allBeers;
      this.breweries = this.getAllBreweries();
    })
  }

  private getAllBreweries(): Set<string> {
    return new Set(this.allBeers.map(beer => beer.brewer));
  }
}
