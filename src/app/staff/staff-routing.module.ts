import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FindAllComponent } from './pages/find-all/find-all.component';
import { CreateStaffComponent } from './pages/create-staff/create-staff.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'find-all',
        component: FindAllComponent
      },
      {
        path: 'create-staff',
        component: CreateStaffComponent
      },
      {
        path: 'create-staff/:id',
        component: CreateStaffComponent
      },
      {
        path: '**',
        redirectTo: 'find-all'
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class StaffRoutingModule { }
