import { HTMLAttributes } from 'react';

import { ListPropsInterface } from '../../../../common/molecules/list/interface/component.interface';
import {
    R123SearchPageCardDataInterface as data,
    R123SearchPageCardActionInterface as action
} from '../../../../shared/interface/rumah-123/search-page/search-page-card.interface';

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
> &
    CardR123BasicPropsDataInterface & {
        action: action;
    };

/**
 * Basic Card R123 Default Props Data Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.21
 */
export type CardR123BasicPropsDataInterface = data;

/**
 * Card R123 Basic Grid Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.20
 */
export type CardR123BasicGridPropsInterface = Omit<
    ListPropsInterface,
    'children' | 'key'
> & {
    id: string;
    to: string;
    type: 'text' | 'text-with-icon';
    object: Record<string, unknown>;
    listItem: CardR123BasicGridItemInterface[];
};

/**
 * Card R123 Basic Grid Item Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.20
 */
export interface CardR123BasicGridItemInterface {
    key: string;
    icon?: string;
}

/**
 * Card R123 Basic Context API Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.21
 */
export interface CardR123BasicContextInterface {
    action: action;
    data: CardR123BasicPropsDataInterface;
}
