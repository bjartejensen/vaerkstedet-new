import { Injectable } from '@angular/core';
import { NavItem } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  //navItems: NavItem[];

  constructor() { }

  public get logoUrl(){
    return "../../../assets/logo/logo-grey.png";
  }

  getMenuItems(): NavItem[] {

    return [
      {
        displayName: "Home",
        subHeader: "This is home",
        route:"home",
        toogleDrawer:true, 
      },
      {
        displayName: "Aktuelt",
        subHeader: "Seneste designs",
        route:"news",
        toogleDrawer:false,
        children: [
          {
            displayName: "Seneste kollektion",
            route:"collection",
            header:"Seneste kollektion",
            description: "Vi har netop skudt seneste kollektion. Se de lækre fotos her."
          },
          {
            displayName: "Seneste designs",
            route:"news",
            
          },
        ]
      },
      {
        displayName: "Bryllup",
        subHeader: "Vaerkstedets kærlighed",
        route:"",
        toogleDrawer:false, 
        children: [
          {
            displayName: "Vielsesringe",
            route:"wedding",
            paramName:"",
            paramValue:"",
          },
          {
            displayName: "Custom Made",
            route:"custommade",
            paramName:"",
            paramValue:"",
          },
        ]
      }
      ,
      {
        displayName: "Designers",
        subHeader: "Vaerkstedets dygtige designere",
        route:"designers",
        toogleDrawer:false,
        iconName: "",
        children: [
          {
            displayName: "Louise Rought",
            route:"louise_rought",
            paramName:"name",
            paramValue:"louise_rought",
          },
          {
            displayName: "Alice Kaufmann",
            route:"alice_kaufmann",
            paramName:"name",
            paramValue:"alice_kaufmann",
          },
       
        ],
      },
      {
        displayName: "Vaerkstedet",
        subHeader: "Din smykkebutik på Nørrebro",
        route:"",
        toogleDrawer:false,
        iconName: "",
        children: [
          {
            displayName: "Om os",
            route:"about",
            paramName:"",
            paramValue:"",
          },
          {
            displayName: "Find os",
            route:"find",
            paramName:"",
            paramValue:"",
          },
          {
            displayName: "Kontakt os",
            route:"contact",
            paramName:"",
            paramValue:"",
          },
       
        ],
      }
    ];
  }

}
