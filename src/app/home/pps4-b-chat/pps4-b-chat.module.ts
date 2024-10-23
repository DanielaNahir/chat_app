import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PPS4BChatPageRoutingModule } from './pps4-b-chat-routing.module';

import { PPS4BChatPage } from './pps4-b-chat.page';
import { RouterLink } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PPS4BChatPageRoutingModule,
    RouterLink
  ],
  declarations: [PPS4BChatPage]
})
export class PPS4BChatPageModule {}
