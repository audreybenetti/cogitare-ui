import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { LandPageComponent } from './land-page/land-page.component';
import { PatientEditComponent } from './patient-edit/patient-edit.component';
import { ReportRegistrationComponent } from './report-registration/report-registration.component';
import { ReportViewComponent } from './report-view/report-view.component';

const routes: Routes = [
  {path: '', component: LandPageComponent},
  {path: 'cadastro', component: PatientRegistrationComponent},
  {path: 'editar/:patientId', component: PatientEditComponent},
  {path: 'editar/:patientId/relatorio', component: ReportRegistrationComponent},
  {path: 'editar/:patientId/relatorio/:reportId', component: ReportViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
