import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule, MatSelectModule, MatButtonModule } from '@angular/material'

import { BeerRoutingModule } from './beer-routing.module';
import { BeerTableComponent } from './components/beer-table/beer-table.component';
import { BeerTableColumnComponent } from './components/beer-table-column/beer-table-column.component';

@NgModule({
  declarations: [BeerTableComponent, BeerTableColumnComponent],
  imports: [
    CommonModule,
    BeerRoutingModule,
    MatButtonModule,
    MatTableModule,
    MatSelectModule
  ]
})
export class BeerModule { }
