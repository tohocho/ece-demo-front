import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindAllComponent } from './pages/find-all/find-all.component';
import { AddPatientsComponent } from './pages/add-patients/add-patients.component';
import { PatientsRoutingModule } from './patients-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FindAllComponent,
    AddPatientsComponent
  ],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    FormsModule
  ]
})
export class PatientsModule { }
