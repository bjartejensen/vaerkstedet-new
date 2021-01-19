import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  images: any[]=[];
  //headers: string[]=[];
  subHeaders:string[]=[];
  btnCaptions:string[]=[];
  urls:string[]=[];

  

  constructor(private title:Title, private meta: Meta) {

    
    this.setImages();
    this.setBtnCaptions();
    this.setUrls();
    //this.setHeaders();
    this.setSubHeaders();

   }

  public setTitleAndMeta():void{
    let header = "Håndlavede smykker i Ryesgade. Specialdesigns og grundigt håndværk. Fokus på bæredygtige materialer og ansvarlige leverandører.";
    this.title.setTitle(header);

  const desc ="Vi fokuserer på bæredygtige materialer, det grundige håndværk samt en imødekommende rådgivning og dialog. Vi udfører alle opgaver indenfor reparationer og omsmeltninger. Kom ned på Vaerkstedet til en uforpligtende snak om hvordan vi kan hjælpe dig med dit næste håndlavede smykke";
  this.meta.addTag({name:"Description", content: desc});

  const keywords = "håndlavet, smykker, bæredygtighed, Nørrebro, vielsesringe, forlovelsesringe, specialdesign, omsmeltninger, unika"
    this.meta.addTag({name:"keywords", content:keywords})
  }

  public get logoUrl(){
    return "../../../assets/logo/logo-grey.png";
  }

  public get logoGoldUrl(){
    return "../../../assets/logo/logo-gold.png";
  }

  private setImages(){
    this.images.push("../../../assets/img/landing/5.jpg");
    this.images.push("../../../assets/img/landing/6.jpg");
    this.images.push("../../../assets/img/landing/1.jpg");
    this.images.push("../../../assets/img/landing/2.jpg"); 
   /*  this.images.push("../../../assets/img/alice/1.jpg");
    this.images.push("../../../assets/img/landing/1.jpg");
    this.images.push("../../../assets/img/alice/3.jpg");
    this.images.push("../../../assets/img/alice/4.jpg");  */
  }

  private setUrls(){
    this.urls.push("/custommade");
    this.urls.push("/wedding");
    this.urls.push("/about");
    this.urls.push("/sustain");
  }

  private setBtnCaptions(){
    this.btnCaptions.push("Alt er håndlavet");
    this.btnCaptions.push("Vores Vielsesringe");
    this.btnCaptions.push("Jer i centrum");
    this.btnCaptions.push("Vores tilgang");
  }

  private setSubHeaders(){
    this.subHeaders.push("der elsker unika");
    this.subHeaders.push("der dyrker på kærligheden");
    this.subHeaders.push("der værner om kundeoplevelsen");
    this.subHeaders.push("der tror på bæredygtighed");
  }


}
