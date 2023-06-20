export class Paciente {
    id!: string;
    name?: string;
    birthday?: String;
    genre: string;
    recordNumber: number;
    unit: string;

    constructor (name: string, genre : string, birthday : string, recordNumber: number, unit: string){
      this.id = String(Math.round(Math.random() * 1000));
      this.name = name;
      this.birthday = birthday;
      this.genre = genre;
      this.recordNumber = recordNumber;
      this.unit = unit;
    }
  }