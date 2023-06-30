import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../model/paciente';
import { PacienteStorage } from '../services/patient-storage-service';
import { PacienteObservable } from '../services/patient-observable-service';
import { Relatorio } from '../model/relatorio';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {
  pacientes: Paciente[] = [];
  paciente!: Paciente;
  relatorios$: Observable<Relatorio[]> | undefined;
  isEditing = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteStorage,
    private pacienteObservable: PacienteObservable,
  ) {}
  
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const patientIdFromRoute = routeParams.get('patientId');

    if (patientIdFromRoute !== null && patientIdFromRoute !== undefined) {
      this.buscarPaciente(patientIdFromRoute);
      this.carregarRelatorios(patientIdFromRoute);
    } else {
      console.error('O ID do paciente não foi fornecido.');
    }
  }

  carregarRelatorios(id: string): void {
    this.pacienteObservable.getRelatoriosByPacienteId(id).subscribe(relatorios => {
      this.relatorios$ = of(relatorios);
      console.log(this.relatorios$);
    });
  }

  buscarPaciente(id: string): void {
    this.pacienteObservable.getById(id).subscribe({
      next: (paciente) => {
        this.paciente = paciente;
        console.log('Paciente encontrado com sucesso.');
      },
      error: (error) => {
        console.error('Ocorreu um erro ao buscar o paciente:', error);
      }
    });
  }

  habilitarEdicao() {
    this.isEditing = true;
  }

  onSubmit(): void {
    this.isEditing = false;
    this.pacienteService.atualizarPaciente(this.paciente);
  }

  removerPaciente(id: string): void {
    this.pacienteService.removerPaciente(id);
    this.router.navigate(['']);
  }
}
