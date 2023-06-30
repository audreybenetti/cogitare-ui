export class Relatorio {
    id!: string;
    eldreteKroulik: boolean;
    sinaisNausea: boolean;
    intensidadeDor: boolean;
    sinaisSangramento: boolean;
    dataAtendimento: Date;
    patientId: string;

    constructor(eldreteKroulik: boolean, sinaisNausea: boolean, intensidadeDor: boolean, sinaisSangramento: boolean, idPatient: string) {
        this.id = String(Math.round(Math.random() * 1000));
        this.eldreteKroulik = eldreteKroulik;
        this.sinaisNausea = sinaisNausea;
        this.intensidadeDor = intensidadeDor;
        this.sinaisSangramento = sinaisSangramento;
        this.patientId = idPatient;
        this.dataAtendimento = new Date;
    }
}