import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { MenuModule } from './modules/menu/menu.module';
import { MatCardModule } from '@angular/material';
import { LocalStorageService, LocalStorageModule } from 'angular-2-local-storage';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MenuModule,
        MatCardModule,
        LocalStorageModule.withConfig({
          prefix: 'beer-app',
          storageType: 'localStorage'
        })
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: LocalStorageService, useClass: LocalStorageService },
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
