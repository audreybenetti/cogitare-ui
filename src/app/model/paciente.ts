export class Paciente {
    id!: string;
    name?: string;
    birthday?: String;
    genre: string;
    recordNumber: number;
    unit: string;

    constructor (name: string, birthday : string, genre : string, recordNumber: number, unit: string){
      this.id = String(Math.round(Math.random() * 1000));
      this.name = name;
      this.birthday = this.transformDate(birthday);
      this.genre = genre;
      this.recordNumber = recordNumber;
      this.unit = unit;
    }

    transformDate(dateString: string): string {
      const parts = dateString.split('-'); 
      const year = parts[0];
      const month = parts[1];
      const day = parts[2];

      const transformedDate = `${day}/${month}/${year}`;
    
      return transformedDate;
    }
  }