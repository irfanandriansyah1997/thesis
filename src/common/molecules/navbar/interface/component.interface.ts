import { ReactNode, SFC } from 'react';

import { ColorType } from '../../../../shared/interface/common/color.interface';
import { LinkPropsInterface } from '../../../atomic/link/interface/component.interface';

export type NavbarPositionType = 'absolute' | 'fixed' | 'relative';

/**
 * Navbar Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.12
 */
export interface NavbarPropsInterface {
    shadow?: boolean;
    className?: string;
    children: ReactNode;
    withContainer?: boolean;
    backgroundColor?: ColorType;
    position?: NavbarPositionType;
}

/**
 * Navbar Menu Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.12
 */
export interface NavbarMenuPropsInterface {
    id: string;
    className?: string;
    children: ReactNode;
    position: 'left' | 'right';
}

/**
 * Navbar Menu Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.12
 */
export type NavbarMenuItemPropsInterface = Omit<
    LinkPropsInterface,
    'noUnderline' | 'icon' | 'href' | 'children' | 'style'
> & {
    to?: string;
    text: string;
    isHeading?: boolean;
    backgroundColor?: ColorType;
};

/**
 * Navbar Menu Dropdown Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.12
 */
export type NavbarMenuDropdownPropsInterface = NavbarMenuItemPropsInterface & {
    children: ReactNode;
};

/**
 * Navbar Default Export Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.12
 */
export type NavbarDefaultExportInterface = SFC<NavbarPropsInterface> & {
    Menu: SFC<NavbarMenuPropsInterface>;
    Item: SFC<NavbarMenuItemPropsInterface>;
    MegaMenu: SFC<NavbarMenuDropdownPropsInterface>;
    Dropdown: SFC<NavbarMenuDropdownPropsInterface>;
};
