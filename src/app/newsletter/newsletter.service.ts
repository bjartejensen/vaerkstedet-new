import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NewsletterService {

  private showSpinnerSubject: Subject<boolean> = new Subject();
  public showSpinner$: Observable<boolean> = 
            this.showSpinnerSubject.asObservable();

  constructor(public http: HttpClient) {}

  public getHeader():string{
    return "Vaerkstedets nyhedsbrev";
  }

  public getContent():string[]{
    let arr:string[]=[];
    let str ="Igennem Vaerkstedets nyhedsbrev får du adgang til specialrabatter og de aller seneste smykkenyheder.";
    arr.push(str);
    str = "Du tilmelder dig Vaerkstedets nyhedsbrev ved at sende os din email adresse her.";
    arr.push(str);
    return arr;
  }

  public newsletterSubscribe(email:string):Observable<string>{

    this.showSpinnerSubject.next(true);

    const body = {
      email: email
    };

    const subscribeUrl = `${environment.apiPath}newsletter/subscribe`;

    return this.http.post<any>(subscribeUrl,body)
      .pipe(map(()=>{
        this.showSpinnerSubject.next(false);
        return "Tak for din tilmelding til Vaerkstedets nyhedsbrev."
      })).pipe(
        catchError(()=>{
          this.showSpinnerSubject.next(false);
          return throwError("Ups! Noget gik galt i tilmeldingsprocessen.")}))
        .pipe(shareReplay());
  }

}
