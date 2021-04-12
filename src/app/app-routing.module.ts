import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPagesComponent } from './shared/error-pages/error-pages.component';
import { HomeComponent } from './shared/home/home.component';

const routes: Routes = [
  {
    path: 'patients',
    loadChildren: () => import('./patients/patients.module').then(m => m.PatientsModule)
  },
  {
    path: 'staff',
    loadChildren: () => import('./staff/staff.module').then(m => m.StaffModule)
  },
  {
    path: '404',
    component: ErrorPagesComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '**',
    /* component: ErrorPagesComponent */
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
