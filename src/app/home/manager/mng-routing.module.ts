import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MngComponent } from './mng.component';

const routes: Routes = [{ path: '', component: MngComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MngRoutingModule { }
