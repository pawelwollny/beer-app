import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BeerService } from '../../beer.service';
import { Beer } from 'src/app/shared/models/beer';
import { SettingsService } from 'src/app/shared/services/settings.service';

@Component({
  selector: 'app-beer-table',
  templateUrl: './beer-table.component.html',
  styleUrls: ['./beer-table.component.scss']
})
export class BeerTableComponent implements OnInit, OnDestroy {

  allBeers: Beer[] = [];
  beersLimit: number;
  breweries: Set<string>;
  columnNames: string[] = ['First Brewery', 'Second Brewery', 'Third Brewery'];
  destroy$: Subject<null> = new Subject();
  isDataLoaded: boolean = false;
  sortColumn: string;
  
  constructor(private beerService: BeerService,
              private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.beerService.getAllBeers().subscribe(allBeers => {
      this.allBeers = allBeers;
      this.breweries = this.getAllBreweries();
      this.isDataLoaded = true;
    })

    this.settingsService.elementsLimitChanged.pipe(takeUntil(this.destroy$)).subscribe(elementsLimit => {
      this.beersLimit = elementsLimit;
    });

    this.settingsService.sortColumnChanged.pipe(takeUntil(this.destroy$)).subscribe(sortColumn => {
      this.sortColumn = sortColumn;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getAllBreweries(): Set<string> {
    return new Set(this.allBeers.map(beer => beer.brewer));
  }
}
