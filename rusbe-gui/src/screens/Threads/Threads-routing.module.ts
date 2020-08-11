import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Threads } from './Threads.component';

const routes: Routes = [
  {
    path: '',
    component: Threads,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThreadsRoutingModule {}
