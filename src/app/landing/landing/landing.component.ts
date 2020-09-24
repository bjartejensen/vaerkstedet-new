import { Component, OnInit, HostBinding } from '@angular/core';
import { sageFull } from "src/app/animations";
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations:[sageFull]
})
export class LandingComponent implements OnInit {

  images: any[]=[];
  headers: string[]=[];
  subHeaders:string[]=[];

  idx: number=0;
  public state:string ="up";
  public isDown:boolean;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.setImages();
    this.setHeaders();
    this.setSubHeaders();
  }

  //#region Private Methods
  
  private setImages(){
    this.images.push("../../../assets/img/1.jpg");
    this.images.push("../../../assets/img/2.jpg");
    this.images.push("../../../assets/img/3.jpg");
    this.images.push("../../../assets/img/4.jpg");
  }

  private setSubHeaders(){
    this.subHeaders.push("der elsker unika");
    this.subHeaders.push("der tror på kærligheden");
    this.subHeaders.push("der tror på bæredygtighed");
    this.subHeaders.push("der værner om kundeoplevelsen");
  }

  private setHeaders(){
    this.headers.push("Black Sun");
    this.headers.push("Form of Memory");
    this.headers.push("Leonardo Vandal");
  }

  private onIncreaseIndex(){
    this.idx++;
    if(this.idx>=this.images.length-1){
      this.idx=0;
    } 
  }
  

  //#endregion

  //#region Public Methods

  public changeRoute(){
    const url:string ="carousel";
    this.router.navigateByUrl("/" + url);
  }

  public onDone(event){
    console.log(event);
  }

  public onScroll(event:string){
    this.onIncreaseIndex();
    this.state = event.toLowerCase();
  }

  public isVisible(idx:number){
    return this.idx ===idx? true: false;
  }
  
  //#endregion

}
