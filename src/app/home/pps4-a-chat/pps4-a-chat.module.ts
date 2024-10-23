import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PPS4AChatPageRoutingModule } from './pps4-a-chat-routing.module';

import { PPS4AChatPage } from './pps4-a-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PPS4AChatPageRoutingModule
  ],
  declarations: [PPS4AChatPage]
})
export class PPS4AChatPageModule {}
