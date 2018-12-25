import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeerTableColumnComponent } from './beer-table-column.component';

describe('BeerTableColumnComponent', () => {
  let component: BeerTableColumnComponent;
  let fixture: ComponentFixture<BeerTableColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeerTableColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeerTableColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
