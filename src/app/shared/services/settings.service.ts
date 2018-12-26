import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  elementsLimitChanged: Subject<number> = new Subject<number>();
  sortColumnChanged: Subject<string> = new Subject<string>();
  themeChanged: Subject<boolean> = new Subject<boolean>();

  constructor() { }
}
