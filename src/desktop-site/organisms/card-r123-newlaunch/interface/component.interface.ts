import { HTMLAttributes } from 'react';

import {
    R123SearchPageCardDataInterface as data,
    R123SearchPageCardActionInterface as action
} from '../../../../shared/interface/rumah-123/search-page/search-page-card.interface';

/**
 * Card R123 New Launch Props Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.08
 */
export type CardR123NewLaunchPropsInterface = Omit<
    HTMLAttributes<HTMLElement>,
    | 'dangerouslySetInnerHTML'
    | 'onClick'
    | 'onKeyDown'
    | 'onKeyDown'
    | 'onKeyPress'
    | 'onChange'
    | 'style'
> &
    CardR123NewLaunchPropsDataInterface & {
        action: CardR123NewLaunchActionInterface;
    };

/**
 * Card R123 New Launch Props Data Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.08
 */
export type CardR123NewLaunchPropsDataInterface = Omit<
    data,
    'installment' | 'attribute'
> & {
    developerLogo: string;
};

/**
 * Card R123 New Launch Context API Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.08
 */
export interface CardR123NewLaunchContextInterface {
    action: CardR123NewLaunchActionInterface;
    data: CardR123NewLaunchPropsDataInterface;
}

/**
 * Card R123 New Launch Action Interface
 * @author Dedik Budianto <dedik.budianto@99.co>
 * @since 2020.06.08
 */
export type CardR123NewLaunchActionInterface = Omit<
    action,
    'onClickMortgageSimulation'
>;
