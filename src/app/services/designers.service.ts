import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject, of, from, scheduled } from 'rxjs';
import { SingleDesigner } from '../models';
import { environment } from 'src/environments/environment';
import { tap,filter } from 'rxjs/operators';
import {findIndex,snakeCase} from "lodash";


@Injectable({
  providedIn: 'root'
})
export class DesignersService {

  private designers: SingleDesigner[]=[];
  private singleDesignersSubject= new Subject<SingleDesigner>();
  
  public singleDesignerObs$:Observable<SingleDesigner>
    = this.singleDesignersSubject.asObservable().pipe(filter(x=>x!=null));
    
  constructor(private httpClient: HttpClient) {}

  public fetchSingleDesigner(name:string):SingleDesigner{

    debugger;
    const singleDesigner :SingleDesigner = this.designers.find(x=> snakeCase(x.name)===name);

    return singleDesigner;
/* 
    if(singleDesigner){
      this.singleDesignersSubject.next(singleDesigner);
      
    }  */
  }

  public getDesigners():Observable<SingleDesigner[]>{

    const url = environment.apiPath;

    return this.httpClient.get<SingleDesigner[]>
      (url+"designers/fetch").pipe(
        tap(response=>{
          this.designers = response["designers"]; //trigger side effect to store designers
        }))

  }
}
