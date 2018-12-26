import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { MatSelectChange, MatTableDataSource } from '@angular/material';
import { LocalStorageService } from 'angular-2-local-storage';

import { Beer } from 'src/app/shared/models/beer';

@Component({
  selector: 'app-beer-table-column',
  templateUrl: './beer-table-column.component.html',
  styleUrls: ['./beer-table-column.component.scss']
})
export class BeerTableColumnComponent implements OnInit, OnChanges {

  @Input() allBeers: Beer[] = [];
  @Input() beersLimit: number;
  @Input() breweries: Beer[] = [];
  @Input() columnId: number;
  @Input() sortColumn: string;

  beersFromSelectedBrewery: Beer[] = [];
  beersOffset: number = 0;
  columnsToDisplay: string[] = ['name', 'type', 'price', 'thumbnail'];
  dataSource: MatTableDataSource<Beer> = new MatTableDataSource<Beer>();
  selectedBrewery: string;

  constructor(private localStorageService: LocalStorageService) { }

  ngOnInit() {
    this.beersLimit = this.localStorageService.get('elementsLimit');
    this.sortColumn = this.localStorageService.get('sortColumn');
    this.selectedBrewery = this.localStorageService.get(`breweryName${this.columnId}`);

    this.updateBreweryName(this.selectedBrewery); 
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['beersLimit']) {
      this.resetBeers();
    }

    if (changes['sortColumn']) {
      this.dataSource.data = this.getSortedBeersFromBrewery(this.selectedBrewery, this.dataSource.data)
    }
  }

  isMoreBeersToLoad(): boolean {
    const alreadyLoadedBeersNumber = this.beersOffset * this.beersLimit; 

    return  alreadyLoadedBeersNumber < this.beersFromSelectedBrewery.length;
  };

  onSelectionChange($event: MatSelectChange): void {
    if ($event != null) {
      const breweryName = $event.value;

      this.localStorageService.set(`breweryName${this.columnId}`, breweryName);
      this.updateBreweryName(breweryName);
    }
  }
  
  loadMoreBeers(): void {
    this.beersOffset++;

    if (this.dataSource != null && this.beersFromSelectedBrewery != null) {
      const limitedBeers: Beer[] = this.beersFromSelectedBrewery.slice(0, this.beersLimit * this.beersOffset);
      this.dataSource.data = this.getSortedBeersFromBrewery(this.selectedBrewery, limitedBeers);
    }
  }

  private getSortedBeersFromBrewery(breweryName: string, beers: Beer[]): Beer[] {
    const beersFromBrewery: Beer[] = beers.filter(beer => beer.brewer === breweryName);

    if (beersFromBrewery != null) {
      switch(this.sortColumn) {
        case('type'):
          beersFromBrewery.sort((firstBeer, secondBeer) => firstBeer.type < secondBeer.type ? -1 : 1);
          break;
        case('price'):
          beersFromBrewery.sort((firstBeer, secondBeer) => firstBeer.price - secondBeer.price);
          break;
        default:  
          beersFromBrewery.sort((firstBeer, secondBeer) => firstBeer.name < secondBeer.name ? -1 : 1);      
          break;
      }
    }

    return beersFromBrewery;
  }

  private updateBreweryName(breweryName: string): void {
    this.beersFromSelectedBrewery = this.getSortedBeersFromBrewery(breweryName, this.allBeers);
    this.resetBeers();
  }

  private resetBeers() {
    this.beersOffset = 0;
    this.loadMoreBeers();
  }
}
