import { ReactNode, MouseEventHandler } from 'react';
import { ColorType } from '../../../../shared/interface/common/color.interface';

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
    className?: string;
    children: ReactNode;
    position: 'left' | 'right';
}

/**
 * Navbar Menu Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.12
 */
export interface NavbarMenuItemPropsInterface {
    to?: string;
    text: string;
    color?: ColorType;
    className?: string;
    backgroundColor?: ColorType;
    onClick?: MouseEventHandler<HTMLAnchorElement>;
}

/**
 * Navbar Menu Dropdown Component Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.12
 */
export type NavbarMenuDropdownPropsInterface = NavbarMenuItemPropsInterface & {
    children: ReactNode;
};
