import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class WeddingService {

  title:string;
  descriptionTag:{name:string, content:string};
  twitterTag

  imgArr:string[]=[];

  constructor(private titleService:Title,
    private meta: Meta) { 

    }

  public setTitleAndMeta(){
    this.title ="Vaerkstedets vielsesringe";
    this.titleService.setTitle(this.title);
    
    this.descriptionTag = {name: "description",content:"Håndlavede vielsesringe i alle prisniveauer og materialer"};
    this.meta.updateTag(this.descriptionTag);
    
  }

  public getHeader():string{
    //return "Vaerkstedets vielsesringe";
    return "Vielsesringe";
  }

  public getContentOne():string[]{

    let arr:string[]=[];
    let str ="Går I i giftetanker så skal I komme forbi Vaerkstedet";
    arr.push(str);
    str = "Alle vores vielses- og forlovelsesringe er håndlavede og bliver lavet på baggrund af jeres ønsker.";
    arr.push(str);
    str="Vi designer og fremstiller ringe i alle og i alle prisklasser, så mulighederne er mange.";
    arr.push(str);

    return arr;
  }

  public getContentTwo():string[]{

    let arr:string[]=[];
    let str="Sammen forholder vi os til design, æstetik, brugbarhed";
    arr.push(str);
    str="...og ikke mindst til jer.";
    arr.push(str);
    str="Vi vejleder jer naturligvis gerne i forhold til eventuelle bæredygtige valg af materialer og ædelsten. I er i centrum.";
    arr.push(str);

    return arr;
  }

  public getImages():string[]{

    let img1 = "../../assets/img/wedding/1.jpg";
    let img2 = "../../assets/img/wedding/2.jpg";

    this.imgArr.push(img1);
    this.imgArr.push(img2);

    return this.imgArr;

  }

}
