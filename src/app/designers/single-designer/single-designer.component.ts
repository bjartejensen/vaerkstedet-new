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

  @Input() singleDesignerData:SingleDesigner;
  //singleDesignerData:SingleDesigner 
  designerName:string ;
  description:string[] = [];
  profileImage:string;
  portfolioImages:string[];
  socialMediaLinks:SocialMediaLink[] =[]; 

  singleDesignerObs$: Observable<SingleDesigner>;

  constructor(private route: ActivatedRoute) { }

  ngOnChanges(){
    //this.setProfile();
  }

  ngOnInit(): void {

    this.singleDesignerObs$.subscribe(x=>{
      debugger;
    })
    debugger;
    this.singleDesignerObs$ = this.route.snapshot.data["designer"];

    

    this.setProfile();
  }

  private setProfile(){
    this.designerName = this.singleDesignerData.name;
    this.description = this.singleDesignerData.description;
    this.profileImage = this.singleDesignerData.profile;
    this.portfolioImages = this.singleDesignerData.portfolio;
    this.socialMediaLinks = this.singleDesignerData.socialmedia;
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
