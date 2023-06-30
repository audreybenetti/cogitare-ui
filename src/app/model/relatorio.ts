export class Relatorio {
    id!: string;
    eldreteKroulik: string;
    sinaisNausea: string;
    intensidadeDor: string;
    sinaisSangramento: string;
    dataAtendimento: Date;
    patientId: string;

    constructor(eldreteKroulik: string, sinaisNausea: string, intensidadeDor: string, 
        sinaisSangramento: string, idPatient: string) {
        this.id = String(Math.round(Math.random() * 1000));
        this.eldreteKroulik = eldreteKroulik;
        this.sinaisNausea = sinaisNausea;
        this.intensidadeDor = intensidadeDor;
        this.sinaisSangramento = sinaisSangramento;
        this.patientId = idPatient;
        this.dataAtendimento = new Date;
    }
}