import { ReactNode, ButtonHTMLAttributes } from 'react';

import { ComponentDefaultSize } from '../../../../shared/interface/component/component-size.interface';
import { ComponentDefaultTheme } from '../../../../shared/interface/component/component-theme.interface';

/**
 * Link Default Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.16
 */
export interface LinkDefaultPropsInterface {
    size: ComponentDefaultSize;
    theme?: ComponentDefaultTheme;
    outline?: boolean;
    icon?: ReactNode;
}

/**
 * Button Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.09
 */
export type ButtonPropsInterface = ButtonHTMLAttributes<HTMLButtonElement> &
    LinkDefaultPropsInterface;

/**
 * Anchor Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.03.09
 */
export type AnchorPropsInterface = ButtonHTMLAttributes<HTMLAnchorElement> &
    LinkDefaultPropsInterface;
