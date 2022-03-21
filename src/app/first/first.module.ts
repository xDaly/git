import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstinterfaceComponent } from './firstinterface/firstinterface.component';
import { AreaComponent } from './containers/area/area.component';


@NgModule({
  declarations: [FirstinterfaceComponent, AreaComponent],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
