import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SettingsCardComponent } from './components/settings/settings-card.component';

const routes: Routes = [
  {
    path: '',
    component: SettingsCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule { }
