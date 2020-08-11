import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Complains } from './Complains.component';


import { ComplainsRoutingModule } from './Complains-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComplainsRoutingModule
  ],
  declarations: [Complains]
})
export class ComplainsPageModule {}
