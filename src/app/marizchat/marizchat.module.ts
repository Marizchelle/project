import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MarizchatPageRoutingModule } from './marizchat-routing.module';

import { MarizchatPage } from './marizchat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MarizchatPageRoutingModule
  ],
  declarations: [MarizchatPage]
})
export class MarizchatPageModule {}
