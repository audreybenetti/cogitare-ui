import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../patient-registration/patient-storage-service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  pacientes: Paciente[] = [];
  patient: Paciente | undefined;

  constructor(private route: ActivatedRoute, private pacienteService: PacienteService) { }

  ngOnInit() {
    this.pacientes = this.pacienteService.getPacientes();
    const routeParams = this.route.snapshot.paramMap;
    const patientIdFromRoute = routeParams.get('patientId');
  
    this.patient = this.pacientes.find(patient => patient.id === patientIdFromRoute);
  }
}