import { Component, OnInit } from '@angular/core';
import { Paciente } from '../model/paciente';
import { PacienteStorage } from '../services/patient-storage-service';
import { Observable } from 'rxjs';
import { PacienteObservable } from '../services/patient-observable-service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent implements OnInit {
  pacientes$: Observable<Paciente[]> | undefined;

  constructor(private pacienteObservable: PacienteObservable) { }

  ngOnInit(): void {
    this.carregarPacientes();
  }

  carregarPacientes(): void {
    this.pacientes$ = this.pacienteObservable.getAll();
  }

  performSearch(value: string) {
    console.log('Pesquisando por:', value);
  }
}
