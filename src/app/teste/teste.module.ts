import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TesteRoutingModule } from './teste-routing.module';
import { TesteComponent } from './teste/teste.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';



@NgModule({
  declarations: [
    TesteComponent
  ],
  imports: [
    CommonModule,
    TesteRoutingModule,
    AppMaterialModule
  ]
})
export class TesteModule { }
