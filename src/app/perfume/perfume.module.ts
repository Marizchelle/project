import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfumePageRoutingModule } from './perfume-routing.module';

import { PerfumePage } from './perfume.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfumePageRoutingModule
  ],
  declarations: [PerfumePage]
})
export class PerfumePageModule {}
