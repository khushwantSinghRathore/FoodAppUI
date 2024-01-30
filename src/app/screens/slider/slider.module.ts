import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SliderPageRoutingModule } from './slider-routing.module';

import { SliderPage } from './slider.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, SliderPageRoutingModule],
  declarations: [SliderPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SliderPageModule {}
