import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PPS4AChatPage } from './pps4-a-chat.page';

const routes: Routes = [
  {
    path: '',
    component: PPS4AChatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PPS4AChatPageRoutingModule {}
