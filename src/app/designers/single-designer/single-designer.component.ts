import { Component, OnInit, Input } from '@angular/core';
import { SocialMediaLink, SingleDesigner } from 'src/app/models';

@Component({
  selector: 'app-single-designer',
  templateUrl: './single-designer.component.html',
  styleUrls: ['./single-designer.component.scss']
})
export class SingleDesignerComponent implements OnInit {

  @Input() singleDesignerData:SingleDesigner;
  //singleDesignerData:SingleDesigner 
  designerName:string ;
  description:string[] = [];
  profileImage:string;
  portfolioImages:string[];
  socialMediaLinks:SocialMediaLink[] =[]; 

  constructor() { }

  ngOnInit(): void {

    debugger;

    this.designerName = this.singleDesignerData.name;
    this.description = this.singleDesignerData.description;
    this.profileImage = this.singleDesignerData.profileImage;
    this.portfolioImages = this.singleDesignerData.portfolioImages;
    this.socialMediaLinks = this.singleDesignerData.socialMediaLinks;

  }

  public setSomeUrl(){

   /*  let sl:SocialMediaLink = {name:"Instagram",url:"https://www.instagram.com/louiseroughtjewellery/?hl=da"};
    this.socialMediaLinks.push(sl);

    sl = {name:"Facebook",url:"https://www.instagram.com/louiseroughtjewellery/?hl=da"};
    this.socialMediaLinks.push(sl);
    
    sl = {name:"Web",url:"https://www.instagram.com/louiseroughtjewellery/?hl=da"};
    this.socialMediaLinks.push(sl); */
    
  }

  public setIntroText(){

    /* let introTextArr:string[]=[];
    introTextArr.push("Vaerkstedet formidler en række dygtige, danske smykkedesigneres arbejde i butikken i Ryesgade.");
    introTextArr.push("Trods forskellighed i det designmæssige udtryk er der to ting der er fælles for dem alle - deres fokus på det håndlavede og på bæredygtighed.");
    introTextArr.push("Klik ind på de enkelte designere i menuen ovenfor for at læse mere om deres arbejde og se seneste kollektioner.");

    this.description= introTextArr; */

  }

}
