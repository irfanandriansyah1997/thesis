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
    mortgageLinkText?: string;
    title?: string;
    installment?: string;
    address?: string;
    priceTag?: string;
    landSize?: string;
    buildingSize?: string;
    propertyType?: string; // Factory | Home | Apartment
    attribute?: CardR123BasicContentAttributeInterface[];
    onClickSave?: () => void;
    link?: string;
}

/**
 * Card R123 Basic Content Attribute Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.28
 */
export interface CardR123BasicContentAttributeInterface {
    icon: ReactNode;
    alt?: string;
    value: string;
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
    media: media;
    action: action;
    content: CardR123BasicContentInterface;
    link: string;
};
