/**
 * Footer Interfaces
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.15
 */

export interface FooterTopSectionPropsInterface {
    tab: {
        [key: string]: {
            menu: FooterLink[];
        };
    };
}

export interface FooterBottomSectionPropsInterface {
    sitemap: FooterLink[];
    siteRegions: FooterLink[];
    partners: FooterLink[];
}

export interface FooterLink {
    text: string;
    to: string;
}

export type FooterPropsInterface = FooterTopSectionPropsInterface &
    FooterBottomSectionPropsInterface;
