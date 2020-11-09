import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  public getHeader():string{
    return "Om Vaerkstedet";
  }

  public getContent():string[]{
    let arr:string[]=[];
    let str ="Vaerkstedet er en smykkebutik i Ryesgade.";
    arr.push(str);
    
    return arr;
  }

}
