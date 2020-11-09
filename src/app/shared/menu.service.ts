import { Injectable } from '@angular/core';
import { MenuItemDescription, MenuModel, MenuType, NavItem, SubMenuModel } from 'src/app/models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  //navItems: NavItem[];

  constructor() { }

  public get logoUrl(){
    return "../../../assets/logo/logo-grey.png";
  }
  
  getMenuItemModels(): MenuModel[]{

    let menuArr: MenuModel[]=[];

    let home = new MenuModel(MenuType.primary,
            "Home","This is Home", "home");
    menuArr.push(home);

    let news = new MenuModel(MenuType.primary,
      "Aktuelt","Seneste designs");
    
      let secondArr: SubMenuModel[]=[];
      let second = new SubMenuModel("Seneste designs",
          "Et udvalg af vores nyeste designs der kun lige har forladt værkstedet",
          "news");
      secondArr.push(second);
      second = new SubMenuModel("Seneste kollektioner",
          "Vi har netop skudt seneste kollektion. Se de lækre fotos her.",
          "collections");
      secondArr.push(second);
      news.setSubMenuItems(secondArr);

      menuArr.push(news);

      //Weding
      let wedding = new MenuModel(MenuType.primary, "Bryllup","Vaerkstedet elsker...");

      secondArr = [];
      second= new SubMenuModel("Vielsesringe","Læs om vores grundige tilgang til håndlavede vielses- og forlovelsesringe","wedding");
      secondArr.push(second);

      second= new SubMenuModel("Custom made","","custommade");
      secondArr.push(second);
      wedding.setSubMenuItems(secondArr);

      menuArr.push(wedding);

      //Designers
      let designers = new MenuModel(MenuType.primary,
            "Designers",
            "Mød Vaerkstedets dygtige designere",
            "designers")

      secondArr=[];
      second = new SubMenuModel("Louise Rought","Louise Rought Jewellery","");
      second.paramName ="designer";
      second.paramValue ="Louise Rought";
      second.url =`designers?${second.paramName}=${second.paramValue}` // "designers?designer=Louise Rought"
      secondArr.push(second);

      second = new SubMenuModel("Alice Kaufmann","Alice Kaufmann Jewellery","");
      second.paramName ="name";
      second.paramValue ="Alice Kaufmann";
      second.url =`designers?${second.paramName}=${second.paramValue}`
      secondArr.push(second);

      designers.setSubMenuItems(secondArr);
      menuArr.push(designers);

      let vaerkstedet = new MenuModel(MenuType.primary,"Vaerkstedet","Din smykkebutik på Nørrebro");
      secondArr = [];
      second = new SubMenuModel("Om Varkstedet","Vaerkstedets værdier og historie","about");
      secondArr.push(second);
      second = new SubMenuModel("Find Varkstedet","I hjertet af Nørrebro. Find os på kortet","find");
      secondArr.push(second);
      second = new SubMenuModel("Vaerkstedets nyhedsbrev","Skriv dig op til Vaerkstedet nyhedsbrev og få adgang til specialtilbud og arrangementer","newletter");
      secondArr.push(second);
      second = new SubMenuModel("Kontakt Varkstedet","Skriv en mail til os. Vi svarer altid hurtigt og ser frem til at modtage din henvendelse","contact");
      secondArr.push(second);

      vaerkstedet.setSubMenuItems(secondArr);
      menuArr.push(vaerkstedet);
   
      return menuArr;


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
        route:"",
        toogleDrawer:false,
        children: [
          {
            displayName: "Seneste designs",
            route:"news",
          },
          {
            displayName: "Seneste kollektioner", 
            route:"collections",
            header:"Seneste kollektion",
            description: "Vi har netop skudt seneste kollektion. Se de lækre fotos her."
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
      },
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
            displayName: "Nyhedsbrev",
            route:"newsletter",
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
