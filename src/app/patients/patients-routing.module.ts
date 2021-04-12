import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPatientsComponent } from './pages/add-patients/add-patients.component';
import { FindAllComponent } from './pages/find-all/find-all.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'find-all',
        component: FindAllComponent
      },
      {
        path: 'add-patients',
        component: AddPatientsComponent
      },
      {
        path: 'add-patients/:id',
        component: AddPatientsComponent
      },
      {
        path: '**',
        redirectTo: 'find-all'
      },
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
export class PatientsRoutingModule { }
