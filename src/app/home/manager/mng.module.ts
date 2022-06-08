import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MngRoutingModule } from './mng-routing.module';
import { MngComponent } from './mng.component';
import { MngCardComponent } from './components/mng-card/mng-card.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AddMngCardComponent } from './components/add-mng-card/add-mng-card.component';


@NgModule({
  declarations: [
    MngComponent,
    MngCardComponent,
    AddMngCardComponent
  ],
  imports: [
    CommonModule,
    MngRoutingModule,
    SharedModule
  ]
})
export class MngModule { }
