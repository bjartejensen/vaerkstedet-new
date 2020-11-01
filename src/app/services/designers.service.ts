import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, BehaviorSubject } from 'rxjs';
import { SingleDesigner } from '../models';
import { environment } from 'src/environments/environment';
import { tap,filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DesignersService {

  private designers: SingleDesigner[]=[];
  private singleDesignersSubject= new BehaviorSubject<SingleDesigner>(null);
  
  public singleDesignerObs$:Observable<SingleDesigner>
    = this.singleDesignersSubject.asObservable();
    
  constructor(private httpClient: HttpClient) {}

  public fetchSingleDesigner(name:string):void{
    const singleDesigner :SingleDesigner = this.designers.find(x=> x.name===name);
    this.singleDesignersSubject.next(singleDesigner);
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
