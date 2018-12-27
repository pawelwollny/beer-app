import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { BeerService } from './beer.service';
import { Beer } from 'src/app/shared/models/beer';

describe('BeerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ]
  }));

  afterEach(inject([HttpTestingController], (httpMock: HttpTestingController) => {
    httpMock.verify();
  }));

  it('should be created', () => {
    const service: BeerService = TestBed.get(BeerService);
    expect(service).toBeTruthy();
  });

  it('should get beers data', inject([HttpTestingController, BeerService],
    (httpMock: HttpTestingController, beerService: BeerService) => {

      const dummyBeers: Beer[] = [{
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

      beerService.getAllBeers().subscribe(beers => {
        expect(beers.length).toBe(2);
        expect(beers).toEqual(dummyBeers);
      });

      const req = httpMock.expectOne(beerService.beerApiUrl);
      expect(req.request.method).toEqual('GET');

      req.flush(dummyBeers);
    })
  );
});
