import { MouseEventHandler } from 'react';

/**
 * Navbar R123 Item Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.12
 */
export interface NavbarR123ItemPropsInterface {
    to?: string;
    text: string;
    type: 'dropdown' | 'megamenu' | 'link';
    onClick?: MouseEventHandler<HTMLDivElement>;
    menu:
        | NavbarR123DropdownItemPropsInterface[]
        | NavbarR123MegaMenuPropsInterface;
}

/**
 * Navbar R123 Dropdown Item Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.12
 */
export interface NavbarR123DropdownItemPropsInterface {
    text: string;
    to: string;
}

/**
 * Navbar R123 Mega Menu Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @description
 * @since 2020.05.12
 */
export interface NavbarR123MegaMenuPropsInterface {
    heading: string;
    primary: NavbarR123DropdownItemPropsInterface[];
    secondary: NavbarR123DropdownItemPropsInterface[];
}
