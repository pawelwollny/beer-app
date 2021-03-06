import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'beers',
    loadChildren: './modules/beer/beer.module#BeerModule'
  },
  {
    path: '',
    redirectTo: '/beers',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/beers',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
