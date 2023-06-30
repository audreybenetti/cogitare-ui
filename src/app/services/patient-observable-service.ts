import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Paciente } from '../model/paciente';
import { Relatorio } from '../model/relatorio';

@Injectable({
  providedIn: 'root'
})
export class PacienteObservable {
  URL = 'http://localhost:3000/patients';
  URL_PT = 'http://localhost:3000/pacientes';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Paciente[]> {
    return this.http.get<Paciente[]>(this.URL_PT).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  getById(id: string): Observable<Paciente> {
    return this.http.get<Paciente>(`${this.URL_PT}/${id}`).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  save(paciente: Paciente): Observable<Paciente> {
    return this.http.post<Paciente>(this.URL, paciente, this.httpOptions).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  patch(paciente: Paciente): Observable<Paciente> {
    return this.http.patch<Paciente>(`${this.URL}/${paciente.id}`, paciente, this.httpOptions).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  update(paciente: Paciente): Observable<Paciente> {
    return this.http.put<Paciente>(`${this.URL}/${paciente.id}`, paciente, this.httpOptions).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${this.URL_PT}/${id}`).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  getRelatoriosByPacienteId(idPatient: string): Observable<Relatorio[]> {
    return this.http.get<Relatorio[]>(`${this.URL_PT}/${idPatient}/relatorios`).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  getRelatorioById(pacienteId: string, relatorioId: string): Observable<Relatorio> {
    return this.http.get<Relatorio>(`${this.URL_PT}/${pacienteId}/relatorios/${relatorioId}`).pipe(
      catchError((error) => this.handleError(error))
    );
  }

  saveRelatorio(idPatient: string, relatorio: Relatorio): Observable<Relatorio> {
    return this.http.post<Relatorio>(`${this.URL_PT}/${idPatient}/relatorios`, relatorio, this.httpOptions).pipe(
      catchError((error) => this.handleError(error))
    );
  }  

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      console.error('Ocorreu um erro:', error.error.message);
    } else {
      console.error(`Código do erro: ${error.status}, ` + `mensagem: ${error.error}`);
    }
    return throwError(() => new Error('Erro na requisição. Por favor, tente novamente mais tarde.'));
  }

}
