import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private pacientes: Paciente[] = [];

  constructor(private localStorage: LocalStorageService) {
    const storedPacientes = this.localStorage.retrieve('pacientes');
    if (storedPacientes) {
      this.pacientes = storedPacientes;
    }
  }

  getPacientes(): Paciente[] {
    return this.pacientes;
  }

  getPaciente(id: string): Paciente | undefined {
    return this.pacientes.find(paciente => paciente.id === id);
  }

  adicionarPaciente(paciente: Paciente): void {
    this.pacientes.push(paciente);
    this.atualizarArmazenamentoLocal();
  }

  atualizarPaciente(paciente: Paciente): void {
    const index = this.pacientes.findIndex(p => p.id === paciente.id);
    if (index !== -1) {
      this.pacientes[index] = paciente;
      this.atualizarArmazenamentoLocal();
    }
  }

  removerPaciente(id: string): void {
    const index = this.pacientes.findIndex(p => p.id === id);
    if (index !== -1) {
      this.pacientes.splice(index, 1);
      this.atualizarArmazenamentoLocal();
    }
  }

  private atualizarArmazenamentoLocal(): void {
    this.localStorage.store('pacientes', this.pacientes);
  }

  private limparLocalStorage(): void {
    this.localStorage.clear();
  }
}
