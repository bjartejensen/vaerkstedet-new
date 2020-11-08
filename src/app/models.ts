

export interface SocialMediaLink{
    name:string;
    url: string;
}

export interface SingleDesigner{
    name: string;
    profile: string;
    portfolio:string[];
    description:string[];
    socialmedia: SocialMediaLink[];
}

export interface NavItem {
    displayName: string;
    route: string;
    toogleDrawer:boolean,
    subHeader?:string,
    disabled?: boolean;
    iconName?: string;
    children?: NavSubItem[];
  }

  export interface NavSubItem {
    displayName: string;
    disabled?: boolean;
    route?:string;
    paramName?:string,
    paramValue?: string,
    header?:string,
    description?: string

  }

  export enum MenuType{
    primary = "primary",
    secondary = "secondary"
  }

  

  export class MenuModel{
    
    public subMenuItems?:SubMenuModel| SubMenuModel[];
    public description?:MenuItemDescription | MenuItemDescription[]

    constructor(
          public menuType: MenuType,
          public header:string, 
          public subHeader?: string,
          public url?: string){}

    public setSubMenuItems(subMenuItems: SubMenuModel | SubMenuModel[]){
      if(this.menuType===MenuType.primary){
        this.subMenuItems = subMenuItems;
      }
    }

    public setDescription(description: MenuItemDescription | MenuItemDescription[]){
      this.description = description;
    }

    public get clickable():boolean{
      return !!this.url;
    }

  }

  export class SubMenuModel extends MenuModel{

    paramName?:string;
    paramValue?: string;

    constructor(header:string,subheader:string, url:string){
      super(MenuType.secondary,header,subheader,url);
    }

  }

  export interface MenuItemDescription{
    header: string;
    subHeader?:string;
    description:string;
    url?:string;
  }

  