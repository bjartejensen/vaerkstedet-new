import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  imgArr:string[]=[];

  constructor() { }

  public getImages():string[]{

    let img1 = "../../assets/img/about/1.jpg";
    let img2 = "../../assets/img/about/2.jpg";
    let img3 = "../../assets/img/about/3.jpg";
    let img4 = "../../assets/img/about/4.jpg";

    this.imgArr.push(img1);
    this.imgArr.push(img2);
    this.imgArr.push(img3);
    this.imgArr.push(img4);

    return this.imgArr;

  }
  public getHeader():string{
    return "Vaerkstedet";
  }

  public getContentTwo():string[]{
    let arr:string[]=[];
    let str ="Den nærværende kundeoplevelse står Vaerkstedet meget nær.";
    arr.push(str);
    str ="I vores fokus på unika er kunderne en væsentlig inspirationskilde. Hvad enten det er viderebringelsen af en historie fra 'gaden' eller fortællingen om et arvestykke, så er Vaerkstedet et sted der samler inspirationen op.";
    arr.push(str);
    str="Vi ved at der ved omdannelse af et arvestykke eller i ønsket om at give en unik gave ofte går en lang proces forud.Vi ved at der ved omdannelse af et arvestykke eller i ønsket om at give en unik gave ofte går en lang proces forud.";
    arr.push(str);
    str="Ved bestillingsopgaver lægges der en naturlig vægt på den grundige og uforpligtende dialog og vejledning.";
    arr.push(str);
    return arr;
  }

  public getContentOne():string[]{
    let arr:string[]=[];
    let str ="Nær søerne, med Ravnsborggade som nabo, fungerer Vaerkstedet som både butik og smykkeværksted.";
    arr.push(str);
    str="Vaerkstedet er etableret som en kombination af butik og værksted."
    arr.push(str);
    str="Vi byder alle velkommen, og bestræber os alligevel på give noget til gaden og nærmiljøet";
    arr.push(str);
    return arr;
  }

  public getContentThree():string[]{
    let arr:string[]=[];
    let str ="Vaerkstedet er en smykkebutik i Ryesgade.";
    arr.push(str);
    str="Vaerkstedet er etableret som en kombination af butik og værksted."
    
    return arr;
  }

}

/* <h3>Om Vaerkstedet</h3>
<h4>Nær søerne, med Ravnsborggade som nabo, fungerer Vaerkstedet som både butik og smykkeværksted.</h4>
<h4>Vi vil gerne kendes for især <span class="attention"> <strong>fire</strong> </span> ting:</h4>
<blockquote><span>&nbsp;&nbsp;</span> vores fokus på det håndlavede <br><span>&nbsp;&nbsp;</span> vores bæredygtighedsfokus<br>
<span>&nbsp;&nbsp;</span> vores interaktion med lokalmiljøet</blockquote>
<h4>Men fremfor alt vores fokus på <span class="attention"> <strong>den grundige, behagelige og nærværende kundeoplevelse.</strong></span></h4>
<h4> <strong>Velkommen til Vaerkstedet.</strong></h4> */

/* <div class="xs_text_container" >
<h3>Vores kunder</h3>
<h4>Den nærværende kundeoplevelse står Vaerkstedet meget nær.</h4>
<h4>I vores fokus på unika er kunderne en væsentlig inspirationskilde.
Hvad enten det er viderebringelsen af en historie fra 'gaden' eller fortællingen om et <span class="attention">arvestykke</span>, så er Vaerkstedet et sted der samler inspirationen op.</h4>
<blockquote>Vi ved at der ved omdannelse af et arvestykke eller i ønsket om at give en unik gave ofte går en lang proces forud.</blockquote>
<h4>Ved bestillingsopgaver lægges der en naturlig vægt på den grundige og uforpligtende dialog og vejledning.</h4>
<h4>For par der ønsker at høre om mulighederne for at få lavet håndlavede forlovelses- eller <span class="attention"> vielsesinge</span>, stiller vi vores faglighed til rådighed.</h4>
<h4>Hvad enten det drejer sig om specifikke ønsker om særpræg eller om overvejelse af materialevalg, yder vi grundig sparring og rådgivning.</h4>
<h4>Vi vejleder naturligvis også gerne <span class="attention"> hvis bæredygtighed har et særligt fokus.</span> I kan læse mere om vores vielsesringe
    <span class="pimpup" style="cursor:pointer" gtagEvent trackOn="click" action="Vielsesringe" category="second_level" [routerLink]="['/wedding']">hér. </span> </h4>
  <!--  </span> eller gå direkte til vores kollektion af
     <span class="pimpup"> <a style="cursor:pointer" [routerLink]="['/wedding-gallery']">vielsesringe</a> </span>
     </h4> -->
</div> */
/* 
<div class="xs_text_container" >
<h3>Nørrebro - Københavns bankende hjerte</h3>
<h4>Vaerkstedet er etableret som en kombination af butik og værksted.</h4>
<h4>Det er efterhånden 15 år siden Vaerkstedet åbnede op i <span class="pimpup" style="cursor:pointer" gtagEvent trackOn="click" action="Find Vaerkstedet" category="second_level" [routerLink]="['/find']">Ryesgade </span>, og vi har gjort meget for at skabe en både behagelig, <span class="attention">personlig</span> og <span class="attention">eksklusiv</span> ramme omkring et hvert kundebesøg.</h4>
<h4>Mange af vores kunder er lokale der er kommet i butikken gennem mange år eller mennesker der tilfældigt kommer forbi.</h4>
<blockquote>Vi byder alle velkommen, og bestræber os alligevel på give noget til gaden og nærmiljøet</blockquote>
<h4>Det vil vi gøre ved løbende at arrangere <span class="attention">events</span> med lokale kræfter og samarbejdspartnere der kan bibringe liv i butikken og i gaden.</h4>
<!--    <h4>Du kan følge med  <span class="pimpup"> <a style="cursor:pointer" [routerLink]="['/events']">hér.</a> </span>
og på de sociale medier du er altid velkommen til at kontakte os hvis du har spørgsmål til vores
    <span class="pimpup"> <a style="cursor:pointer" [routerLink]="['/find']">eventkalender.</a> </span></h4> -->
</div> */