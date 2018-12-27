import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatIconModule, MatTableModule, MatSelectModule } from '@angular/material';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';

import { BeerTableColumnComponent } from './beer-table-column.component';

describe('BeerTableColumnComponent', () => {
  let component: BeerTableColumnComponent;
  let fixture: ComponentFixture<BeerTableColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        FormsModule,
        LocalStorageModule.withConfig({
          prefix: 'beer-app',
          storageType: 'localStorage'
        }),
        MatButtonModule,
        MatIconModule,
        MatTableModule,
        MatSelectModule,
      ],
      declarations: [ BeerTableColumnComponent ],
      providers: [
        { provide: LocalStorageService, useClass: LocalStorageService }
      ]

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
