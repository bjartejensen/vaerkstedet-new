import { Component, OnInit } from '@angular/core';
import { show,sage, outAndIn,fadeKeyFrame,specficTrig,btnClicked,slider, sageDynamic } from "src/app/animations";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  animations:[fadeKeyFrame,sage,sageDynamic]
})
export class LandingComponent implements OnInit {

  images: any[]=[];
  headers: string[]=[];
  idx: number=0;

  constructor() { }

  ngOnInit(): void {

    this.setImages();
    this.setHeaders();
  }

  private setHeaders(){
    this.headers.push("Black Sun");
    this.headers.push("Form of Memory");
    this.headers.push("Leonardo Vandal");
  }

  public onDone($event){
    console.log($event);
  }

  public get state(){
    //console.log("state",this.idx);
    return 1;
  }

  public isVisible(idx:number){
    const ret = this.idx ===idx? true: false;
    console.log(`show: ${ret} + idx:${this.idx}`);
    return  ret ;//|| this.idx ===0;
  }

  public get visible(){
    const ret = this.idx % 2 ===0? true: false;
    console.log(`show: ${ret} + idx:${this.idx}`);
    return  ret ;//|| this.idx ===0;
  }

  private setImages(){
    this.images.push("../../../assets/img/1.jpg");
    this.images.push("../../../assets/img/2.jpg");
    this.images.push("../../../assets/img/3.jpg");
    this.images.push("../../../assets/img/2.jpg");
  }

  onClick(){

    this.idx++;

    if(this.idx>=this.images.length-1){
      this.idx=0;
    } 

  }

}
