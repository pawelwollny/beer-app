import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Beer } from '../models/beer';

@Injectable({
  providedIn: 'root'
})
export class MockBeerService {

  constructor() { }

  getAllBeers(): Observable<Beer[]> {
    const dummyBeers: Beer[] = [
      {
        product_id: 127031,
        name: 'Mad Jack Mixer',
        size: '12  \u00d7  Can 355\u00a0ml',
        price: 23.95,
        beer_id: 127,
        image_url: 'http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/18636-MJ-Family-Can-TBS-322x344.jpg?itok=v_mQRmR1',
        category: 'Domestic Specialty',
        abv: 5.0,
        style: 'N/A',
        attributes: 'N/A',
        type: 'Lager',
        brewer: 'Molson',
        country: 'Canada',
        on_sale: false
      },
      {
        product_id: 128038,
        name: 'Mad Jack Hard Root Beer',
        size: '6  \u00d7  Can 473\u00a0ml',
        price: 15.25,
        beer_id: 128,
        image_url: 'http://www.thebeerstore.ca/sites/default/files/styles/brand_hero/public/sbs/brand/18636-MJ-Rootbeer-Can-TBS-322x344.jpg?itok=0QzZqG0m',
        category: 'Domestic Specialty',
        abv: 5.0,
        style: 'N/A',
        attributes: 'N/A',
        type: 'Lager',
        brewer: 'Molson',
        country: 'Canada',
        on_sale: false
      }
    ];

    return of(dummyBeers);
  }
}
