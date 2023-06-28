import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Paciente } from '../model/paciente';
import { PacientePromiseService } from './patient-promise-service';


@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  private pacientes: Paciente[] = [];

  constructor(
    private localStorage: LocalStorageService,
    private pacientePromiseService: PacientePromiseService
  ) {
    const storedPacientes = this.localStorage.retrieve('pacientes');
    if (storedPacientes) {
      this.pacientes = storedPacientes;
    }
  }

  getPacientes(): Paciente[] {
    this.carregarPacientes();
    return this.pacientes;
  }

  getPaciente(id: string): Promise<Paciente | undefined> {
    return this.pacientePromiseService.getById(id)
      .then((paciente) => {
        return paciente;
      })
      .catch((error) => {
        console.error('Ocorreu um erro ao obter paciente da API:', error);
        throw error;
      });
  }
  
  

  adicionarPaciente(paciente: Paciente): void {
    this.pacientes.push(paciente);
    this.atualizarArmazenamentoLocal();
    this.pacientePromiseService.save(paciente).catch((error) => {
      console.error('Ocorreu um erro ao adicionar paciente na API:', error);
      // Caso ocorra um erro ao adicionar o paciente na API, remova o paciente da lista local
      const index = this.pacientes.findIndex(p => p.id === paciente.id);
      if (index !== -1) {
        this.pacientes.splice(index, 1);
        this.atualizarArmazenamentoLocal();
      }
    });
  }

  atualizarPaciente(paciente: Paciente): void {
    const index = this.pacientes.findIndex(p => p.id === paciente.id);
    if (index !== -1) {
      this.pacientes[index] = paciente;
      this.atualizarArmazenamentoLocal();
      this.pacientePromiseService.update(paciente).catch((error) => {
        console.error('Ocorreu um erro ao atualizar paciente na API:', error);
        // Caso ocorra um erro ao atualizar o paciente na API, restaure os dados do paciente na lista local
        this.carregarPacientes(); // Atualize a lista local com os dados da API novamente
      });
    }
  }

  removerPaciente(id: string): void {
    const index = this.pacientes.findIndex(p => p.id === id);
    if (index !== -1) {
      const pacienteRemovido = this.pacientes.splice(index, 1)[0];
      this.atualizarArmazenamentoLocal();
      this.pacientePromiseService.remove(id)
        .catch((error) => {
          console.error('Ocorreu um erro ao remover paciente na API:', error);
          // Caso ocorra um erro ao remover o paciente na API, adicione novamente o paciente na lista local
          this.pacientes.push(pacienteRemovido);
          this.atualizarArmazenamentoLocal();
        });
    }
  }
  

  private atualizarArmazenamentoLocal(): void {
    this.localStorage.store('pacientes', this.pacientes);
  }

  private carregarPacientes(): void {
    this.pacientePromiseService.getAll().then((pacientes) => {
      this.pacientes = pacientes;
      this.atualizarArmazenamentoLocal();
    }).catch((error) => {
      console.error('Ocorreu um erro ao carregar pacientes da API:', error);
    });
  }

  private limparLocalStorage(): void {
    this.localStorage.clear();
  }
}
