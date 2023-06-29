import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { Paciente } from '../model/paciente';
import { PacienteStorage } from '../services/patient-storage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  paciente!: Paciente;

  constructor(private pacienteService: PacienteStorage,
    private router : Router) { }

  ngOnInit(): void {
    this.paciente = new Paciente('', new Date, '', 0, '');
  }

  adicionarPaciente(paciente: Paciente): void {
    this.pacienteService.salvarPaciente(paciente);
    this.router.navigate(['/editar', paciente.id]);
  }

  onSubmit(): void {
    this.adicionarPaciente(this.paciente);
  }
}
