import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../model/paciente';
import { PacienteStorage } from '../services/patient-storage-service';
import { PacienteObservable } from '../services/patient-observable-service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  pacientes: Paciente[] = [];
  patient: Paciente | undefined;
  pacienteId = String;

  constructor(private route: ActivatedRoute,
    private router : Router, 
    private pacienteService: PacienteStorage,
    private pacienteObservable: PacienteObservable) { }

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const patientIdFromRoute = routeParams.get('patientId');
  
    if (patientIdFromRoute !== null && patientIdFromRoute !== undefined) {
      this.buscarPaciente(patientIdFromRoute);
    } else {
      console.error('O ID do paciente não foi fornecido.');
    }
  }

  buscarPaciente(id : string): void {
    this.pacienteObservable.getById(id).subscribe({
      next: (paciente) => {
        this.patient = paciente;
        console.log('Paciente encontrado com sucesso');
      },
      error: (error) => {
        this.patient = undefined;
        console.error('Ocorreu um erro ao buscar o paciente:', error);
      }
    });
  }

  removerPaciente(id: string): void {
    this.pacienteService.removerPaciente(id);
    this.router.navigate(['']);
  }
}