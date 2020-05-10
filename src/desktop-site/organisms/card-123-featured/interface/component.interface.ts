import { HTMLAttributes, ReactNode } from 'react';
import {
    SearchPageCardMediaInterface as media,
    SearchPageCardActionInterface as action
} from '../../../../shared/interface/search-page/search-page-card.interface';
import { CarouselIndicatorInterface } from '../../../../common/molecules/carousel/interface/component.interface';

/**
 * Card R123 Featured Content Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.04.30
 */
export interface CardR123FeaturedContentInterface {
    title?: string;
    link?: string;
    address?: string;
    landSize?: string;
    buildingSize?: string;
    propertyType?: string; // Factory | Home | Apartment
    onClickSave?: () => void;
    mortgageLinkText?: string;
    attribute?: CardR123FeaturedContentAttributeInterface[];
}

/**
 * Card R123 Featured Content Attribute Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.04.30
 */
export interface CardR123FeaturedContentAttributeInterface {
    alt?: string;
    value: string;
    icon: ReactNode;
}

/**
 * Card R123 Featured Heading Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.05.04
 */
export interface CardR123FeaturedHeadingInterface {
    link?: string;
    agencyTitle: string;
    creationDate: string;
}

/**
 * Basic Card R123 Default Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.30
 */
export type CardR123FeaturedPropsInterface = Omit<
    HTMLAttributes<HTMLElement>,
    | 'dangerouslySetInnerHTML'
    | 'onClick'
    | 'onKeyDown'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'onChange'
    | 'style'
> & {
    link: string;
    action: action;
    cardMedia: media;
    heading: CardR123FeaturedHeadingInterface;
    content: CardR123FeaturedContentInterface;
    carouselIndicator?: CarouselIndicatorInterface;
};
