import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopmenuPageRoutingModule } from './shopmenu-routing.module';

import { ShopmenuPage } from './shopmenu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ShopmenuPageRoutingModule
  ],
  declarations: [ShopmenuPage]
})
export class ShopmenuPageModule {}
