import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustommadeService {

  imgArr:string[]=[];

  constructor() { }

  public getHeader():string{
    return "Custom Made";
  }

  public getContentOne():string[]{
    let arr:string[]=[];
    let str = "Alle smykker du finder hos os er håndlavede. Vi kærer os om 'håndens arbejde' og udfører alt arbejde med en tilsvarende grundighed.";
    arr.push(str);
    str="Ikke mindst når det gælder vores forlovelses- eller vielsesringe.";
    arr.push(str);
    str ="Netop fordi disse ringe så klart symboliserer den unikke relation mellem to mennesker, gør vi en særlig indsats for at 'tune' os ind på jeres valg, inspiration og på smykktets betydning.";
    arr.push(str);

    return arr;
  }

  public getContentTwo():string[]{
    let arr:string[]=[];
    let str = "Vi udfører specialopgaver til alle lejligheder.";
    arr.push(str);
    str="Hvad enten det drejer sig om specifikke ønsker om særpræg eller om overvejelse af materialevalg, yder vi grundig sparring og rådgivning.";
    arr.push(str);
    str ="Og vi yder sparring til alle idéer og inspirationer og ikke mindst budgetter. Vi lægger vægt på en grundig dialog og vejledning uanset hvad.";
    arr.push(str);


    return arr;
  }

  public getImages():string[]{

    let img1 = "../../assets/img/custommade/1.jpg";
    let img2 = "../../assets/img/custommade/2.jpg";
    
    this.imgArr.push(img1);
    this.imgArr.push(img2);

    return this.imgArr;

  }

}
