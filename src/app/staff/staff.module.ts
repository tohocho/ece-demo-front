import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FindAllComponent } from './pages/find-all/find-all.component';
import { CreateStaffComponent } from './pages/create-staff/create-staff.component';
import { StaffRoutingModule } from './staff-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FindAllComponent,
    CreateStaffComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
    FormsModule
  ]
})
export class StaffModule { }
