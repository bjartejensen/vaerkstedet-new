import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FindService {

  constructor(private title:Title, private meta: Meta) {
  }

  public setTitleAndMeta(){

    const title ="Find Vaerkstedet";
    this.title.setTitle(title);
    
    const description="Find Vaerkstedet på Google Maps. Connect med vores Instagram profil eller ring til os. Men frem for alt - kom ned og besøg i butikken i Ryesgade";
    this.meta.updateTag({name: "description",content:description});
  }

  public getHeader():string{
    return "Find Vaerkstedet";
  }

  public getSubHeader():string{
    return "I Ryesgade - Nørrebros hjerte";
  }

  public getContent():string{
    return "Uanset om du går målrettet efter et smykke, som du har set i butikkens udstillingsvindue, eller om du blot ønsker at lade dig inspirere, så ser vi frem til at tage imod dig i vores hyggelige værkstedsbutik i Ryesgade.";
  }

}
