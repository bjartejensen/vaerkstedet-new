import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SingleDesigner } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DesignersService {

  imgArr:string[]=[];

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
    //let str = "Vaerkstedet formidler en række dygtige, danske smykkedesigneres arbejde i butikken i Ryesgade.";
    let str = "Vaerkstedet eksponerer en række dygtige designere i butikken i Ryesgade";
    arr.push(str);
    str="Trods forskellighed i det designmæssige udtryk er én ting fælles for dem alle - deres fokus på det håndlavede";
    arr.push(str);
    return arr;
  }

  public getImages():string[]{

    let img1 = "../../assets/img/designers/4.jpg";
    this.imgArr.push(img1);
    let img2 = "../../assets/img/designers/3.jpg";
    this.imgArr.push(img2);
    return this.imgArr;

  }


  

}
