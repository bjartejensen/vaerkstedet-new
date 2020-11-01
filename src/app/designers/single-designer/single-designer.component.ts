import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SocialMediaLink, SingleDesigner } from 'src/app/models';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-single-designer',
  templateUrl: './single-designer.component.html',
  styleUrls: ['./single-designer.component.scss']
})
export class SingleDesignerComponent implements OnInit, OnChanges {

  @Input() singleDesigner?:SingleDesigner;
  //singleDesignerData:SingleDesigner 
  designerName:string ;
  description:string[] = [];
  profileImage:string;
  portfolioImages:string[];
  socialMediaLinks:SocialMediaLink[] =[]; 

  constructor(private route: ActivatedRoute) { }

  ngOnChanges(){
    if(this.singleDesigner){
      this.setProfile();
    }
    
  }

  ngOnInit(): void {
  }

  private setProfile(){
    debugger;
    this.designerName = this.singleDesigner.name;
    this.description = this.singleDesigner.description;
    this.profileImage = this.singleDesigner.profile;
    this.portfolioImages = this.singleDesigner.portfolio;
    this.socialMediaLinks = this.singleDesigner.socialmedia;
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
