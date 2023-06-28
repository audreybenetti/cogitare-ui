import { Injectable } from '@angular/core';
import { Paciente } from '../model/paciente';

@Injectable({
  providedIn: 'root'
})
export class PacientePromiseService {
  URL = 'http://localhost:3000/patients';
  URL_PT = 'http://localhost:3000/pacientes';

  httpOptions = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  constructor() {}

  async getAll(): Promise<Paciente[]> {
    try {
      const response = await fetch(`${this.URL_PT}`);
      if (!response.ok) {
        throw new Error('Erro ao obter paciente da API');
      }
      const data = await response.json();
      return data as Paciente[];
    } catch (error) {
      console.error('Ocorreu um erro ao obter paciente da API:', error);
      throw error;
    }
  }

  async getById(paciente: Paciente): Promise<Paciente[]> {
    try {
      const response = await fetch(`${this.URL_PT}/${paciente}`);
      if (!response.ok) {
        throw new Error('Erro ao obter paciente da API');
      }
      const data = await response.json();
      return data as Paciente[];
    } catch (error) {
      console.error('Ocorreu um erro ao obter paciente da API:', error);
      throw error;
    }
  }

  async save(paciente: Paciente): Promise<Paciente> {
    try {
      const response = await fetch(this.URL, {
        method: 'POST',
        headers: this.httpOptions.headers,
        body: JSON.stringify(paciente)
      });
      if (!response.ok) {
        throw new Error('Erro ao salvar paciente na API');
      }
      const data = await response.json();
      return data as Paciente;
    } catch (error) {
      console.error('Ocorreu um erro ao salvar paciente na API:', error);
      throw error;
    }
  }

  async patch(paciente: Paciente): Promise<Paciente> {
    try {
      const response = await fetch(`${this.URL}/${paciente.id}`, {
        method: 'PATCH',
        headers: this.httpOptions.headers,
        body: JSON.stringify(paciente)
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar paciente na API');
      }
      const data = await response.json();
      return data as Paciente;
    } catch (error) {
      console.error('Ocorreu um erro ao atualizar paciente na API:', error);
      throw error;
    }
  }

  async update(paciente: Paciente): Promise<Paciente> {
    try {
      const response = await fetch(`${this.URL}/${paciente.id}`, {
        method: 'PUT',
        headers: this.httpOptions.headers,
        body: JSON.stringify(paciente)
      });
      if (!response.ok) {
        throw new Error('Erro ao atualizar paciente na API');
      }
      const data = await response.json();
      return data as Paciente;
    } catch (error) {
      console.error('Ocorreu um erro ao atualizar paciente na API:', error);
      throw error;
    }
  }
}
