import { HTMLAttributes, ReactNode } from 'react';
import {
    SearchPageCardMediaInterface as media,
    SearchPageCardActionInterface as action
} from '../../../../shared/interface/search-page/search-page-card.interface';

/**
 * Card R123 Basic Content Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.28
 */
export interface CardR123BasicContentInterface {
    link?: string;
    title?: string;
    address?: string;
    priceTag?: string;
    landSize?: string;
    installment?: string;
    buildingSize?: string;
    propertyType?: string; // Factory | Home | Apartment
    mortgageLinkText?: string;
    attribute?: CardR123BasicContentAttributeInterface[];
    onClickSave?: () => void;
}

/**
 * Card R123 Basic Content Attribute Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.28
 */
export interface CardR123BasicContentAttributeInterface {
    alt?: string;
    value: string;
    icon: ReactNode;
}

/**
 * Basic Card R123 Default Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.04.21
 */
export type CardR123BasicPropsInterface = Omit<
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
    content: CardR123BasicContentInterface;
};
