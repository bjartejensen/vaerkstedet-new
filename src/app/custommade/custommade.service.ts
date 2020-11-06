import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustommadeService {

  constructor() { }

  public getHeader():string{
    return "Custom Made";
  }

  public getContent():string[]{
    let arr:string[]=[];
    let str ="Hulli bubba";
    arr.push(str);
    str = "Vi tager med glæde i mod alle henvendelser og svarer tilbage hurtigst muligt.";
    arr.push(str);
    return arr;
  }
}
