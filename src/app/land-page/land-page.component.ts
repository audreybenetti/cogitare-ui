import { Component } from '@angular/core';
import { pacientes } from '../paciente';

@Component({
  selector: 'app-land-page',
  templateUrl: './land-page.component.html',
  styleUrls: ['./land-page.component.css']
})
export class LandPageComponent {
  pacientes = [...pacientes];
}
