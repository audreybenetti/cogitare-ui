import { Component, AfterViewInit } from '@angular/core';
import { Datepicker } from 'materialize-css';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent implements AfterViewInit {

  ngAfterViewInit() {
    const datePickerInput = document.querySelector('.datepicker') as HTMLElement;
    const options = {
      format: 'dd/mm/yyyy',
      autoClose: true
    };
    Datepicker.init(datePickerInput, options);
  }
}
