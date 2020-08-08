import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ScreensPageRoutingModule } from './screens-routing.module';

import { ScreensPage } from './screens.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ScreensPageRoutingModule
  ],
  declarations: [ScreensPage]
})
export class ScreensPageModule {}