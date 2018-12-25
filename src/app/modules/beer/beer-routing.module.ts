import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeerTableComponent } from './components/beer-table/beer-table.component';

const routes: Routes = [
  {
    path: 'beers',
    component: BeerTableComponent
  },
  {
    path: '',
    redirectTo: '/beers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BeerRoutingModule { }
