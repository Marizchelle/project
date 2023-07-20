import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfumePage } from './perfume.page';

const routes: Routes = [
  {
    path: '',
    component: PerfumePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfumePageRoutingModule {}
