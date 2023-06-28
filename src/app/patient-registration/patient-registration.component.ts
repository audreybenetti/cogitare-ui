import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { Paciente } from '../model/paciente';
import { PacienteService } from '../services/patient-storage-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements OnInit {

  paciente!: Paciente;

  constructor(private pacienteService: PacienteService,
    private router : Router) { }

  ngOnInit(): void {
    this.paciente = new Paciente('', '', '', 0, '');
  }

  adicionarPaciente(paciente: Paciente): void {
    this.pacienteService.adicionarPaciente(paciente);
    this.router.navigate(['/editar', paciente.id]);
  }

  onSubmit(): void {
    this.adicionarPaciente(this.paciente);
  }

  removerPaciente(id: string): void {
    this.pacienteService.removerPaciente(id);
  }

}
