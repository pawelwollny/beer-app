import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Beer } from 'src/app/shared/models/beer';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BeerService {

  beerApiUrl: string = environment.beerApiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllBeers(): Observable<Beer[]> {
    return this.httpClient.get<Beer[]>(this.beerApiUrl);
  }
}
