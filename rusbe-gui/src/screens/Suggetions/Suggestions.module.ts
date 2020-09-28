import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Suggestions } from './Suggestions.component';


import { SuggestionsRoutingModule } from './Suggestions-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SuggestionsRoutingModule
  ],
  declarations: [Suggestions]
})
export class SuggestionsPageModule {}
