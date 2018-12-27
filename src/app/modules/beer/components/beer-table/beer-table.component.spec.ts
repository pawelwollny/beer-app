import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { BeerTableComponent } from './beer-table.component';
import { BeerTableColumnComponent } from '../beer-table-column/beer-table-column.component';
import { NgxImageGalleryComponent } from 'ngx-image-gallery';
import { MatSelectModule, MatTableModule } from '@angular/material';

describe('BeerTableComponent', () => {
  let component: BeerTableComponent;
  let fixture: ComponentFixture<BeerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatSelectModule,
        MatTableModule
      ],
      declarations: [ BeerTableComponent, BeerTableColumnComponent, NgxImageGalleryComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
