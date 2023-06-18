import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { LandPageComponent } from './land-page/land-page.component';

const routes: Routes = [
  {path: '', component: LandPageComponent},
  {path: 'cadastro', component: PatientRegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
