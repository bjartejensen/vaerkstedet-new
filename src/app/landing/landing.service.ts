import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  images: any[]=[];
  headers: string[]=[];
  subHeaders:string[]=[];

  constructor(private title:Title, private meta: Meta) {

    this.setTitleAndMeta();
    this.setImages();
    this.setHeaders();
    this.setSubHeaders();

   }

  private setTitleAndMeta():void{
    let header = "Håndlavede smykker i Ryesgade. Specialdesigns og grundigt håndværk. Fokus på bæredygtige materialer og ansvarlige leverandører.";
    this.title.setTitle(header);

  const desc ="Vi fokuserer på bæredygtige materialer, det grundige håndværk samt en imødekommende rådgivning og dialog. Vi udfører alle opgaver indenfor reparationer og omsmeltninger. Kom ned på Vaerkstedet til en uforpligtende snak om hvordan vi kan hjælpe dig med dit næste håndlavede smykke";
  this.meta.addTag({name:"Description", content: desc});

  const keywords = "håndlavet, smykker, bæredygtighed, Nørrebro, vielsesringe, forlovelsesringe, specialdesign, omsmeltninger, unika"
    this.meta.addTag({name:"keywords", content:keywords})
  }

  private setImages(){
    this.images.push("../../../assets/img/1.jpg");
    this.images.push("../../../assets/img/2.jpg");
    this.images.push("../../../assets/img/3.jpg");
    this.images.push("../../../assets/img/4.jpg");
  }

  private setSubHeaders(){
    this.subHeaders.push("der elsker unika");
    this.subHeaders.push("der tror på kærligheden");
    this.subHeaders.push("der tror på bæredygtighed");
    this.subHeaders.push("der værner om kundeoplevelsen");
  }

  private setHeaders(){
    this.headers.push("Black Sun");
    this.headers.push("Form of Memory");
    this.headers.push("Leonardo Vandal");
  }

}
