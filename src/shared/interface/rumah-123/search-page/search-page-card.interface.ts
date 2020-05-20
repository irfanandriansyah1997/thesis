import { ReactNode } from 'react';

import {
    CarouselItemInterface,
    CarouselIndicatorInterface
} from '../../../../common/molecules/carousel/interface/component.interface';

/**
 * Search Page Card Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export interface R123SearchPageCardActionInterface {
    onClickSave?: () => void;
    onClickViewDetail?: () => void;
    onClickContactAgent?: () => void;
}

/**
 * Search Page Card Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export interface R123SearchPageCardActionInterfaceV2 {
    onClickSave: () => void;
    onClickButtonSave: () => void;
    onClickViewDetail: () => void;
    onClickContactAgent: () => void;
    onClickMortgageSimulation: () => void;
}

export type ListingCardTier = 'featured' | 'premier';

export type R123ListingCardTier = 'featured' | 'premier';

/**
 * Search Page Card Media Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export interface R123SearchPageCardMediaInterface {
    onClick?: () => void;
    tier?: ListingCardTier;
    media: CarouselItemInterface[];
    caption?: R123SearchPageCardMediaCaptionInterface;
    carouselIndicator?: CarouselIndicatorInterface;
}

/**
 * Search Page Card Media Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export type R123SearchPageCardMediaInterfaceV2 = CarouselItemInterface[];

/**
 * Search Page Card Attribute Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.10
 */
export interface R123SearchPageCardAttributeItemInterface {
    alt?: string;
    value: string;
    icon: ReactNode;
}

/**
 * Search Page Card OnC lick Save
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.10
 */
export type R123SearchPageOnClickSaveType = {
    onClickSave?: () => void;
};

/**
 * Search Page Card OnC lick Save
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.10
 */
export type R123SearchPageMortgageType = {
    mortgageLinkText?: string;
};

/**
 * Search Page Card Content Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.10
 */
export type R123SearchPageCardContentInterface = {
    link?: string;
    title?: string;
    address?: string;
    landSize?: string;
    buildingSize?: string;
    propertyType?: string; // Factory | Home | Apartment
    attribute?: R123SearchPageCardAttributeItemInterface[];
} & R123SearchPageOnClickSaveType &
    R123SearchPageMortgageType;

/**
 * Search Page Card Media Caption Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.04.30
 */
export interface R123SearchPageCardMediaCaptionInterface {
    priceTag?: string;
    numMedias?: number;
    installment?: string;
}

/**
 * Search Page Card Carousel Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export interface R123SearchPageCardCarouselInterface {
    item: R123SearchPageCardMediaInterface[];
}
