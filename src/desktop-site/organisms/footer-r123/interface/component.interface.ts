/**
 * Footer Upper Section Props Interface
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.15
 */
export interface FooterUpperSectionPropsInterface {
    tabs: FooterTabInterface[];
}

/**
 * Footer Below Section Props Interface
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.15
 */
export interface FooterBelowSectionPropsInterface {
    sitemap: FooterLinkInterface[];
    socmedMedias: FooterMediaLinkInterface[];
    publishMedias: FooterMediaLinkInterface[];
    siteRegions: FooterLinkInterface[];
    partners: FooterLinkInterface[];
    copyrightText: string;
}

/**
 * Footer Tab Interface
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.15
 */
export interface FooterTabInterface {
    name: string;
    menu: FooterLinkInterface[];
}

/**
 * Footer Link Interface
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.15
 */
export interface FooterLinkInterface {
    text: string;
    to: string;
}

/**
 * Footer Media(Image) Link Interface
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.15
 */
export interface FooterMediaLinkInterface {
    imageUrl: string;
    to: string;
}

/**
 * Footer Props Interface
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.15
 */
export type FooterPropsInterface = FooterUpperSectionPropsInterface &
    FooterBelowSectionPropsInterface;
