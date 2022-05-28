import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GymRoutingModule } from './gym-routing.module';
import { GymComponent } from './gym.component';
import { GymCardComponent } from './components/gym-card/gym-card.component';
import { SharedModule } from 'src/app/shared/shared/shared.module';
import { AddGymCardComponent } from './components/add-gym-card/add-gym-card.component';


@NgModule({
  declarations: [
    GymComponent,
    GymCardComponent,
    AddGymCardComponent
  ],
  imports: [
    CommonModule,
    GymRoutingModule,
    SharedModule
  ]
})
export class GymModule { }
