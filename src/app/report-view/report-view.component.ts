import { Component } from '@angular/core';
import { Relatorio } from '../model/relatorio';
import { ActivatedRoute, Router } from '@angular/router';
import { PacienteStorage } from '../services/patient-storage-service';
import { PacienteObservable } from '../services/patient-observable-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.css']
})
export class ReportViewComponent {
  relatorio$: Observable<Relatorio> | undefined;
  pacienteId: string | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pacienteService: PacienteStorage,
    private pacienteObservable: PacienteObservable,
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const patientIdFromRoute = routeParams.get('patientId');
    const reportIdFromRoute = routeParams.get('reportId');

    if (reportIdFromRoute !== null && reportIdFromRoute !== undefined &&
       patientIdFromRoute !== null && patientIdFromRoute !== undefined) {
        this.relatorio$ = this.pacienteObservable.getRelatorioById(reportIdFromRoute);

    } else {
      console.error('O ID do paciente e/ou do relatório não foi fornecido.');
    }
  }

}
