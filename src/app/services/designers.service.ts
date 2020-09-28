import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, Subject } from 'rxjs';
import { SingleDesigner } from '../models';
import { environment } from 'src/environments/environment';
import { tap,filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DesignersService {

  private designers: SingleDesigner[]=[];
  private singleDesignersSubject= new Subject<SingleDesigner>();
  
  public singleDesignerObs$:Observable<SingleDesigner>
    = this.singleDesignersSubject.asObservable().pipe(filter(x=>x!=null));
    
  constructor(private httpClient: HttpClient) {}

  public fetchSingleDesigner(name:string){


    debugger;
     let t = this.designers.filter((x: SingleDesigner)=>x.name===name);
     let d:SingleDesigner
    if(d){
      this.singleDesignersSubject.next(d);
    }

  }

  public getDesigners():Observable<SingleDesigner[]>{

    const url = environment.apiPath;

    return this.httpClient.get<SingleDesigner[]>
      (url+"designers/fetch").pipe(tap(designers=>{
        this.designers = designers; //trigger side effect to store designers
      }))

  }
}
