import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { SingleDesigner } from '../models';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class DesignersService {

  imgArr:string[]=[];
  
  constructor(private httpClient: HttpClient,private title:Title,private meta:Meta) { }

  public setTitleAndMeta(){
    this.title.setTitle("Vaerkstedets designere");
    this.meta.updateTag({name: "description",content:"Vaerkstedet formidler en række dygtige designeres håndlavede smykker."});
  }

  public fetchSingleDesigner(name:string):Observable<SingleDesigner>{
    const url = `${environment.apiPath}designers/${name}`;
    return this.httpClient.get<SingleDesigner>(url)
  }

  public getHeader():string{
    return "Vaerkstedets designere";
  }

  public getContentTwo():string[]{
    let arr:string[]=[];
    
    let str="Vi glæder os til at vise jer vores store udvalg";
    arr.push(str);
    str="Udtryk og materialer er imidlertid forskellige, så der er noget for en hver smag og en hver anledning.";
    arr.push(str);

    return arr;

  }

  public getContentOne():string[]{
    let arr:string[]=[];
    //let str = "Vaerkstedet formidler en række dygtige, danske smykkedesigneres arbejde i butikken i Ryesgade.";
    let str = "Vaerkstedet eksponerer en række dygtige designere, i butikken i Ryesgade";
    arr.push(str);
    str="Vaerkstedet værner om det grundige håndværk og alle designere, tilknyttet Vaerkstedet, holder den håndværksmæssige fane højt – alt er håndlavet.";
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
