export interface Paciente {
    id: number;
    name: string;
    unit: string;
  }
  
  export const pacientes = [
    {
      id: 1,
      name: 'Marcelo Andrade',
      unit: 'Centro Cirúgico'
    },
    {
      id: 2,
      name: 'Giovana Dias',
      unit: 'Pediatria'
    },
    {
      id: 3,
      name: 'Bruno Souza',
      unit: 'UTI'
    }
  ];