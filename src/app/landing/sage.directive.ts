import { Directive, Output, EventEmitter, OnDestroy } from '@angular/core';
import { fromEvent,  Subscription } from 'rxjs';
import { throttleTime, tap } from 'rxjs/operators';

@Directive({
  selector: '[appSage]'
})
export class SageDirective implements OnDestroy {

  scrollEventSubscription: Subscription;
  scrollDir: string;
  @Output() scrollDirection:EventEmitter<string> = new EventEmitter();

  constructor() {
    this.setListeners();
   }

   ngOnDestroy(){
     if(this.scrollEventSubscription){
       this.scrollEventSubscription.unsubscribe();
     }
   }

  private setListeners(){

    //var source = Observable.fromEvent(window, 'scroll');
    this.scrollEventSubscription = fromEvent(window, 'wheel').pipe(
      throttleTime(2500),
      tap((wheel:WheelEvent) => {
        this.scrollDir =
          wheel.deltaY>0
            ? "DOWN"
            : wheel.deltaY<0
            ? "UP"
            : "NEUTRAL";
        
        this.scrollDirection.emit(this.scrollDir);

      })
    ).subscribe();

  }

}
