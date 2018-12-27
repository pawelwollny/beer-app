import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';
import { MatSelectModule, MatTableModule } from '@angular/material';

import { BeerTableComponent } from './beer-table.component';
import { BeerTableColumnComponent } from '../beer-table-column/beer-table-column.component';
import { NgxImageGalleryComponent } from 'ngx-image-gallery';

describe('BeerTableComponent', () => {
  let component: BeerTableComponent;
  let fixture: ComponentFixture<BeerTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        FormsModule,
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
