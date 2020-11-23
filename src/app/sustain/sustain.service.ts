import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SustainService {

 /*  <h3>Vaerkstedets syn på bæredygtighed</h3>
  <h4>Som smykkedesignere har vi naturligvis ikke vanskeligt ved at lade os fascinere af ædelmetallers skønhed, <span class="attention"> mystik</span> og formbarhed.</h4>
  <h4 >At facineres af formbarhedens muligheder forskabe smykker der etablerer kontakt mellem mennesker baseret på materialer der er dannet for millioner af år tilbage i jordens indre. </h4>
  <h4>Men vi lever i en tid hvor vi tvinges til at stille krav til hvordan vi agerer i forhold til <span class="attention"> miljøet</span> - også som smykkedesignere.</h4>

  <blockquote>Bevægelsen i retning af stærkere bevidsthed om materialers tilblivelse og videredistribution er vigtig og rigtig</blockquote> */

  
  imgArr:string[]=[];

  constructor(private title:Title,
    private meta: Meta) { }

  public setTitleAndMeta(){
    this.title.setTitle("Vaerkstedets syn på bæredygtighed");
    this.meta.updateTag({name: "description",content:"Hos Vaerkstedet er den grundige vejledning og service en helt afgørende del af vores DNA."});
  }
  
  public getHeader():string{
    //return "Vaerkstedets vielsesringe";
    return "Værkstedet og bæredygtighed";
  }

  public getContentOne():string[]{

    let arr:string[]=[];
    let str ="Smykkedesignere har en naturlig fascination af ædelmetallers skønhed";
    arr.push(str);
    str = "På Vaerkstedet facineres vi af formbarhedens muligheder for at skabe smykker der etablerer kontakt mellem mennesker baseret på materialer der er dannet for millioner af år tilbage i jordens indre";
    arr.push(str);
    str="Men vi lever i en tid hvor vi tvinges til at stille krav til hvordan vi agerer i forhold til miljøet - også som smykkedesignere.";
    arr.push(str);

    return arr;
  }

  public getContentTwo():string[]{

    let arr:string[]=[];
    let str="Bevægelsen i retning af stærkere bevidsthed om materialers tilblivelse og videredistribution er vigtig og rigtig";
    arr.push(str);
    str="På Vaerkstedet gør vi derfor en særlig indsats for at vejlede jer i forhold til eventuelle bæredygtige valg af materialer og ædelsten.";
    arr.push(str);

    return arr;
  }

  public getImages():string[]{

    let img1 = "../../assets/img/sustain/1.jpg";
    let img2 = "../../assets/img/sustain/2.jpg";

    this.imgArr.push(img1);
    this.imgArr.push(img2);

    return this.imgArr;

  }

}
