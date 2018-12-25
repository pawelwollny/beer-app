import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BeerModule } from './modules/beer/beer.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [    
    AppRoutingModule,
    BeerModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientJsonpModule,
    HttpClientModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
