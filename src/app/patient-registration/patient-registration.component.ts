import { Component, AfterViewInit, OnInit, ViewChild } from '@angular/core';

import { Paciente } from '../model/paciente';
import { Datepicker } from 'materialize-css';
import { PacienteService } from './patient-storage-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements AfterViewInit, OnInit {
  @ViewChild('form') form!: NgForm;

  pacientes: Paciente[] = [];
  paciente!: Paciente;
  modoEdicao = false;

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.paciente = new Paciente('', '', new Date, 0, '');
  }

  ngAfterViewInit() {
    const datePickerInput = document.querySelector('.datepicker') as HTMLElement;
    const options = {
      format: 'dd/mm/yyyy',
      autoClose: true
    };
    Datepicker.init(datePickerInput, options);
  }

  adicionarPaciente(paciente: Paciente): void {
    this.pacienteService.adicionarPaciente(paciente);
    this.limparFormulario();
  }

  carregarPacientes(): void {
    this.pacientes = this.pacienteService.getPacientes();
  }

  onSubmit(): void {
      this.adicionarPaciente(this.paciente);
  }

  removerPaciente(id: string): void {
    this.pacienteService.removerPaciente(id);
  }

  cancelarEdicao(): void {
    this.limparFormulario();
  }

  limparFormulario(): void {
    this.modoEdicao = false;
  }
}
