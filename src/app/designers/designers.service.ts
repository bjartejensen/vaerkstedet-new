import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SingleDesigner } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DesignersService {

  constructor(private httpClient: HttpClient) { }

  public fetchSingleDesigner(name:string):Observable<SingleDesigner>{
    const url = `${environment.apiPath}designers/${name}`;
    return this.httpClient.get<SingleDesigner>(url)
  }

  public getHeader():string{
    return "Vaerkstedets designere";
  }

  public getContentOne():string[]{
    let arr:string[]=[];
    let str = "Vaerkstedet formidler en række dygtige, danske smykkedesigneres arbejde i butikken i Ryesgade.";
    arr.push(str);
    str="Trods forskellighed i det designmæssige udtryk er én ting fælles for dem alle - deres fokus på det håndlavede";
    arr.push(str);
    str ="Klik ind på de enkelte designere i menuen for at læse mere om deres arbejde og se seneste kollektioner.";
    arr.push(str);

    return arr;
  }

}
