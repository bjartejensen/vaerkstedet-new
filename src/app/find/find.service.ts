import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FindService {

  constructor() { }

  getHeader():string{
    return "Find Vaerkstedet";
  }

  getSubHeader():string{
    return "I Ryesgade - Nørrebros hjerte";
  }

  getContent():string{
    return "Uanset om du går målrettet efter et smykke, som du har set her, eller om du blot ønsker at lade dig inspirere, så ser jeg frem til at tage imod dig i min hyggelige værkstedsbutik i Ryesgade."
  }

}
