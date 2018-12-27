import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSlideToggleModule, MatSelectModule, MatDialogModule, MatDialogRef } from '@angular/material';

import { SettingsComponent } from './settings.component';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';

describe('SettingsComponent', () => {
  let component: SettingsComponent;
  let fixture: ComponentFixture<SettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        LocalStorageModule.withConfig({
          prefix: 'beer-app',
          storageType: 'localStorage'
        }),
        MatDialogModule,
        MatSelectModule,
        MatSlideToggleModule
      ],
      declarations: [ SettingsComponent ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: LocalStorageService, useClass: LocalStorageService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
