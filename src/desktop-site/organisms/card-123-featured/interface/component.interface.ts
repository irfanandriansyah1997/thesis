import { HTMLAttributes } from 'react';

import {
    R123ListingCardTier as tier,
    R123SearchPageCardDataInterface as data,
    R123SearchPageCardActionInterface as action
} from '../../../../shared/interface/rumah-123/search-page/search-page-card.interface';

/**
 * Card R123 Feature Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.21
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
> &
    CardR123FeaturedPropsDataInterface & {
        action: CardR123FeaturedActionInterface;
    };

/**
 * Card R123 Feature Props Data Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.21
 */
export type CardR123FeaturedPropsDataInterface = data & {
    tier: tier;
    agentName: string;
    mediaCount: number;
    publishingDate: string;
};

/**
 * Card R123 Feature Context API Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.21
 */
export interface CardR123FeaturedContextInterface {
    action: CardR123FeaturedActionInterface;
    data: CardR123FeaturedPropsDataInterface;
}

/**
 * Search Page Card Action Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.28
 */
export type CardR123FeaturedActionInterface = action & {
    onClickViewDetail: () => void;
    onClickContactAgent: () => void;
};
