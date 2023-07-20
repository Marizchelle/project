import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShopmenuPage } from './shopmenu.page';

const routes: Routes = [
  {
    path: '',
    component: ShopmenuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ShopmenuPageRoutingModule {}
