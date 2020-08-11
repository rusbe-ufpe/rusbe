import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Home } from './Home.component';


import { HomeRoutingModule } from './Home-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
  declarations: [Home]
})
export class HomePageModule {}
