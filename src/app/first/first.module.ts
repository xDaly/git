import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstinterfaceComponent } from './firstinterface/firstinterface.component';


@NgModule({
  declarations: [FirstinterfaceComponent],
  imports: [
    CommonModule,
    FirstRoutingModule
  ]
})
export class FirstModule { }
