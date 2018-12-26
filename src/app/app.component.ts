import { Component, OnDestroy, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { SettingsService } from './shared/services/settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  isDarkThemeOn: boolean;
  destroy$: Subject<null> = new Subject();

  constructor(private localStorageService: LocalStorageService,
              private settingsService: SettingsService) {
  }

  ngOnInit() {
    this.isDarkThemeOn = this.localStorageService.get('isDarkThemeOn');

    this.settingsService.themeChanged.pipe(takeUntil(this.destroy$)).subscribe(isDarkThemeOn => {
      this.isDarkThemeOn = isDarkThemeOn;
    });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
