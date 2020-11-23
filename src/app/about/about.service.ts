import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  imgArr:string[]=[];

  constructor(private title:Title,private meta:Meta) { }

  public setTitleAndMeta(){

    const title ="Din smykkebutik i Ryesgade";
    this.title.setTitle(title);
    
    const description="Vaerkstedet i Ryesgade. Håndlavede smykker, bæredygtigt håndværk, lokalt hensyn, kunden i centrum.";
    this.meta.updateTag({name: "description",content:description});
  }


  public getImages():string[]{

    let img1 = "../../assets/img/about/1.jpg";
    let img2 = "../../assets/img/about/10.jpg";
    let img3 = "../../assets/img/about/8.jpg";
    let img4 = "../../assets/img/about/6.jpg";

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
    let str ="Nær søerne, med Ravnsborggade som nabo, ligger Vaerkstedet";
    arr.push(str);
    str="Vaerkstedet er etableret som en kombination af butik og værksted, så når I kommer på besøg, summer butikken ofte af vores designere der arbejder."
    arr.push(str);
    str="Alle smykker i butikkens udstilling er håndlavede og vi har stor erfaring med både omsmeltninger og alle typer af reparationer.";
    arr.push(str);
    return arr;
  }

  public getContentOne():string[]{
    let arr:string[]=[];
    let str ="Vaerkstedet dyrker kundeplejen";
    arr.push(str);
    str="Uanset om I har arvestykke eller I ønsker omdannet eller har fået en ide til et nyt smykke, så samler Vaerkstedet inspirationen op.";
    arr.push(str);
    str ="En grundig vejledning og betjening af kunderne er noget af det Vaerkstedet vil kendes for.";
    arr.push(str);
    str="Vi sætter en ære i at gå den ekstra mil for vores kunder. Vaerkstedet dyrker kundeplejen";
    arr.push(str);
    return arr;
  }

  public getContentThree():string[]{
    let arr:string[]=[];
    let str ="Vi har smykker til at alle anledninger og i alle prisniveauer";
    arr.push(str);
    str="Hvad enten I ønsker et håndlavet smykke i de mest ekslusive materialer eller hurtigt skal finde en lille, håndlavet ting til en person I har kær, så har Vaerkstedet en bredde og dybde i udvalget."
    arr.push(str);
    str="Herudover samarbejder Vaerkstedet med landets dygtigste håndværkere og ekslusive leverandører indenfor perler og sten. Alt er muligt."
    arr.push(str);
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