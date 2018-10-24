import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import {
  MatStepperModule,
  MatButtonModule,
  MatRadioModule,
  MatCheckboxModule
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { FileUploadModule } from 'primeng/primeng';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    FileUploadModule,
    MatCheckboxModule
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
