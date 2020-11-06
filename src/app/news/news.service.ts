import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { catchError, map, shareReplay, tap } from 'rxjs/operators';
import { InstaPost } from './news.models';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private instaPostsSubject: BehaviorSubject<InstaPost[]> = new BehaviorSubject(null);
  public instaPostObs$:Observable<InstaPost[]> = 
      this.instaPostsSubject.asObservable();

  constructor(public http: HttpClient) {}

  public getHeader():string{
    return "Sidste nyt fra Vaerkstedet";
  }

  public getContent():string[]{
    let arr:string[]=[];
    let str ="Her finder du de sidste nye designs der kun lige knap har forladt butikken.";
    arr.push(str);
    
    return arr;
  }

  public fetchInsta(){

    const fetchInstUrl = `${environment.apiPath}instagram/fetch`;

    return this.http.get<any>(fetchInstUrl)
      .pipe(map((posts)=>{
          //debugger;
          this.instaPostsSubject.next([]);
          return undefined;
      })).pipe(
        catchError(()=>{
          //debugger;
          return throwError("Ups! Noget gik galt i afsendelsen.")}))
        .pipe(shareReplay()).subscribe();
  }

}
