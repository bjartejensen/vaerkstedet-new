import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class FindService {

  constructor(private title:Title, private meta: Meta) {
      this.setTitleAndMeta();
   }

  private setTitleAndMeta(){

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
    return "Uanset om du går målrettet efter et smykke, som du har set her, eller om du blot ønsker at lade dig inspirere, så ser jeg frem til at tage imod dig i min hyggelige værkstedsbutik i Ryesgade."
  }

}
