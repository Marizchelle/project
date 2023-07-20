import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SneakerPage } from './sneaker.page';

const routes: Routes = [
  {
    path: '',
    component: SneakerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SneakerPageRoutingModule {}
