import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSelectChange, MatSlideToggleChange } from '@angular/material';
import { LocalStorageService } from 'angular-2-local-storage';

import { SettingsService } from 'src/app/shared/services/settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  columnNames: string[] = ['name', 'type', 'price'];
  elementLoadingLimits: number[] = [15, 30, 45];
  elementsLimit: number;
  isDarkThemeOn: boolean;
  sortColumn: string;

  constructor(private dialogRef: MatDialogRef<SettingsComponent>,
              private localStorageService: LocalStorageService,
              private settingsService: SettingsService) { }

  ngOnInit() {
    this.elementsLimit = this.localStorageService.get('elementsLimit'); 
    this.sortColumn = this.localStorageService.get('sortColumn');
    this.isDarkThemeOn = this.localStorageService.get('isDarkThemeOn');
  }

  saveDarkThemeState($event: MatSlideToggleChange) {
    const isDarkThemeOn: boolean = $event.checked;

    this.localStorageService.set('isDarkThemeOn', isDarkThemeOn);
    this.settingsService.themeChanged.next(isDarkThemeOn);
  }

  saveElementsLimit($event: MatSelectChange) {
    const elementsLimit: number = $event.value;

    this.localStorageService.set('elementsLimit', elementsLimit);
    this.settingsService.elementsLimitChanged.next(elementsLimit);
  }

  saveSortColumn($event: MatSelectChange) {
    const sortColumn: string = $event.value;

    this.localStorageService.set('sortColumn', sortColumn);
    this.settingsService.sortColumnChanged.next(sortColumn);
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
