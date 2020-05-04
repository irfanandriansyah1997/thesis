import { HTMLAttributes, ReactNode } from 'react';
import {
    SearchPageCardMediaInterface as media,
    SearchPageCardActionInterface as action
} from '../../../../shared/interface/search-page/search-page-card.interface';

/**
 * Card R123 Featured Content Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.04.30
 */
export interface CardR123FeaturedContentInterface {
    mortgageLinkText?: string;
    title?: string;
    address?: string;
    landSize?: string;
    buildingSize?: string;
    propertyType?: string; // Factory | Home | Apartment
    attribute?: CardR123FeaturedContentAttributeInterface[];
    onClickSave?: () => void;
    link?: string;
}

/**
 * Card R123 Featured Content Attribute Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.04.30
 */
export interface CardR123FeaturedContentAttributeInterface {
    icon: ReactNode;
    alt?: string;
    value: string;
}

/**
 * Card R123 Featured Heading Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @description
 * @since 2020.05.04
 */
export interface CardR123FeaturedHeadingInterface {
    agencyTitle: string;
    creationDate: string;
    link?: string;
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
    heading: CardR123FeaturedHeadingInterface;
    media: media;
    action: action;
    content: CardR123FeaturedContentInterface;
    link: string;
};
