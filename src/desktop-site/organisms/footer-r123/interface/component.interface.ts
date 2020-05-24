/**
 * Footer Interfaces
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.15
 */

export interface FooterTopSectionPropsInterface {
    tabs: FooterTab[];
}

export interface FooterTab {
    name: string;
    menu: FooterLink[];
}

export interface FooterBottomSectionPropsInterface {
    sitemap: FooterLink[];
    socmedMedias: MediaLink[];
    publishMedias: MediaLink[];
    siteRegions: FooterLink[];
    partners: FooterLink[];
    copyrightText: string;
}

export interface FooterLink {
    text: string;
    to: string;
}

export interface MediaLink {
    imageUrl: string;
    to: string;
}

export type FooterPropsInterface = FooterTopSectionPropsInterface &
    FooterBottomSectionPropsInterface;
