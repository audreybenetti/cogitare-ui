export class Paciente {
    id!: string;
    name?: string;
    birthday?: String;
    genre: string;
    recordNumber: number;
    unit: string;

    constructor (name: string, genre : string, birthday : Date, recordNumber: number, unit: string){
      this.id = String(Math.round(Math.random() * 1000));
      this.name = name;
      this.birthday = this.formatDateToString(birthday);
      this.genre = genre;
      this.recordNumber = recordNumber;
      this.unit = unit;
    }

    formatDateToString(date: Date): string {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const year = date.getFullYear().toString();
      return `${day}/${month}/${year}`;
    }
  }