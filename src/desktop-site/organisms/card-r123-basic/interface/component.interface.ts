import { HTMLAttributes } from 'react';
import {
    R123SearchPageCardMediaInterface as media,
    R123SearchPageCardActionInterface as action,
    R123SearchPageCardContentInterface as content
} from '../../../../shared/interface/rumah-123/search-page/search-page-card.interface';

/**
 * Card R123 Basic Content Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.04.28
 */
export type CardR123BasicContentInterface = content & {
    priceTag?: string;
    installment?: string;
};

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
