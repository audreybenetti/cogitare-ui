import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Paciente } from '../model/paciente';
import { PacienteObservable } from './patient-observable-service';


@Injectable({
  providedIn: 'root'
})
export class PacienteStorage {
  private pacientes: Paciente[] = [];
  private paciente: Paciente | undefined

  constructor(
    private localStorage: LocalStorageService,
    private pacienteService: PacienteObservable
  ) {
    const storedPacientes = this.localStorage.retrieve('pacientes');
    if (storedPacientes) {
      this.pacientes = storedPacientes;
    }
  }

  ngOnInit(): void {
    this.getPacientes();
  }

  getPaciente(id : string): void {
    this.pacienteService.getById(id).subscribe({
      next: (paciente) => {
        this.paciente = paciente;
        console.log('Paciente encontrado com sucesso');
      },
      error: (error) => {
        this.paciente = undefined;
        console.error('Ocorreu um erro ao buscar o paciente:', error);
      }
    });
  }
  
  getPacientes(): void {
    this.pacienteService.getAll().subscribe({
      next: (pacientes) => {
        this.pacientes = pacientes;
      },
      error: (error) => {
        console.error('Ocorreu um erro ao obter pacientes:', error);
      }
    });
  }
  
  salvarPaciente(paciente: Paciente): void {
    this.pacienteService.save(paciente).subscribe({
      next: (novoPaciente) => {
        console.log('Paciente salvo com sucesso:', novoPaciente);
        this.getPacientes();
      },
      error: (error) => {
        console.error('Ocorreu um erro ao salvar o paciente:', error);
      }
    });
  }
  
  atualizarPaciente(paciente: Paciente): void {
    this.pacienteService.update(paciente).subscribe({
      next: (pacienteAtualizado) => {
        console.log('Paciente atualizado com sucesso:', pacienteAtualizado);
        this.getPacientes();
      },
      error: (error) => {
        console.error('Ocorreu um erro ao atualizar o paciente:', error);
      }
    });
  }
  
  removerPaciente(id: string): void {
    this.pacienteService.remove(id).subscribe({
      next: () => {
        console.log('Paciente removido com sucesso');
        this.getPacientes();
      },
      error: (error) => {
        console.error('Ocorreu um erro ao remover o paciente:', error);
      }
    });
  }

}
