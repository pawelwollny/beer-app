import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SettingsCardComponent } from './components/settings/settings-card.component';
import { SettingsRoutingModule } from './settings-routing.module';

@NgModule({
  declarations: [SettingsCardComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule
  ]
})
export class SettingsModule { }
