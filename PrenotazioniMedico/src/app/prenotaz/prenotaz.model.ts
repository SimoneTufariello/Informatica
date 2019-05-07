export class prenotaz
{
    nome:string;
    cognome:string;
    indirizzo:string;
    telefono:string;
    email:string;
    dataPrenot:string;
    oraPrenot:string;

    constructor( nome: string, cognome: string, indirizzo: string, telefono: string, email: string, dataPrenotaz: string, oraPrenotaz: string) {

    this.nome = nome;
    this.cognome = cognome;
    this.indirizzo = indirizzo;
    this.telefono = telefono;
    this.email = email;
    this.dataPrenot = dataPrenotaz;
    this.oraPrenot = oraPrenotaz;

  }
}
