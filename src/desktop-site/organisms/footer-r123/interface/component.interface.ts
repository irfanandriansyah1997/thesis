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
    copyrightText: string;
    sitemap: FooterLinkInterface[];
    partners: FooterLinkInterface[];
    siteRegions: FooterLinkInterface[];
    socmedMedias: FooterMediaLinkInterface[];
    publishMedias: FooterMediaLinkInterface[];
}

/**
 * Footer Tab Interface
 * @author nafhul <nafhul.arsyad@99.co>
 * @since 2020.05.15
 */
export type FooterTabInterface = FooterTabContentInterface & {
    name: string;
};

/**
 * Footer Tab Content Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.15
 */
export interface FooterTabContentInterface {
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
