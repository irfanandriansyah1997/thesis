import { HTMLAttributes } from 'react';

import {
    R123ListingCardTier as tier,
    R123SearchPageCardMediaInterfaceV2 as mediaV2,
    R123SearchPageCardActionInterfaceV2 as actionV2
} from '../../../../shared/interface/rumah-123/search-page/search-page-card.interface';

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
        action: actionV2;
    };

export interface CardR123FeaturedPropsDataInterface {
    tier: tier;
    link: string;
    title: string;
    media: mediaV2;
    address: string;
    priceTag: string;
    agentName: string;
    mediaCount: number;
    installment: string;
    propertyType: string;
    publishingDate: string;
    attribute: CardR123FeaturedPropsAttributeInterface;
}

export interface CardR123FeaturedContextInterface {
    action: actionV2;
    data: CardR123FeaturedPropsDataInterface;
}

export interface CardR123FeaturedPropsAttributeInterface {
    bedroom?: string;
    carport?: string;
    bathroom?: string;
    landSize?: string;
    buildingSize?: string;
}
