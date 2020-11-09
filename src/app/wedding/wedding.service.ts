import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeddingService {

  constructor() { }

  public getHeader():string{
    return "Vaerkstedets vielsesringe";
  }

  public getContentOne():string[]{

    let arr:string[]=[];
    let str ="Går I i giftetanker så skal I komme forbi Vaerkstedet.";
    arr.push(str);
    str = "Alle vores vielses- og forlovelsesringe er håndlavede og bliver lavet på baggrund af jeres ønsker.";
    arr.push(str);
    str="Vi designer og fremstiller ringe i alle og i alle prisklasser, så mulighederne er mange.";
    arr.push(str);

    return arr;
  }

  public getContentTwo():string[]{

    let arr:string[]=[];
    let str="Sammen forholder vi os til design, æstetik, brugbarhed og ikke mindst til jer";
    arr.push(str);
    str="Vi vejleder jer naturligvis gerne i forhold til eventuelle bæredygtige valg af materialer og ædelsten. I er i centrum.";
    arr.push(str);

    return arr;
  }
}