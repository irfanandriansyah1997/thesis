export type NavbarR123DropdownItemType = Omit<
    NavbarR123MenuItemInterface,
    'type' | 'active'
>;

/**
 * Navbar R123 Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.14
 */
export type NavbarR123PropsInterface = {
    showLogo?: boolean;
    menu: (NavbarR123MenuItemInterface | NavbarR123DropdownInterface)[];
} & NavbarR123LanguageChooserPropsInterface &
    NavbarR123LoginButtonPropsInterface;

/**
 * Navbar R123 Dropdown Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.14
 */
export type NavbarR123DropdownPropsInterface = {
    dropdownItem?: NavbarR123DropdownItemType[];
};

/**
 * Navbar R123 MegaMenu Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.14
 */
export type NavbarR123MegaMenuPropsInterface = {
    heading: string;
    item: NavbarR123DropdownItemType[][];
};

/**
 * Navbar R123 Language Chooser Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.14
 */
export interface NavbarR123LanguageChooserPropsInterface {
    languange: {
        active: string;
        option: string[];
    };
    onChangeLanguange: (language: string) => void;
}

/**
 * Navbar R123 Login Button Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.14
 */
export interface NavbarR123LoginButtonPropsInterface {
    onClickLoginButton: () => void;
}

/**
 * Navbar R123 Menu Item
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.14
 */
export interface NavbarR123MenuItemInterface {
    to: string;
    text: string;
    active?: boolean;
    type: 'dropdown' | 'link';
}

/**
 * Navbar R123 Dropdown Menu
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.05.14
 */
export type NavbarR123DropdownInterface = {
    megamenuItem?: NavbarR123MegaMenuPropsInterface;
} & NavbarR123MenuItemInterface &
    NavbarR123MenuItemInterface &
    NavbarR123DropdownPropsInterface;
