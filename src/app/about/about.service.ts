import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AboutService {

  constructor() { }

  public getHeader():string{
    return "Sidste nyt fra Vaerkstedet";
  }

  public getContent():string[]{
    let arr:string[]=[];
    let str ="Her finder du de sidste nye designs der kun lige knap har forladt butikken.";
    arr.push(str);
    
    return arr;
  }

}
