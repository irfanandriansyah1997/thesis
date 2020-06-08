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
    onClickSave: () => void;
    onClickMortgageSimulation: () => void;
}

/**
 * Search Page Card Data Interface
 * @author Dedik Budianto <irfan@99.co>
 * @since 2020.05.21
 */
export type R123SearchPageCardDataInterface = {
    id: string;
    link: string;
    unit: number;
    title: string;
    address: string;
    priceTag: string;
    installment: string;
    propertyType: string;
    completionDate: string;
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
