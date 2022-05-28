import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../modules/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const modules = [
  CommonModule,
  MaterialModule,
  FormsModule,
  ReactiveFormsModule
];

const components: any[] = [];

const pipes: any[] = [];

const directives: any[] = [];



@NgModule({
  declarations: [
    ...components,
    ...pipes,
    ...directives
  ],
  imports: [
    ...modules
  ],
  exports: [
    ...modules,
    ...components,
    ...pipes,
    ...directives
  ],
  providers: [
    ...pipes
  ]
})
export class SharedModule { }
