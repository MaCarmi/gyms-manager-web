import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent, children: [
      { path: '', redirectTo: 'gym-list', pathMatch: 'full' },
      { path: 'gym-list', loadChildren: () => import('./gym/gym.module').then(m => m.GymModule) },
      { path: 'mng-list', loadChildren: () => import('./manager/mng.module').then(m => m.MngModule) }
    ]
  },
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

