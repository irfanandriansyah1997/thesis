import { CarouselItemInterface } from '../../../../common/molecules/carousel/interface/component.interface';

/**
 * Search Page Card Tier
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export type R123ListingCardTier = 'featured' | 'premier';

/**
 * Search Page Card Media Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export type R123SearchPageCardMediaInterface = CarouselItemInterface[];

/**
 * Search Page Card Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export interface R123SearchPageCardActionInterface {
    saveAction: R123SearchPageCardActionItemInterface;
    contactAction: R123SearchPageCardActionItemInterface;
    viewDetailAction: R123SearchPageCardActionItemInterface;
    mortgageSimulationAction: R123SearchPageCardActionItemInterface;
}

/**
 * Search Page Card Data Interface
 * @author Dedik Budianto <irfan@99.co>
 * @since 2020.05.21
 */
export type R123SearchPageCardDataInterface = {
    id: string;
    link: string;
    unit: string;
    title: string;
    address: string;
    priceTag: string;
    mediaCount: number;
    agencyName: string;
    installment: string;
    videoCount?: number;
    propertyType: string;
    completionDate: string;
    publishingDate: string;
    media: R123SearchPageCardMediaInterface;
    attribute: R123SearchPageCardAttributeInterface;
};

/**
 * Search Page Card Attribute
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.30
 */
export interface R123SearchPageCardAttributeInterface {
    bedroom?: string;
    carport?: string;
    bathroom?: string;
    landSize?: string;
    buildingSize?: string;
}

/**
 *  Search Page Card Action Item Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.03
 */
export type R123SearchPageCardActionItemInterface = {
    label: string;
    onCLick: () => void;
};
