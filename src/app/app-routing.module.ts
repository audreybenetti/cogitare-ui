import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { LandPageComponent } from './land-page/land-page.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';

const routes: Routes = [
  {path: '', component: LandPageComponent},
  {path: 'cadastro', component: PatientRegistrationComponent},
  {path: 'editar/:patientId', component: PatientEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
