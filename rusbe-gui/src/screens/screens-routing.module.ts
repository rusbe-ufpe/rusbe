import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreensPage } from './screens.page';

const routes: Routes = [
  {
    path: 'screens',
    component: ScreensPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./Home/Home.module').then(m => m.HomePageModule)
      },
      {
        path: 'groups',
        loadChildren: () => import('./Groups/Groups.module').then(m => m.GroupsPageModule)
      },
      {
        path: 'threads',
        loadChildren: () => import('./Threads/Threads.module').then(m => m.ThreadsPageModule)
      },
      {
        path: 'suggestions',
        loadChildren: () => import('./Suggetions/Suggestions.module').then(m => m.SuggestionsPageModule)
      },
      {
        path: '',
        redirectTo: '/screens/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/screens/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensPageRoutingModule {}
