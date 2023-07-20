import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SneakerPageRoutingModule } from './sneaker-routing.module';

import { SneakerPage } from './sneaker.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SneakerPageRoutingModule
  ],
  declarations: [SneakerPage]
})
export class SneakerPageModule {}
