import { Component, OnInit } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteStorage } from '../services/patient-storage-service';
import { Observable } from 'rxjs';
import { PacienteObservable } from '../services/patient-observable-service';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  pacientes: Paciente[] | undefined;

  constructor(private pacienteService: PacienteStorage,
    private pacienteObservable: PacienteObservable) { }

  ngOnInit(): void {
    this.carregarPacientes();
  }

  carregarPacientes(): void {
    this.pacienteObservable.getAll().subscribe({
      next: (pacientes) => {
        this.pacientes = pacientes;
      },
      error: (error) => {
        console.error('Ocorreu um erro ao obter pacientes:', error);
      }
    });
  }

  performSearch(value: string) {
    console.log('Pesquisando por:', value);
  }
}
