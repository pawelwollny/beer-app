import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatTableModule } from '@angular/material';
import { NgxImageGalleryComponent } from 'ngx-image-gallery';

import { BeerTableComponent } from './beer-table.component';
import { BeerTableColumnComponent } from '../beer-table-column/beer-table-column.component';
import { BeerService } from '../../beer.service';
import { MockBeerService } from 'src/app/shared/mocks/mock-beer.service';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('BeerTableComponent', () => {
  let component: BeerTableComponent;
  let fixture: ComponentFixture<BeerTableComponent>;
  let service: BeerService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        HttpClientTestingModule,
        FormsModule,
        LocalStorageModule.withConfig({
          prefix: 'beer-app',
          storageType: 'localStorage'
        }),
        MatSelectModule,
        MatTableModule
      ],
      declarations: [BeerTableComponent, BeerTableColumnComponent, NgxImageGalleryComponent],
      providers: [
        { provide: BeerService, useClass: MockBeerService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(BeerService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('allBeers should be initialized after component creation', () => {
    service.getAllBeers().subscribe(beersFromMock => {
      expect(component.allBeers).toEqual(beersFromMock);
    });
  });
});
