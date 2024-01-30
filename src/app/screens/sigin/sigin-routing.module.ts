import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiginPage } from './sigin.page';

const routes: Routes = [
  {
    path: '',
    component: SiginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiginPageRoutingModule {}
