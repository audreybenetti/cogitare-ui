import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Relatorio } from '../model/relatorio';
import { PacienteStorage } from '../services/patient-storage-service';

@Component({
  selector: 'app-report-registration',
  templateUrl: './report-registration.component.html',
  styleUrls: ['./report-registration.component.css']
})
export class ReportRegistrationComponent {
  relatorio!: Relatorio;
  pacienteId: string;

  constructor(private route: ActivatedRoute, private pacienteService: PacienteStorage) {
    this.pacienteId = this.route.snapshot.paramMap.get('patientId')!;
    this.relatorio = new Relatorio(false, false, false, false, this.pacienteId);
  }

  onSubmit(): void {
    this.pacienteService.salvarRelatorio(this.pacienteId, this.relatorio);
  }
}
