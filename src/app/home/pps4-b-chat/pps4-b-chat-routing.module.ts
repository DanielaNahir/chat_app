import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PPS4BChatPage } from './pps4-b-chat.page';

const routes: Routes = [
  {
    path: '',
    component: PPS4BChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PPS4BChatPageRoutingModule {}
