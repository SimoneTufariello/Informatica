export class Monop{
  QRCode: string;
  DataInizio: Date;
  DataFine: Date;
  lat:string;
  long:string;
  IdUtente: number;

  constructor(QRCode: string, DataInizio: Date, DataFine: Date, lat: string, long: string, IdUtente:number){
    this.QRCode=QRCode;
    this.DataInizio=DataInizio;
    this.DataFine=DataFine;
    this.lat=lat;
    this.long=long;
    this.IdUtente=IdUtente;
  }
}
