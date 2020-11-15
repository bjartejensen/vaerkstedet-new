import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private showSpinnerSubject: Subject<boolean> = new Subject();
  public showSpinner$: Observable<boolean> = 
            this.showSpinnerSubject.asObservable();

  constructor(public http: HttpClient, 
              private title:Title,
              private meta:Meta) {
                this.setTitleAndMeta();
  }

  private setTitleAndMeta(){

    const title ="Skriv til Vaerkstedet";
    this.title.setTitle(title);
    
    const description="Vi tager med glæde i mod alle henvendelser og svarer tilbage hurtigst muligt.";
    this.meta.updateTag({name: "description",content:description});
  }

  public getHeader():string{
    return "Kontakt Vaerkstedet";
  }

  public getContent():string[]{
    let arr:string[]=[];
    let str ="Har du et spørgsmål vedrørende mine smykker - eller har du fået en ide - så tøv ikke med at skrive til Vaerkstedet.";
    arr.push(str);
    str = "Vi tager med glæde i mod alle henvendelser og svarer tilbage hurtigst muligt.";
    arr.push(str);
    return arr;
  }

  public sendEmail(from:string,subject:string,message:string):Observable<string>{

    this.showSpinnerSubject.next(true);

    const body = {
      from: from,
      subject: subject,
      message: message,
    };

    const sendGridUrl = `${environment.apiPath}email/send`;

    return this.http.post<any>(sendGridUrl,body)
      .pipe(map(()=>{
        this.showSpinnerSubject.next(false);
        return "Tak for din henvendelse. Vi bestræber os på at vende tilbage indenfor 24 timer (og gerne før)."
      })).pipe(
        catchError(()=>{
          this.showSpinnerSubject.next(false);
          return throwError("Ups! Noget gik galt i afsendelsen.")}))
        .pipe(shareReplay());
  }


}
