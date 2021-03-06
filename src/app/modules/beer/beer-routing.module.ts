import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerTableComponent } from './components/beer-table/beer-table.component';

const routes: Routes = [
  {
    path: '',
    component: BeerTableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }
