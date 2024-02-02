import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotspotsPageRoutingModule } from './hotspots-routing.module';

import { HotspotsPage } from './hotspots.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotspotsPageRoutingModule
  ],
  declarations: [HotspotsPage]
})
export class HotspotsPageModule {}
