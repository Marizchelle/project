import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GadgetPageRoutingModule } from './gadget-routing.module';

import { GadgetPage } from './gadget.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GadgetPageRoutingModule
  ],
  declarations: [GadgetPage]
})
export class GadgetPageModule {}
