

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