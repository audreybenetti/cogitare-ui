import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paciente } from '../model/paciente';
import { PacienteService } from '../services/patient-storage-service';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  pacientes: Paciente[] = [];
  patient: Paciente | undefined;
  pacienteId: string | undefined;

  constructor(private route: ActivatedRoute,
    private router : Router, 
    private pacienteService: PacienteService) { }

  async ngOnInit() {
    this.pacientes = this.pacienteService.getPacientes();
    const routeParams = this.route.snapshot.paramMap;
    const patientIdFromRoute = routeParams.get('patientId');

    if (patientIdFromRoute !== null && patientIdFromRoute !== undefined) {
      this.patient = await this.pacienteService.getPaciente(patientIdFromRoute);
    } else {
      console.error('O ID do paciente não foi fornecido.');
    }
  }

  async removerPaciente(id: string): Promise<void> {
    await this.pacienteService.removerPaciente(id);
    this.router.navigate(['']);
  }
}