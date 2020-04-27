import { HTMLAttributes, SFC, ReactNode } from 'react';

/**
 * Dropdown Default Export Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.26
 */
export type DropdownDefaultExportInterface = SFC<DropdownPropsInterface> & {
    Item: SFC<DropdownItemPropsInterface>;
    Divider: SFC<DropdownDividerPropInterface>;
};

/**
 * Dropdown Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.27
 */
export type DropdownPropsInterface = Omit<
    HTMLAttributes<HTMLDivElement>,
    'onKeypress' | 'style'
> & {
    name: string;
    label: string;
    icon?: string;
    trigger: 'hover' | 'click';
};

export type DropdownChildren = {
    name: '';
};

/**
 * Dropdown Item Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.27
 */
export type DropdownItemPropsInterface = Omit<
    HTMLAttributes<HTMLDivElement>,
    | 'style'
    | 'onClick'
    | 'disabled'
    | 'children'
    | 'onKeypress'
    | 'dangerouslySetInnerHTML'
> & {
    disabled?: boolean;
    children: ReactNode;
};

/**
 * Dropdown Divider Props Interface
 * @author Irfan Andriansyah <irfan@99.co>
 * @since 2020.04.27
 */
export type DropdownDividerPropInterface = {};
