import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: '4b-chat',
    loadChildren: () => import('./pps4-b-chat/pps4-b-chat.module').then( m => m.PPS4BChatPageModule)
  },
  {
    path: '4a-chat',
    loadChildren: () => import('./pps4-a-chat/pps4-a-chat.module').then( m => m.PPS4AChatPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
