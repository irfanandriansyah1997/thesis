import { HTMLAttributes } from 'react';

import {
    R123SearchPageCardMediaInterface as media,
    R123SearchPageCardActionInterface as action,
    R123SearchPageCardContentInterface as content
} from '../../../../shared/interface/rumah-123/search-page/search-page-card.interface';
import { CarouselIndicatorInterface } from '../../../../common/molecules/carousel/interface/component.interface';

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
    content: content;
    heading: CardR123FeaturedHeadingInterface;
    carouselIndicator?: CarouselIndicatorInterface;
};
