import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Threads } from './Threads.component';


import { ThreadsRoutingModule } from './Threads-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ThreadsRoutingModule
  ],
  declarations: [Threads]
})
export class ThreadsPageModule {}
