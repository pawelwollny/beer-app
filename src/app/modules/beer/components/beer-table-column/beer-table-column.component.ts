import { Component, OnInit } from '@angular/core';
import { MatSelectChange, MatTableDataSource } from '@angular/material';

import { BeerService } from '../../beer.service';
import { Beer } from 'src/app/shared/models/beer';

@Component({
  selector: 'app-beer-table-column',
  templateUrl: './beer-table-column.component.html',
  styleUrls: ['./beer-table-column.component.scss']
})
export class BeerTableColumnComponent implements OnInit {

  allBeers: Beer[] = [];
  beersFromSelectedBrewery: Beer[] = [];
  beersLimit: number = 15;
  beersOffset: number = 0;
  breweries: Set<string>;
  columnsToDisplay: string[] = ['name', 'type', 'price', 'thumbnail'];
  dataSource: MatTableDataSource<Beer> = new MatTableDataSource<Beer>();
  
  constructor(private beerService: BeerService) { }

  ngOnInit() {
    this.beerService.getAllBeers().subscribe(allBeers => {
      this.allBeers = allBeers;
      this.breweries = this.getAllBreweries();
    })
  }

  isMoreBeersToLoad(): boolean {
    const alreadyLoadedBeersNumber = this.beersOffset * this.beersLimit; 

    return  alreadyLoadedBeersNumber < this.beersFromSelectedBrewery.length;
  };

  onSelectionChange($event: MatSelectChange): void {
    if ($event != null) {
      const breweryName = $event.value;

      this.beersFromSelectedBrewery = this.getSortedBeersFromBrewery(breweryName);
      this.beersOffset = 0;
      this.loadMoreBeers();
    }
  }

  loadMoreBeers(): void {
    this.beersOffset++;
    this.dataSource.data = this.beersFromSelectedBrewery.slice(0, this.beersLimit * this.beersOffset);
  }

  private getAllBreweries(): Set<string> {
    return new Set(this.allBeers.map(beer => beer.brewer));
  }

  private getSortedBeersFromBrewery(breweryName: string): Beer[] {
    const beersFromBrewery: Beer[] = this.allBeers.filter(beer => beer.brewer === breweryName);

    beersFromBrewery.sort((firstBeer, secondBeer) => firstBeer.name < secondBeer.name ? -1 : 1);

    return beersFromBrewery;
  }
}
