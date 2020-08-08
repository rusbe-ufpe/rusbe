import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Complains } from './Complains.component';

const routes: Routes = [
  {
    path: '',
    component: Complains,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComplainsRoutingModule {}
