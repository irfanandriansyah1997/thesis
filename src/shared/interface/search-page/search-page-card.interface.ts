import {
    CarouselItemInterface,
    CarouselIndicatorInterface
} from '../../../common/molecules/carousel/interface/component.interface';

/**
 * Search Page Card Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export interface SearchPageCardActionInterface {
    onClickSave?: () => void;
    onClickViewDetail?: () => void;
    onClickContactAgent?: () => void;
}

export type ListingCardTier = 'featured' | 'premier';

/**
 * Search Page Card Media Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export interface SearchPageCardMediaInterface {
    media: CarouselItemInterface[];
    onClick?: () => void;
    caption?: SearchPageCardMediaCaptionInterface;
    tier?: ListingCardTier;
    carouselIndicator?: CarouselIndicatorInterface;
}

/**
 * Search Page Card Media Caption Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.04.30
 */
export interface SearchPageCardMediaCaptionInterface {
    priceTag?: string;
    installment?: string;
    numMedias?: number;
}

/**
 * Search Page Card Carousel Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export interface SearchPageCardCarouselInterface {
    item: SearchPageCardMediaInterface[];
}
