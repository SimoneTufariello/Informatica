export class Monop{
  QRCode: string;
  DataInizio: Date;
  DataFine: Date;
  lat:string;
  long:string;
  Stato: boolean;

  constructor(QRCode: string, DataInizio: Date, DataFine: Date, lat: string, long: string, Stato:boolean){
    this.QRCode=QRCode;
    this.DataInizio=DataInizio;
    this.DataFine=DataFine;
    this.lat=lat;
    this.long=long;
    this.Stato=Stato;
  }
}
