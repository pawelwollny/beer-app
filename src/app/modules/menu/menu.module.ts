import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule, MatDialogModule, MatSlideToggleModule, MatSelectModule } from '@angular/material';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';
import { SettingsComponent } from './components/settings/settings.component';

@NgModule({
  declarations: [MenuComponent, SettingsComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatMenuModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [MenuComponent],
  entryComponents: [SettingsComponent]
})
export class MenuModule { }
