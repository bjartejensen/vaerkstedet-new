

export interface SocialMediaLink{
    name:string;
    url: string;
}

export interface SingleDesigner{
    name: string;
    profileImage: string;
    portfolioImages:string[];
    description:string[];
    socialMediaLinks: SocialMediaLink[];
}