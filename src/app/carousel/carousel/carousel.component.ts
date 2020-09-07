import { Component, OnInit } from '@angular/core';
import { show,moveleftright } from "src/app/animations";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
  animations: [show,moveleftright]
})
export class CarouselComponent implements OnInit {


  images: any[]=[]
  

  selectedImgIdx:number = 1;
  selectedImgUrl:string;
  urlIfNext: string;
  urlIfBack:string;
  direction: string;

  constructor() { }

  ngOnInit(): void {
    this.setImages();
    this.selectedImgUrl = this.getImgUrl(this.selectedImgIdx);
  }

  private setImages(){
    this.images.push("../../../assets/img/1.jpg");
    this.images.push("../../../assets/img/2.jpg");
    this.images.push("../../../assets/img/3.jpg");
  }

  public onButtonClicked(direction:string){

    this.direction = direction;

    switch (direction.toLowerCase()){

      case "next":
        this.moveNext();
        break;
      case "back":
        this.moveBack();
        break;
    }

  } 

  public getImgUrl(idx):string{
    return this.images[idx];
  }
 
  

  private moveNext(){

    debugger;

      if(this.selectedImgIdx===this.maxIdx){
        this.selectedImgIdx=0;
        this.urlIfBack = this.getImgUrl(this.maxIdx);
        this.urlIfNext = this.getImgUrl(this.selectedImgIdx+1);
      }
      else{
        
        this.urlIfBack = this.getImgUrl(this.selectedImgIdx);
        this.selectedImgIdx++;
        let nIdx=this.selectedImgIdx===this.maxIdx?0:this.selectedImgIdx+1;
        this.urlIfNext = this.getImgUrl(nIdx);
      }

      this.selectedImgUrl = this.getImgUrl(this.selectedImgIdx);
  }

  private moveBack(){

    debugger;

    if(this.selectedImgIdx===0){
      this.selectedImgIdx=this.maxIdx;
      this.urlIfBack = this.getImgUrl(this.selectedImgIdx-1);
      this.urlIfNext = this.getImgUrl(0);
    }
    else{
      this.selectedImgIdx--;
      this.urlIfBack = this.getImgUrl(this.selectedImgIdx===0?this.maxIdx: this.selectedImgIdx-1);
      this.urlIfNext = this.getImgUrl(this.selectedImgIdx+1);
      
    }

    this.selectedImgUrl = this.getImgUrl(this.selectedImgIdx);
  }

  private get maxIdx(){
    return this.images.length-1;
  }

}
