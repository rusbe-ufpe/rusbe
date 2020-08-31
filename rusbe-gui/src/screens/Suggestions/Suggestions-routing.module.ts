import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Suggestions } from './Suggestions.component';

const routes: Routes = [
  {
    path: '',
    component: Suggestions,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule {}
