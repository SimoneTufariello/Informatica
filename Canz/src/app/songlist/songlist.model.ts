export class songlist
{
    id:number;
    titoloA:string;
    artista:string;
    durataA:number;
    dataUscita:string;
    durataC:number;
    titoloC:string;

    constructor( id: number, titoloA: string, artista: string, durataA: number, dataUscita: string, durataC: number, titoloC: string) {

    this.id = id;
    this.titoloA = titoloA;
    this.artista = artista;
    this.durataA = durataA;
    this.dataUscita = dataUscita;
    this.durataC = durataC;
    this.titoloC = titoloC;

  }
}
