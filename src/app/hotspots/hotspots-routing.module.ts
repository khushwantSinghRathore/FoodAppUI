import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotspotsPage } from './hotspots.page';

const routes: Routes = [
  {
    path: '',
    component: HotspotsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotspotsPageRoutingModule {}
